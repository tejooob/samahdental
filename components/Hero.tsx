export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <h1 data-reveal="">
            Dental care that feels <em>calm,</em> precise, and genuinely painless.
          </h1>
          <p className="lead" data-reveal="" data-d="1">
            A boutique specialist clinic in Charai, Thane, where two MDS surgeons
            treat every patient unhurried, with hospital-grade hygiene and a plan
            built around your smile.
          </p>
          <div className="hero-actions" data-reveal="" data-d="2">
            <a href="#contact" className="btn btn-solid">
              Book an appointment <span className="arw">→</span>
            </a>
            <a href="#treatments" className="btn btn-ghost">
              View treatments
            </a>
          </div>
          <div className="hero-trust" data-reveal="" data-d="3">
            <div className="rate">
              <span className="stars">★★★★★</span>
              <b>5.0</b>
            </div>
            <span className="meta">on Google</span>
            <div className="divider" />
            <span className="meta">
              Two <b>MDS</b> specialists · <b>23+</b> years combined
            </span>
          </div>
        </div>
        <div className="hero-media" data-reveal="" data-d="1">
          <div className="frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/clinic-team.webp"
              alt="Dr. Dikshit and Dr. Riddhi Solanki at Samah Dental Care in Charai, Thane"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-chip">
            <span className="ic">✓</span>
            <div>
              <b>Painless root canals</b>
              <span>Single-sitting, under magnification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
