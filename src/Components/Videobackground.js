import React, { useEffect, useRef, useState } from "react";
import { throttle } from "lodash"; // Install lodash: npm install lodash
import bgvideo3 from "../Assets/images/bg/bgvid3.mp4";

const VideoBackgroundChanger = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const video = videoRef.current;
      if (!video || !videoLoaded) return;

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;

      // Smoothly interpolate the video time
      const videoDuration = video.duration || 1; // Fallback to 1 second if not loaded
      const videoTime = Math.min(
        Math.max(scrollFraction * videoDuration, 0),
        videoDuration
      );

      // Set the video time
      video.currentTime = videoTime;
    }, 50); // Throttle scroll event to every 50ms

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoLoaded]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="fixed inset-0 overflow-hidden z-[-1]">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        // Replace with your video file path
        muted
        preload="auto"
        onLoadedData={handleVideoLoad}
      >
        <source src={bgvideo3} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackgroundChanger;
