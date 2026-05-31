"use client";

import { useRef } from "react";

const STOP_AT_SECONDS = 79;
const VIDEO_POSTER = "/images/RueVideo-poster.jpg";

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
      className="h-[500px] w-full object-cover sm:h-[440px] md:h-[520px] lg:h-[580px]"
      src="/images/RueVideo.mp4"
      poster={VIDEO_POSTER}
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
