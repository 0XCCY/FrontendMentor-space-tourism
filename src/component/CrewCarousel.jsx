import React, { useState, useEffect } from "react";

const CrewCarousel = () => {
  const [crew, setCrew] = useState(0);
  const [crewData, setCrewData] = useState({
    name: "Douglas Hurley",
    images: {
      png: "./assets/crew/image-douglas-hurley.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
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

  const handleClick = (e) => {
    setCrew(e.target.value);

    const selectedCrew = data[e.target.value];
    setCrewData(selectedCrew);
  };

  return (
    // <div className="grid h-full text-white  sm:grid-cols-[0.2fr_3fr_3fr_0.2fr] sm:grid-rows-[1fr,1fr,3fr] md:grid-cols-[1fr_3fr_3fr_1fr] md:grid-rows-[1fr,3fr,1fr]">
    //   <div className="row-span-3 self-center"></div>
    //   <div className="sm:col-span-2 md:col-span-1 ">
    //     <span className="flex flex-row">
    //       <h5 className="pr-5  font-bold text-white opacity-25 ">02</h5>
    //       <h5 className=" text-white">MEET YOUR CREW</h5>
    //     </span>
    //   </div>
    //   <div className="self-end justify-self-center sm:col-span-2 sm:col-start-2 sm:row-span-1 sm:row-start-5 md:col-span-1 md:row-span-3">
    //     <img
    //       className=" justify-center self-end md:row-span-full md:pl-5"
    //       src={crewData.images.png}
    //       alt="Commander Profile Pic"
    //     ></img>
    //   </div>
    //   <div className="row-span-3 self-center"></div>
    //   <div className="sm: justify-self-center sm:col-span-2 md:col-span-1">
    //     <div className=" mt-24 self-center text-center md:text-left">
    //       <h4 className=" uppercase text-white opacity-50">{crewData.role}</h4>
    //     </div>

    //     <div className=" self-center text-center md:text-left ">
    //       <h3 className="uppercase text-white">{crewData.name}</h3>
    //     </div>

    //     <div className="self-center text-center md:text-left">
    //       <p className="text-white">{crewData.bio}</p>
    //     </div>
    //   </div>
    //   <div className="place-self-start self-center sm:col-start-2 sm:row-start-4 md:col-span-1">
    //     <div className=" flex flex-row gap-4">
    //       {Array.from({ length: 4 }).map((_, i) => {
    //         return (
    //           <button
    //             key={i}
    //             value={i}
    //             onClick={handleClick}
    //             className={`${
    //               Number(i) === Number(crew)
    //                 ? "bg-white opacity-100"
    //                 : "bg-white opacity-[0.17]"
    //             } h-[15px] w-[15px] rounded-full`}
    //           ></button>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>

    <div className="absolute bottom-0 top-0 right-0 left-0 grid w-screen grid-cols-3 grid-rows-[6rem,2fr,3rem,1.5rem,3rem,1fr] pt-28 sm:grid-cols-1 sm:grid-rows-[6rem,2rem,3rem,10rem,3rem,1fr] sm:pt-0 md:grid-cols-[minmax(0,1fr)_minmax(0,32rem)_minmax(0,10rem)_minmax(0,32rem)_minmax(0,1fr)] md:grid-rows-[0.5fr,0.2fr,0.4fr,1fr,1fr]">
      <div className="col-span-full col-start-1 row-start-1 place-self-center sm:col-span-2 sm:col-start-1 sm:place-self-start sm:pl-10 sm:pt-8 md:col-start-2 md:pl-10 md:pt-0">
        <span className="flex flex-row">
          <h5 className="pr-5 font-bold text-white opacity-25 sm:pb-10 ">02</h5>
          <h5 className=" text-white">MEET YOUR CREW</h5>
        </span>
      </div>
      <div className="col-span-1 col-start-2 row-start-4 self-end text-center sm:col-span-3 sm:row-start-2 md:col-start-2 md:col-end-4 md:self-end md:pl-10 md:pt-32 md:text-left">
        <h4 className=" uppercase text-white opacity-50 ">{crewData.role}</h4>
      </div>

      <div className=" col-span-full col-start-1 row-start-5 self-center text-center sm:col-span-3 sm:row-start-3 md:col-start-2 md:col-end-5 md:pl-10 md:text-left">
        <h3 className="uppercase text-white">{crewData.name}</h3>
      </div>

      <div className="col-span-full col-start-1 row-start-6 mx-12 self-center sm:col-span-1 sm:col-start-1 sm:row-start-4 sm:mx-32  md:col-span-1 md:col-start-2 md:mx-0 md:pl-10 md:text-left">
        <p className=" text-center text-lightpurple md:text-left">
          {crewData.bio}
        </p>
      </div>

      <div className="col-start-2 row-start-3 flex place-items-center sm:col-start-1 sm:row-start-5 sm:self-end sm:justify-self-center sm:py-5 md:col-span-1 md:col-start-2 md:self-center md:justify-self-start md:pl-10">
        <div className=" flex flex-row gap-6 sm:gap-2">
          {Array.from({ length: 4 }).map((_, i) => {
            return (
              <button
                key={i}
                value={i}
                onClick={handleClick}
                className={`${
                  Number(i) === Number(crew)
                    ? "bg-white opacity-100"
                    : "bg-white opacity-[0.17]"
                } h-4 w-4 rounded-full sm:h-[10px] sm:w-[10px] md:h-[15px] md:w-[15px]`}
              ></button>
            );
          })}
        </div>
      </div>

      <div
        className={`col-span-full col-start-1 row-start-2 justify-center place-self-center self-end sm:col-span-full sm:col-start-1 sm:row-start-6 sm:row-end-7 sm:w-[55%] sm:pt-12 md:col-span-full md:col-start-4 md:row-span-full md:mr-20 md:w-full ${
          Number(crew) === 1 ? "md:max-w-[50vh]" : "md:max-w-[65vh]"
        }  w-[60%] md:flex-col-reverse md:pt-0 md:pl-8`}
      >
        <img src={crewData.images.png} alt="Commander Profile Pic"></img>
        <hr className="border-[1px] border-white/25 sm:border-0"></hr>
      </div>
    </div>

    // <div className="h-screen w-screen pl-44 pt-28">
    //   <div className="flex h-full flex-row">
    //     <div className="flex w-[50%] flex-col pr-52">
    //       <span className="flex flex-row">
    //         <h5 className="pr-5 font-bold text-white opacity-25">02</h5>
    //         <h5 className="text-white">MEET YOUR CREW</h5>
    //       </span>
    //       <div className="mr-12 pt-40">
    //         <h4 className=" text-white opacity-50">COMMANDER</h4>
    //         <h3 className="uppercase text-white">{crewData.name}</h3>
    //         <p className="text-white">{crewData.bio}</p>
    //       </div>
    //       <div className="flex w-1/4 flex-row justify-between">
    //         {Array.from({ length: 4 }).map((v, i) => {
    //           return (
    //             <button className="h-4 w-4 rounded-full bg-white opacity-[0.17]"></button>
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <div className="flex min-h-full w-[50%] items-end justify-center">
    //       <img
    //         className="mb-32 h-max min-w-[450px]"
    //         src={crewData.images.png}
    //         alt="Commander Profile Pic"
    //       ></img>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CrewCarousel;
