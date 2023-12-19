// components/VideoComponent.jsx
"use client";
import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';

interface VideoComponentProps {
    videoId: string; // O ID do vídeo do YouTube
  }
  
  const VideoComponent: React.FC<VideoComponentProps> = ({ videoId }) => {
  return (
    <div className="w-full flex items-center justify-center h-[40rem] bg-black">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className='w-[80rem] h-[40rem]'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
