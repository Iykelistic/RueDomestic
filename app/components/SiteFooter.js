import Image from "next/image";
import Link from "next/link";

function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect width="14" height="14" x="5" y="5" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.4" cy="7.7" r="1" fill="currentColor" />
    </svg>
  );
}

function ContactIcon({ children }) {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-white/85">
      {children}
    </span>
  );
}

const services = [
  "Domestic Staff Recruitment",
  "Corporate Staff Recruitment",
  "Screening and Verification",
  "Training and Development",
  "Temporary Placements",
];

const company = ["About Us", "Services", "Contact", "Terms"];

export default function SiteFooter() {
  return (
    <footer className="bg-[#0CAFEB] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Find Your Perfect Staff?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90">
          Join families and businesses who trust Rue Domestics for reliable household
          and workplace staffing support.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr_1.25fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="/images/RueLogo1.png"
              alt="Rue Domestic Concierge"
              width={150}
              height={150}
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/90">
            We help you find trusted domestic staff and tailored support for your home
            or business.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/90">
            {services.map((service) => (
              <li key={service}>
                <Link href="#what-we-do" className="transition hover:text-white">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/90">
            {company.map((item) => (
              <li key={item}>
                <Link href={item === "Contact" ? "#contact" : "#"} className="transition hover:text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="contact" className="scroll-mt-28">
          <h3 className="text-lg font-bold">Talk to Us</h3>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/90">
            <li className="flex gap-3">
              <ContactIcon>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5.5C3 14 10 21 18.5 21c.7 0 1.3-.4 1.5-1l1-3.1c.2-.7-.2-1.5-.9-1.7l-3.4-1a1.5 1.5 0 00-1.5.4l-.8.8A12.7 12.7 0 018.6 9.6l.8-.8c.4-.4.6-1 .4-1.5l-1-3.4C8.6 3.2 7.8 2.8 7.1 3l-3.1 1c-.6.2-1 .8-1 1.5z" />
                </svg>
              </ContactIcon>
              <Link href="tel:+2348035555943" className="transition hover:text-white">
                +234 803 555 5943
              </Link>
            </li>
            <li className="flex gap-3">
              <ContactIcon>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16v12H4V6zm0 1.5l8 5.5 8-5.5" />
                </svg>
              </ContactIcon>
              <Link href="mailto:hello@ruedomestics.com" className="transition hover:text-white">
                hello@ruedomestics.com
              </Link>
            </li>
            <li className="flex gap-3">
              <ContactIcon>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s7-4.9 7-11a7 7 0 10-14 0c0 6.1 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth={1.8} />
                </svg>
              </ContactIcon>
              <span>Abuja, Nigeria</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-white/85">
                <InstagramIcon className="h-8 w-8" />
              </span>
              <Link href="#" aria-label="Rue Domestics on Instagram" className="transition hover:text-white">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/20 px-4 py-5 text-center text-xs text-white/80 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Rue Domestics. All rights reserved.
      </div>
    </footer>
  );
}
