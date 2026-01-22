import Image from "next/image";
import TransitionLink from "./TransitionLink";

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand" aria-hidden="true">
          <TransitionLink href="/" aria-label="Trockenbau Dirk Leyer">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={430}
              height={120}
            />
          </TransitionLink>
        </div>

        <div className="site-footer__contact">
          <p className="site-footer__label">Rufnummer:</p>
          <p className="site-footer__value">02253 – 544 82 65</p>
          <p className="site-footer__label">E-Mail:</p>
          <p className="site-footer__value">kontakt@trockenbau-leyer.de</p>
        </div>

        <nav className="site-footer__links" aria-label="Footer Navigation">
          <a className="site-footer__link" href="/ueber-uns">
            Über Uns
          </a>
          <a className="site-footer__link" href="/leistungen">
            Leistungen
          </a>
          <a className="site-footer__link" href="/kontakt">
            Kontakt
          </a>
          <a className="site-footer__link" href="/impressum">
            Impressum
          </a>
          <a className="site-footer__link" href="/agb">
            AGB
          </a>
          <a className="site-footer__link" href="/datenschutz">
            Datenschutzerklärung
          </a>
        </nav>
      </div>
    </footer>
  );
}
