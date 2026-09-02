"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { InteractiveGrid } from "@/components/hero/InteractiveGrid";
import { LogoParallax } from "@/components/hero/LogoParallax";
import { ScrollIndicator } from "@/components/hero/ScrollIndicator";
import { WHATSAPP_URL_WITH_MESSAGE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full py-32 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left, Content */}
          <div className="relative z-10">
            {/* Small label */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-6"
            >
              Software Agency
            </motion.span>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight leading-[1.05] text-text-primary mb-6"
            >
              We build digital
              <br />
              products that move
              <br />
              <span className="text-accent">business.</span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-text-muted text-base md:text-lg max-w-md leading-relaxed mb-8"
            >
              We design and build modern software for ambitious businesses.
              from concept to launch and beyond.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href={WHATSAPP_URL_WITH_MESSAGE} external>
                Start a Project
              </Button>
              <Button href="#selected-work" variant="secondary">
                View Our Work
              </Button>
            </motion.div>
          </div>

          {/* Right, Logo + Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px]"
          >
            <InteractiveGrid />
            <LogoParallax />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
