"use client";

export default function ScrollToTop() {
  return (
    <button
      type="button"
      className="absolute bottom-6 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#0CAFEB] text-white shadow-md transition hover:bg-[#0CAFEB]/90 md:bottom-8 md:right-6"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}
