import React from "react";
import PlanetCarousel from "../component/PlanetCarousel";
import NavBar from "../component/NavBar";

const Destination = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-[url('./assets/destination/background-destination-desktop.jpg')] bg-cover bg-left-bottom bg-no-repeat ">
      <NavBar />
      <PlanetCarousel />
    </div>
  );
};

export default Destination;
