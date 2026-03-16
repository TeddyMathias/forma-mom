"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the given ref.
 * When elements with `.scroll-reveal` enter the viewport,
 * they receive the `revealed` class — triggering CSS animations.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    const targets = root.querySelectorAll(".scroll-reveal");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
