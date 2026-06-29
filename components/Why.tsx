const reasons: [string, string][] = [
  [
    "Two specialists who complete each other",
    "Dr. Dikshit restores teeth to their natural health with root canals; Dr. Riddhi replaces the ones that can't be saved. Complementary expertise under one roof.",
  ],
  [
    "Painless, single-sitting root canals",
    "Most root canals are finished comfortably in a single visit, using modern, gentle, magnified technique.",
  ],
  [
    "Single-visit dentures and implants",
    "From same-day dentures to overdentures and dental implants, we restore your bite and smile without the long wait.",
  ],
  [
    "Modern care, kept gentle",
    "Every range of treatment, for every age, delivered with an utmost gentle approach that keeps you in focus.",
  ],
];

export default function Why() {
  return (
    <section className="section why" id="why">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker" data-reveal="">
            What sets us apart
          </p>
          <h2 className="h-section" data-reveal="" data-d="1">
            The difference is in how it feels
          </h2>
          <p className="lead" data-reveal="" data-d="2">
            Two complementary specialists, the full range of modern dentistry,
            and a genuinely gentle approach that always keeps you in focus.
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
