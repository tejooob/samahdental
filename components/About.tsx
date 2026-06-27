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
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
            alt="A dentist reviewing a patient's dental X-ray together during a consultation"
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
            team of MDS surgeons. Appointments are never rushed, treatment plans
            are honest, and every protocol is held to a strict standard of
            sterilisation. You are treated by the specialist, start to finish.
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
