"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type CursorRevealHeadingProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
};

const REVEAL_RADIUS = 200;
const PROXIMITY_DISTANCE = 96;

export function CursorRevealHeading({ children, className = "", as: Heading = "h1" }: CursorRevealHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const frameRef = useRef<number | null>(null);
  const visibilityRef = useRef(false);
  const [position, setPosition] = useState({ x: 0, y: 0, isVisible: false });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    function handlePointerMove(event: PointerEvent) {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const heading = headingRef.current;
        if (!heading) return;
        const bounds = heading.getBoundingClientRect();
        const nearestX = Math.max(bounds.left, Math.min(event.clientX, bounds.right));
        const nearestY = Math.max(bounds.top, Math.min(event.clientY, bounds.bottom));
        const distance = Math.hypot(event.clientX - nearestX, event.clientY - nearestY);
        const isVisible = distance <= PROXIMITY_DISTANCE;
        if (!isVisible && !visibilityRef.current) return;
        visibilityRef.current = isVisible;
        setPosition({ x: event.clientX - bounds.left, y: event.clientY - bounds.top, isVisible });
      });
    }

    function hideReveal() {
      visibilityRef.current = false;
      setPosition((current) => ({ ...current, isVisible: false }));
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", hideReveal);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", hideReveal);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="relative" data-reveal="heading">
      <Heading ref={headingRef} className={className}>{children}</Heading>
      <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-visible transition-opacity duration-150 ${position.isVisible ? "opacity-100" : "opacity-0"}`} style={{ clipPath: `circle(${REVEAL_RADIUS}px at ${position.x}px ${position.y}px)` }}>
        <Heading className={`${className} !text-accent`}>{children}</Heading>
      </div>
    </div>
  );
}
