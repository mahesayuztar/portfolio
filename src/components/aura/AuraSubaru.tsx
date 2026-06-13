/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";

export function AuraSubaru() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const W = cv.width;
    const H = cv.height;

    let animationId: number;
    let t = 0;

    const margin = 22;
    const edges = ["top", "bottom", "left", "right"] as const;

    function makeParticle(edge: (typeof edges)[number]) {
      let x, y, baseAngle;

      if (edge === "top") {
        x = margin + Math.random() * (W - margin * 2);
        y = margin;
        baseAngle = -Math.PI / 2;
      } else if (edge === "bottom") {
        x = margin + Math.random() * (W - margin * 2);
        y = H - margin;
        baseAngle = Math.PI / 2;
      } else if (edge === "left") {
        x = margin;
        y = margin + Math.random() * (H - margin * 2);
        baseAngle = Math.PI;
      } else {
        x = W - margin;
        y = margin + Math.random() * (H - margin * 2);
        baseAngle = 0;
      }

      const angle = baseAngle + (Math.random() - 0.5) * 0.45;
      const speed = 0.4 + Math.random() * 0.7;

      return {
        x,
        y,
        edge,
        angle,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 40 + Math.random() * 20,
        len: 10 + Math.random() * 20,
      };
    }

    const particles: any[] = [];

    for (let i = 0; i < 80; i++) {
      const edge = edges[Math.floor(i / 20)];
      particles.push(makeParticle(edge));
    }

    function render() {
      if (!ctx) return;
      t += 0.02;

      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.life++;

        if (p.life > p.maxLife) {
          Object.assign(p, makeParticle(p.edge));
        }

        p.x += p.vx;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        const alpha = Math.sin(progress * Math.PI);

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(
          p.x - Math.cos(p.angle) * p.len * alpha,
          p.y - Math.sin(p.angle) * p.len * alpha,
        );

        ctx.strokeStyle = `rgba(210,120,255,${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    }

    render();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={450}
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}
