const points: [string, string][] = [
  [
    "Specialist-led, not handed off.",
    "Your care stays with an MDS surgeon from diagnosis through to follow-up.",
  ],
  [
    "A genuinely pain-free approach.",
    "Modern technique and a gentle, calm chairside manner for anxiety-free visits.",
  ],
  [
    "Hospital-grade hygiene.",
    "Rigorous sterilisation and single-use protocols throughout the clinic.",
  ],
  [
    "Honest, transparent pricing.",
    "Clear plans and fair costs, with no upselling and no surprises.",
  ],
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div className="about-media" data-reveal="">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/clinic-room.jpg"
            alt="The treatment room at Samah Dental Care in Charai, Thane"
            loading="lazy"
            decoding="async"
          />
          <div className="about-badge">
            <b>23+</b>
            <span>Years Combined</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="kicker" data-reveal="">
            A family-run specialist practice
          </p>
          <h2 className="h-section" data-reveal="" data-d="1">
            Care built on trust, time, and precision.
          </h2>
          <p className="lead" data-reveal="" data-d="2">
            In the heart of Charai, Samah Dental Care is run by a husband-and-wife
            team of MDS surgeons whose skills complete each other. Dr. Dikshit
            restores teeth to their natural health with root canals; Dr. Riddhi
            rebuilds and replaces the ones beyond saving. Together they offer the
            full range of dentistry for every age, with modern technique and an
            utmost gentle approach that always keeps you in focus.
          </p>
          <ul className="points" data-reveal="" data-d="2">
            {points.map(([title, body]) => (
              <li key={title}>
                <span className="ic">✓</span>
                <div>
                  <b>{title}</b>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
