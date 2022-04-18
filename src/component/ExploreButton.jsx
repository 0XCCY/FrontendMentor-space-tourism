import React from "react";
import { Link } from "react-router-dom";

const ExploreButton = () => {
  return (
    <Link
      to="/destination"
      className="w-[274px] h-[274px] rounded-full bg-white flex justify-center items-center hover:ring-[80px] ring-slate-500 ring-opacity-30 transition-all	delay-100 duration-[1200ms] cursor-pointer"
    >
      <h4>EXPLORE</h4>
    </Link>
  );
};

export default ExploreButton;
