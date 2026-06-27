"use client";

import { useEffect, useState } from "react";

const links: [string, string][] = [
  ["#about", "The Clinic"],
  ["#doctors", "Specialists"],
  ["#treatments", "Treatments"],
  ["#why", "Why Samah"],
  ["#reviews", "Reviews"],
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#home" className="brand">
            <span className="word">
              Samah<b>.</b>
            </span>
            <span className="tag">Dental · Thane</span>
          </a>
          <nav className="links">
            {links.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-end">
            <a href="tel:+917977557010" className="nav-phone">
              +91 79775 57010
            </a>
            <a href="#contact" className="btn btn-solid">
              Book a visit <span className="arw">→</span>
            </a>
            <button
              className="burger"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`m-menu${open ? " open" : ""}`}>
        <button
          className="m-close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-solid"
          onClick={() => setOpen(false)}
        >
          Book a visit →
        </a>
      </div>
    </>
  );
}
