import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    // console.log(json)
    setVideos(json.items);
    console.log(videos);
  };

  return (
    <div className="flex flex-wrap justify-evenly ">
      {Array.isArray(videos) &&
        videos.map((video) => {
          return (
            <Link to={"/watch?v=" + video.id}  key={video.id}>
              <VideoCard info={video} />
            </Link>
          );
        })}
    </div>
  );
};

export default VideoContainer;
