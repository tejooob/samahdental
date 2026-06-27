type Entry = { title: string; place: string; when: string };

type Doctor = {
  mono: string;
  name: string;
  role: string;
  reg: string;
  tags: string[];
  quote: string;
  education: Entry[];
  experience: Entry[];
  delay: string;
};

const doctors: Doctor[] = [
  {
    mono: "DS",
    name: "Dr. Dikshit M. Solanki",
    role: "MDS · Conservative Dentistry & Endodontics",
    reg: "Certified Micro-Endodontist · Reg. A-44183",
    tags: ["Painless Root Canals", "Micro-Endodontics", "Smile Restoration"],
    quote:
      "I have an immense passion for clinical work. This profession lets me serve people and ease their pain, and I believe in success through hard work and dedication.",
    education: [
      {
        title: "MDS, Conservative Dentistry & Endodontics",
        place: "K. M. Shah Dental College, Sumandeep Vidyapeeth",
        when: "2021 – 2024",
      },
      {
        title: "BDS, Bachelor of Dental Surgery",
        place: "MGM Dental College & Hospital, Navi Mumbai",
        when: "2015 – 2020",
      },
    ],
    experience: [
      {
        title: "Three-year residency in Endodontics",
        place: "K. M. Shah PG Department",
        when: "Conservative Dentistry & Endodontics",
      },
      {
        title: "Consulting Endodontist",
        place: "Clinics across Thane, Mumbai & Navi Mumbai",
        when: "Root canal & micro-endodontic referrals",
      },
      {
        title: "Rotating internship",
        place: "MGM Dental College & Hospital, Navi Mumbai",
        when: "Full-scope clinical training",
      },
    ],
    delay: "1",
  },
  {
    mono: "RS",
    name: "Dr. Riddhi Solanki",
    role: "MDS · Prosthodontics, Crown & Bridge & Implantology",
    reg: "Prosthodontist & Implantologist · Reg. A-42188",
    tags: ["Smile Makeovers", "Dental Implants", "Full Mouth Rehab"],
    quote:
      "I have an immense passion for clinical work and a positive outlook on life. This profession lets me serve people and ease their pain, through hard work and dedication.",
    education: [
      {
        title: "MDS, Prosthodontics, Crown & Bridge & Implantology",
        place: "Bharati Vidyapeeth Dental College & Hospital, Pune",
        when: "2020 – 2023",
      },
      {
        title: "BDS, Bachelor of Dental Surgery",
        place: "MGM Dental College & Hospital, Navi Mumbai",
        when: "2014 – 2019",
      },
    ],
    experience: [
      {
        title: "Three-year residency in Prosthodontics",
        place: "Bharati Vidyapeeth PG Department",
        when: "Crown, bridge & implant rehabilitation",
      },
      {
        title: "Associate Dentist",
        place: "Smilex International & clinics in Mumbai / Thane",
        when: "Prosthodontic & implant care",
      },
      {
        title: "Rotating internship",
        place: "MGM Dental College & Hospital, Navi Mumbai",
        when: "Full-scope clinical training",
      },
    ],
    delay: "2",
  },
];

export default function Doctors() {
  return (
    <section className="section docs" id="doctors">
      <div className="sec-head center">
        <p className="kicker" data-reveal="">
          Meet your surgeons
        </p>
        <h2 className="h-section" data-reveal="" data-d="1">
          Two specialities, one standard of care
        </h2>
        <p className="lead" style={{ marginInline: "auto" }} data-reveal="" data-d="2">
          A complementary team whose expertise spans the full arc of modern
          dentistry, from saving a single tooth to rebuilding an entire smile.
        </p>
      </div>
      <div className="wrap profiles">
        {doctors.map((d) => (
          <article className="profile" key={d.mono} data-reveal="" data-d={d.delay}>
            <div className="profile-id">
              <span className="mono">{d.mono}</span>
              <h3>{d.name}</h3>
              <p className="role">{d.role}</p>
              <p className="reg">{d.reg}</p>
              <div className="ptags">
                {d.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="profile-detail">
              <p className="profile-quote">{d.quote}</p>
              <div className="cv">
                <div>
                  <h4>Education</h4>
                  <ul>
                    {d.education.map((e) => (
                      <li key={e.title}>
                        <b>{e.title}</b>
                        <span>{e.place}</span>
                        <br />
                        <em>{e.when}</em>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Experience</h4>
                  <ul>
                    {d.experience.map((e) => (
                      <li key={e.title}>
                        <b>{e.title}</b>
                        <span>{e.place}</span>
                        <br />
                        <em>{e.when}</em>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
