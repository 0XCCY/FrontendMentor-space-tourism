import React from "react";
import ExploreButton from "../component/ExploreButton";
import HomeText from "../component/HomeText";
import NavBar from "../component/NavBar";

const Home = () => {
  return (
    <div className="h-screen w-full bg-[url('./assets/home/background-home-desktop.jpg')] bg-cover bg-left-bottom bg-no-repeat">
      <div className="absolute bottom-0 pb-[20vh] pl-[11.5vw]">
        <HomeText />
      </div>
      <div className="absolute bottom-0 right-0 pb-[20vh] pr-[11.5vw]">
        <ExploreButton />
      </div>
    </div>
  );
};

export default Home;
