"use client";

import FigmaFormSection from "../../components/home/FigmaFormSection";

export default function KontaktPage() {
  return (
    <div className="kontakt-page">
      <section className="kontakt-hero">
        <div className="container kontakt-hero__inner">
          <p className="kontakt-hero__eyebrow">Kontakt</p>
          <h1 className="kontakt-hero__title">Projekt anfragen</h1>
        </div>
      </section>
      <FigmaFormSection />
    </div>
  );
}
