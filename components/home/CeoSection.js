export default function CeoSection() {
  return (
    <section className="ceo">
      <div className="container">
        <div className="ceo__wrapper">
          <div className="ceo-text">
            <div className="ceo-top">
              <p className="ceo-left">SINCE</p>
              <p className="ceo-right">2010</p>
            </div>

            <div className="ceo-middle">
              <p className="ceo-left">BASED</p>
              <p className="ceo-right">IN</p>
            </div>

            <div className="ceo-bottom">
              <p className="ceo-anim-top">LAREDO</p>
              <p className="ceo-anim-middle">SAN ANTONIO</p>
              <p className="ceo-anim-bottom">RIO GRANDE VALLEY</p>
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

        <div className="ceo__wrapper-title">
          <h2 className="ceo-title">Edgar Villanueva</h2>
          <h3 className="ceo-subtitle">CEO &amp; Founder</h3>
        </div>
      </div>
    </section>
  );
}
