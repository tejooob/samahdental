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
              &quot;I was terrified of root canals, but Dr. Dikshit made it
              completely painless. I genuinely felt nothing.&quot;
            </blockquote>
            <div className="who">
              <span className="ava">M</span>
              <div>
                <b>Mansi Jain</b>
                <span>Verified patient</span>
              </div>
            </div>
          </div>
          <div className="test-col">
            <div className="quote" data-reveal="" data-d="1">
              <span className="stars">★★★★★</span>
              <blockquote>
                &quot;Very smooth experience, genuine advice, and very hygienic
                throughout.&quot;
              </blockquote>
              <div className="who">
                <span className="ava">R</span>
                <div>
                  <b>Ruchika Kothari</b>
                  <span>Verified patient</span>
                </div>
              </div>
            </div>
            <div className="quote" data-reveal="" data-d="2">
              <span className="stars">★★★★★</span>
              <blockquote>
                &quot;My kids actually love visiting the dentist now. The whole
                team is so reassuring.&quot;
              </blockquote>
              <div className="who">
                <span className="ava">R</span>
                <div>
                  <b>Rajiv T.</b>
                  <span>Verified patient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
