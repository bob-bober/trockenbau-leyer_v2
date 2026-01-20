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
    description:
      "Ganzglastrennwände schaffen Offenheit und verbinden Leichtigkeit mit akustischer Leistung.",
    image: "/images/random1.jpg",
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
    description:
      "Decken prägen Akustik, Licht und Atmosphäre eines Raums durch abgestimmte Systemlösungen.",
    image: "/images/random2.jpg",
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
    description:
      "Modulare Systeme strukturieren Flächen und ermöglichen flexible Anpassungen.",
    image: "/images/random3.jpg",
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
    description:
      "Zertifizierte Systeme gewährleisten normgerechte Sicherheit bei maximaler Gestaltungsfreiheit.",
    image: "/images/random4.jpg",
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
    description:
      "Trockenbodensysteme reduzieren Bauzeiten und schaffen sofort belastbare Flächen.",
    image: "/images/random5.jpg",
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
    description:
      "Doppelböden schaffen Raum für Elektrotechnik, wartungsfreundlich und flexibel.",
    image: "/images/random6.jpg",
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
    description:
      "Gute Raumakustik schafft Konzentration, Ruhe und Wohlbefinden durch akustische Balance.",
    image: "/images/random7.jpg",
    imageAlt: "Raumakustik für Konzentration und Ruhe",
    paragraphs: [
      "Gute Raumakustik schafft Konzentration, Ruhe und Wohlbefinden.",
      "Durch gezielte Kombination von Absorptions- und Reflexionsflächen entsteht eine akustische Balance, die Kommunikation und Produktivität fördert.",
      "Ob Büro, Konferenzraum oder Bildungseinrichtung – akustisch wirksame Systeme erhöhen Komfort und Effizienz zugleich.",
    ],
  },
];

