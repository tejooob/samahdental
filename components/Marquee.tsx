const items = [
  "Root Canals",
  "Dental Implants",
  "Smile Makeovers",
  "Invisalign & Braces",
  "Crowns & Bridges",
  "Paediatric Care",
];

export default function Marquee() {
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
