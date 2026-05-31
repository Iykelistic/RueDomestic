"use client";

import { useEffect, useRef } from "react";

const STOP_AT_SECONDS = 79;
const MOBILE_START_SECONDS = 0.1;
const MOBILE_QUERY = "(max-width: 767px)";

export default function PromoVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia(MOBILE_QUERY);

    function setMobileStartFrame() {
      if (!media.matches) return;
      if (video.currentTime < MOBILE_START_SECONDS) {
        video.currentTime = MOBILE_START_SECONDS;
      }
      video.pause();
    }

    video.addEventListener("loadeddata", setMobileStartFrame);
    media.addEventListener("change", setMobileStartFrame);

    if (video.readyState >= 2) {
      setMobileStartFrame();
    }

    return () => {
      video.removeEventListener("loadeddata", setMobileStartFrame);
      media.removeEventListener("change", setMobileStartFrame);
    };
  }, []);

  function clampPlayback() {
    const video = videoRef.current;
    if (!video || video.currentTime <= STOP_AT_SECONDS) return;

    video.currentTime = STOP_AT_SECONDS;
    video.pause();
  }

  return (
    <video
      ref={videoRef}
      className="h-[500px] w-full object-cover sm:h-[440px] md:h-[520px] lg:h-[580px]"
      src="/images/RueVideo.mp4"
      controls
      preload="metadata"
      playsInline
      onTimeUpdate={clampPlayback}
      onSeeked={clampPlayback}
    >
      Your browser does not support the video tag.
    </video>
  );
}
