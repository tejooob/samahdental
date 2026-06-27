const treatments = [
  ["Root Canal Treatment", "Painless, single-sitting endodontics under magnification to save your natural tooth."],
  ["Dental Implants", "Permanent, natural-looking tooth replacement that restores full chewing comfort."],
  ["Smile Makeovers & Cosmetic", "Veneers, whitening and design that flatter your unique features."],
  ["Braces & Invisalign", "Discreet, modern orthodontics to gently align teeth for adults and teens."],
  ["Crowns & Bridges", "Custom, tooth-coloured restorations that rebuild strength and aesthetics."],
  ["Paediatric Dentistry", "Friendly, fear-free care that builds lifelong healthy habits in children."],
  ["Preventive Care", "Cleaning, scaling and check-ups that stop problems before they start."],
  ["Tooth Extractions", "Safe, comfortable removals including wisdom teeth, with gentle aftercare."],
  ["Dentures & Full Rehabilitation", "Complete dentures and full-mouth rehab to restore a confident smile."],
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
            From a routine check-up to a complex rehabilitation, every treatment
            is delivered with specialist precision and a gentle hand.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80"
            alt="A patient placing a clear Invisalign aligner"
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