export default function UeberUnsPage() {
  const rootRef = useRef(null);

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
        backgroundColor: "#fbfbfb",
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

  return (
    <div className="leistungen-page">
      <section className="hero leistungen-hero">
        <div className="hero__grid">
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div
            className="hero__title hero__title--centered"
            style={{ gridColumn: "span 4" }}
          >
            <h1>ÜBER UNS</h1>
          </div>
        </div>
      </section>

      <div className="leistungen-divider" aria-hidden="true" />

      <section className="leistungen-links" aria-label="Leistungen Links">
        <div className="container">
          <div className="leistungen-links__grid">
            <TransitionLink
              href="/leistungen"
              className="leistungen-links__card leistungen-links__card--navy"
              id="link-card-leistungen"
            >
              <div className="leistungen-links__label">
                <span>Unsere Leistungen</span>
              </div>
              <p className="leistungen-links__text">
                Entdecken Sie unser Leistungsspektrum im Innenausbau.
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

      <section className="ueber-uns-owl-content owl-template" ref={rootRef}>
        <section>
          <div className="title titleGreathorned text-block">
            <h1 className="owl-title-heading">Innenausbau mit Verantwortung.</h1>
            <p>
              Seit 1990 steht Trockenbau Leyer in <em>Köln und Umgebung</em> für
              hochwertigen Innenausbau, technische Präzision und zuverlässige
              Ausführung.
            </p>
            <p>
              Als Fachbetrieb für Trockenbau, Glas- und Deckensysteme begleiten
              wir Bauprojekte von der Planung bis zur Fertigstellung –
              strukturiert, termintreu und mit handwerklicher Klarheit.
            </p>
            <p>
              Über die Jahre hat sich Trockenbau Leyer als verlässlicher Partner
              für Architekten, Unternehmen und öffentliche Auftraggeber
              etabliert.
            </p>
          </div>
        </section>

        <section className="cluster clusterGreat">
          <div
            className="circle clusterPieces"
            style={{ left: "auto", right: "214px" }}
          />
          <div
            className="owlHorned clusterPieces"
            style={{ right: "auto", left: "0" }}
          >
            <img src="/images/random3.jpg" alt="Trockenbau Leyer Projekte" />
          </div>
          <svg
            className="dotsBlue clusterPieces"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 494 434"
            fill="none"
            style={{ left: "auto", right: "0" }}
          >
            <circle cx="14" cy="14" r="14" fill="currentColor" />
            <circle cx="14" cy="84" r="14" fill="currentColor" />
            <circle cx="14" cy="154" r="14" fill="currentColor" />
            <circle cx="14" cy="224" r="14" fill="currentColor" />
            <circle cx="14" cy="294" r="14" fill="currentColor" />
            <circle cx="14" cy="364" r="14" fill="currentColor" />
            <circle cx="84" cy="14" r="14" fill="currentColor" />
            <circle cx="84" cy="84" r="14" fill="currentColor" />
            <circle cx="84" cy="154" r="14" fill="currentColor" />
            <circle cx="84" cy="224" r="14" fill="currentColor" />
            <circle cx="84" cy="294" r="14" fill="currentColor" />
            <circle cx="84" cy="364" r="14" fill="currentColor" />
            <circle cx="154" cy="14" r="14" fill="currentColor" />
            <circle cx="154" cy="84" r="14" fill="currentColor" />
            <circle cx="154" cy="154" r="14" fill="currentColor" />
            <circle cx="154" cy="224" r="14" fill="currentColor" />
            <circle cx="154" cy="294" r="14" fill="currentColor" />
            <circle cx="154" cy="364" r="14" fill="currentColor" />
            <circle cx="224" cy="14" r="14" fill="currentColor" />
            <circle cx="224" cy="84" r="14" fill="currentColor" />
            <circle cx="224" cy="154" r="14" fill="currentColor" />
            <circle cx="224" cy="224" r="14" fill="currentColor" />
            <circle cx="224" cy="294" r="14" fill="currentColor" />
            <circle cx="224" cy="364" r="14" fill="currentColor" />
            <circle cx="294" cy="14" r="14" fill="currentColor" />
            <circle cx="294" cy="84" r="14" fill="currentColor" />
            <circle cx="294" cy="154" r="14" fill="currentColor" />
            <circle cx="294" cy="224" r="14" fill="currentColor" />
            <circle cx="294" cy="294" r="14" fill="currentColor" />
            <circle cx="294" cy="364" r="14" fill="currentColor" />
            <circle cx="364" cy="14" r="14" fill="currentColor" />
            <circle cx="364" cy="84" r="14" fill="currentColor" />
            <circle cx="364" cy="154" r="14" fill="currentColor" />
            <circle cx="364" cy="224" r="14" fill="currentColor" />
            <circle cx="364" cy="294" r="14" fill="currentColor" />
            <circle cx="364" cy="364" r="14" fill="currentColor" />
          </svg>
        </section>

        <section>
          <div className="title titleBurrowing text-block">
            <p>
              Unsere Projekte reichen von Büro- und Verwaltungsgebäuden über
              Praxis- und Bildungsbauten bis hin zu individuellen Ausbauten im
              privaten Bereich.
            </p>
            <p>
              Die Grundlage jeder Zusammenarbeit ist ein systematischer Ansatz:
              saubere Planung, klare Abläufe und nachvollziehbare Kommunikation.
            </p>
            <p>
              Viele unserer Kunden arbeiten seit Jahren, teils Jahrzehnten, mit
              uns zusammen – weil sie wissen, dass Qualität bei uns kein Zufall
              ist, sondern Ergebnis konsequenter Arbeit.
            </p>
          </div>
        </section>

        <section className="cluster clusterBurrowing">
          <div
            className="clusterPieces triangle"
            aria-hidden="true"
            style={{ left: "auto", right: "-28px" }}
          >
            <span className="window-border window-border--top" />
            <span className="window-border window-border--right" />
            <span className="window-border window-border--bottom" />
            <span className="window-border window-border--left" />
          </div>
          <div
            className="clusterPieces owlBurrowing"
            style={{ right: "auto", left: "0" }}
          >
            <img src="/images/random12.jpg" alt="Handwerkliche Qualität" />
          </div>
          <svg
            className="clusterPieces dotsWhite"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 310 588"
            fill="none"
            style={{ left: "auto", right: "0" }}
          >
            <circle cx="14" cy="14" r="14" fill="currentColor" />
            <circle cx="14" cy="84" r="14" fill="currentColor" />
            <circle cx="14" cy="154" r="14" fill="currentColor" />
            <circle cx="14" cy="224" r="14" fill="currentColor" />
            <circle cx="14" cy="294" r="14" fill="currentColor" />
            <circle cx="14" cy="364" r="14" fill="currentColor" />
            <circle cx="14" cy="434" r="14" fill="currentColor" />
            <circle cx="14" cy="504" r="14" fill="currentColor" />
            <circle cx="14" cy="574" r="14" fill="currentColor" />
            <circle cx="84" cy="14" r="14" fill="currentColor" />
            <circle cx="84" cy="84" r="14" fill="currentColor" />
            <circle cx="84" cy="154" r="14" fill="currentColor" />
            <circle cx="84" cy="224" r="14" fill="currentColor" />
            <circle cx="84" cy="294" r="14" fill="currentColor" />
            <circle cx="84" cy="364" r="14" fill="currentColor" />
            <circle cx="84" cy="434" r="14" fill="currentColor" />
            <circle cx="84" cy="504" r="14" fill="currentColor" />
            <circle cx="84" cy="574" r="14" fill="currentColor" />
            <circle cx="154" cy="14" r="14" fill="currentColor" />
            <circle cx="154" cy="84" r="14" fill="currentColor" />
            <circle cx="154" cy="154" r="14" fill="currentColor" />
            <circle cx="154" cy="224" r="14" fill="currentColor" />
            <circle cx="154" cy="294" r="14" fill="currentColor" />
            <circle cx="154" cy="364" r="14" fill="currentColor" />
            <circle cx="154" cy="434" r="14" fill="currentColor" />
            <circle cx="154" cy="504" r="14" fill="currentColor" />
            <circle cx="154" cy="574" r="14" fill="currentColor" />
            <circle cx="224" cy="14" r="14" fill="currentColor" />
            <circle cx="224" cy="84" r="14" fill="currentColor" />
            <circle cx="224" cy="154" r="14" fill="currentColor" />
            <circle cx="224" cy="224" r="14" fill="currentColor" />
            <circle cx="224" cy="294" r="14" fill="currentColor" />
            <circle cx="224" cy="364" r="14" fill="currentColor" />
            <circle cx="224" cy="434" r="14" fill="currentColor" />
            <circle cx="224" cy="504" r="14" fill="currentColor" />
            <circle cx="224" cy="574" r="14" fill="currentColor" />
            <circle cx="294" cy="14" r="14" fill="currentColor" />
            <circle cx="294" cy="84" r="14" fill="currentColor" />
            <circle cx="294" cy="154" r="14" fill="currentColor" />
            <circle cx="294" cy="224" r="14" fill="currentColor" />
            <circle cx="294" cy="294" r="14" fill="currentColor" />
            <circle cx="294" cy="364" r="14" fill="currentColor" />
            <circle cx="294" cy="434" r="14" fill="currentColor" />
            <circle cx="294" cy="504" r="14" fill="currentColor" />
            <circle cx="294" cy="574" r="14" fill="currentColor" />
          </svg>
        </section>

        <section>
          <div className="title titleAfter text-block">
            <h1 className="owl-title-heading">Arbeiten mit Anspruch.</h1>
            <p>
              Jedes Projekt beginnt mit einer genauen Vorstellung davon, was
              entstehen soll – und endet erst, wenn jedes Detail stimmt. Zwischen
              diesen Punkten liegt ein klarer Ablauf: Planung, Abstimmung,
              Ausführung. Diese Struktur ist Grundlage unserer Arbeit und Garant
              für Beständigkeit.
            </p>
            <p>
              Sorgfalt im Prozess bedeutet Sicherheit im Ergebnis. Für Planer,
              Bauherren und Nutzer entsteht so Verlässlichkeit – in Funktion,
              Ausführung und Wirkung.
            </p>
            <p>Darauf bauen viele unserer Kunden seit Jahren.</p>
          </div>
          <div className="owl-cta-wrap">
            <TransitionLink className="owl-cta-button" href="/kontakt">
              Kontakt aufnehmen
            </TransitionLink>
          </div>
        </section>

        <section className="spcr300" />
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

          <span className="leistungen-cta__button-wrap">
            <TransitionLink href="/kontakt" className="leistungen-cta__button">
              Projekt anfragen
            </TransitionLink>
          </span>
        </div>
      </section>
    </div>
  );
}
