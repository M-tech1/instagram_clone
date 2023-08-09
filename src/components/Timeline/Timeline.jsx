import React, { useEffect, useState } from "react";
import "./timeline.css";
import Suggestion from "./Suggestion";
import { useUserContext } from "../../contexts/user";
import Post from "./post";
import SearchBar from "./SearchBar";
import { PostAddSharp } from "@mui/icons-material";
import ImageUpload from "./ImageUpload";
import { auth, db, storage } from "../../firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";

function Timeline({ id, userName }) {
  // Searching for users
  const Search = (searchQuery) => {
    // Implement your search logic here, e.g., call an API or perform filtering.
    alert("User Not Available:", searchQuery);
  };

  // const [userposts, setUserPosts] = useState([]);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetching data from the Firestore database
    const colRef = collection(db, "posts");
    onSnapshot(colRef, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          // ...doc.id,
          // ...doc.data(),
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  const [openSignup, setOpenSignup] = useState(false);
  const [opensignin, setOpenSignin] = useState(false);

  // handling new signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // const [user, setuser] = useState(null);

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const { user } = useUserContext();
  console.log("from timeline", user);

  return (
    <div className="timeline">
      <div className="timeline_left">
        <SearchBar onSearch={Search} />
        <div className="timeline_posts">
          {posts.map(({ id, post }) => (
            <div key={id}>
              <Post
                // key={id}
                id={id}
                user={post.userName}
                postImage={post.imageUrl}
                like={post.likes}
                caption={post.caption}
                comments={post.comments}
                // timestamp={posts.timestamp}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="timeline_right">
        <Suggestion username={username} />
      </div>
    </div>
  );
}

export default Timeline;
