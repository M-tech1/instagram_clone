import { React, useState, useEffect } from "react";
import { db } from "../../firebase";
import "./comment.css";
import {
  addDoc,
  doc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import "firebase/firestore";
import { PostAddSharp } from "@mui/icons-material";
// import { db } from "../../firebase";

const Comments = ({
  postId,
  onAddComment,
  userName,
  username,
  caption,
  id,
  komment,
  // userComments,
}) => {
  const [Newcomment, setNewcomment] = useState("");
  const [comments, setComments] = useState("");
  // const [userComments, setUserComments] = useState("");
  const [comment, setComment] = useState("");

  const [userComments, setUserComments] = useState([]);
  return <div></div>;
};

export default Comments;
