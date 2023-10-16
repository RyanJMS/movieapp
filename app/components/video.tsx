"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Image from "next/dist/client/image";
import { VideoProps } from "../interface/interface";

const Video = ({ url, imagePath }: VideoProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVolume, setIsVolume] = useState(0);
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setIsVolume(1);
  };

  const togglePlay = () => {
    setIsPlaying(true);
  };

  const handleVideoError = () => {
    setVideoUnavailable(true);
  };

  return (
    <div className="youtube-container" onMouseEnter={togglePlay}>
      {videoUnavailable ? (
        <Image
          src={imagePath}
          className="my-6 mx-auto p-2"
          width={500}
          height={500}
          alt={"poster"}
          loading="eager"
          priority
        />
      ) : (
        <div className="relative video-player">
          <ReactPlayer
            height="600px"
            width="100%"
            muted={isMuted}
            playing={isPlaying}
            volume={isVolume}
            url={`https://www.youtube.com/embed/${url?.key}`}
            controls={false}
            onError={handleVideoError}
          />
          <button
            className="mute-button absolute bottom-0 left-0 p-2"
            onClick={toggleMute}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Video;
