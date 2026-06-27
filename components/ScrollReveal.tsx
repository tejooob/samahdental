"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement for the scroll-in animations.
 * Content is fully visible by default (server-rendered). Only once this runs do
 * we add the `js` gate, and elements already in view are revealed in the same
 * tick (no flash); the rest animate as they scroll into view. If the observer
 * is unavailable or reduced motion is on, everything is simply shown.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.classList.add("js");

    if (!("IntersectionObserver" in window) || reduce) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -36px 0px" },
    );

    reveals.forEach((el) => {
      const r = el.getBoundingClientRect();
      // Already on screen: reveal immediately so nothing flashes.
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);

  return null;
}
