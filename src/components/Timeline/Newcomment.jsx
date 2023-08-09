import React, { useEffect, useId, useState } from "react";
import { useUserContext } from "../../contexts/user";
import "./post.css";
import { Bookmark, ChatBubbleOutline, Telegram } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { Avatar, Button, Input } from "@mui/material";
import { auth, db } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import post from "./post";
import Comments from "./Comments";

const Post = ({ id, comments }) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  // const [open, setOpen] = useRecoilState(modalState);
  const handlePostIconClick = () => {
    setShowCommentInput(true);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const [NewComment, setNewComment] = useState("");

  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    // setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const { user } = useUserContext();

  const [NewComments, setNewComments] = useState("");
  //   const [newComment, setUserComments] = useState("");

  const [comment, setComment] = useState("");
  // const postComment = async (event) => {
  const postComment = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts", id, "comments"), {
      text: comment,
      timestamp: serverTimestamp(),
      username: user?.displayName,
    });
    // Reset form after successful upload
    setComment("");
  };

  return (
    <div className="posts">
      <div>
        {comments.map((com) => {
          return (
            <p>
              <strong style={{ fontSize: "17px" }}>
                {com.data().username}
                {" :"}
              </strong>{" "}
              {com.data().text}
            </p>
          );
        })}
      </div>
      <div className="post_iconsMain">
        <FavoriteIcon
          className="postIcon"
          style={{ color: isLiked ? "red" : "inherit" }}
          onClick={handleLikeClick}
        />

        {/* {user && (
          <> */}
        <ChatBubbleOutline className="postIcon" onClick={handlePostIconClick} />
        {/* </>
        )} */}

        <Telegram className="postIcon" />
      </div>
      {showCommentInput && (
        <div className="commentInputSection">
          <form className="post_commentBox">
            <InsertEmoticonIcon />
            <Input
              className="postInput"
              variant="contained"
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
            />
            {user && (
              <>
                <Button
                  className="post_button"
                  disabled={!comment}
                  variant="contained"
                  onClick={postComment}
                >
                  Post
                </Button>
              </>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;
