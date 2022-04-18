import React, { useState, useEffect } from "react";

const TechCarousel = () => {
  const [tech, setTech] = useState(0);
  const [techData, setTechData] = useState({
    name: "Launch vehicle",
    images: {
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  });
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/data.json").then(async (res) => {
      try {
        const result = await res.json();

        setData(result.crew);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  return (
    <div className="h-screen w-screen px-44 pt-28">
      <span className="flex flex-row">
        <h5 className="pr-5 font-bold text-white opacity-25">03</h5>
        <h5 className="text-white">SPACE LAUNCH 101</h5>
      </span>
    </div>
  );
};

export default TechCarousel;
