"use client";

export default function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left reveal">
            <h2>CONTACT US FOR A FREE CASE REVIEW</h2>
            <p className="phone-label">Phone</p>
            <p className="phone-number">212-899-8888</p>
          </div>

          <form className="contact-form reveal reveal-delay-1" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name <span className="required">*</span></label>
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <label>Last Name <span className="required">*</span></label>
                <input type="text" placeholder="Last Name" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email <span className="required">*</span></label>
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <label>Phone <span className="required">*</span></label>
                <input type="tel" placeholder="Phone" required />
              </div>
            </div>
            <div className="form-group">
              <label>Message <span className="required">*</span></label>
              <textarea placeholder="Tell us about your case..." required></textarea>
            </div>
            <button type="submit" className="btn-red">Get started free</button>
          </form>
        </div>
      </div>
    </section>
  );
}
