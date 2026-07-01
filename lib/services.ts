export type ServiceItem = { title: string; body: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  kicker: string;
  h1: string;
  heroSub: string;
  heroImg: string;
  heroAlt: string;
  intro: { heading: string; body: string[] };
  offer: { heading: string; lead: string; items: ServiceItem[] };
  benefits: { heading: string; items: ServiceItem[] };
  media: { img: string; alt: string; caption: string };
  specialist: {
    name: string;
    credentials: string;
    blurb: string;
    photo?: string;
    mono: string;
  };
  faqs: Faq[];
  related: { href: string; label: string };
};

export const rootCanal: Service = {
  slug: "root-canal-treatment",
  metaTitle: "Painless Root Canal Treatment in Thane | Samah Dental Care",
  metaDescription:
    "Single-sitting, painless root canal treatment in Charai, Thane by MDS endodontist Dr. Dikshit Solanki. Save your natural tooth with gentle micro-endodontics at Samah Dental Care.",
  serviceType: "Endodontic therapy",
  kicker: "Conservative Dentistry & Endodontics",
  h1: "Painless Root Canal Treatment in Thane",
  heroSub:
    "Single-sitting, microscope-assisted root canals that save your natural tooth, by MDS endodontist Dr. Dikshit Solanki at Samah Dental Care, Charai, Thane.",
  heroImg: "/services/rct-hero.jpg",
  heroAlt: "An endodontist carefully performing a root canal on a patient",
  intro: {
    heading: "Root canal treatment, without the fear",
    body: [
      "A root canal, or endodontic treatment, removes infected or inflamed pulp from inside a tooth, relieves the pain, and lets you keep your natural tooth instead of removing it. At Samah Dental Care in Charai, Thane, most root canals are completed comfortably in a single sitting.",
      "Dr. Dikshit Solanki is an MDS in Conservative Dentistry and Endodontics and a certified micro-endodontist. Working under magnification, he cleans and seals every canal precisely and gently, so the visit is far calmer than most people expect.",
    ],
  },
  offer: {
    heading: "When you might need a root canal",
    lead: "If any of these sound familiar, it is worth getting the tooth checked early, before the problem grows.",
    items: [
      { title: "Lingering tooth pain", body: "Aching or sensitivity that stays after hot, cold or sweet food." },
      { title: "Deep decay or a large cavity", body: "Decay that has reached the nerve at the centre of the tooth." },
      { title: "A cracked or broken tooth", body: "An injury or fracture that has exposed the inner pulp." },
      { title: "Swelling or a gum abscess", body: "Infection at the root that needs to be cleaned out and sealed." },
      { title: "Re-treatment", body: "Retreating a previously root-filled tooth that is troubling you again." },
      { title: "Crown after treatment", body: "Protecting the treated tooth with a custom, tooth-coloured crown." },
    ],
  },
  benefits: {
    heading: "Why patients choose Samah for root canals",
    items: [
      { title: "Single-sitting treatment", body: "Most cases are finished in one comfortable visit, so you are not travelling back and forth to Charai." },
      { title: "Genuinely painless", body: "Modern anaesthesia and an unhurried, gentle approach keep you at ease throughout." },
      { title: "Treated under magnification", body: "Micro-endodontic precision to find, clean and seal every canal properly." },
      { title: "Specialist-led, start to finish", body: "Your treatment is carried out by an MDS endodontist, not handed off." },
    ],
  },
  media: {
    img: "/services/rct-care.jpg",
    alt: "Gentle, modern root canal treatment in progress",
    caption: "Calm, careful treatment under magnification.",
  },
  specialist: {
    name: "Dr. Dikshit M. Solanki",
    credentials: "MDS, Conservative Dentistry & Endodontics · Certified Micro-Endodontist · Reg. A-44183",
    blurb:
      "With a three-year residency in endodontics and years of consulting work across Thane, Mumbai and Navi Mumbai, Dr. Dikshit is known for truly painless, single-sitting root canals that save the natural tooth.",
    photo: "/dr-dikshit.jpg",
    mono: "DS",
  },
  faqs: [
    { q: "Is a root canal painful?", a: "With modern anaesthesia the procedure itself is painless. Most patients say it feels similar to having a filling done. Any mild soreness afterwards usually settles within a day or two." },
    { q: "Can a root canal be done in one sitting?", a: "Yes. At Samah Dental Care most root canals are completed in a single sitting. Some heavily infected or complex cases may need a second visit, which we always explain in advance." },
    { q: "How long does a root canal take?", a: "A single-sitting root canal usually takes about 45 to 90 minutes, depending on the tooth and how many canals it has." },
    { q: "Do I need a crown after a root canal?", a: "Often, yes. A treated tooth can become brittle, so a crown protects it and restores full chewing strength. Crowns and bridges are handled in-house by Dr. Riddhi Solanki." },
    { q: "How much does a root canal cost in Thane?", a: "The cost depends on the tooth and whether a crown is needed. We keep our pricing transparent with no surprises. Call us on +91 79775 57010 for a clear estimate." },
  ],
  related: {
    href: "/dental-implants-and-dentures/",
    label: "Missing or unrestorable teeth? Explore Dental Implants & Dentures",
  },
};

