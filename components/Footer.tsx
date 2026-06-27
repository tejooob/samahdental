const links: [string, string][] = [
  ["#about", "The Clinic"],
  ["#doctors", "Specialists"],
  ["#treatments", "Treatments"],
  ["#reviews", "Reviews"],
  ["#contact", "Book a visit"],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <span className="word">
              Samah<b>.</b>
            </span>
            <p>
              Specialist dental care in Charai, Thane. Painless, personalised,
              and held to a hospital standard of hygiene.
            </p>
          </div>
          <nav className="foot-links">
            {links.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Samah Dental Care, Charai, Thane (W).</span>
          <span>Dr. Dikshit Solanki · Dr. Riddhi Solanki</span>
        </div>
      </div>
    </footer>
  );
}
