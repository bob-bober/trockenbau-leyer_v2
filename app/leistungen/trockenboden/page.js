"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import TransitionLink from "../../../components/TransitionLink";

export default function TrockenbodenPage() {
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

        // Skip text animations on mobile
        if (window.innerWidth <= 1100) {
          return;
        }

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
                start: "top 100%",
                toggleActions: "play none none reverse",
                scrub: true,
              },
            },
          );
          lineTweens.push(tween);
        });
      };

      // Only apply text splitting and animations on desktop
      if (window.innerWidth > 1100) {
        updateSplit();
        applyLineAnimations();
        ScrollTrigger.addEventListener("refresh", updateSplit);
        ScrollTrigger.addEventListener("refresh", applyLineAnimations);
      }

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

  /* VARIANTE 6: Oben spiegeln + Kreis Border/Viereck gefüllt */
  return (
    <div className="owl-template" ref={rootRef}>
      <section>
        <div className="title titleGreathorned text-block">
          <h1 className="owl-title-heading">Trockenboden</h1>
          <p>
            Trockenbodensysteme bieten Effizienz und Präzision im Innenausbau.
          </p>
          <p>
            Sie ermöglichen kurze Bauzeiten, reduzieren Feuchtigkeit im
            Bauprozess und schaffen sofort nutzbare Flächen – ideal für
            Neubauten, Umbauten und Sanierungen mit definierten Zeitfenstern.
            Ein Trockenboden überzeugt dort, wo Zeit, Gewicht und Präzision
            entscheidend sind.
          </p>
        </div>
      </section>

      {/* Oben gespiegelt + circle transparent mit Border */}
      <section className="cluster clusterGreat">
        <div
          className="circle clusterPieces"
          style={{
            left: "auto",
            right: "214px",
            backgroundColor: "transparent",
            border: "8px solid var(--blue-color)",
          }}
        />
        <div
          className="owlHorned clusterPieces"
          style={{ right: "auto", left: "0" }}
        >
          <Image
            src="/images/random10.jpg"
            alt="Service image"
            width={450}
            height={700}
          />
        </div>
        <img
          className="dotsBlue clusterPieces"
          style={{ left: "auto", right: "0" }}
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg"
          alt=""
          aria-hidden="true"
        />
      </section>

      <section>
        <div className="title titleBurrowing text-block">
          <p>
            Die Elemente werden trocken verlegt, sind sofort begehbar und
            erfordern keine Austrocknungszeiten – ein wesentlicher Vorteil
            gegenüber konventionellen Estrichen. Trotz ihres geringen
            Eigengewichts bieten sie hohe Belastbarkeit und eine dauerhaft ebene
            Oberfläche. Je nach Anforderung kommen unterschiedliche
            Systemaufbauten zum Einsatz.
          </p>
          <p>
            Sie dienen als Höhenausgleich, tragen Fußbodenheizungen oder
            verbessern den Trittschallschutz bei Massiv- und Holzbalkendecken.
            Hochschalldämmende Systeme mit Estrich-Waben ermöglichen zudem eine
            brandschutz- und schallschutztechnische Aufrüstung bestehender
            Geschossdecken. Auch Hohlraumböden zur verdeckten
            Installationsführung lassen sich in Trockenbauweise präzise
            umsetzen.
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
        <div className="clusterPieces owlBurrowing">
          <Image
            src="/images/random11.jpg"
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
            Alle Komponenten werden projektbezogen ausgewählt und abgestimmt –
            von der Unterkonstruktion bis zur sichtbaren Oberfläche. So entsteht
            ein Boden, der schnell eingebaut, technisch durchdacht und auf Dauer
            belastbar ist.
          </p>
          <p>
            Ein System, das Funktion, Wirtschaftlichkeit und Präzision
            miteinander verbindet.
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
