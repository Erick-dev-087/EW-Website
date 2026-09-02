"use client";

import { useRef, useEffect, useCallback } from "react";

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    // Set canvas size
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, rect.width, rect.height);

    const spacing = 35;
    const mouse = mouseRef.current;
    const maxDist = 140;

    for (let x = spacing; x < rect.width; x += spacing) {
      for (let y = spacing; y < rect.height; y += spacing) {
        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let alpha = 0.06;
        let radius = 1.2;
        let color = "255, 255, 255";

        if (dist < maxDist) {
          const proximity = 1 - dist / maxDist;
          alpha = 0.06 + proximity * 0.35;
          radius = 1.2 + proximity * 1.8;
          // Blend to orange as proximity increases
          const orangeBlend = proximity * 0.7;
          color = `${Math.round(255 - orangeBlend * 41)}, ${Math.round(
            255 - orangeBlend * 172
          )}, ${Math.round(255 - orangeBlend * 233)}`;
        }

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();

        // Draw subtle connecting lines between nearby bright dots
        if (dist < maxDist * 0.6) {
          // Check right neighbor
          const nx = x + spacing;
          const ny = y;
          const ndx = mouse.x - nx;
          const ndy = mouse.y - ny;
          const ndist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (ndist < maxDist * 0.6 && nx < rect.width) {
            const lineAlpha = Math.min(alpha * 0.35, 0.12);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = `rgba(214, 83, 22, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }

          // Check bottom neighbor
          const bx = x;
          const by = y + spacing;
          const bdx = mouse.x - bx;
          const bdy = mouse.y - by;
          const bdist = Math.sqrt(bdx * bdx + bdy * bdy);

          if (bdist < maxDist * 0.6 && by < rect.height) {
            const lineAlpha = Math.min(alpha * 0.35, 0.12);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = `rgba(214, 83, 22, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    animationRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    // Respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      aria-hidden="true"
    />
  );
}
