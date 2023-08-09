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
              <Avatar src="https://scontent.fabv2-1.fna.fbcdn.net/v/t39.30808-6/355479816_6425528277515512_1498960444584212062_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEsZR-AQZey-IIXsqaeELknGAjIB4ArbcEYCMgHgCttwfvMnYPHKvPs_f_oBw7lARqofskyYax2SPV6JLMSaUrf&_nc_ohc=hKbbv9Aq2coAX_TTEIg&_nc_zt=23&_nc_ht=scontent.fabv2-1.fna&oh=00_AfBaTVJyBgpMIb911n9GbORV9FVrRennmTZba-zoBqdwHw&oe=64D7AEE6"></Avatar>
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
              <Avatar src="https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/269602191_1132326264238827_505995101995176274_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGSVWiJIMTTZZycCwTGJm9Y6UfhM46S7FfpR-EzjpLsVyBEEU5nIlY34yVLPycro2oXBXbplgK0_l5Kj-6Ya3xj&_nc_ohc=UUrvLYzuu_4AX_tDn_7&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfB6dTKMBYRvspFerhvXCQ1p9UUUXZ_gbgJEPxZoEymToA&oe=64D8AEB4"></Avatar>
            </span>

            <div className="username_info">
              <span className="username">Chioma</span>
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
              <Avatar src="https://www.bellanaija.com/wp-content/uploads/2014/06/Natural-Hair-Bellanaija-June2014.jpg"></Avatar>
            </span>

            <div className="username_info">
              <span className="username"> Charity Beauty</span>
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
