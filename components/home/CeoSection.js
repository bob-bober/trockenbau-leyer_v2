import TransitionLink from "../TransitionLink";

export default function CeoSection() {
  return (
    <section className="ceo">
      <div className="container">
        <div className="ceo__wrapper">
          <div className="ceo-text">
            <div className="ceo-top">
              <p className="ceo-left">PROJEKTE</p>
              <p className="ceo-right">REALISIEREN</p>
            </div>

            <div className="ceo-middle">
              <p className="ceo-left">SEIT</p>
              <p className="ceo-right">1996</p>
            </div>

            <div className="ceo-bottom">
              <TransitionLink className="ceo-anim-top" href="/contact">
                KONTAKT
              </TransitionLink>
              <TransitionLink className="ceo-anim-middle" href="/#sectionAbout">
                ÜBER UNS
              </TransitionLink>
              <TransitionLink
                className="ceo-anim-bottom"
                href="/#sectionExpertise"
              >
                UNSERE LEISTUNGEN
              </TransitionLink>
            </div>
          </div>

          <p className="ceo-image-wrapper">
            <img
              className="ceo-img"
              src="https://rainearchitects.com/wp-content/uploads/2025/06/ceo.jpg"
              alt="Edgar Villanueva"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
