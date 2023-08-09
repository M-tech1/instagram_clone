import { React } from "react";
import "./home.css";
import SideNav from "../Navigation/Side_Nav";
import Timeline from "../Timeline/Timeline";
import { useUserContext } from "../../contexts/user";
// import ImageUpload from "../Timeline/ImageUpload";
// import { UserContext } from "../../contexts/user";
// import { useRecoilState } from "recoil";

function Home() {
  const { user } = useUserContext();
  // const [text, setText] = useRecoilState(modalState);

  return (
    <div className="home__page">
      <div className="home__nav">
        <SideNav />
      </div>

      <div className="home__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
