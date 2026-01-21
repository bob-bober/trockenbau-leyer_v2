"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import TransitionLink from "../../../components/TransitionLink";

export default function RaumakustikPage() {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let splitInstance;
    let lineTweens = [];
    let lineTriggers = [];

    const ctx = gsap.context(() => {
      /* Oben: triangle/dotsWhite/owlBurrowing (von unten gespiegelt) */
      gsap.set(".triangle", { yPercent: 25, rotation: -90 });
      gsap.set(".dotsWhite", { yPercent: 10 });
      gsap.set(".owlBurrowing", { yPercent: -20 });
      gsap.set(".clusterGreat", { yPercent: 5 });

      gsap.to(".triangle", {
        yPercent: -5,
        rotation: 40,
        ease: "none",
        scrollTrigger: { trigger: ".clusterGreat", scrub: 1 },
      });

      gsap.to(".dotsWhite", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: ".clusterGreat", scrub: 1 },
      });

      gsap.to(".owlBurrowing", {
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

      /* Unten: circle/dotsBlue/owlHorned (von oben gespiegelt) */
      gsap.set(".circle", { yPercent: 25, rotation: -90 });
      gsap.set(".dotsBlue", { yPercent: 10 });
      gsap.set(".owlHorned", { yPercent: -20 });
      gsap.set(".clusterBurrowing", { yPercent: 5 });

      gsap.to(".circle", {
        yPercent: -5,
        rotation: 40,
        ease: "none",
        scrollTrigger: { trigger: ".clusterBurrowing", scrub: 1 },
      });

      gsap.to(".dotsBlue", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: ".clusterBurrowing", scrub: 1 },
      });

      gsap.to(".owlHorned", {
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

  /* VARIANTE 5: Spiegeln + tauschen */
  return (
    <div className="owl-template" ref={rootRef}>
      <section>
        <div className="title titleGreathorned text-block">
          <h1 className="owl-title-heading">Raumakustik</h1>
          <p>
            Akustik ist mehr als Schallschutz – sie prägt, wie Räume wirken und
            genutzt werden.
          </p>
          <p>
            Eine ausgewogene Raumakustik entsteht durch präzise Planung: Sie
            steuert Nachhall, Sprachverständlichkeit und Atmosphäre – messbar,
            aber vor allem spürbar.
          </p>
        </div>
      </section>

      {/* Oben: triangle von unten, gespiegelt nach rechts */}
      <section className="cluster clusterGreat">
        <div
          className="clusterPieces triangle"
          aria-hidden="true"
          style={{ left: "auto", right: "-28px", top: "0" }}
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
            src="/images/random3.jpg"
            alt="Service image"
            width={674}
            height={700}
          />
        </div>
        <img
          className="clusterPieces dotsWhite"
          style={{ left: "auto", right: "0", top: "80px" }}
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_white_310x588.svg"
          alt=""
          aria-hidden="true"
        />
      </section>

      <section>
        <div className="title titleBurrowing text-block">
          <p>
            Lärm und störender Schall beeinträchtigen Konzentration,
            Kommunikation und Wohlbefinden. In Büros, Konferenzräumen oder
            Bildungseinrichtungen führen ungünstige Raumakustiken schnell zu
            Ermüdung und Leistungsabfall. Durch gezielte Planung lässt sich die
            akustische Qualität eines Raumes jedoch deutlich verbessern – ohne
            seine Architektur zu verändern.
          </p>
          <p>
            Die Grundlage bildet die präzise Abstimmung von Absorptions- und
            Reflexionsflächen. Decken- und Wandflächen werden dabei so
            gestaltet, dass Sprache klar verständlich bleibt und störende
            Nachhallzeiten reduziert werden. Mineralfaser-, Gips- oder
            Stoffelemente können schallabsorbierend wirken, während
            reflektierende Flächen die Klangbalance im Raum erhalten. Das
            Ergebnis ist ein harmonisches Schallfeld, das Ruhe schafft, ohne die
            Lebendigkeit des Raums zu mindern.
          </p>
        </div>
      </section>

      {/* Unten: circle von oben, gespiegelt nach rechts */}
      <section className="cluster clusterBurrowing">
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
          style={{ left: "auto", right: "0", top: "400px" }}
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg"
          alt=""
          aria-hidden="true"
        />
      </section>

      <section>
        <div className="title titleAfter text-block">
          <p>
            Jedes Projekt beginnt mit einer Analyse der vorhandenen Raumstruktur
            und Nutzung. Darauf basierend werden Materialien, Formen und Systeme
            ausgewählt, die sich funktional und ästhetisch einfügen – von
            Akustikdecken über Wandpaneele bis zu freihängenden Baffeln. So
            entstehen Räume, die sowohl technisch präzise als auch atmosphärisch
            ausgewogen sind.
          </p>
          <p>
            Gute Akustik zeigt sich nicht durch Sichtbarkeit, sondern durch
            Wirkung. Sie steigert Produktivität, unterstützt Kommunikation und
            sorgt für eine gleichmäßige Raumwahrnehmung – im Büro ebenso wie im
            privaten Wohnbereich.
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
