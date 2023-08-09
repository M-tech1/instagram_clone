import { Button, Input, TextField } from "@mui/material";
import { React, useState, useEffect } from "react";
import { db, storage } from "../../firebase";
import "./imageUpload.css";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { UserProvider } from "../../contexts/user";

import {
  addDoc,
  // deleteDoc,
  // doc,
  onSnapshot,
  orderBy,
  query,
  // setDoc,
  // where,
} from "firebase/firestore";
// import { auth, db } from "../firebase";
import { collection, serverTimestamp } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useUserContext } from "../../contexts/user";
// import { useUserContextModel, useUserContext } from "./UserContext";

// function ImageUpload() {
function ImageUpload() {
  const [progress, setProress] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  // const handleChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const file = e.target.files[0];
  //     setSelectedFile(file);
  //   }
  // };

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  // const { user } = useUserContext;
  const { user } = useUserContext();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      // if (!image || !caption) {
      //   alert("Please select an image and enter a caption.");
      //   return;
      // }

      // Upload image to Firebase Storage
      const storageRef = ref(storage, `images/${image.name}`);

      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // const progress =
          //   Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.error("Error uploading image:", error);
        },
        async () => {
          // Get the image download URL

          const imageUrl = await getDownloadURL(storageRef);
          // Add post content to Firestore
          await addDoc(collection(db, "posts"), {
            caption: caption,
            imageUrl: imageUrl,
            timestamp: serverTimestamp(),
            // userName: user.username,
            userName: user?.displayName,
          });

          // Reset form after successful upload
          // setProgress(0);
          setImage(null);
          setCaption("");
        }
      );
    } catch (error) {
      console.error("Error uploading post:", error);
    }

    function Post({ id, image, caption }) {
      const [comment, setComment] = useState("");
      const [comments, setComments] = useState([]);

      useEffect(() => {
        onSnapshot(
          query(
            collection(db, "posts", id, "comments"),
            orderBy("timestamp", "desc")
          ),
          (snapshot) => setComments(snapshot.docs)
        );
      }, [db]);
    }
  };

  return (
    <div className="postingContainer">
      <div className="imageupload">
        <progress
          style={{ width: "100%" }}
          // value={progress}
          className="progress"
          max="100"
        />
        <Input className="fileInput" type="file" onChange={handleImageChange} />
        <TextField
          value={caption}
          className="post_input"
          id="filled-basic"
          label="caption here"
          variant="filled"
          onChange={(e) => {
            setCaption(e.target.value);
          }}
        />
        <Button
          // disabled={!noting}
          onClick={handleUpload}
          variant="contained"
          color="primary"
        >
          add post
        </Button>
      </div>
    </div>
  );
}

export default ImageUpload;
