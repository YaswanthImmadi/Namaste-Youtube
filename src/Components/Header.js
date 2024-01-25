import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {  toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch=useDispatch();
  const handleMenuClick=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-4 m-2">
      <div className="flex items-center col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          onClick={()=>handleMenuClick()}
        />
        <img
          className="h-20 mx-2 "
          alt="youtube-icon"
          src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg?w=414"
        />
      </div>
      <div className="flex items-center col-span-10 px-10">
        <input className="w-1/2 border border-gray-500 p-2 rounded-l-full" type="text" />
        <button className="p-2 border border-gray-400 rounded-r-full">Search</button>
      </div>
      <div className="col-span-1 flex items-center">
        <FaCircleUser className="h-10 w-8" />
      </div>
    </div>
  );
};

export default Header;
