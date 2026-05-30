import ScrollToTop from "./ScrollToTop";

function IconRibbon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.5 3.5h7L16 8l-4 2.5-4-2.5L8.5 3.5z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <circle cx="12" cy="15" r="4.25" stroke="currentColor" strokeWidth={1.5} />
      <path d="M12 19v2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

function IconCheckCircle() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.6} />
      <path
        d="M8 12l2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
    </svg>
  );
}

const FEATURES = [
  {
    title: "High Retention Rate",
    description:
      "Our staff are well experienced and have undergone detailed character tests that sieve out unruly behaviors.",
    Icon: IconRibbon,
  },
  {
    title: "Proven Track Record",
    description:
      "Success reflected in client satisfaction and quality placements with long-term relationships.",
    Icon: IconCheckCircle,
  },
  {
    title: "Fast & Reliable",
    description:
      "Get suitable candidates in 24-48 hours through our streamlined candidate screening process.",
    Icon: IconBolt,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose"
      className="relative scroll-mt-[88px] bg-white px-4 py-16 sm:px-6 md:py-20"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-6xl pb-4">
        <h2
          id="why-choose-heading"
          className="text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl"
        >
          Why Choose Rue Domestics.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-zinc-500 md:text-lg">
          We set the gold standard in recruitment through rigorous vetting and a commitment
          to excellence.
        </p>

        <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
          {FEATURES.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-zinc-200 bg-white px-6 pb-10 pt-8 text-center shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-[#0CAFEB] hover:shadow-md md:px-8 md:pb-12 md:pt-10"
            >
              <div className="-rotate-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0CAFEB] text-white transition-transform duration-300 group-hover:-rotate-3">
                <Icon />
              </div>
              <h3 className="mt-5 text-lg font-bold text-zinc-900 md:text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">
                {description}
              </p>
              <span
                className="pointer-events-none absolute bottom-0 left-1/2 h-2.5 w-[32%] min-w-[4.5rem] max-w-[7.5rem] -translate-x-1/2 rounded-full bg-[#0CAFEB] opacity-0 transition-[opacity,transform] duration-300 scale-x-90 group-hover:scale-x-100 group-hover:opacity-100"
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
