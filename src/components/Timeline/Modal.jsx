import React, { useState, useEffect, useContext } from "react";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { auth, db } from "../../firebase";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./modal.css";
import { UserContext, useUserContext } from "../../contexts/user";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";

const MyComponent = () => {
  const [openSignup, setOpenSignup] = useState(false);
  const [opensignin, setOpenSignin] = useState(false);

  // handling new signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { user, setUser } = useUserContext();
  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
    setOpenSignup(false);
  };

  const Login = () => {
    signInWithEmailAndPassword(auth, email, password).catch((e) =>
      alert(e.message)
    );
    setOpenSignin(false);
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        setUser(authuser);
        console.log("authUser", authuser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsub();
    };
  }, []);

  const [userposts, setUserPosts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "userposts");
    onSnapshot(colRef, (snapshot) => {
      setUserPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div>
      {user ? (
        <>
          <Button
            variant="contained"
            onClick={() => {
              auth.signOut();
            }}
          >
            Log out{" "}
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            onClick={() => {
              setOpenSignin(true);
            }}
          >
            Login
          </Button>
          <span>&nbsp; &nbsp;</span>
          <Button
            variant="contained"
            onClick={() => {
              setOpenSignup(true);
            }}
          >
            Sign Up
          </Button>
        </>
      )}

      <Modal
        open={openSignup}
        onClose={() => {
          setOpenSignup(false);
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 210,
            height: 260,
            bgcolor: "white",
            border: "2px solid blue",
            boxShadow: 24,

            p: 2,
          }}
        >
          <Typography variant="h5" component="h5">
            <form
              style={{
                alignItems: "centen",
                justifyContent: "center",
                marginTop: "50px",
              }}
              className="app_signup"
              variant="contained"
            >
              <center>
                <img
                  className=""
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                  alt=""
                />
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />

                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <Button
                  variant="contained"
                  type="submit"
                  onClick={handleSignUp}
                >
                  Sign up
                </Button>
              </center>
            </form>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={opensignin}
        onClose={() => {
          setOpenSignin(false);
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 210,
            height: 260,
            bgcolor: "white",
            border: "2px solid blue",
            boxShadow: 24,

            p: 2,
          }}
        >
          <Typography variant="h5" component="h5">
            <form
              style={{
                alignItems: "centen",
                justifyContent: "center",
                marginTop: "50px",
              }}
              className="app_signup"
              variant="contained"
            >
              <center>
                <img
                  className=""
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                  alt=""
                />

                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <Button variant="contained" type="submit" onClick={Login}>
                  Login
                </Button>
                <Button color="secondary" type="submit">
                  Forgot Password
                </Button>
              </center>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default MyComponent;
