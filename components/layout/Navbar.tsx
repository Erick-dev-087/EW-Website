"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/media/logo.png";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/85 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2 group"
            aria-label="E&W Home"
          >
            <Image
              src={logoImage}
              alt="E&W Software Agency"
              width={44}
              height={44}
              className="transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-wide font-medium transition-colors duration-250 ${
                    isActive
                      ? "text-accent"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {/* Active indicator line */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/start-a-project"
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-text-primary 
                       border border-border rounded-lg px-5 py-2.5 
                       transition-all duration-300
                       hover:border-accent hover:text-accent
                       hover:shadow-[0_0_20px_rgba(214,83,22,0.12)]
                       group"
          >
            Start a Project
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 flex flex-col items-center justify-center w-10 h-10 gap-1.5"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-text-primary transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-text-primary transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-text-primary transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
