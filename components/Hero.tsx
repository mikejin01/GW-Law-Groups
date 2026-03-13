"use client";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-photo" aria-hidden="true" />
      <div className="container hero-container">
        <div className="hero-top-content">
          <div className="hero-top-row reveal">
            <div className="hero-kicker">New York personal injury attorneys</div>
            <div className="hero-trust">
              <span>No Win, No Fee</span>
              <span>Free Consultation</span>
              <span>Chinese &amp; English</span>
            </div>
          </div>
          <h1 className="hero-headline reveal">
            NEW YORK <span className="red">INJURY</span> LAWYERS<br />
            <span className="hero-headline-tagline">No Win, No Fee. Commitment Guaranteed.</span>
          </h1>
        </div>
        <div className="hero-bottom-content">
          <p className="hero-description reveal reveal-delay-1">
            Car accidents, medical malpractice, construction injuries, slip
            and fall claims — handled by a team combining litigation strength,
            insurance insight, and a rare medical-legal perspective.
          </p>
          <div className="hero-actions reveal reveal-delay-2">
            <a href="#contact" className="btn-red">Free Consultation</a>
            <a href="tel:+12128998888" className="hero-phone">
              Call 24/7 &mdash; 212-899-8888
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
