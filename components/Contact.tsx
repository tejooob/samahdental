import BookingForm from "./BookingForm";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker" data-reveal="">
            Book your visit
          </p>
          <h2 className="h-section" data-reveal="" data-d="1">
            Schedule an appointment
          </h2>
          <p className="lead" data-reveal="" data-d="2">
            Tell us what you need and we will confirm your slot. For urgent care,
            please call us directly.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info" data-reveal="" data-d="1">
            <div className="info-row">
              <span className="ic">📍</span>
              <div>
                <b>Visit the clinic</b>
                <span>
                  Shop No. 4, Annie Villa Society, Near Ganesh Talkies, Charai,
                  Thane (W) 400601
                </span>
              </div>
            </div>
            <div className="info-row">
              <span className="ic">☎</span>
              <div>
                <b>Call or WhatsApp</b>
                <br />
                <a href="tel:+917977557010">+91 79775 57010</a>
              </div>
            </div>
            <div className="info-row">
              <span className="ic">✉</span>
              <div>
                <b>Email</b>
                <br />
                <a href="mailto:drdikshitsolanki@gmail.com">
                  drdikshitsolanki@gmail.com
                </a>
              </div>
            </div>
            <div className="hours">
              <h4>Clinic hours</h4>
              <div className="hours-row">
                <span>Monday to Saturday</span>
                <b>10:00am – 1:30pm</b>
              </div>
              <div className="hours-row">
                <span>{" "}</span>
                <b>5:30pm – 9:00pm</b>
              </div>
              <div className="hours-row">
                <span>Sunday</span>
                <b>By appointment</b>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
        <div className="contact-map" data-reveal="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.940798182664!2d72.9711655759382!3d19.19778794813642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9582c4603c3%3A0x8b29e05e0fd68262!2sSamah%20Dental%20Care!5e0!3m2!1sen!2sin!4v1782844906892!5m2!1sen!2sin"
            title="Samah Dental Care location on Google Maps"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
