"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">GW Law Groups</div>
            <p>A New York personal injury law firm combining litigation strength, insurance insight, and a rare medical-legal perspective. Free consultation — call 212-899-8888.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Practice Areas</h4>
              <ul>
                <li><a href="#">Auto Accidents</a></li>
                <li><a href="#">Medical Malpractice</a></li>
                <li><a href="#">Workplace Injury</a></li>
                <li><a href="#">Truck &amp; Bus Accidents</a></li>
                <li><a href="#">Bike &amp; Scooter Accidents</a></li>
                <li><a href="#">Slip &amp; Fall</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>The Firm</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Attorneys</a></li>
                <li><a href="#">Case Results</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-awards">
          <div className="footer-awards-grid">
            <div className="award-item">
              <div className="award-badge">★</div>
              <p>"Best Law Firm" Awarded in 2024 by National Legal Review</p>
            </div>
            <div className="award-item">
              <div className="award-badge">★</div>
              <p>"Lawyer of the Year" Awarded in 2023 by American Institute</p>
            </div>
            <div className="award-item">
              <div className="award-badge">★</div>
              <p>"Top 100 Trial Lawyers" Awarded by National Trial Lawyers</p>
            </div>
            <div className="award-item">
              <div className="award-badge">★</div>
              <p>"Best Attorneys of America" Lifetime Charter Member</p>
            </div>
            <div className="award-item">
              <div className="award-badge">★</div>
              <p>"Top Legal Professionals" Awarded in 2024</p>
            </div>
          </div>
        </div>

        <div className="footer-biglogo">
          <h2>GW LAW GROUPS</h2>
        </div>

        <div className="footer-bottom">
          <p>© 2026 GW Law Groups. All rights reserved. | The information provided on this website is for general informational purposes only and does not constitute legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
