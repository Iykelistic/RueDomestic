"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "why-choose", nav: "about" },
  { id: "what-we-do", nav: "services" },
  { id: "contact", nav: "contact" },
];

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${sectionId}`);
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    function syncActiveNavFromHash() {
      const hash = window.location.hash;

      if (hash === "#why-choose") setActiveNav("about");
      else if (hash === "#what-we-do") setActiveNav("services");
      else if (hash === "#contact") setActiveNav("contact");
      else setActiveNav("home");
    }

    syncActiveNavFromHash();
    window.addEventListener("hashchange", syncActiveNavFromHash);

    return () => window.removeEventListener("hashchange", syncActiveNavFromHash);
  }, []);

  useEffect(() => {
    const sectionElements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const match = SECTIONS.find(({ id }) => id === visible[0].target.id);
        if (match) setActiveNav(match.nav);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sectionElements.forEach((el) => observer.observe(el));

    function handleScroll() {
      if (window.scrollY < 120) setActiveNav("home");
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleSectionNav(e, sectionId, navItem) {
    e.preventDefault();
    scrollToSection(sectionId);
    setActiveNav(navItem);
    setMenuOpen(false);
  }

  function handleHomeNav(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
    setActiveNav("home");
    setMenuOpen(false);
  }

  const navLinkClass = (item) =>
    `text-base font-semibold transition-colors relative py-2 ${
      activeNav === item ? "text-[#0CAFEB]" : "text-zinc-700 hover:text-[#0CAFEB]"
    }`;

  const navPillClass = (item) =>
    `inline-flex flex-col items-center gap-1.5 rounded-full px-5 py-2.5 transition-colors md:px-6 md:py-2.5 ${
      activeNav === item ? "bg-zinc-100" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-sm">
      <div className="relative mx-auto flex h-[84px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center">
          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/RueLogo1.png"
              alt="Rue Domestic Concierge"
              width={190}
              height={190}
              className="h-16 w-auto object-contain sm:h-18"
              priority
            />
          </Link>
        </div>

        <nav
          id="site-nav"
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full z-40 flex-col gap-1 border-b border-zinc-200 bg-white px-4 py-4 shadow-lg md:static md:z-auto md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none`}
          aria-label="Main"
        >
          <a
            href="/"
            className={`w-fit self-start md:inline-flex md:self-auto ${navLinkClass("home")}`}
            aria-current={activeNav === "home" ? "page" : undefined}
            onClick={handleHomeNav}
          >
            <span className={navPillClass("home")}>
              <span>Home</span>
              {activeNav === "home" && (
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0CAFEB]"
                  aria-hidden
                />
              )}
            </span>
          </a>
          <a
            href="#why-choose"
            className={`w-fit self-start md:inline-flex md:self-auto ${navLinkClass("about")}`}
            aria-current={activeNav === "about" ? "page" : undefined}
            onClick={(e) => handleSectionNav(e, "why-choose", "about")}
          >
            <span className={navPillClass("about")}>
              <span>About</span>
              {activeNav === "about" && (
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0CAFEB]"
                  aria-hidden
                />
              )}
            </span>
          </a>
          <a
            href="#what-we-do"
            className={`w-fit self-start md:inline-flex md:self-auto ${navLinkClass("services")}`}
            aria-current={activeNav === "services" ? "page" : undefined}
            onClick={(e) => handleSectionNav(e, "what-we-do", "services")}
          >
            <span className={navPillClass("services")}>
              <span>Services</span>
              {activeNav === "services" && (
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0CAFEB]"
                  aria-hidden
                />
              )}
            </span>
          </a>
          <a
            href="#contact"
            className={`w-fit self-start md:inline-flex md:self-auto ${navLinkClass("contact")}`}
            aria-current={activeNav === "contact" ? "page" : undefined}
            onClick={(e) => handleSectionNav(e, "contact", "contact")}
          >
            <span className={navPillClass("contact")}>
              <span>Contact</span>
              {activeNav === "contact" && (
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0CAFEB]"
                  aria-hidden
                />
              )}
            </span>
          </a>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-600 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
