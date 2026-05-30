"use client";

import { useRef } from "react";

const STOP_AT_SECONDS = 79;

export default function PromoVideo() {
  const videoRef = useRef(null);

  function clampPlayback() {
    const video = videoRef.current;
    if (!video || video.currentTime <= STOP_AT_SECONDS) return;

    video.currentTime = STOP_AT_SECONDS;
    video.pause();
  }

  return (
    <video
      ref={videoRef}
      className="h-[360px] w-full object-cover sm:h-[440px] md:h-[520px] lg:h-[580px]"
      src="/images/RueVideo.mp4"
      controls
      preload="none"
      playsInline
      onTimeUpdate={clampPlayback}
      onSeeked={clampPlayback}
    >
      Your browser does not support the video tag.
    </video>
  );
}
