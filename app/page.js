import HeroCarousel from "./components/HeroCarousel";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col bg-white text-zinc-900">
      <SiteHeader />
      <HeroCarousel />
      <WhyChooseUs />
      <WhatWeDo />
      <SiteFooter />
    </div>
  );
}
