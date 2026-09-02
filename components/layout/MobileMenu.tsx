"use client";

import { useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      onClose();
      // Small delay so the menu closes before scrolling
      setTimeout(() => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 350);
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-bg-primary/95 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.nav
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center justify-center h-full gap-8 px-6"
          >
            {NAV_LINKS.map((link, index) => {
              const isActive = activeSection === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-3xl font-heading font-semibold tracking-tight transition-colors duration-250 ${
                      isActive
                        ? "text-accent"
                        : "text-text-primary hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              );
            })}

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.15 + NAV_LINKS.length * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-4"
            >
              <Link
                href="/start-a-project"
                onClick={onClose}
                className="inline-flex items-center gap-3 text-lg font-medium text-bg-primary
                           bg-accent rounded-lg px-8 py-3.5
                           transition-all duration-300 hover:bg-accent-hover
                           shadow-[0_0_30px_rgba(214,83,22,0.2)]"
              >
                Start a Project
                <svg
                  className="w-5 h-5"
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
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
