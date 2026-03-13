"use client";

const results = [
  { amount: "$35 MILLION", type: "Traumatic Brain Injury" },
  { amount: "$14.75 MILLION", type: "Medical Malpractice" },
  { amount: "$12.7 MILLION", type: "Workplace Injury" },
  { amount: "$10.94 MILLION", type: "Wrongful Death" },
  { amount: "$8.5 MILLION", type: "Auto Accident" },
  { amount: "$6.2 MILLION", type: "Premises Liability" },
];

export default function ResultsSection() {
  return (
    <section className="results-section" id="results">
      <div className="container">
        <div className="results-header reveal">
          <h2>RECENT<br />RESULTS</h2>
        </div>
      </div>

      <div className="results-carousel-wrapper">
        <div className="results-carousel" id="results-carousel">
          {/* Double set for seamless loop */}
          {[...results, ...results].map((result, index) => (
            <div className="result-card" key={index}>
              <div className="result-amount">{result.amount}</div>
              <div className="result-type">{result.type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
