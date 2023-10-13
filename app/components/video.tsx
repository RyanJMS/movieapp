"use client";

import React, { use, useState } from "react";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = ({ url }: any) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVolume, setIsVolume] = useState(0);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setIsVolume(1);
  };

  const togglePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="youtube-container" onMouseEnter={togglePlay}>
      <button className="mute-button" onClick={toggleMute}>
        {isMuted ? "🔇" : "🔊"}
      </button>
      {/* <iframe
        height="600px"
        width="100%"
        referrerPolicy="no-referrer"
        onMouseEnter={togglePlay}
        id="trailer"
        src={`https://www.youtube.com/embed/${url?.key}?autoplay=${
          isPlaying ? 1 : 0
        }&mute=${
          isMuted ? 1 : 0
        }&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
      >
        {" "}
      </iframe> */}
      <ReactPlayer
        height="600px"
        width="100%"
        muted={isMuted}
        playing={isPlaying}
        volume={isVolume}
        url={`https://www.youtube.com/embed/${url?.key}`}
        controls={false}
      />
    </div>
  );
};

export default VideoPlayer;
