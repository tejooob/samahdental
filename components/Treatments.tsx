const treatments = [
  ["Single-Sitting Root Canals", "Painless endodontics finished comfortably in one visit, saving your natural tooth under magnification."],
  ["Single-Visit Dentures", "Well-fitting dentures designed and delivered quickly, so you regain your smile and bite without the long wait."],
  ["Overdentures", "Implant- or root-supported dentures that stay firmly in place for confident eating and speaking."],
  ["Semi-Fixed Partial Dentures", "Attachment-retained partials: the stability of a fixed tooth with the easy care of a removable one."],
  ["Dental Implants", "Permanent, natural-looking replacements for missing teeth that restore full chewing comfort."],
  ["Smile Designing", "Veneers, whitening and cosmetic work shaped around your face for a natural, confident smile."],
  ["Crowns & Bridges", "Custom, tooth-coloured restorations that rebuild strength and aesthetics."],
  ["Braces & Invisalign", "Discreet, modern orthodontics to gently align teeth for adults and teens."],
  ["Paediatric Dentistry", "Friendly, fear-free care that builds lifelong healthy habits in children."],
  ["Preventive Care", "Cleaning, scaling and check-ups that stop problems before they start."],
];

export default function Treatments() {
  return (
    <section className="section" id="treatments">
      <div className="wrap treat-grid">
        <div className="treat-intro">
          <p className="kicker" data-reveal="">
            What we do
          </p>
          <h2 className="h-section" data-reveal="" data-d="1">
            Comprehensive dentistry, one trusted clinic
          </h2>
          <p className="lead" data-reveal="" data-d="2">
            From a painless single-sitting root canal to implants and full
            prosthodontic rehabilitation, every treatment restores function,
            comfort, and aesthetics, for every age and with a gentle hand.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/treatment-light.jpg"
            alt="A treatment in progress at Samah Dental Care"
            loading="lazy"
            decoding="async"
            data-reveal=""
            data-d="2"
          />
        </div>
        <div className="treat-list">
          {treatments.map(([title, body], i) => (
            <div className="treat-row" key={title}>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              <span className="go">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
