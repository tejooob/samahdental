const reasons: [string, string][] = [
  [
    "Specialist expertise",
    "Two MDS surgeons covering endodontics, prosthodontics and implantology under one roof.",
  ],
  [
    "Genuinely painless",
    "Advanced, gentle technique and a calm room keep every treatment comfortable.",
  ],
  [
    "Uncompromising hygiene",
    "Hospital-grade sterilisation and single-use protocols, every single time.",
  ],
  [
    "Personal and honest",
    "Tailored plans, transparent pricing, and advice you can actually trust.",
  ],
];

export default function Why() {
  return (
    <section className="section why" id="why">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker" data-reveal="">
            Why Samah
          </p>
          <h2 className="h-section" data-reveal="" data-d="1">
            The difference is in how it feels
          </h2>
          <p className="lead" data-reveal="" data-d="2">
            Specialist expertise paired with real warmth, so a visit feels less
            like a procedure and more like being looked after.
          </p>
        </div>
        <div className="why-grid" data-reveal="" data-d="1">
          {reasons.map(([title, body]) => (
            <div className="why-item" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
