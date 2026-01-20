"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "../../components/TransitionLink";

const services = [
  {
    number: "01",
    title: "Glastrennwände",
    slug: "glastrennwaende",
    slotId: "slot-1",
    gridSize: "6x2",
    tagline: "Transparenz, die funktioniert.",
    image: "/images/leistungen1.jpg",
    imageAlt: "Glastrennwände im Innenausbau",
    paragraphs: [
      "Ganzglastrennwände schaffen Offenheit, ohne auf Schallschutz oder Privatsphäre zu verzichten.",
      "Die Systeme verbinden Leichtigkeit mit akustischer Leistung und erfüllen höchste Anforderungen an Stabilität und Brandschutz.",
      "Klare Linien, präzise Fugen und flächenbündige Anschlüsse sorgen für eine ruhige, hochwertige Raumwirkung – ideal für moderne Büro- und Arbeitswelten.",
    ],
  },
  {
    number: "02",
    title: "Deckensysteme",
    slug: "deckensysteme",
    slotId: "slot-2",
    gridSize: "4x2",
    tagline: "Raumwirkung beginnt oben.",
    image: "/images/leistungen2.jpg",
    imageAlt: "Moderne Deckensysteme",
    paragraphs: [
      "Decken prägen Akustik, Licht und Atmosphäre eines Raums.",
      "Abgestimmte Systemlösungen verbessern die Sprachverständlichkeit, integrieren Gebäudetechnik und tragen zur gestalterischen Einheit bei.",
      "Mineralfaser-, Metall- oder Akustikdecken sorgen für messbare Akustikwerte und eine klare, reduzierte Raumästhetik – funktional und wirtschaftlich zugleich.",
    ],
  },
  {
    number: "03",
    title: "Trennwandsysteme",
    slug: "trennwandsysteme",
    slotId: "slot-3",
    gridSize: "4x1",
    tagline: "Flexibilität für neue Raumkonzepte.",
    image: "/images/leistungen3.jpg",
    imageAlt: "Trennwandsysteme für flexible Raumkonzepte",
    paragraphs: [
      "Trennwände strukturieren Flächen, schaffen Zonen und ermöglichen Wandel.",
      "Modulare Systeme lassen sich an Nutzung, Schallschutz oder Brandschutzanforderungen anpassen – dauerhaft stabil und jederzeit veränderbar.",
      "So entsteht räumliche Klarheit, die Planungssicherheit und Anpassungsfähigkeit verbindet.",
    ],
  },
  {
    number: "04",
    title: "Baulicher Brandschutz",
    slug: "brandschutz",
    slotId: "slot-4",
    gridSize: "4x1",
    tagline: "Sicherheit durch Systemdenken.",
    image: "/images/leistungen4.jpg",
    imageAlt: "Baulicher Brandschutz mit zertifizierten Systemen",
    paragraphs: [
      "Effektiver Brandschutz schützt Menschen, Substanz und Planung.",
      "Zertifizierte Systeme für Wände, Decken und Installationen gewährleisten normgerechte Sicherheit bei maximaler Gestaltungsfreiheit.",
      "Feuerschutztüren, Brandschutzverglasungen und geprüfte Abschottungen lassen sich präzise in bestehende Baukonzepte integrieren – sichtbar unauffällig, technisch verlässlich.",
    ],
  },
  {
    number: "05",
    title: "Trockenboden",
    slug: "trockenboden",
    slotId: "slot-5",
    gridSize: "6x2",
    tagline: "Schnelle Bauweise. Dauerhafte Stabilität.",
    image: "/images/leistungen5.jpg",
    imageAlt: "Trockenboden für schnelle Bauabläufe",
    paragraphs: [
      "Trockenbodensysteme reduzieren Bauzeiten und schaffen sofort belastbare Flächen – ohne Trocknungszeiten oder Feuchtigkeitseintrag.",
      "Sie eignen sich für Sanierungen, Büroflächen oder Aufrüstungen mit Brandschutz- und Akustikanforderungen.",
      "Leichte Konstruktionen, hohe Tragfähigkeit und planbare Abläufe bieten messbare Vorteile im Projektzeitplan.",
    ],
  },
  {
    number: "06",
    title: "Doppelböden",
    slug: "doppelboeden",
    slotId: "slot-6",
    gridSize: "4x1",
    tagline: "Technik unsichtbar integriert.",
    image: "/images/leistungen6.jpg",
    imageAlt: "Doppelböden mit integriertem Technikraum",
    paragraphs: [
      "Doppelböden schaffen Raum für Elektrotechnik, Klima und Kommunikation – funktional, wartungsfreundlich und flexibel.",
      "Der Installationshohlraum ermöglicht Nachrüstungen ohne Eingriff in die Bausubstanz.",
      "Statische Sicherheit, geprüfte Belastbarkeit und saubere Ausführung sorgen für langlebige Systeme mit klarer Logik.",
    ],
  },
  {
    number: "07",
    title: "Raumakustik",
    slug: "raumakustik",
    slotId: "slot-7",
    gridSize: "4x1",
    tagline: "Klarheit, die man hört.",
    image: "/images/leistungen7.jpg",
    imageAlt: "Raumakustik für Konzentration und Ruhe",
    paragraphs: [
      "Gute Raumakustik schafft Konzentration, Ruhe und Wohlbefinden.",
      "Durch gezielte Kombination von Absorptions- und Reflexionsflächen entsteht eine akustische Balance, die Kommunikation und Produktivität fördert.",
      "Ob Büro, Konferenzraum oder Bildungseinrichtung – akustisch wirksame Systeme erhöhen Komfort und Effizienz zugleich.",
    ],
  },
];

