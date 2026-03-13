"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CounterBand from "@/components/CounterBand";
import ContactForm from "@/components/ContactForm";
import ResultsSection from "@/components/ResultsSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { LogosSection, PracticeSection, WhyChooseUs, Locations, Community } from "@/components/Sections";
import { useReveal } from "@/components/useReveal";

export default function Home() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CounterBand />
        <ContactForm />
        <LogosSection />
        <ResultsSection />
        <PracticeSection />
        <WhyChooseUs />
        <Locations />
        <Community />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
