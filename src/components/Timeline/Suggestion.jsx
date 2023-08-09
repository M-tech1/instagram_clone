import React, { useState } from "react";
import "./suggestion.css";
import { Avatar } from "@mui/material";
import Modal from "./Modal";
import ImageUpload from "./ImageUpload";
import { useAuthState } from "firebase/auth";

import "firebase/auth";
import { Login } from "@mui/icons-material";
import { useUserContext } from "../../contexts/user";

function Suggestion({ username }) {
  const [showButton, setShowButton] = useState(true);
  const [showButton2, setShowButton2] = useState(true);
  const [showButton3, setShowButton3] = useState(true);
  const [showButton4, setShowButton4] = useState(true);
  const [showButton5, setShowButton5] = useState(true);

  // handling new signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);
  };

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  const toggleButton2 = () => {
    setShowButton2(!showButton);
  };
  const toggleButton3 = () => {
    setShowButton3(!showButton);
  };
  const toggleButton4 = () => {
    setShowButton4(!showButton);
  };
  const toggleButton5 = () => {
    setShowButton5(!showButton);
  };

  const { user } = useUserContext();
  // const userAvatar = user.charAt(0).toUpperCase();

  return (
    <div className="suggestions">
      <div className="main_username">
        <div className="main_username_left">
          <span className="main_avatar">
            {" "}
            {user ? (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <Avatar alt="User Avatar"></Avatar>
                {selectedImage && (
                  <button className="follow_btn">Upload</button>
                )}
              </>
            ) : (
              <>
                <div>
                  <Avatar alt="User Avatar"></Avatar>
                </div>
              </>
            )}
          </span>

          <div className="main_username_info"></div>
        </div>
        {/* <button className='main_follow_btn'>Sign Out</button> */}
        <Modal />
      </div>

      <div className="suggest_title"> Suggestions for you</div>

      <div className="suggest_usernames">
        <div className="suggest_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar src="https://scontent.fabv2-1.fna.fbcdn.net/v/t39.30808-6/353845503_6398698033531870_8658493709877844426_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHnn59Q909TG9LFhOJhS1wAup0NlYMYNeu6nQ2Vgxg169w5gurfHpdey_PPihGc3DLCpm_1owksDoAbp4FdVQYQ&_nc_ohc=Rv7-SxU7WWIAX-dDNnq&_nc_zt=23&_nc_ht=scontent.fabv2-1.fna&oh=00_AfDucEho-LK6UPfHl0AfkWU8z0gCfcRBPNUJ2MgXnzqCQQ&oe=64D36442"></Avatar>
            </span>

            <div className="username_info">
              <span className="username"> Martins Ake</span>
              <span className="relation"> Old IG member</span>
            </div>
          </div>

          <div>
            {showButton ? (
              <button className="follow_btn" onClick={toggleButton}>
                follow
              </button>
            ) : (
              <button className="follow_btn" onClick={toggleButton}>
                Unfollow
              </button>
            )}
          </div>
        </div>

        <div className="suggest_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar src="https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/286704048_188079730213659_8184226727473629951_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE8noCt3KKiIVsIGn324qWiUoNhFbDhLolSg2EVsOEuiRodu3R5x9HcJ202qxN2A9K1GkccxBPqgG_2x0x9ZXh5&_nc_ohc=OKCRdU9PGOEAX-jml50&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfDdoJvQ7UU8TfqQoD5Y8W9lgkGYafckCWbphTaTven87A&oe=64D2A9FC"></Avatar>
            </span>

            <div className="username_info">
              <span className="username"> Mrs Helen</span>
              <span className="relation"> new to IG</span>
            </div>
          </div>
          <div>
            {showButton2 ? (
              <button className="follow_btn" onClick={toggleButton2}>
                follow
              </button>
            ) : (
              <button className="follow_btn" onClick={toggleButton2}>
                Unfollow
              </button>
            )}
          </div>
        </div>

        <div className="suggest_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar src="https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/350638855_222051830599652_7006649250257161348_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGcu-eHY0X5YSO8-6f6c5wehLSFDEcAgbSEtIUMRwCBtLutMlEMWzCaGtaQmGljpjjQ1-psQ54Sj2JfcONnj9q_&_nc_ohc=QHXhErpQ6nIAX-Lfe-L&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfAONOn6JaT0Ra6f72VhjYqzPa6BnUpZjGoCrAoSkGzUCw&oe=64D39AB2"></Avatar>
            </span>

            <div className="username_info">
              <span className="username"> Mr David .Y</span>
              <span className="relation"> IG since 2002</span>
            </div>
          </div>
          <div>
            {showButton3 ? (
              <button className="follow_btn" onClick={toggleButton3}>
                follow
              </button>
            ) : (
              <button className="follow_btn" onClick={toggleButton3}>
                Unfollow
              </button>
            )}
          </div>
        </div>

        <div className="suggest_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar src="https://scontent.fabv2-1.fna.fbcdn.net/v/t1.6435-9/145052872_4035050959890938_8574512485503099279_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFRoj0xaZTjM06KgSwolAWWYJJJGR37wHdgkkkZHfvAdzazU7tG1MbVbWI4LtwBQ7BiMlb8KJHggTmIjjGsC5v_&_nc_ohc=doQz5wJzIvYAX8dzIan&_nc_ht=scontent.fabv2-1.fna&oh=00_AfDkfms2Gxp5h_1FyVZ0LUmQIZTxnMFEBLKrsQ5LoRrnrA&oe=64F5E98D"></Avatar>
            </span>

            <div className="username_info">
              <span className="username"> Melvin Jacob</span>
              <span className="relation"> IG since 2022</span>
            </div>
          </div>
          <div>
            {showButton4 ? (
              <button className="follow_btn" onClick={toggleButton4}>
                follow
              </button>
            ) : (
              <button className="follow_btn" onClick={toggleButton4}>
                Unfollow
              </button>
            )}
          </div>
        </div>

        <div className="suggest_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>J</Avatar>
            </span>

            <div className="username_info">
              <span className="username"> Josh</span>
              <span className="relation"> new to IG</span>
            </div>
          </div>
          <div>
            {showButton5 ? (
              <button className="follow_btn" onClick={toggleButton5}>
                follow
              </button>
            ) : (
              <button className="follow_btn" onClick={toggleButton5}>
                Unfollow
              </button>
            )}
          </div>
        </div>

        {user ? (
          <>
            {/* <ImageUpload username={username} />  */}
            <ImageUpload username={user.displayName} />
          </>
        ) : (
          <>
            <div>
              {" "}
              <h4 style={{ color: "white" }}>
                Kindly Login to make a Post / Comments{" "}
              </h4>
            </div>
          </>
        )}

        {/* <ImageUpload username={username} /> */}
      </div>
    </div>
  );
}

export default Suggestion;
