"use client";

import { useEffect, useRef } from "react";

/**
 * WebGLCanvas — pacomepertant.com-style background canvas
 * - Uses 2D canvas (lightweight, no three.js dependency)
 * - Soft floating particles in a wide field
 * - Mouse parallax: particles drift slightly toward cursor
 * - Pure white pixels at low alpha, blending with grid pattern below
 *
 * Mounted as fixed full-screen behind everything (z-index sits with Background).
 */
export default function WebGLCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Particle field
    const COUNT = Math.min(
      120,
      Math.floor((window.innerWidth * window.innerHeight) / 18000)
    );
    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const particles: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      r: 0.5 + Math.random() * 1.4,
      a: 0.15 + Math.random() * 0.45,
    }));

    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = (mouseRef.current.x - 0.5) * 30; // parallax px
      const my = (mouseRef.current.y - 0.5) * 30;

      for (const p of particles) {
        // gentle drift
        p.x += p.vx;
        p.y += p.vy;
        // wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const px = p.x + mx * (p.r / 2);
        const py = p.y + my * (p.r / 2);

        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      }

      // Connect close particles with thin lines (web effect, very subtle)
      ctx.lineWidth = 0.4;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 110 * 110) {
            const alpha = (1 - Math.sqrt(d2) / 110) * 0.06;
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x + mx * (a.r / 2), a.y + my * (a.r / 2));
            ctx.lineTo(b.x + mx * (b.r / 2), b.y + my * (b.r / 2));
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-[5] pointer-events-none"
      aria-hidden="true"
    />
  );
}
