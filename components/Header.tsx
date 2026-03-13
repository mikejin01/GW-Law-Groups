"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">
      <div className="header-top">
        <Link href="/" className="header-logo">
          GW Law Groups
        </Link>

        <div className="header-right">
          <div className="header-phone">
            <div>
              <span className="header-phone-label">Free consultation</span>
              <span className="header-phone-number">212-899-8888</span>
            </div>
          </div>

          <button
            className="header-contact-btn"
            onClick={() => {
              const contact = document.getElementById("contact");
              if (contact) {
                const offset = 120;
                window.scrollTo({
                  top: contact.getBoundingClientRect().top + window.scrollY - offset,
                  behavior: "smooth",
                });
              }
            }}
          >
            Contact us 24-7
          </button>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            id="menu-toggle"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`} id="header-nav">
        <Link href="#practice" onClick={closeMenu}>Practice Areas</Link>
        <Link href="#about" onClick={closeMenu}>About the Firm</Link>
        <Link href="#results" onClick={closeMenu}>Results</Link>
        <Link href="#locations" onClick={closeMenu}>Locations</Link>
        <Link href="#faq" onClick={closeMenu}>Help & Information</Link>
        <Link href="#community" onClick={closeMenu}>Giving</Link>
        <Link href="#contact" onClick={closeMenu}>Contact Us</Link>
      </nav>
    </header>
  );
}
