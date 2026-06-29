"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { src: "/team-working.jpg", caption: "Two specialists, working as one team" },
  { src: "/treatment-dikshit.jpg", caption: "Gentle, single-sitting treatment" },
  { src: "/treatment-light.jpg", caption: "Modern, precise dental care" },
  { src: "/clinic-room.jpg", caption: "Our calm, hygienic treatment room" },
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (i + slides.length) % slides.length;
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    setIndex(clamped);
  }, []);

  // keep the active dot in sync when the user swipes/scrolls
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        setIndex(Math.max(0, Math.min(slides.length - 1, i)));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // gentle autoplay, paused on hover/focus and when reduced motion is requested
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => goTo(index + 1), 5000);
    return () => window.clearInterval(id);
  }, [index, paused, goTo]);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="wrap sec-head center">
        <p className="kicker" data-reveal="">
          A look inside
        </p>
        <h2 className="h-section" data-reveal="" data-d="1">
          Inside Samah Dental Care
        </h2>
        <p className="lead" style={{ marginInline: "auto" }} data-reveal="" data-d="2">
          A glimpse of the clinic, the team, and the calm, careful way we work.
        </p>
      </div>

      <div
        className="wrap gallery"
        data-reveal=""
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="gallery-track" ref={trackRef}>
          {slides.map((s, i) => (
            <figure className="gallery-slide" key={s.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.caption} loading="lazy" decoding="async" draggable={false} />
              <figcaption>{s.caption}</figcaption>
              <span className="gallery-count">
                {i + 1} / {slides.length}
              </span>
            </figure>
          ))}
        </div>

        <button
          className="gallery-arrow prev"
          aria-label="Previous photo"
          onClick={() => goTo(index - 1)}
        >
          ‹
        </button>
        <button
          className="gallery-arrow next"
          aria-label="Next photo"
          onClick={() => goTo(index + 1)}
        >
          ›
        </button>

        <div className="gallery-dots" role="tablist" aria-label="Choose photo">
          {slides.map((s, i) => (
            <button
              key={s.src}
              className={`gallery-dot${i === index ? " active" : ""}`}
              aria-label={`Go to photo ${i + 1}`}
              aria-selected={i === index}
              role="tab"
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
