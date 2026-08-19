"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function MotionController() {
  const pathname = usePathname();
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      root.dataset.motion = "reduced";
      return;
    }

    root.dataset.motion = "ready";

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    const activeParallaxElements = new Set<HTMLElement>();

    revealElements.forEach((element) => {
      const delay = Number(element.dataset.revealDelay ?? 0);
      element.style.setProperty("--reveal-delay", `${Math.min(delay, 360)}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.revealState = "visible";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    const parallaxObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) activeParallaxElements.add(element);
          else activeParallaxElements.delete(element);
        });
      },
      { rootMargin: "15% 0px" },
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    parallaxElements.forEach((element) => parallaxObserver.observe(element));

    function updateMotion() {
      frameRef.current = null;
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      root.style.setProperty(
        "--scroll-progress",
        String(Math.min(window.scrollY / scrollableHeight, 1)),
      );

      activeParallaxElements.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = bounds.top + bounds.height / 2;
        const progress = Math.max(
          -1,
          Math.min(1, (viewportCenter - elementCenter) / window.innerHeight),
        );
        const distance = Number(element.dataset.parallax ?? 18);
        element.style.setProperty(
          "--parallax-offset",
          `${progress * distance}px`,
        );
      });
    }

    function requestMotionUpdate() {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateMotion);
    }

    window.addEventListener("scroll", requestMotionUpdate, { passive: true });
    window.addEventListener("resize", requestMotionUpdate);
    requestMotionUpdate();

    return () => {
      revealObserver.disconnect();
      parallaxObserver.disconnect();
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      parallaxElements.forEach((element) => {
        element.style.removeProperty("--parallax-offset");
      });
    };
  }, [pathname]);

  return <div aria-hidden="true" className="scroll-progress" />;
}
