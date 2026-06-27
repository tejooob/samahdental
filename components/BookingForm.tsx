"use client";

import { useState } from "react";

export default function BookingForm() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setDone(true);
    window.setTimeout(() => setDone(false), 6500);
  };

  return (
    <div className="form-card" data-reveal="" data-d="2">
      <h3>Request an appointment</h3>
      <p>We will call you back to confirm your preferred time.</p>
      <form onSubmit={onSubmit}>
        <div className="field-row">
          <div className="field">
            <label htmlFor="f-name">Full name</label>
            <input id="f-name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="f-phone">Phone</label>
            <input id="f-phone" name="phone" type="tel" placeholder="+91" required />
          </div>
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" placeholder="you@email.com" />
        </div>
        <div className="field-row">
          <div className="field">
            <label htmlFor="f-treat">Treatment</label>
            <select id="f-treat" name="treatment" defaultValue="">
              <option value="">Select a service</option>
              <option>Root Canal Treatment</option>
              <option>Dental Implants</option>
              <option>Smile Makeover / Cosmetic</option>
              <option>Braces &amp; Invisalign</option>
              <option>Crowns &amp; Bridges</option>
              <option>Paediatric Dentistry</option>
              <option>Check-up &amp; Cleaning</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-date">Preferred date</label>
            <input id="f-date" name="date" type="date" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="f-msg">Message (optional)</label>
          <textarea id="f-msg" name="message" placeholder="Tell us briefly about your concern" />
        </div>
        <button type="submit" className="btn btn-solid">
          Request appointment <span className="arw">→</span>
        </button>
        <p className="form-note">This is a demo form. Submissions are not stored.</p>
        <div className={`form-ok${done ? " show" : ""}`}>
          ✓ Thank you. Your request has been received, we will call to confirm shortly.
        </div>
      </form>
    </div>
  );
}
