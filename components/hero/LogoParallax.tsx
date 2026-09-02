"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import logoImage from "@/media/logo.png";

// ── Particle type ─────────────────────────────
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  baseOpacity: number;
}

export function LogoParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [glowIntensity, setGlowIntensity] = useState(0.15);

  // ── Initialize particles ───────────────────
  const initParticles = useCallback((width: number, height: number) => {
    const count = 18; // Subtle, not too many
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const baseOpacity = 0.12 + Math.random() * 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3, // Very slow drift
        vy: (Math.random() - 0.5) * 0.3,
        radius: 1.5 + Math.random() * 2.5,
        opacity: baseOpacity,
        baseOpacity,
      });
    }
    particlesRef.current = particles;
  }, []);

  // ── Animate particles ──────────────────────
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initParticles(rect.width, rect.height);
    }

    ctx.clearRect(0, 0, rect.width, rect.height);

    const mouse = mouseRef.current;
    const glowRadius = 180;

    particlesRef.current.forEach((p) => {
      // Drift
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = rect.width + 10;
      if (p.x > rect.width + 10) p.x = -10;
      if (p.y < -10) p.y = rect.height + 10;
      if (p.y > rect.height + 10) p.y = -10;

      // Glow effect: brighten when mouse is near
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < glowRadius) {
        const proximity = 1 - dist / glowRadius;
        p.opacity = p.baseOpacity + proximity * 0.6;
      } else {
        // Slowly fade back to base
        p.opacity += (p.baseOpacity - p.opacity) * 0.05;
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(214, 83, 22, ${p.opacity})`;
      ctx.fill();

      // Soft glow halo around each particle
      if (p.opacity > 0.2) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214, 83, 22, ${p.opacity * 0.12})`;
        ctx.fill();
      }
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [initParticles]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Parallax: move opposite to cursor, max ±5px
    const dx = (e.clientX - centerX) / rect.width;
    const dy = (e.clientY - centerY) / rect.height;
    setTransform({ x: -dx * 5, y: -dy * 5 });

    // Glow follows cursor
    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x: glowX, y: glowY });

    // Glow intensity — stronger near center
    const distToCenter = Math.sqrt(dx * dx + dy * dy);
    const intensity = Math.max(0.15, 0.5 - distToCenter * 0.4);
    setGlowIntensity(intensity);

    // Update mouse for particles
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
    setGlowPos({ x: 50, y: 50 });
    setGlowIntensity(0.15);
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center w-full h-full"
    >
      {/* Ambient base glow — always visible */}
      <div
        className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(214, 83, 22, 0.08) 0%, transparent 70%)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Cursor-following glow */}
      <div
        className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full transition-all duration-500 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(214, 83, 22, ${glowIntensity}) 0%, transparent 60%)`,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Drifting orange particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
        aria-hidden="true"
      />

      {/* Logo with parallax — BIGGER */}
      <div
        className="relative z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px)`,
        }}
      >
        <Image
          src={logoImage}
          alt="E&W Software Agency"
          width={400}
          height={400}
          className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-contain drop-shadow-[0_0_60px_rgba(214,83,22,0.15)]"
          priority
        />
      </div>
    </div>
  );
}
