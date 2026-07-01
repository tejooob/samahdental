import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_URL, business } from "@/lib/site";
import type { Service } from "@/lib/services";

export default function ServicePage({ data }: { data: Service }) {
  const url = `${SITE_URL}/${data.slug}/`;
  const tel = "+917977557010";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: data.h1,
      procedureType: data.serviceType,
      description: data.metaDescription,
      url,
      provider: {
        "@type": "Dentist",
        name: business.name,
        image: `${SITE_URL}${business.image}`,
        telephone: business.phone,
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.street,
          addressLocality: business.locality,
          addressRegion: business.region,
          postalCode: business.postalCode,
          addressCountry: business.country,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: data.h1, item: url },
      ],
    },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="svc-hero">
          <div className="wrap svc-hero-grid">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span aria-hidden="true">/</span>
                <span>{data.kicker}</span>
              </nav>
              <p className="kicker" data-reveal="">
                {data.kicker}
              </p>
              <h1 className="svc-h1" data-reveal="" data-d="1">
                {data.h1}
              </h1>
              <p className="lead" data-reveal="" data-d="2">
                {data.heroSub}
              </p>
              <div className="hero-actions" data-reveal="" data-d="3">
                <a href="/#contact" className="btn btn-solid">
                  Book an appointment <span className="arw">→</span>
                </a>
                <a href={`tel:${tel}`} className="btn btn-ghost">
                  Call {business.phone}
                </a>
              </div>
            </div>
            <div className="svc-hero-media" data-reveal="" data-d="1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.heroImg} alt={data.heroAlt} fetchPriority="high" decoding="async" />
            </div>
          </div>
        </section>

        {/* INTRO + MEDIA */}
        <section className="section svc-split">
          <div className="wrap svc-split-grid">
            <div className="svc-media" data-reveal="">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.media.img} alt={data.media.alt} loading="lazy" decoding="async" />
              <p className="svc-media-cap">{data.media.caption}</p>
            </div>
            <div>
              <h2 className="h-section" data-reveal="" data-d="1">
                {data.intro.heading}
              </h2>
              {data.intro.body.map((p, i) => (
                <p className="lead" style={{ marginTop: "1.1rem" }} key={i} data-reveal="" data-d="2">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* OFFERINGS */}
        <section className="section svc-offer">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="h-section" data-reveal="">
                {data.offer.heading}
              </h2>
              <p className="lead" data-reveal="" data-d="1">
                {data.offer.lead}
              </p>
            </div>
            <div className="svc-grid">
              {data.offer.items.map((it, i) => (
                <div className="svc-item" key={it.title} data-reveal="" data-d={String((i % 3) + 1)}>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS (dark band) */}
        <section className="section svc-benefits">
          <div className="wrap">
            <h2 className="h-section" data-reveal="">
              {data.benefits.heading}
            </h2>
            <div className="svc-benefits-grid" data-reveal="" data-d="1">
              {data.benefits.items.map((it) => (
                <div className="svc-benefit" key={it.title}>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIALIST */}
        <section className="section svc-doc-section">
          <div className="wrap svc-doc" data-reveal="">
            <div className={`svc-doc-id${data.specialist.photo ? " has-photo" : ""}`}>
              {data.specialist.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={data.specialist.photo} alt={`Portrait of ${data.specialist.name}`} loading="lazy" decoding="async" />
              ) : (
                <span className="mono">{data.specialist.mono}</span>
              )}
            </div>
            <div className="svc-doc-body">
              <p className="kicker">Your specialist</p>
              <h2 className="h-section">{data.specialist.name}</h2>
              <p className="svc-doc-cred">{data.specialist.credentials}</p>
              <p className="lead" style={{ marginTop: "0.9rem" }}>
                {data.specialist.blurb}
              </p>
              <div className="hero-actions" style={{ marginTop: "1.6rem" }}>
                <a href="/#contact" className="btn btn-solid">
                  Book an appointment <span className="arw">→</span>
                </a>
                <a href="/#doctors" className="btn btn-ghost">
                  Meet the team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section svc-faq-section">
          <div className="wrap">
            <div className="sec-head center">
              <p className="kicker" data-reveal="">
                Good to know
              </p>
              <h2 className="h-section" data-reveal="" data-d="1">
                Frequently asked questions
              </h2>
            </div>
            <div className="faq" data-reveal="" data-d="1">
              {data.faqs.map((f, i) => (
                <details className="faq-item" key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="svc-cta">
          <div className="wrap svc-cta-inner">
            <div>
              <h2 className="h-section">Book your visit at Samah Dental Care</h2>
              <p>
                Shop No. 4, Annie Villa Society, Near Ganesh Talkies, Charai,
                Thane (W) 400601
              </p>
            </div>
            <div className="svc-cta-actions">
              <a href="/#contact" className="btn btn-light">
                Book an appointment <span className="arw">→</span>
              </a>
              <a href={`tel:${tel}`} className="btn btn-ghost-light">
                {business.phone}
              </a>
            </div>
          </div>
          <div className="wrap">
            <a href={data.related.href} className="svc-related">
              {data.related.label} <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
