import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";

import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />

      <Services />
      <Process />
      <About />
      <FinalCTA />
    </>
  );
}
