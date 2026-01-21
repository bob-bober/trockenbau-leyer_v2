"use client";

import Image from "next/image";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function KontaktPage() {
  const [formState, setFormState] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
        });
        setFormState(initialForm);
      } else {
        setStatus({
          type: "error",
          message:
            data.error || "Fehler beim Senden. Bitte versuchen Sie es erneut.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Verbindungsfehler. Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="kontakt-page">
      <section
        className="contact-figma contact-figma--page"
        aria-labelledby="contact-heading"
      >
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
              </label>
              <label className="contact-figma__field">
                <span>Telefon:</span>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder=""
                  disabled={isLoading}
                />
              </label>
              <label className="contact-figma__field">
                <span>Nachricht:</span>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder=""
                  required
                  disabled={isLoading}
                />
              </label>
              <div className="contact-figma__actions">
                <span className="leistungen-cta__button-wrap">
                  <button
                    type="submit"
                    className="leistungen-cta__button"
                    disabled={isLoading}
                  >
                    {isLoading ? "Wird gesendet..." : "Nachricht senden"}
                  </button>
                </span>
                {status.message && (
                  <p
                    className={`contact-figma__status contact-figma__status--${status.type}`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