export default function LeistungenPage() {
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let splitInstance;
    let parallaxTweens = [];
    let lineTweens = [];
    let serviceTweens = [];
    let progressTween;
    let ctaBgTween;

    let scroller = window.innerWidth < 1100 ? ".scroll-container" : null;

    const updateSplit = () => {
      if (splitInstance) splitInstance.revert();

      splitInstance = new SplitType(
        ".leistungen-page .text-block p:not(.leistungen-hero__aside .text-block p), .leistungen-page .text-block h2, .leistungen-page .text-block h3",
        {
          types: "lines",
          lineClass: "line",
        },
      );

      document.querySelectorAll(".leistungen-page .line").forEach((line) => {
        const inner = document.createElement("span");
        inner.classList.add("line-inner");
        inner.innerHTML = line.innerHTML;
        line.innerHTML = "";
        line.appendChild(inner);
      });
    };

    const applyLineAnimations = () => {
      lineTweens.forEach((tween) => tween.kill());
      lineTweens = [];

      gsap.utils.toArray(".leistungen-page .text-block").forEach((block) => {
        const lines = block.querySelectorAll(".line-inner");
        if (!lines.length) return;

        const tween = gsap.fromTo(
          lines,
          { yPercent: 120 },
          {
            yPercent: 0,
            stagger: 0.12,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: block,
              start: window.innerWidth > 1100 ? "top 85%" : "top 70%",
              toggleActions: "play none none reverse",
              scrub: true,
              scroller,
            },
          },
        );

        lineTweens.push(tween);
      });
    };

    const applyParallax = () => {
      parallaxTweens.forEach((tween) => tween.kill());
      parallaxTweens = [];

      if (window.innerWidth < 1200) return;

      gsap.utils.toArray(".leistungen-page .bento-card").forEach((card) => {
        const image = card.querySelector(".bento-card__image");
        if (!image) return;

        gsap.set(image, { yPercent: -5 });
        const tween = gsap.fromTo(
          image,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              scroller,
            },
          },
        );

        parallaxTweens.push(tween);
      });
    };

    const applyServiceEntrances = () => {
      serviceTweens.forEach((tween) => tween.kill());
      serviceTweens = [];

      gsap.utils.toArray(".bento-card").forEach((service) => {
        const tween = gsap.fromTo(
          service,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: service,
              start: "top 85%",
              scroller,
            },
          },
        );

        serviceTweens.push(tween);
      });
    };

    const applyCtaHighlight = () => {
      ctaBgTween?.kill();
      ctaBgTween = gsap.to(".leistungen-cta", {
        backgroundColor: "#f5f5f5",
        scrollTrigger: {
          trigger: ".leistungen-cta",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
          scroller,
        },
      });
    };

    const applyHeroIntro = () => {
      // Trigger line animation
      gsap.delayedCall(0.1, () => {
        const hero = document.querySelector(".leistungen-hero");
        if (hero) {
          hero.classList.add("hero-lines-active");
        }
      });

      // Animate hero content
      gsap.fromTo(
        ".leistungen-hero h1",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 },
      );

      gsap.fromTo(
        ".leistungen-hero__intro p",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.5,
        },
      );
    };

    updateSplit();

    requestAnimationFrame(() => {
      applyHeroIntro();
      applyLineAnimations();
      applyParallax();
      applyServiceEntrances();
      applyProgressBar();
      applyCtaHighlight();
      ScrollTrigger.refresh();
    });

    const handleResize = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      scroller = window.innerWidth < 1100 ? ".scroll-container" : null;
      updateSplit();
      requestAnimationFrame(() => {
        applyLineAnimations();
        applyParallax();
        applyServiceEntrances();
        applyProgressBar();
        applyCtaHighlight();
        ScrollTrigger.refresh();
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      parallaxTweens.forEach((tween) => tween.kill());
      lineTweens.forEach((tween) => tween.kill());
      serviceTweens.forEach((tween) => tween.kill());
      progressTween?.kill();
      ctaBgTween?.kill();
      splitInstance?.revert();
    };
  }, []);

  useEffect(() => {
    const button = ctaButtonRef.current;
    if (!button) return undefined;

    const handleMove = (event) => {
      const rect = button.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(button, {
        x: relX * 12,
        y: relY * 12,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    button.addEventListener("mousemove", handleMove);
    button.addEventListener("mouseleave", handleLeave);

    return () => {
      button.removeEventListener("mousemove", handleMove);
      button.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="leistungen-page">
      <section className="hero leistungen-hero">
        <div className="hero__grid">
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div className="hero__title" style={{ gridColumn: "span 4" }}>
            <h1>
              Innenausbau mit{" "}
              <span className="leistungen-hero__accent">System.</span>
            </h1>
            <div className="leistungen-hero__intro">
              <p>
                Wir entwickeln, planen und realisieren Innenräume, die Funktion,
                Akustik und Ästhetik präzise verbinden.
              </p>
              <p>
                Trockenbau Leyer bietet ganzheitliche Lösungen im hochwertigen
                Innenausbau – von Glastrennwänden bis zu komplexen
                Deckensystemen.
              </p>
              <p>
                Unser Anspruch: technisch saubere Planung, strukturierte Abläufe
                und verlässliche Ausführung – für Ergebnisse, die langfristig
                Bestand haben.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="leistungen-divider" aria-hidden="true" />

      <section className="leistungen-links" aria-label="Leistungen Links">
        <div className="container">
          <div className="leistungen-links__grid">
            <TransitionLink
              href="/#sectionAbout"
              className="leistungen-links__card leistungen-links__card--navy"
              id="link-card-about"
            >
              <div className="leistungen-links__label">
                <span>Über uns</span>
              </div>
              <p className="leistungen-links__text">
                Erfahren Sie mehr über unser Team und unsere Werte.
              </p>
            </TransitionLink>

            <TransitionLink
              href="/kontakt"
              className="leistungen-links__card leistungen-links__card--orange"
              id="link-card-contact"
            >
              <div className="leistungen-links__label">
                <span>Kontakt aufnehmen</span>
              </div>
              <p className="leistungen-links__text">
                Sprechen Sie mit uns über Ihr Projekt und Ihre Ziele.
              </p>
            </TransitionLink>
          </div>
        </div>
      </section>

      <section className="leistungen-bento" aria-label="Leistungen Übersicht">
        <div className="container">
          <div className="leistungen-bento__grid">
            {services.map((service) => (
              <TransitionLink
                key={service.slug}
                href={`/leistungen/${service.slug}`}
                className="bento-card"
                aria-label={service.title}
                data-slug={service.slug}
              >
                <div className="bento-card__media parallax-container">
                  <div
                    className="bento-card__image parallax-image"
                    style={{ backgroundImage: `url(${service.image})` }}
                    role="img"
                    aria-label={service.imageAlt}
                  />
                </div>

                <span className="bento-card__overlay" aria-hidden="true" />

                <span className="bento-card__number">{service.number}</span>
                <h3 className="bento-card__title">{service.title}</h3>

                <div className="bento-card__content">
                  <p className="bento-card__tagline">{service.tagline}</p>
                  <p className="bento-card__text">
                    {service.paragraphs.slice(0, 2).join(" ")}
                  </p>
                  <span className="bento-card__link">
                    Mehr erfahren
                    <span className="bento-card__link-arrow">→</span>
                  </span>
                </div>
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>

      <section
        className="leistungen-cta"
        aria-labelledby="leistungen-cta-heading"
      >
        <div className="container leistungen-cta__inner">
          <div className="leistungen-cta__text text-block">
            <h2 id="leistungen-cta-heading">
              Verlässliche Abläufe für jedes Projekt.
            </h2>
            <p>
              Ob Büroausbau, Praxis oder privater Wohnraum – jedes Projekt
              braucht Klarheit in Planung und Ausführung.
            </p>
            <p>
              Wir begleiten Unternehmen, Architekten und Privatkunden von der
              ersten Idee bis zum fertigen Raum – zuverlässig, sauber und
              termintreu.
            </p>
          </div>

          <span className="leistungen-cta__button-wrap" ref={ctaButtonRef}>
            <TransitionLink href="/kontakt" className="leistungen-cta__button">
              → Projekt anfragen
            </TransitionLink>
          </span>
        </div>
      </section>
    </div>
  );
}
