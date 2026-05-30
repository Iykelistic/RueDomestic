import PromoVideo from "./PromoVideo";
import ScrollToTop from "./ScrollToTop";

function IconPerson() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 11a3 3 0 100-6 3 3 0 000 6zM5 20v-1a5 5 0 015-5h4a5 5 0 015 5v1"
        stroke="currentColor"
        strokeWidth={1.65}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20V9.5L12 5l8 4.5V20M9 20v-4h6v4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12h2M13 12h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 4l7 3v6c0 4-3 7.5-7 8-4-.5-7-4-7-8V7l7-3z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.5l1.7 1.7 3.3-3.3"
        stroke="currentColor"
        strokeWidth={1.65}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGraduation() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10l8-4 8 4-8 4-8-4zM6 11.5V16c0 2 3.5 4 6 4s6-2 6-4v-4.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2M4 10h16v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path d="M4 14h16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.5} />
      <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.5} />
      <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.5} />
      <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

const SERVICES = [
  {
    title: "Domestic Staff Recruitment",
    description:
      "Reliable and skilled individuals to assist in your home with the utmost care and professionalism.",
    Icon: IconPerson,
    iconWrap: "bg-[#0CAFEB]/10 text-[#0CAFEB]",
  },
  {
    title: "Corporate Staff Recruitment",
    description:
      "Exceptional staff play a critical role in your business success. We find the best candidates for every role.",
    Icon: IconBuilding,
    iconWrap: "bg-[#0CAFEB]/10 text-[#0CAFEB]",
  },
  {
    title: "Screening and Verification",
    description:
      "Our rigorous process ensures you receive the most qualified and trustworthy candidates possible.",
    Icon: IconShieldCheck,
    iconWrap: "bg-[#0CAFEB]/10 text-[#0CAFEB]",
  },
  {
    title: "Training and Development",
    description:
      "Continuous improvement of our candidates so they meet evolving household and workplace expectations.",
    Icon: IconGraduation,
    iconWrap: "bg-[#0CAFEB]/10 text-[#0CAFEB]",
  },
  {
    title: "Temporary and Permanent Placements",
    description:
      "Flexible options for short-term coverage, seasonal needs, or lasting placements that fit your rhythm.",
    Icon: IconBriefcase,
    iconWrap: "bg-[#0CAFEB]/10 text-[#0CAFEB]",
  },
  {
    title: "Customized HR Solutions",
    description:
      "Support tailored to your situation—from structured vetting to onboarding and ongoing HR guidance.",
    Icon: IconGrid,
    iconWrap: "bg-[#0CAFEB]/10 text-[#0CAFEB]",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative scroll-mt-[88px] bg-white px-4 py-16 sm:px-6 md:py-20"
      aria-labelledby="what-we-do-heading"
    >
      <div className="mx-auto max-w-6xl pb-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h2
              id="what-we-do-heading"
              className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl"
            >
              What We Do
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
              We offer a comprehensive range of HR solutions tailored to meet the unique needs
              of households and businesses.
            </p>
          </div>
          <div
            className="h-2 w-20 shrink-0 rounded-full bg-[#0CAFEB] lg:w-24"
            aria-hidden
          />
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <PromoVideo />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map(({ title, description, Icon, iconWrap }) => (
            <article
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#0CAFEB] hover:shadow-md md:p-7"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover:-rotate-3 ${iconWrap}`}
              >
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-bold text-zinc-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-[15px]">
                {description}
              </p>
              <span
                className="pointer-events-none absolute bottom-0 left-1/2 h-2.5 w-[32%] min-w-18 max-w-30 -translate-x-1/2 rounded-full bg-[#0CAFEB] opacity-0 transition-[opacity,transform] duration-300 scale-x-90 group-hover:scale-x-100 group-hover:opacity-100"
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>

      <ScrollToTop />
    </section>
  );
}
