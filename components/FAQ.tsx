"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much does it cost to hire GW Law Groups?",
    answer: "GW Law Groups works on a contingency fee basis — no win, no fee. You pay nothing upfront and we only collect a fee if we secure compensation for you. Your initial consultation is always free."
  },
  {
    question: "What types of cases does GW Law Groups handle?",
    answer: "We focus on personal injury cases across New York including car accidents, medical malpractice, construction and workplace injuries, truck and bus accidents, bicycle and e-bike accidents, slip and fall claims, and wrongful death. Call 212-899-8888 for a free case review."
  },
  {
    question: "What makes GW Law Groups different from other injury firms?",
    answer: "Our chief attorney holds both an MD and JD from NYU and served as a surgical physician and ER director for fifteen years. This rare medical-legal background gives our team a deeper understanding of injury causation, diagnosis, and long-term medical consequences — strengthening every claim we handle."
  },
  {
    question: "Do you offer support in languages other than English?",
    answer: "Yes. GW Law Groups serves Chinese-speaking, English-speaking, and Hebrew-speaking clients with dedicated multilingual support. Our team understands the cultural and communication needs of diverse New York communities."
  },
  {
    question: "What should I do after an accident in New York?",
    answer: "Seek medical attention immediately, document the scene with photos, collect witness contact information, and file a police report. Do not speak to insurance companies before consulting an attorney. Contact GW Law Groups at 212-899-8888 for a free consultation as soon as possible."
  },
  {
    question: "Can I still file a claim if the accident was partially my fault?",
    answer: "Yes. New York follows a comparative negligence rule, which means you can still recover compensation even if you were partially at fault. Your award may be reduced by your percentage of responsibility. Contact us to discuss your specific situation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-left-content reveal">
            <h2>YOUR QUESTIONS ANSWERED</h2>
            <p>
              We have straight answers to difficult questions to help you make critical decisions, navigate legal process and help you get justice.
            </p>
            <p>
              Following an accident, there are always more questions than answers. At GW Law Groups, we&#39;re here to answer any questions you have about your injury case.
            </p>
            <button className="btn-red" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact 24-7
            </button>
          </div>

          <div className="faq-list reveal">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${openIndex === index ? "open" : ""}`} key={index}>
                <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                  {faq.question}
                  <svg className="faq-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
