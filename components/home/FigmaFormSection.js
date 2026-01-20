"use client";

import Image from "next/image";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function FigmaFormSection() {
  const [formState, setFormState] = useState(initialForm);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Nachricht bereit zum Senden (mcp_figma_get_design_context)");
  };

  return (
    <section className="contact-figma" aria-labelledby="contact-figma-heading">
      <div className="container contact-figma__inner">
        <div className="contact-figma__image" aria-hidden="true">
          <Image
            src="/images/home_form.jpg"
            alt="Büroflur"
            fill
            sizes="(max-width: 1100px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="contact-figma__form-wrap">
          <div className="contact-figma__titles text-block">
            <p className="contact-figma__title">KONTAKT</p>
            <p className="contact-figma__title contact-figma__title--accent">
              AUFNEHMEN
            </p>
          </div>

          <form className="contact-figma__form" onSubmit={handleSubmit}>
            <label className="contact-figma__field">
              <span>Name:</span>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder=""
                required
              />
            </label>

            <label className="contact-figma__field">
              <span>E-Mail:</span>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder=""
                required
              />
            </label>

            <label className="contact-figma__field">
              <span>Nachricht:</span>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={3}
                placeholder=""
                required
              />
            </label>

            <div className="contact-figma__actions">
              <span className="leistungen-cta__button-wrap">
                <button type="submit" className="leistungen-cta__button">
                  Nachricht senden
                </button>
              </span>
            </div>

            {status ? <p className="contact-figma__status">{status}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
