import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ServicesScrollDriven } from "@/components/sections/ServicesScrollDriven";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesScrollDriven />
      <SelectedWork />
      <Process />
      <About />
      <FinalCTA />
    </>
  );
}