export const implants: Service = {
  slug: "dental-implants-and-dentures",
  metaTitle: "Dental Implants & Dentures in Thane | Samah Dental Care",
  metaDescription:
    "Dental implants, single-visit dentures, overdentures and crowns in Charai, Thane by MDS prosthodontist Dr. Riddhi Solanki. Natural-looking tooth replacement at Samah Dental Care.",
  serviceType: "Dental implants and prosthodontics",
  kicker: "Prosthodontics, Crown & Bridge & Implantology",
  h1: "Dental Implants & Dentures in Thane",
  heroSub:
    "Natural-looking tooth replacement, from single implants to single-visit dentures and full-mouth rehabilitation, by MDS prosthodontist Dr. Riddhi Solanki at Samah Dental Care, Charai, Thane.",
  heroImg: "/services/implant-hero.jpg",
  heroAlt: "A dental implant model showing how a titanium implant replaces a tooth",
  intro: {
    heading: "Rebuild your smile and your bite",
    body: [
      "Prosthodontics is the branch of dentistry that restores missing or damaged teeth, bringing back comfortable function and a natural-looking smile. At Samah Dental Care in Charai, Thane, Dr. Riddhi Solanki plans and delivers everything from a single implant to a complete full-mouth rehabilitation.",
      "As an MDS prosthodontist and implantologist certified in full-mouth rehabilitation, she matches each solution to your face, your bite and your budget, so your new teeth look and feel like your own.",
    ],
  },
  offer: {
    heading: "Tooth replacement, tailored to you",
    lead: "Whether you are missing one tooth or planning a full-mouth restoration, there is an option to suit you.",
    items: [
      { title: "Dental Implants", body: "Permanent titanium implants that replace one or more missing teeth and restore full chewing comfort." },
      { title: "Overdentures", body: "Implant- or root-supported dentures that stay firmly in place, with no more loose, slipping teeth." },
      { title: "Semi-Fixed Partial Dentures", body: "Attachment-retained partials that combine the stability of a fixed tooth with easy removable care." },
      { title: "Single-Visit Dentures", body: "Well-fitting complete dentures designed and delivered quickly, without the long wait." },
      { title: "Crowns & Bridges", body: "Custom, tooth-coloured restorations that rebuild strength and appearance." },
      { title: "Smile Design & Full-Mouth Rehab", body: "Comprehensive makeovers that restore function, comfort and aesthetics together." },
    ],
  },
  benefits: {
    heading: "Why patients choose Samah for tooth replacement",
    items: [
      { title: "MDS prosthodontist", body: "Specialist-led planning for implants, dentures and complex full-mouth cases." },
      { title: "Single-visit options", body: "Same-day dentures and efficient timelines wherever it is clinically possible." },
      { title: "Natural-looking results", body: "Shade, shape and bite designed around your own face and smile." },
      { title: "One clinic, full journey", body: "Diagnosis, placement and follow-up all under one roof in Charai, Thane." },
    ],
  },
  media: {
    img: "/services/denture.jpg",
    alt: "A prosthodontist holding a natural-looking denture",
    caption: "Comfortable, natural-looking restorations, made to fit you.",
  },
  specialist: {
    name: "Dr. Riddhi Solanki",
    credentials: "MDS, Prosthodontics, Crown & Bridge & Implantology · Reg. A-42188",
    blurb:
      "Certified in full-mouth rehabilitation, Dr. Riddhi designs natural-looking implants, dentures, crowns and smile makeovers, tailored to each patient's face and bite.",
    mono: "RS",
  },
  faqs: [
    { q: "How long do dental implants last?", a: "With good oral hygiene and regular check-ups, dental implants can last many years, often decades. We show every patient how to care for them properly." },
    { q: "Are dentures uncomfortable?", a: "Modern, well-fitted dentures are far more comfortable than older ones. Overdentures that clip onto implants or roots are especially stable for eating and speaking." },
    { q: "What is the difference between an implant and a denture?", a: "An implant is a fixed replacement anchored in the jaw. A denture is removable. An overdenture combines both. Dr. Riddhi will recommend the option that suits your case and budget." },
    { q: "Can I get dentures in a single visit?", a: "In many cases, yes. We offer single-visit dentures so you can regain your smile and bite without a long wait." },
    { q: "How much do dental implants cost in Thane?", a: "The cost depends on the number of implants and the type of restoration. We keep pricing transparent. Call +91 79775 57010 for a personalised estimate." },
  ],
  related: {
    href: "/root-canal-treatment/",
    label: "Tooth pain or deep decay? Explore Root Canal Treatment",
  },
};

export const services: Service[] = [rootCanal, implants];
