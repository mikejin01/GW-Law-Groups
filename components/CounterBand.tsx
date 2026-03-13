"use client";

import { useEffect, useState, useRef } from "react";

export default function CounterBand() {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const target = 247500000;
  const duration = 3500;
  const step = 250000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      let current = Math.round((eased * target) / step) * step;
      if (progress >= 1) current = target;
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return (
    <section className="counter-band">
      <div className="container" ref={counterRef}>
        <div className="counter-number">
          ${count.toLocaleString()}
        </div>
        <p className="counter-label">Over $200 Million Recovered for Clients in the Past Five Years</p>
      </div>
    </section>
  );
}
