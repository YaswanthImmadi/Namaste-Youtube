import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";

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
    console.log(videos)
  };

  return (
    <div className="flex flex-wrap justify-evenly ">  
      {Array.isArray(videos) && videos.map((video)=>{
          return <VideoCard key={video.id} info={video}/>
      })}
    </div>
  );
};

export default VideoContainer;
