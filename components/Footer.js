export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand" aria-hidden="true">
          <img src="/images/logo.svg" alt="Trockenbau Dirk Leyer" />
        </div>

        <div className="site-footer__contact">
          <p className="site-footer__label">Rufnummer:</p>
          <p className="site-footer__value">02253 – 544 82 65</p>
          <p className="site-footer__label">E-Mail:</p>
          <p className="site-footer__value">kontakt@trockenbau-leyer.de</p>
        </div>

        <nav className="site-footer__links" aria-label="Rechtliches">
          <a className="site-footer__link" href="#">
            Impressum
          </a>
          <a className="site-footer__link" href="#">
            AGB
          </a>
          <a className="site-footer__link" href="#">
            Datenschutzerklärung
          </a>
        </nav>
      </div>
    </footer>
  );
}
