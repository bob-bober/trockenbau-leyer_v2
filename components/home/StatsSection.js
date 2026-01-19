export default function StatsSection() {
  return (
    <section className="stats" aria-labelledby="stats-heading">
      <div className="stats__grid">
        <div className="stats__cell stats__title">
          <h2 id="stats-heading">
            <span>
              <span className="design">PLANEN</span>
              <span className="and">&</span>
            </span>
            <span className="blue building">AUSFÜHREN</span>
          </h2>
        </div>

        <div className="stats__cell stats-cell__mob stats__count">
          <div className="counter" aria-label="25+ Jahre Erfahrung">
            <span className="counter-digit">25+</span>
          </div>
          <div className="text-block">
            <p className="stats__label">JAHRE ERFAHRUNG</p>
          </div>
        </div>

        <div className="stats__cell stats__text">
          <div className="text-block">
            <p>
              Seit über zwei Jahrzehnten realisieren wir komplexe
              Innenausbauprojekte für Unternehmen, Architekten und öffentliche
              Auftraggeber. Unsere Erfahrung zeigt sich nicht in Worten, sondern
              in Zahlen.
            </p>
          </div>
        </div>

        <div className="stats__cell stats-cell__mob">
          <div className="counter" aria-label="600+ Projekte realisiert">
            <span className="counter-digit">600+</span>
          </div>
          <div className="text-block">
            <p className="stats__label">PROJEKTE REALISIERT</p>
          </div>
        </div>

        <div className="stats__cell stats-cell__mob">
          <div className="counter" aria-label="100% Termintreue">
            <span className="counter-digit">100%</span>
          </div>
          <div className="text-block">
            <p className="stats__label">TERMINTREUE</p>
          </div>
        </div>

        <div className="stats__cell stats-cell__mob stats__cell--end stats__cell--wide">
          <div className="counter" aria-label="> 100.000 m² verbaute Fläche">
            <span className="counter-digit">&gt; 100.000 m²</span>
          </div>
          <div className="text-block">
            <p className="stats__label">VERBAUTE FLÄCHE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
