export const metadata = {
  title: "Impressum",
  description: "Impressum von Dirk Leyer Innenausbau – Trockenbau",
};

export default function ImpressumPage() {
  return (
    <div className="legal-page impressum-page">
      <section className="legal-hero">
        <div className="legal-hero__inner">
          <h1 className="legal-hero__title">Impressum</h1>
        </div>
      </section>

      <div className="legal-content">
        <div className="legal-layout legal-layout--single">
          <article
            className="legal-article legal-article--narrow"
            aria-label="Impressum"
          >
            <section className="legal-section is-visible">
              <h2 className="legal-heading">Unternehmensangaben</h2>
              <p className="impressum-company">
                Dirk Leyer Innenausbau – Trockenbau
              </p>
              <address className="impressum-address">
                Auf der Kumm 16
                <br />
                53902 Bad Münstereifel
              </address>
              <div className="impressum-contact">
                <p>
                  <span className="impressum-label">Telefon:</span>{" "}
                  <a href="tel:02253-5448265">02253 – 544 82 65</a>
                </p>
                <p>
                  <span className="impressum-label">Fax:</span> 02253 – 544 82
                  66
                </p>
                <p>
                  <span className="impressum-label">E-Mail:</span>{" "}
                  <a href="mailto:kontakt@trockenbau-leyer.de">
                    kontakt@trockenbau-leyer.de
                  </a>
                </p>
              </div>
            </section>

            <section className="legal-section is-visible">
              <h2 className="legal-heading">Rechtliche Angaben</h2>
              <p>
                <span className="impressum-label">
                  Verantwortlich für Inhalt:
                </span>{" "}
                Dirk Leyer
              </p>
              <p>
                <span className="impressum-label">USt.IdNr.:</span> DE 812 547
                184
              </p>
              <p>
                <span className="impressum-label">Gerichtsstand:</span>{" "}
                Euskirchen
              </p>
            </section>

            <section className="legal-section is-visible">
              <h2 className="legal-heading">Haftungsausschluss</h2>
              <p>
                Für die Inhalte externer Links übernehmen wir keine Haftung. Für
                die Inhalte der verlinkten Seiten sind ausschließlich deren
                Betreiber verantwortlich.
              </p>
              <p>
                Trotz sorgfältiger Prüfung übernehmen wir keine Gewähr für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte.
                Ergänzende Informationen finden Sie in unserer{" "}
                <a href="/datenschutz">Datenschutzerklärung</a>.
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
