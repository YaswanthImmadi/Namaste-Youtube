import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-1/4 ">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>You</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Films</li>
        <li>Podcasts</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>
    </div>
  );
};

export default SideBar;
