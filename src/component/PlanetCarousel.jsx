import React, { useState, useEffect } from "react";

const PlanetCarousel = () => {
  const planets = ["Moon", "Mars", "Europa", "Titan"];
  const [planet, setPlanet] = useState("Moon");
  const [planetData, setPlanetData] = useState({
    name: "Moon",
    images: {
      png: "./assets/destination/image-moon.png",
      webp: "./assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  });
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/data.json").then(async (res) => {
      try {
        const result = await res.json();

        setData(result.destinations);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  const handleClick = (e) => {
    setPlanet(e.target.value);
    const selectedPlanet = data.filter((v) => v.name === e.target.value);
    setPlanetData(selectedPlanet[0]);
  };

  return (
    <div className="h-screen w-screen pr-24 pl-44 pt-24">
      <span className="flex flex-row">
        <h5 className="pr-5 font-bold text-white opacity-25">01</h5>
        <h5 className="text-white">PICK YOUR DESTINATION</h5>
      </span>

      <div className="flex flex-row items-center pt-10 pl-14 text-white">
        <img
          src={`.${planetData.images.png}`}
          alt="planet"
          className="h-[445px] w-[445px] flex-initial pt-10"
        ></img>
        <div className="flex w-full flex-col pl-40">
          <div className="flex flex-row">
            {planets.map((v, i) => (
              <button
                key={i}
                value={v}
                className={`${
                  v === planet && "active"
                } h6-3 cursor-pointer pr-8 uppercase decoration-[#979797] decoration-[3px] underline-offset-[12px] hover:underline`}
                onClick={handleClick}
              >
                {v}
              </button>
            ))}
          </div>
          <h2 className="pt-8 uppercase">{planetData.name}</h2>
          <div className="mr-24 pt-4 pb-8 text-lightpurple">
            {planetData.description}
            <hr className="border-b-[1px] border-t-0 border-[#383B4B] pt-12"></hr>
          </div>

          <div className="flex-rownp flex">
            <div className="flex flex-col">
              <div className="h6-2">AVG. DISTANCE</div>
              <div className="h6-1 uppercase">{planetData.distance}</div>
            </div>
            <div className="flex flex-col pl-20">
              <div className="h6-2">EST. TRAVEL TIME</div>
              <div className="h6-1 uppercase">{planetData.travel}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetCarousel;
