"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "../../components/TransitionLink";

export default function UeberUnsParallaxPage() {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let splitInstance;
    let parallaxTweens = [];
    let lineTweens = [];
    let serviceTweens = [];
    let progressTween;
    let ctaBgTween;
    let unitTweens = [];

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

    // Parallax Units Animation
    const applyParallaxUnits = () => {
      unitTweens.forEach((tween) => tween.kill());
      unitTweens = [];

      if (window.innerWidth < 1100) return;

      // Unit 1: Triangle + dotsWhite - LEFT side
      // Trigger: Hero start → Section 1 end
      const unit1Triangle = document.querySelector(
        ".parallax-unit-1 .triangle",
      );
      const unit1Dots = document.querySelector(".parallax-unit-1 .dotsWhite");

      if (unit1Triangle) {
        gsap.set(unit1Triangle, { yPercent: 0, rotation: -90 });
        const tween = gsap.to(unit1Triangle, {
          yPercent: 200,
          rotation: 40,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-trigger-1",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            scroller,
          },
        });
        unitTweens.push(tween);
      }

      if (unit1Dots) {
        gsap.set(unit1Dots, { yPercent: 0 });
        const tween = gsap.to(unit1Dots, {
          yPercent: 180,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-trigger-1",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            scroller,
          },
        });
        unitTweens.push(tween);
      }

      // Unit 2: Circle + dotsBlue - LEFT side
      // Trigger: Section 2
      const unit2Circle = document.querySelector(".parallax-unit-2 .circle");
      const unit2Dots = document.querySelector(".parallax-unit-2 .dotsBlue");

      if (unit2Circle) {
        gsap.set(unit2Circle, { yPercent: 0 });
        const tween = gsap.to(unit2Circle, {
          yPercent: 150,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-trigger-2",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            scroller,
          },
        });
        unitTweens.push(tween);
      }

      if (unit2Dots) {
        gsap.set(unit2Dots, { yPercent: 0 });
        const tween = gsap.to(unit2Dots, {
          yPercent: 120,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-trigger-2",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            scroller,
          },
        });
        unitTweens.push(tween);
      }

      // Unit 3: Triangle + dotsWhite - RIGHT side
      // Trigger: Section 3
      const unit3Triangle = document.querySelector(
        ".parallax-unit-3 .triangle",
      );
      const unit3Dots = document.querySelector(".parallax-unit-3 .dotsWhite");

      if (unit3Triangle) {
        gsap.set(unit3Triangle, { yPercent: 0, rotation: -90 });
        const tween = gsap.to(unit3Triangle, {
          yPercent: 150,
          rotation: 40,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-trigger-3",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            scroller,
          },
        });
        unitTweens.push(tween);
      }

      if (unit3Dots) {
        gsap.set(unit3Dots, { yPercent: 0 });
        const tween = gsap.to(unit3Dots, {
          yPercent: 120,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-trigger-3",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            scroller,
          },
        });
        unitTweens.push(tween);
      }
    };

    const animateFrom = (elem, direction = 1) => {
      let x = 0;
      let y = direction * 100;

      if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
      } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
      }

      elem.style.transform = `translate(${x}px, ${y}px)`;
      elem.style.opacity = "0";

      gsap.fromTo(
        elem,
        { x, y, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: "expo",
          overwrite: "auto",
        },
      );
    };

    const hide = (elem) => {
      gsap.set(elem, { autoAlpha: 0 });
    };

    const applyRevealAnimations = () => {
      gsap.utils.toArray(".gs_reveal").forEach((elem) => {
        hide(elem);

        ScrollTrigger.create({
          trigger: elem,
          onEnter: () => animateFrom(elem),
          onEnterBack: () => animateFrom(elem, -1),
          onLeave: () => hide(elem),
        });
      });
    };

    const applyHeroIntro = () => {
      gsap.delayedCall(0.1, () => {
        const hero = document.querySelector(".leistungen-hero");
        if (hero) {
          hero.classList.add("hero-lines-active");
        }
      });

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
      applyRevealAnimations();
      applyParallaxUnits();
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
        applyRevealAnimations();
        applyParallaxUnits();
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
      unitTweens.forEach((tween) => tween.kill());
      progressTween?.kill();
      ctaBgTween?.kill();
      splitInstance?.revert();
    };
  }, []);

  return (
    <div className="leistungen-page ueber-uns-parallax" ref={rootRef}>
      {/* Trigger 1: Hero + Section 1 with Unit 1 (Triangle RIGHT) */}
      <div className="parallax-trigger-1">
        {/* Parallax Unit 1: Triangle + dotsWhite - RIGHT - starts at top of Hero */}
        <div className="parallax-unit-1" aria-hidden="true">
          <div className="clusterPieces triangle">
            <span className="window-border window-border--top" />
            <span className="window-border window-border--right" />
            <span className="window-border window-border--bottom" />
            <span className="window-border window-border--left" />
          </div>
          <img
            className="clusterPieces dotsWhite"
            src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_white_310x588.svg"
            alt=""
            aria-hidden="true"
          />
        </div>

        {/* Hero Section */}
        <section className="hero leistungen-hero">
          <div className="hero__grid">
            <div className="hero__grid-cell" />
            <div className="hero__grid-cell" />
            <div className="hero__grid-cell" />
            <div className="hero__grid-cell" />
            <div
              className="hero__title"
              style={{ gridColumn: "span 4", minHeight: "240px" }}
            >
              <h1>ÜBER UNS</h1>
            </div>
          </div>
        </section>

        <div className="leistungen-divider" aria-hidden="true" />

        {/* Section 1: Über Uns - Text left, Image right */}
        <section
          className="ueber-uns-content"
          style={{
            backgroundColor: "#fbfbfb",
            paddingTop: "48px",
            paddingBottom: "40px",
          }}
        >
          <div
            className="content-row gs_reveal gs_reveal_fromLeft"
            style={{
              width: "100%",
              maxWidth: "1600px",
              margin: "0 auto 48px",
              padding: "48px",
              display: "flex",
              justifyContent: "space-between",
              gap: "32px",
              alignItems: "center",
              borderBottom: "solid 2px #e66a1f",
            }}
          >
            <div
              className="content-text"
              style={{
                width: "45%",
                flex: "0 0 45%",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div
                className="gs_reveal"
                style={{
                  fontFamily: '"PP Neue Montreal Book", sans-serif',
                  fontWeight: 300,
                  fontSize: "18px",
                  lineHeight: "1.2",
                  color: "#262626",
                }}
              >
                <p style={{ margin: "0 0 1em 0" }}>
                  Seit 1990 steht Trockenbau Leyer in <em>Köln und Umgebung</em> für hochwertigen Innenausbau, technische Präzision und zuverlässige Ausführung.
                </p>
                <p style={{ margin: "0 0 1em 0" }}>
                  Als Fachbetrieb für Trockenbau, Glas- und Deckensysteme begleiten wir Bauprojekte von der Planung bis zur Fertigstellung – strukturiert, termintreu und mit handwerklicher Klarheit.
                </p>
                <p style={{ margin: "0 0 1em 0" }}>
                  Über die Jahre hat sich Trockenbau Leyer als verlässlicher Partner für Architekten, Unternehmen und öffentliche Auftraggeber etabliert.
                </p>
                <p style={{ margin: "0 0 1em 0" }}>
                  Unsere Projekte reichen von Büro- und Verwaltungsgebäuden über Praxis- und Bildungsbauten bis hin zu individuellen Ausbauten im privaten Bereich.
                </p>
              </div>
            </div>
            <div
              className="content-image gs_reveal gs_reveal_fromRight"
              style={{
                width: "45%",
                flex: "0 0 45%",
                height: "auto",
                position: "relative",
                overflow: "hidden",
                aspectRatio: "450/320",
              }}
            >
              <img
                src="/images/random3.jpg"
                alt="Werkstatt"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.8)",
                }}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Trigger 2: Section 2 with Unit 2 (Circle LEFT) */}
      <div className="parallax-trigger-2">
        {/* Parallax Unit 2: Circle + dotsBlue - LEFT */}
        <div className="parallax-unit-2" aria-hidden="true">
          <div className="circle clusterPieces" />
          <img
            className="dotsBlue clusterPieces"
            src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg"
            alt=""
            aria-hidden="true"
          />
        </div>

        {/* Section 2: Unsere Philosophie - Image left, Text right */}
        <section
          className="ueber-uns-content"
          style={{
            backgroundColor: "#fbfbfb",
            paddingTop: "48px",
            paddingBottom: "40px",
          }}
        >
          <div
            className="content-row gs_reveal gs_reveal_fromRight"
            style={{
              width: "100%",
              maxWidth: "1600px",
              margin: "0 auto 48px",
              padding: "48px",
              display: "flex",
              justifyContent: "space-between",
              gap: "32px",
              alignItems: "center",
              borderBottom: "solid 2px #e66a1f",
            }}
          >
            <div
              className="content-image gs_reveal gs_reveal_fromLeft"
              style={{
                width: "45%",
                flex: "0 0 45%",
                height: "auto",
                position: "relative",
                overflow: "hidden",
                aspectRatio: "1/1",
              }}
            >
              <img
                src="/images/random12.jpg"
                alt="Skizze"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="content-text"
              style={{
                width: "45%",
                flex: "0 0 45%",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <h2
                className="gs_reveal"
                style={{
                  fontFamily: '"PP Neue Montreal", sans-serif',
                  fontWeight: 400,
                  fontSize: "40px",
                  lineHeight: "1.2",
                  color: "#262626",
                  margin: 0,
                }}
              >
                Unsere Philosophie
              </h2>
              <div
                className="gs_reveal"
                style={{
                  fontFamily: '"PP Neue Montreal Book", sans-serif',
                  fontWeight: 300,
                  fontSize: "18px",
                  lineHeight: "1.2",
                  color: "#262626",
                }}
              >
                <p style={{ margin: "0 0 1em 0" }}>
                  Die Grundlage jeder Zusammenarbeit ist ein systematischer Ansatz: saubere Planung, klare Abläufe und nachvollziehbare Kommunikation.
                </p>
                <p style={{ margin: 0 }}>
                  Viele unserer Kunden arbeiten seit Jahren, teils Jahrzehnten, mit uns zusammen – weil sie wissen, dass Qualität bei uns kein Zufall ist, sondern Ergebnis konsequenter Arbeit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Trigger 3: Section 3 with Unit 3 (Triangle RIGHT) */}
      <div className="parallax-trigger-3">
        {/* Parallax Unit 3: Triangle + dotsWhite - RIGHT */}
        <div className="parallax-unit-3" aria-hidden="true">
          <div className="clusterPieces triangle">
            <span className="window-border window-border--top" />
            <span className="window-border window-border--right" />
            <span className="window-border window-border--bottom" />
            <span className="window-border window-border--left" />
          </div>
          <img
            className="clusterPieces dotsWhite"
            src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_white_310x588.svg"
            alt=""
            aria-hidden="true"
          />
        </div>

        {/* Section 3: Unser Handwerk - Text left, Image right */}
        <section
          className="ueber-uns-content"
          style={{
            backgroundColor: "#fbfbfb",
            paddingTop: "48px",
            paddingBottom: "40px",
          }}
        >
          <div
            className="content-row gs_reveal gs_reveal_fromLeft"
            style={{
              width: "100%",
              maxWidth: "1600px",
              margin: "0 auto",
              padding: "48px",
              display: "flex",
              justifyContent: "space-between",
              gap: "32px",
              alignItems: "center",
              borderBottom: "solid 2px #e66a1f",
            }}
          >
            <div
              className="content-text"
              style={{
                width: "45%",
                flex: "0 0 45%",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <h2
                className="gs_reveal"
                style={{
                  fontFamily: '"PP Neue Montreal", sans-serif',
                  fontWeight: 400,
                  fontSize: "40px",
                  lineHeight: "1.2",
                  color: "#262626",
                  margin: 0,
                }}
              >
                Unser Handwerk
              </h2>
              <div
                className="gs_reveal"
                style={{
                  fontFamily: '"PP Neue Montreal Book", sans-serif',
                  fontWeight: 300,
                  fontSize: "18px",
                  lineHeight: "1.2",
                  color: "#262626",
                }}
              >
                <p style={{ margin: "0 0 1em 0" }}>
                  Jedes Projekt beginnt mit einer genauen Vorstellung davon, was entstehen soll – und endet erst, wenn jedes Detail stimmt. Zwischen diesen Punkten liegt ein klarer Ablauf: Planung, Abstimmung, Ausführung. Diese Struktur ist Grundlage unserer Arbeit und Garant für Beständigkeit.
                </p>
                <p style={{ margin: "0 0 1em 0" }}>
                  Sorgfalt im Prozess bedeutet Sicherheit im Ergebnis. Für Planer, Bauherren und Nutzer entsteht so Verlässlichkeit – in Funktion, Ausführung und Wirkung.
                </p>
                <p style={{ margin: 0 }}>
                  Darauf bauen viele unserer Kunden seit Jahren.
                </p>
              </div>
            </div>
            <div
              className="content-image gs_reveal gs_reveal_fromRight"
              style={{
                width: "45%",
                flex: "0 0 45%",
                height: "auto",
                position: "relative",
                overflow: "hidden",
                aspectRatio: "450/320",
              }}
            >
              <img
                src="/images/random3.jpg"
                alt="Werkstatt Maschinen"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.8)",
                }}
              />
            </div>
          </div>
        </section>
      </div>

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
    </div>
  );
}
