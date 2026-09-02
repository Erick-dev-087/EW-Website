"use client";

import Image from "next/image";
import { clients } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function LogoMarquee() {
  // Duplicate clients to fill the marquee strip (need 4+ for seamless loop)
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="relative py-16 md:py-20 border-y border-border/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-8">
        <ScrollReveal>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-dim">
            Trusted By
          </span>
        </ScrollReveal>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

        {/* Scrolling strip */}
        <div
          className="flex items-center gap-16 md:gap-24 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ width: "fit-content" }}
        >
          {/* First set */}
          {marqueeItems.map((client, index) => (
            <div
              key={`a-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 px-4 
                         grayscale brightness-150 opacity-40
                         transition-all duration-400
                         hover:grayscale-0 hover:opacity-90 hover:brightness-100"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {marqueeItems.map((client, index) => (
            <div
              key={`b-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 px-4
                         grayscale brightness-150 opacity-40
                         transition-all duration-400
                         hover:grayscale-0 hover:opacity-90 hover:brightness-100"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
