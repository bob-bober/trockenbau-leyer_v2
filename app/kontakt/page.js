"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "../../components/TransitionLink";
import FormSection from "../../components/FormSection";

export default function LeistungenPage() {
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
          <div className="hero__title" style={{ gridColumn: "span 4" }}>
            <h1>KONTAKT</h1>
            <div className="leistungen-hero__intro">
              <p>
                Wir entwickeln Innenräume, die Funktion, Akustik und Ästhetik
                präzise verbinden.
              </p>
              <p>
                Von Glastrennwänden bis zu komplexen Deckensystemen – Trockenbau
                Leyer bietet ganzheitliche Lösungen im hochwertigen Innenausbau.
              </p>
              <p>
                Unser Anspruch: saubere Planung, strukturierte Abläufe und
                verlässliche Ausführung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="leistungen-divider" aria-hidden="true" />

      <FormSection />

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
              href="/leistungen"
              className="leistungen-links__card leistungen-links__card--orange"
              id="link-card-leistungen-orange"
            >
              <div className="leistungen-links__label">
                <span>Unsere Leistungen</span>
              </div>
              <p className="leistungen-links__text">
                Entdecken Sie unser Leistungsspektrum im Innenausbau.
              </p>
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
