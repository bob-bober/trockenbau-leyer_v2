import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div className="hero__title" style={{ gridColumn: "span 4" }}>
            <h1>
              <span className="hero__title-line hero__title-line--top">
                <span className="hero__word innovative-word">INNOVATIVE</span>
                <span className="hero__word design-word">LÖSUNGEN</span>
              </span>
              <span className="hero__title-line hero__title-line--bottom">
                <span className="hero__word timeless-word">TRADITIONELLES</span>
                <span className="hero__word architecture-word">HANDWERK</span>
              </span>
            </h1>
          </div>
        </div>
      </section>
      <section className="experience">
        <div className="container">
          <div className="experience__grid">
            <div
              className="experience__grid-cell parallax-container"
              style={{ gridColumn: "1 / 5", gridRow: "1 / 3" }}
            >
              <Image
                className="parallax-image"
                src="/images/home_hero.jpg"
                alt="hero"
                width={1600}
                height={900}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            <div className="experience__description text-block">
              <h2>KOMPLEXE PROJEKTE KLAR STRUKTURIERT</h2>
              <h3>
                Wir verbinden Planung, Koordination und Umsetzung im Innenausbau
                – für reibungslose Abläufe und saubere Ergebnisse.
              </h3>
              <p>
                Trockenbau Leyer steht für durchdachte Raumkonzepte, die
                Funktion, Akustik und Ästhetik präzise vereinen. Als Fachbetrieb
                mit jahrzehntelanger Erfahrung übernehmen wir Verantwortung für
                jedes Detail – von der ersten Abstimmung bis zur finalen
                Montage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
