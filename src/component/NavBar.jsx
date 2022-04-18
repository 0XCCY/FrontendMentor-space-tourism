import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import close from "../assets/shared/icon-close.svg";
import menu from "../assets/shared/icon-hamburger.svg";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const menuToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <div className="fixed top-0 right-0 z-[60] m-16 sm:hidden">
        <button alt="close" onClick={menuToggle}>
          <img src={menuActive ? close : menu} alt="menu" />
        </button>
      </div>
      <div
        className={`flex w-screen flex-row items-center justify-between pl-[55px] text-white sm:pt-0 md:pt-10 ${
          menuActive ? "block" : "hidden"
        }`}
      >
        <img
          src={logo}
          alt="logo"
          className=" fixed top-0 left-0 z-50 ml-8 mt-14 h-12 flex-none sm:relative sm:ml-0 sm:mt-0 sm:block"
        />

        <div className="flex flex-auto pl-8">
          <hr className="hidden flex-auto translate-x-8 border-[1px] border-white/25 md:block"></hr>
        </div>

        <nav
          className={`flex min-h-screen min-w-[75%] flex-col items-start gap-10 bg-white/[0.04] pl-12 pt-44 pr-12 backdrop-blur-[1.5rem] sm:min-h-[96px] sm:min-w-[50%] sm:flex-row sm:items-center sm:space-x-10 sm:space-y-0 sm:pt-0 sm:pl-[123px] sm:pr-0 md:pr-[165px] ${
            menuActive ? " -translate-x-[0%] " : "translate-x-[100%] "
          }  -translate-x-[100%] transition-transform duration-1000 sm:flex`}
        >
          <NavLink
            to="/"
            className="min-w-full cursor-pointer decoration-[#979797] decoration-0 underline-offset-0 hover:border-b-4 sm:min-w-fit sm:decoration-[3px] sm:underline-offset-[36px] sm:hover:underline"
          >
            <span className="font-bold sm:hidden md:inline ">00</span> HOME
          </NavLink>
          <NavLink
            to="/destination"
            className="min-w-full cursor-pointer decoration-[#979797] decoration-0 underline-offset-0 hover:border-b-4 sm:min-w-fit sm:decoration-[3px] sm:underline-offset-[36px] sm:hover:underline"
          >
            <span className="font-bold sm:hidden md:inline">01</span>{" "}
            DESTINATION
          </NavLink>
          <NavLink
            to="/crew"
            className="min-w-full cursor-pointer decoration-[#979797] decoration-0 underline-offset-0 hover:border-b-4 sm:min-w-fit sm:decoration-[3px] sm:underline-offset-[36px] sm:hover:underline"
          >
            <span className="font-bold sm:hidden md:inline">02</span> CREW
          </NavLink>
          <NavLink
            to="/technology"
            className="min-w-full cursor-pointer decoration-[#979797] decoration-0 underline-offset-0 hover:border-b-4 sm:min-w-fit sm:decoration-[3px] sm:underline-offset-[36px] sm:hover:underline"
          >
            <span className="font-bold sm:hidden md:inline">03</span> TECHNOLOGY
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
