'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const isDark = theme !== 'light';
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const particleCount = Math.min(Math.floor(window.innerWidth / 24), 36);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 1,
      alpha: Math.random() * 0.45 + 0.15,
    }));

    const maxDist = 120;
    const maxDistSq = maxDist * maxDist;

    const animate = () => {
      if (document.hidden) {
        animId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const lineAlpha = (1 - distSq / maxDistSq) * (isDark ? 0.14 : 0.08);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(6, 182, 212, ${lineAlpha})`
              : `rgba(8, 145, 178, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(16, 185, 129, ${p1.alpha})`
          : `rgba(5, 150, 105, ${p1.alpha * 0.7})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      id="ambient-canvas"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-60 w-screen h-screen"
    />
  );
}
