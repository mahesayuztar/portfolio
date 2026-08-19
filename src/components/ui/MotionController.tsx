"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function MotionController() {
  const pathname = usePathname();
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const usesNativeTimeline = CSS.supports("animation-timeline: view()");

    root.dataset.motion = "ready";
    root.dataset.motionMounted = "true";

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    const boundaryElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section, main > footer",
      ),
    );
    const pageEndElement = document.querySelector<HTMLElement>(
      "main > :last-child",
    );
    const activeParallaxElements = new Set<HTMLElement>();
    const boundaryAnimations = new Set<Animation>();
    let activeBoundary: "top" | "bottom" | null = null;
    let boundaryStartedAt = 0;
    let previousTouchY: number | null = null;
    let wasAtTop = window.scrollY <= 1;
    let wasAtBottom =
      window.scrollY >=
      document.documentElement.scrollHeight - window.innerHeight - 1;

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

    let firstRevealFrame: number | null = null;
    let secondRevealFrame: number | null = null;

    if (!usesNativeTimeline) {
      firstRevealFrame = window.requestAnimationFrame(() => {
        secondRevealFrame = window.requestAnimationFrame(() => {
          revealElements.forEach((element) => revealObserver.observe(element));
        });
      });
    }

    parallaxElements.forEach((element) => parallaxObserver.observe(element));

    function cancelBoundaryBounce() {
      boundaryAnimations.forEach((animation) => animation.cancel());
      boundaryAnimations.clear();
      activeBoundary = null;
      delete root.dataset.boundaryBounce;
      root.style.removeProperty("--bounce-edge-color");
    }

    function playBoundaryBounce(boundary: "top" | "bottom") {
      if (document.body.dataset.windowOpen === "true") return;

      const currentTime = performance.now();
      if (
        activeBoundary === boundary &&
        currentTime - boundaryStartedAt < 480
      ) {
        return;
      }

      cancelBoundaryBounce();
      activeBoundary = boundary;
      boundaryStartedAt = currentTime;
      const direction = boundary === "top" ? 1 : -1;
      const distance = (window.innerWidth < 640 ? 14 : 18) * direction;
      root.dataset.boundaryBounce = boundary;

      if (boundary === "bottom" && pageEndElement) {
        const pageEndColor = getComputedStyle(pageEndElement).backgroundColor;
        const edgeColor =
          pageEndColor === "rgba(0, 0, 0, 0)"
            ? getComputedStyle(document.body).backgroundColor
            : pageEndColor;
        root.style.setProperty("--bounce-edge-color", edgeColor);
      }

      boundaryElements.forEach((element) => {
        const animation = element.animate(
          [
            {
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              offset: 0,
              transform: "translate3d(0, 0, 0)",
            },
            {
              easing: "cubic-bezier(0.22, 0.78, 0.24, 1)",
              offset: 0.28,
              transform: `translate3d(0, ${distance}px, 0)`,
            },
            {
              easing: "cubic-bezier(0.22, 0.78, 0.24, 1)",
              offset: 0.62,
              transform: `translate3d(0, ${distance * -0.2}px, 0)`,
            },
            {
              easing: "cubic-bezier(0.22, 0.78, 0.24, 1)",
              offset: 0.82,
              transform: `translate3d(0, ${distance * 0.06}px, 0)`,
            },
            { offset: 1, transform: "translate3d(0, 0, 0)" },
          ],
          {
            duration: 760,
            easing: "linear",
          },
        );

        boundaryAnimations.add(animation);
        animation.addEventListener(
          "finish",
          () => {
            boundaryAnimations.delete(animation);
            if (boundaryAnimations.size === 0) {
              activeBoundary = null;
              delete root.dataset.boundaryBounce;
              root.style.removeProperty("--bounce-edge-color");
            }
          },
          { once: true },
        );
      });

      if (boundaryAnimations.size === 0) cancelBoundaryBounce();
    }

    function updateMotion() {
      frameRef.current = null;
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const isAtTop = window.scrollY <= 1;
      const isAtBottom = window.scrollY >= scrollableHeight - 1;

      if (isAtTop && !wasAtTop) playBoundaryBounce("top");
      if (isAtBottom && !wasAtBottom) playBoundaryBounce("bottom");

      wasAtTop = isAtTop;
      wasAtBottom = isAtBottom;

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

    function handleBoundaryWheel(event: WheelEvent) {
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0,
      );

      if (window.scrollY <= 1 && event.deltaY < 0) {
        playBoundaryBounce("top");
      } else if (
        window.scrollY >= scrollableHeight - 1 &&
        event.deltaY > 0
      ) {
        playBoundaryBounce("bottom");
      }
    }

    function handleTouchStart(event: TouchEvent) {
      previousTouchY = event.touches[0]?.clientY ?? null;
    }

    function handleTouchMove(event: TouchEvent) {
      const currentTouchY = event.touches[0]?.clientY;
      if (currentTouchY === undefined || previousTouchY === null) return;

      const movement = currentTouchY - previousTouchY;
      previousTouchY = currentTouchY;
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0,
      );

      if (window.scrollY <= 1 && movement > 0) {
        playBoundaryBounce("top");
      } else if (
        window.scrollY >= scrollableHeight - 1 &&
        movement < 0
      ) {
        playBoundaryBounce("bottom");
      }
    }

    function handleTouchEnd() {
      previousTouchY = null;
    }

    window.addEventListener("scroll", requestMotionUpdate, { passive: true });
    window.addEventListener("resize", requestMotionUpdate);
    window.addEventListener("wheel", handleBoundaryWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    requestMotionUpdate();

    return () => {
      revealObserver.disconnect();
      parallaxObserver.disconnect();
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);
      window.removeEventListener("wheel", handleBoundaryWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (firstRevealFrame !== null) window.cancelAnimationFrame(firstRevealFrame);
      if (secondRevealFrame !== null) window.cancelAnimationFrame(secondRevealFrame);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      cancelBoundaryBounce();
      parallaxElements.forEach((element) => {
        element.style.removeProperty("--parallax-offset");
      });
    };
  }, [pathname]);

  return null;
}
