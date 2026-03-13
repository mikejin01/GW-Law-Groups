"use client";

import { useRef } from "react";

export function LogosSection() {
  const logos = [
    { name: "Newsweek", className: "logo-newsweek" },
    { name: "CNN", className: "logo-cnn" },
    { name: "FOX NEWS", className: "logo-fox", content: <><strong>FOX</strong><small>NEWS</small><em>channel</em></> },
    { name: "Bloomberg", className: "logo-bloomberg" },
    { name: "abc NEWS", className: "logo-abc", content: <><em>abc</em>NEWS</> },
    { name: "REUTERS", className: "logo-reuters" },
    { name: "Forbes", className: "logo-forbes" },
  ];

  // Duplicate for seamless scroll
  const displayLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="logos-section">
      <div className="container">
        <div className="section-dot-label">As seen on</div>
      </div>
      <div className="logos-carousel-wrapper">
        <div className="logos-carousel">
          {displayLogos.map((logo, i) => (
            <div className="logo-card" key={i}>
              <span className={logo.className}>{logo.content || logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PracticeSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const amount = 340;
      carouselRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  const practices = [
    {
      title: "AUTO ACCIDENTS",
      category: "Accidents",
      img: "/images/attorney-1.png",
      items: ["Car Accidents", "Hit and Run", "Bike Accidents", "Car Services Accidents (Uber/Lyft)", "Pedestrian & Passenger Injury"],
    },
    {
      title: "MEDICAL MALPRACTICE",
      category: "Injury",
      img: "/images/attorney-2.png",
      items: ["Misdiagnosis", "Delayed Diagnosis", "Surgical Errors", "Medication Errors", "Failure to Treat", "Hospital-Related Infections", "Premature Discharge"],
    },
    {
      title: "WORKPLACE INJURY",
      category: "Accidents",
      img: "/images/attorney-3.png",
      items: ["Falls from Heights", "Struck by Objects", "Machinery Accidents", "Slips, Trips, and Falls", "Injury from Ladder", "Vehicle Accidents"],
    },
    {
      title: "TRUCK / BUS ACCIDENTS",
      category: "Accidents",
      img: "/images/about.png",
      items: ["Passenger Injury", "Hit by Bus", "Struck by Trucks", "Heavy Vehicle Accidents"],
    },
    {
      title: "BIKE / SCOOTER ACCIDENTS",
      category: "Accidents",
      img: "/images/blog-2.png",
      items: ["Pedestrian", "Bicycle", "E-Bike", "Scooter", "E-Scooter"],
    },
    {
      title: "SLIP & FALL",
      category: "Premises",
      img: "/images/blog-1.png",
      items: ["Wet or Slippery Floors", "Defective Flooring", "Uneven Surfaces", "Inadequate Handrails / Signage", "Fall in Snow"],
    },
  ];

  return (
    <section className="practice-section" id="practice">
      <div className="container">
        <div className="practice-top reveal">
          <div className="practice-top-left">
            <div className="section-dot-label">Legal Services</div>
            <p>If you or a loved one have been injured in an accident, GW Law Groups will be with you every step of the way. We will fight to secure the compensation you rightfully deserve — you just focus on getting better.</p>
            <a href="#" className="btn-red">All Practice Areas</a>
          </div>
          <h2 className="practice-heading">REPRESENTING INJURED VICTIMS ACROSS <span className="red">NEW YORK</span></h2>
        </div>
      </div>

      <div className="practice-carousel-wrapper reveal">
        <div className="practice-carousel" id="practice-carousel" ref={carouselRef}>
          {practices.map((p, i) => (
            <div className="practice-card" key={i}>
              <span className="practice-card-category">{p.category}</span>
              <div className="practice-card-icon"><img src={p.img} alt={p.title} /></div>
              <h3 className="practice-card-title">{p.title}</h3>
              <ul className="practice-card-items">
                {p.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <a href="#" className="practice-card-link">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="practice-bottom-nav">
          <div className="carousel-nav">
            <button id="practice-prev" aria-label="Previous" onClick={() => scroll("left")}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
            </button>
            <button id="practice-next" aria-label="Next" onClick={() => scroll("right")}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const features = [
    {
      title: "No Win, No Fee",
      desc: "You pay nothing upfront and we only collect a fee if we win your case. Free consultation, zero risk — that is our promise to every client.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
    },
    {
      title: "Medical-Legal Edge",
      desc: "Our chief attorney holds both MD and JD doctorates from NYU and served as a surgical physician and ER director — giving our team a rare medical-legal perspective on every injury claim.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    },
    {
      title: "Insurance-Defense Insight",
      desc: "Our attorneys have served as senior trial lawyers and consultants for major insurers including Allstate, Nationwide, and State Farm. We know how they think — and how to beat them.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
    },
    {
      title: "Multilingual Support",
      desc: "We serve Chinese-speaking, English, and Hebrew-speaking clients across New York with cultural fluency and dedicated multilingual case support.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    }
  ];

  return (
    <section className="why-section" id="about">
      <div className="container">
        <div className="why-header reveal">
          <h2>WHY CHOOSE US?</h2>
          <a href="#" className="btn-red">About Us</a>
        </div>
      </div>
      <div className="why-carousel-wrapper">
        <div className="why-grid reveal">
          {features.map((f, i) => (
            <div className="why-card" key={i}>
              <div className="why-card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <a href="#">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Locations() {
  return (
    <section className="locations-section" id="locations">
      <div className="container">
        <div className="locations-grid reveal">
          <div className="locations-left">
            <div className="section-dot-label">Our locations</div>
            <p>We represent injured victims across New York City, with offices in four convenient locations. Wherever you are, contact us for a free case review.</p>
            <a href="#" className="btn-red">Locations</a>
            <img src="/images/blog-1.png" alt="Our offices" className="location-img" />
          </div>

          <div className="locations-cities">
            <span className="location-city">QUEENS&#8209;FLUSHING</span>
            <span className="location-city">BROOKLYN&#8209;BENSONHURST</span>
            <span className="location-city">BROOKLYN&#8209;SUNSET&nbsp;PARK</span>
            <span className="location-city">MANHATTAN&#8209;WALL&nbsp;STREET</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Community() {
  return (
    <section className="community-section" id="community">
      <div className="community-bg">
        <img src="/images/community-bg.png" alt="GW Law Groups community event" />
      </div>
      <div className="container community-content reveal">
        <h2>GW LAW GROUPS<br /><span className="red">GIVING BACK</span> TO THE COMMUNITY</h2>
        <button className="play-btn" aria-label="Play video">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
        </button>
      </div>
    </section>
  );
}
