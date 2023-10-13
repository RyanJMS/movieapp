"use client";

import React, { useState } from "react";

const VideoPlayer = ({ url }: any) => {
  return (
    <div className="youtube-container">
      <iframe
        id="trailer"
        src={`https://www.youtube.com/embed/${url?.key}?autoplay=1&mute=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
