import { GOOGLE_REVIEWS_URL } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker" data-reveal="">
            Patient stories
          </p>
          <h2 className="h-section" data-reveal="" data-d="1">
            Trusted across Thane
          </h2>
        </div>
        <div className="test-grid">
          <div className="quote feature" data-reveal="">
            <span className="stars">★★★★★</span>
            <blockquote>
              &quot;I highly recommend Dr. Solanki for children&apos;s dental
              care. I took my daughter here and he patiently explained the
              treatment to her, which immediately eased her fear. I&apos;m very
              happy with the experience.&quot;
            </blockquote>
            <div className="who">
              <span className="ava">S</span>
              <div>
                <b>Sonal Mehta</b>
                <span>Google review · 4 weeks ago</span>
              </div>
            </div>
          </div>
          <div className="test-col">
            <div className="quote" data-reveal="" data-d="1">
              <span className="stars">★★★★★</span>
              <blockquote>
                &quot;Best dentist experience I&apos;ve ever had. The doctor and
                the entire staff are incredibly kind, honest, and professional.
                You feel welcome and safe from the moment you walk in.&quot;
              </blockquote>
              <div className="who">
                <span className="ava">M</span>
                <div>
                  <b>Melvin Pinto</b>
                  <span>Google review · a month ago</span>
                </div>
              </div>
            </div>
            <div className="quote" data-reveal="" data-d="2">
              <span className="stars">★★★★★</span>
              <blockquote>
                &quot;Excellent dental care and professional service. The dentist
                was friendly, explained everything clearly, and made the
                treatment comfortable. Highly recommended.&quot;
              </blockquote>
              <div className="who">
                <span className="ava">J</span>
                <div>
                  <b>Jainam Chopda</b>
                  <span>Google review · 1 week ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-cta" data-reveal="">
          <p className="reviews-rating">
            <span className="stars">★★★★★</span>
            <b>5.0</b> rated on Google
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            Read all Google reviews <span className="arw">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
