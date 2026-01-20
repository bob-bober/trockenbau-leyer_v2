"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import TransitionLink from "../../../components/TransitionLink";

export default function DoppelboedenPage() {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let splitInstance;
    let lineTweens = [];
    let lineTriggers = [];

    const ctx = gsap.context(() => {
      gsap.set(".circle", { yPercent: -5 });
      gsap.set(".dotsBlue", { yPercent: 10 });
      gsap.set(".owlHorned", { yPercent: -20 });
      gsap.set(".clusterGreat", { yPercent: 5 });

      gsap.to(".circle", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: { trigger: ".clusterGreat", scrub: 1 },
      });

      gsap.to(".dotsBlue", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: ".clusterGreat", scrub: 1 },
      });

      gsap.to(".owlHorned", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: { trigger: ".clusterGreat", scrub: 1 },
      });

      gsap.to(".caption", {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterGreat",
          end: "bottom center",
          scrub: 1,
        },
      });

      gsap.to(".clusterGreat", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterGreat",
          end: "bottom center",
          scrub: 1,
        },
      });

      gsap.set(".triangle", { yPercent: 25, rotation: -90 });
      gsap.set(".dotsWhite", { yPercent: 10 });
      gsap.set(".owlBurrowing", { yPercent: -20 });
      gsap.set(".clusterBurrowing", { yPercent: 5 });

      gsap.to(".triangle", {
        yPercent: -5,
        rotation: 40,
        ease: "none",
        scrollTrigger: { trigger: ".clusterBurrowing", scrub: 1 },
      });

      gsap.to(".dotsWhite", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: ".clusterBurrowing", scrub: 1 },
      });

      gsap.to(".owlBurrowing", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: { trigger: ".clusterBurrowing", scrub: 1 },
      });

      gsap.to(".captionBurrowing", {
        yPercent: 200,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterBurrowing",
          end: "bottom center",
          scrub: 1,
        },
      });

      gsap.to(".clusterBurrowing", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterBurrowing",
          end: "bottom center",
          scrub: 1,
        },
      });

      const updateSplit = () => {
        splitInstance?.revert();
        splitInstance = new SplitType(
          ".owl-template .text-block p, .owl-template .text-block h1",
          { types: "lines", lineClass: "line" },
        );
        document.querySelectorAll(".owl-template .line").forEach((line) => {
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
        lineTriggers.forEach((trigger) => trigger.kill());
        lineTriggers = [];
        gsap.utils.toArray(".owl-template .text-block").forEach((el) => {
          const lines = el.querySelectorAll(".line-inner");
          if (!lines.length) return;
          const tween = gsap.fromTo(
            lines,
            { yPercent: -100 },
            {
              yPercent: 0,
              stagger: 0.1,
              duration: 1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: el,
                start: window.innerWidth > 1100 ? "top 100%" : "top 70%",
                toggleActions: "play none none reverse",
                scrub: true,
              },
            },
          );
          lineTweens.push(tween);
        });
      };

      updateSplit();
      applyLineAnimations();
      ScrollTrigger.addEventListener("refresh", updateSplit);
      ScrollTrigger.addEventListener("refresh", applyLineAnimations);

      return () => {
        ScrollTrigger.removeEventListener("refresh", updateSplit);
        ScrollTrigger.removeEventListener("refresh", applyLineAnimations);
      };
    }, rootRef);

    return () => {
      splitInstance?.revert();
      lineTweens.forEach((tween) => tween.kill());
      lineTriggers.forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);

  /* VARIANTE 4: Positionen wie Vorlage, aber Kreis transparent+Border, Viereck gefüllt */
  return (
    <div className="owl-template" ref={rootRef}>
      <section>
        <div className="title titleGreathorned text-block">
          <h1 className="owl-title-heading">Doppelböden</h1>
          <p>
            Doppelbodensysteme schaffen Raum für Gebäudetechnik, ohne das
            architektonische Bild zu stören.
          </p>
          <p>
            Sie bieten flexible Lösungen für moderne Arbeits- und Technikräume,
            in denen Funktion und Wartbarkeit an erster Stelle stehen. Ein
            Doppelboden besteht aus einer aufgeständerten Unterkonstruktion und
            darauf aufgelegten Platten – meist im Raster von 600 × 600 mm.
          </p>
        </div>
      </section>

      {/* Oben wie Vorlage, aber circle transparent mit Border */}
      <section className="cluster clusterGreat">
        <div
          className="circle clusterPieces"
          style={{
            backgroundColor: "transparent",
            border: "8px solid var(--blue-color)",
          }}
        />
        <div className="owlHorned clusterPieces">
          <Image
            src="/images/random11.jpg"
            alt="Service image"
            width={450}
            height={700}
          />
        </div>
        <img
          className="dotsBlue clusterPieces"
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg"
          alt=""
          aria-hidden="true"
        />
      </section>

      <section>
        <div className="title titleBurrowing text-block">
          <p>
            Die Stützenfüße werden mit dem Untergrund verklebt oder verschraubt,
            ein Gewindebolzen gleicht Unebenheiten im Rohboden aus. Zwischen
            Rohdecke und Bodenplatte entsteht so ein Installationshohlraum, der
            für EDV-, Elektro-, Klima- oder Sanitärtechnik genutzt werden kann.
            Die Bauhöhe richtet sich nach den technischen Anforderungen und
            bleibt individuell anpassbar.
          </p>
          <p>
            Die Auswahl des Plattenmaterials erfolgt nach Belastung, Brandschutz
            und Trittschallwerten. Als Beläge stehen PVC, Linoleum oder textile
            Oberflächen zur Verfügung – je nach Nutzung, Beanspruchung und
            Gestaltungskonzept. Neben der strukturierten Unterbringung
            technischer Leitungen liegt der größte Vorteil in der einfachen
            Zugänglichkeit: Durch das Abnehmen einzelner Platten lassen sich
            Nachinstallationen oder Wartungen ohne Eingriff in die Bausubstanz
            durchführen.
          </p>
          <p>
            <strong>Schaltwarten-Doppelböden:</strong> Für den industriellen und
            energietechnischen Bereich werden spezielle Schaltwartenböden
            eingesetzt. Sie sind auf hohe Punktlasten ausgelegt und halten
            selbst Trafotransporten stand. Rahmenprofile, bündig mit der
            fertigen Bodenoberfläche, ermöglichen die sichere Aufstellung und
            Fixierung von Schaltfeldern.
          </p>
        </div>
      </section>

      {/* Unten wie Vorlage */}
      <section className="cluster clusterBurrowing">
        <div className="clusterPieces triangle" aria-hidden="true">
          <span className="window-border window-border--top" />
          <span className="window-border window-border--right" />
          <span className="window-border window-border--bottom" />
          <span className="window-border window-border--left" />
        </div>
        <div className="owlBurrowing clusterPieces">
          <Image
            src="/images/random13.jpg"
            alt="Service image"
            width={674}
            height={700}
          />
        </div>
        <img
          className="clusterPieces dotsWhite"
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_white_310x588.svg"
          alt=""
          aria-hidden="true"
        />
      </section>

      <section>
        <div className="title titleAfter text-block">
          <p>
            Kabelzuführungen erfolgen sauber und geschützt von unten. In
            Mittelspannungsschalträumen werden die Platten verschraubt, um bei
            einem Störlichtbogen ein Abheben der Elemente zu verhindern –
            Sicherheit, die konstruktiv verankert ist.
          </p>
          <p>
            <strong>Hohlraumböden:</strong> Hohlraumböden bilden eine Variante
            des Systembodens mit flächiger Tragschicht. Die Bodenplatten werden
            vollflächig verklebt und auf Stützenkonstruktionen gelagert, wodurch
            ein geschlossener Hohlraum entsteht. Dieser ermöglicht eine flexible
            Leitungsführung, bleibt aber gleichzeitig stabil und akustisch
            wirksam. Die Platten aus Calciumsulfat sind nicht brennbar, hoch
            belastbar und bereits nach kurzer Zeit begehbar. Als fertiges System
            ist der Boden rauchdicht, leicht, komfortabel und in nahezu jedem
            Ausbaukonzept einsetzbar.
          </p>
        </div>
        <div className="owl-cta-wrap">
          <TransitionLink className="owl-cta-button" href="/kontakt">
            Projekt anfragen
          </TransitionLink>
        </div>
      </section>

      <section className="spcr300" />
    </div>
  );
}
