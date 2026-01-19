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
              <img
                className="parallax-image"
                src="https://rainearchitects.com/wp-content/uploads/2025/06/hero-img-1.jpg"
                alt="hero"
              />
            </div>
            <div className="experience__description text-block">
              <h2>ARCHITECTURE WITH CLARITY</h2>
              <h3>
                Design-Driven Architecture for Civic & Municipal · Commercial ·
                Industrial Warehouse · Luxury Residential · Adaptive Reuse
                Projects
              </h3>
              <p>
                Raine Architects elevates cities and communities through
                clarity, craft, and long-term performance grounded in context,
                community, and culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
