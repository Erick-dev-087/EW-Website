"use client";

import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`absolute bottom-8 right-8 md:bottom-10 md:right-10 flex flex-col items-center gap-2 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Pulsing dot */}
      <span className="block w-2 h-2 rounded-full bg-accent animate-pulse-soft" />

      {/* Text */}
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-text-dim select-none writing-mode-vertical">
        Scroll
      </span>

      {/* Animated line */}
      <div className="w-[1px] h-8 bg-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-3 bg-accent animate-[scrollLine_2s_ease-in-out_infinite]" />
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(200%); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </div>
  );
}
