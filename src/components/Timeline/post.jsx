import React, { useEffect, useState } from "react";
import "./post.css";
import { Avatar, Chip } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { db } from "../../firebase";
import { Telegram, MoreHoriz } from "@mui/icons-material";
import Comments from "./Comments";
import Newcommenent from "./Newcomment";
import {
  collection,
  deleteDoc,
  doc,
  addDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

function Post({
  id,
  user,
  postImage,
  like,
  caption,
  // comments,
  Comment,
  postId,
}) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const ref = collection(db, "posts", id, "comments");
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "asc")
      ),
      (snap) => setComments(snap.docs)
    );
  }, [db, id]);

  return (
    <div className="post">
      <div className="post_header">
        <div className="post_headerAuthor">
          {/* <Avatar>{user.charAt(0).toUpperCase()}</Avatar> */}
          <Avatar src={postImage} style={{ padding: "5px" }}>
            {user}
          </Avatar>
          {user} ● <span> 4days ago</span>
        </div>

        {/* {user.displayName === user.username && (
          <Delete variant="outlined" onClick={DeletePost} />
        )} */}
        <MoreHoriz />
      </div>

      <div className="post_image">
        <img src={postImage} alt="" />
      </div>
      <p>{caption}</p>

      <div className="post_footer">
        <Comments />
        <div className="post_footerIcons">
          <div className="post_iconsMain">
            <Newcommenent id={id} comments={comments} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
