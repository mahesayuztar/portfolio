"use client";

import { useEffect, useRef } from "react";

export function TouchFeedback() {
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const feedback = feedbackRef.current;
    if (!feedback) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch") return;

      feedback.style.setProperty("--touch-x", `${event.clientX}px`);
      feedback.style.setProperty("--touch-y", `${event.clientY}px`);
      feedback.dataset.action = event.target instanceof Element && Boolean(event.target.closest("a, button, summary, [role='button']")) ? "true" : "false";
      feedback.classList.remove("touch-feedback-active");
      void feedback.offsetWidth;
      feedback.classList.add("touch-feedback-active");
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return <div ref={feedbackRef} className="touch-feedback" aria-hidden="true" />;
}
