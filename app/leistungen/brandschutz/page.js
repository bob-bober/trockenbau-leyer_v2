"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import TransitionLink from "../../../components/TransitionLink";

export default function BrandschutzPage() {
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

  /* VARIANTE 1: Alles spiegeln (oben + unten) */
  return (
    <div className="owl-template" ref={rootRef}>
      <section>
        <div className="title titleGreathorned text-block">
          <h1 className="owl-title-heading">Brandschutz</h1>
          <p>
            Baulicher Brandschutz ist integraler Bestandteil moderner
            Architektur.
          </p>
          <p>
            Er schützt Menschen, Substanz und Planung und entscheidet über die
            Funktionalität eines Gebäudes im Ernstfall. Der bauliche Brandschutz
            umfasst alle Maßnahmen, die der Entstehung und Ausbreitung von Feuer
            und Rauch entgegenwirken.
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
          <Image
            src="/images/random2.jpg"
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
            Bereits in der Planungsphase werden Materialien, Konstruktionen und
            Schnittstellen so gewählt, dass gesetzliche und objektspezifische
            Anforderungen sicher eingehalten werden. Im Neubau ebenso wie bei
            Sanierungen entstehen Lösungen, die Schutz, Wirtschaftlichkeit und
            Gestaltungsfreiheit miteinander verbinden.
          </p>
          <p>
            Das Leistungsspektrum reicht von Beschichtungen und Bekleidungen für
            Stahl- und Holztragwerke bis hin zu Aufrüstungen bestehender Decken-
            und Wandsysteme. Brandschutzverglasungen und Feuerschutztüren – in
            Stahl oder Holz, mit Oberflächen nach Vorgabe – werden präzise in
            das jeweilige Raumkonzept integriert.
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
          className="owlBurrowing clusterPieces"
          style={{ right: "auto", left: "0" }}
        >
          <Image
            src="/images/random9.jpg"
            alt="Service image"
            width={674}
            height={700}
          />
        </div>
        <img
          className="clusterPieces dotsWhite"
          style={{ left: "auto", right: "0" }}
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_white_310x588.svg"
          alt=""
          aria-hidden="true"
        />
      </section>

      <section>
        <div className="title titleAfter text-block">
          <p>
            Auch Kabel-, Kanal- und Rohrabschottungen gehören dazu: fachgerecht
            montiert, geprüft und dokumentiert. Jede Ausführung wird
            projektspezifisch geplant, abgestimmt und kontrolliert.
          </p>
          <p>
            So entsteht ein Brandschutz, der nicht auffällt, sondern
            funktioniert – dauerhaft, normgerecht und ästhetisch ruhig.
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
