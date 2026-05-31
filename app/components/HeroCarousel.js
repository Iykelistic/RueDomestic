"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    id: "cleaning",
    image: "/images/Lizzy1.jpeg",
    imageAlt:
      "Rue Domestics team member representing professional cleaning and housekeeping services.",
    title: "Expert Cleaning & Housekeeping",
    subtitle:
      "Trusted professionals who keep your home spotless, organized, and welcoming—so you can focus on what matters most.",
  },
  {
    id: "staff",
    image: "/images/Lizzy2.jpeg",
    imageAlt:
      "Rue Domestics staff member representing reliable domestic staffing support.",
    title: "Dedicated Domestic Staff",
    subtitle:
      "Experienced household support tailored to your lifestyle—reliable, discreet, and trained to the highest standards.",
  },
  {
    id: "childcare",
    image: "/images/RueLiz.jpeg",
    imageAlt:
      "Rue Domestics representative for babysitting and nanny services.",
    title: "Babysitting & Nanny Services",
    subtitle:
      "Warm, vetted caregivers who nurture your children with patience, safety, and joyful engagement at every age.",
    hideCopy: true,
    hideOnMobile: true,
  },
];

const AUTO_MS = 6500;
const MOBILE_QUERY = "(max-width: 767px)";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const activeSlides = isMobile
    ? SLIDES.filter((slide) => !slide.hideOnMobile)
    : SLIDES;

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + activeSlides.length) % activeSlides.length);
  }, [activeSlides.length]);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const syncMobileState = () => setIsMobile(media.matches);

    syncMobileState();
    media.addEventListener("change", syncMobileState);

    return () => media.removeEventListener("change", syncMobileState);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, activeSlides.length - 1));
  }, [activeSlides.length]);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % activeSlides.length);
    }, AUTO_MS);
    return () => clearInterval(t);
  }, [activeSlides.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const slide = activeSlides[index] ?? activeSlides[0];

  return (
    <section
      className="relative min-h-[min(92svh,820px)] w-full bg-white md:min-h-[min(100svh,920px)]"
      aria-roledescription="carousel"
      aria-label="Featured services"
    >
      <div className="absolute inset-0 overflow-hidden rounded-b-3xl md:rounded-b-4xl">
        {SLIDES.map((s) => {
          const slideIndex = activeSlides.findIndex((slide) => slide.id === s.id);
          const isInRotation = slideIndex !== -1;
          const isActive = isInRotation && slideIndex === index;

          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                !isInRotation ? "pointer-events-none opacity-0" : ""
              } ${isActive ? "z-0 opacity-100" : "z-0 opacity-0 pointer-events-none"}`}
              aria-hidden={!isActive}
            >
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                className="object-cover object-top"
                sizes="100vw"
                priority={s.id === "cleaning"}
              />
              <div
                className={`absolute inset-0 ${
                  s.hideCopy ? "bg-black/10" : "bg-linear-to-b from-black/55 via-black/45 to-black/65"
                }`}
                aria-hidden
              />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 flex min-h-[min(92svh,820px)] flex-col items-center justify-center px-4 pb-28 pt-24 text-center sm:px-8 md:min-h-[min(100svh,920px)] md:pb-32">
        {!slide.hideCopy && (
          <>
            <h1 className="max-w-4xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
              {slide.subtitle}
            </p>
          </>
        )}
      </div>

      <button
        type="button"
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 text-white/90 transition hover:bg-white/10 hover:text-white md:left-6"
        aria-label="Previous slide"
        onClick={() => go(-1)}
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 text-white/90 transition hover:bg-white/10 hover:text-white md:right-6"
        aria-label="Next slide"
        onClick={() => go(1)}
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {!slide.hideCopy && (
        <div className="pointer-events-none absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80 md:bottom-24">
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">Scroll</span>
          <div className="flex h-9 w-6 justify-center rounded-full border border-white/50 pt-2">
            <span className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
          </div>
        </div>
      )}

      <div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Slides"
      >
        {SLIDES.map((s) => {
          const slideIndex = activeSlides.findIndex((slide) => slide.id === s.id);
          const isInRotation = slideIndex !== -1;

          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={isInRotation && slideIndex === index}
              aria-hidden={!isInRotation}
              tabIndex={isInRotation ? 0 : -1}
              aria-label={`Slide ${slideIndex + 1}: ${s.title}`}
              className={`h-2 rounded-full transition-all ${
                !isInRotation ? "pointer-events-none w-0 opacity-0" : ""
              } ${
                isInRotation && slideIndex === index
                  ? "w-8 bg-[#0CAFEB]"
                  : isInRotation
                    ? "w-2 bg-white/50 hover:bg-white/70"
                    : ""
              }`}
              onClick={() => isInRotation && setIndex(slideIndex)}
            />
          );
        })}
      </div>
    </section>
  );
}
