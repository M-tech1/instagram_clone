import React from "react";
import "./side_nav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { useUserContext } from "../../contexts/user";
import { Avatar } from "@mui/material";

function Side_Nav() {
  const { user } = useUserContext();
  const ButtonClick = () => {
    window.alert(" No Notification yet!");
  };
  const messege = () => {
    window.alert("No Messages yet!");
  };
  const reels = () => {
    window.alert("Not available!");
  };
  const profile = () => {
    window.alert("Kindly update your profile @ top right corner");
  };
  const refresh = () => {
    window.location.reload();
  };
  const home = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const more = () => {
    const { scrollHeight, clientHeight } = document.documentElement;
    const scrollToPosition = scrollHeight - clientHeight;
    window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
  };

  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.shutterstock.com/image-vector/zdolbuniv-ukraine-march-29-2023-260nw-2281736183.jpg"
        alt=""
      />

      <div className="sidenav_btns" onClick={home}>
        <button className="sidenav_btn">
          <HomeIcon className="icon" />
          <span>Home</span>
        </button>

        {/* <button className="sidenav_btn">
          <SearchIcon className="icon" />
          <span>Search</span>
        </button> */}

        <button className="sidenav_btn">
          <ExploreIcon className="icon" />
          <span>Explore</span>
        </button>

        <button className="sidenav_btn" onClick={reels}>
          <SlideshowIcon className="icon" />
          <span>Reels</span>
        </button>

        <button className="sidenav_btn" onClick={messege}>
          <ChatIcon className="icon" />
          <span>Messages</span>
        </button>

        <button className="sidenav_btn" onClick={ButtonClick}>
          <FavoriteIcon className="icon" />
          <span>Notifications</span>
        </button>

        <button className="sidenav_btn" onClick={profile}>
          <AddIcon className="icon" />
          <span>Create Profile</span>
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "2px",
          paddingLeft: "20px",
          paddingTop: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar></Avatar>
        {<strong style={{ padding: "5px" }}>{user?.displayName}</strong>}
      </div>

      <div className="sidenav_more" onCanPlay={more}>
        <button className="sidenav_btn">
          <MenuIcon className="icon" />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Side_Nav;
