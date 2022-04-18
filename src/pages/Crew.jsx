import React from "react";
import CrewCarousel from "../component/CrewCarousel";
import NavBar from "../component/NavBar";

const Crew = () => {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-[url('./assets/crew/background-crew-desktop.jpg')] bg-cover bg-center bg-no-repeat ">
      <div className="absolute z-50 sm:relative md:h-[20%]">
        <NavBar />
      </div>
      <div className="relative z-0 sm:h-[90%] md:h-[80%]">
        <CrewCarousel />
      </div>
    </div>
  );
};

export default Crew;
