"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import TransitionLink from "../../../components/TransitionLink";

export default function GlastrennwaendePage() {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let splitInstance;
    let lineTweens = [];
    let lineTriggers = [];

    const ctx = gsap.context(() => {
      /* ------Great Horned Owl Sequence------ */
      gsap.set(".circle", { yPercent: -5 });
      gsap.set(".dotsBlue", { yPercent: 10 });
      gsap.set(".owlHorned", { yPercent: -20 });
      gsap.set(".clusterGreat", { yPercent: 5 });

      gsap.to(".circle", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterGreat",
          scrub: 1,
        },
      });

      gsap.to(".dotsBlue", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterGreat",
          scrub: 1,
        },
      });

      gsap.to(".owlHorned", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterGreat",
          scrub: 1,
        },
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

      /* ------Burrowing Owl Sequence------ */
      gsap.set(".triangle", { yPercent: 25, rotation: -90 });
      gsap.set(".dotsWhite", { yPercent: 10 });
      gsap.set(".owlBurrowing", { yPercent: -20 });
      gsap.set(".clusterBurrowing", { yPercent: 5 });

      gsap.to(".triangle", {
        yPercent: -5,
        rotation: 40,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterBurrowing",
          scrub: 1,
        },
      });

      gsap.to(".dotsWhite", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterBurrowing",
          scrub: 1,
        },
      });

      gsap.to(".owlBurrowing", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterBurrowing",
          scrub: 1,
        },
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
          {
            types: "lines",
            lineClass: "line",
          },
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

  return (
    <div className="owl-template" ref={rootRef}>
      <section>
        <div className="title titleGreathorned text-block">
          <h1 className="owl-title-heading">Glastrennwände</h1>
          <p>
            Ganzglastrennwände verbinden Offenheit und Struktur – für
            Arbeitswelten, die kommunizieren, ohne Lautstärke zu erzeugen.
          </p>
        </div>
      </section>

      <section className="cluster clusterGreat">
        <div className="circle clusterPieces" />
        <div className="owlHorned clusterPieces">
          <Image
            src="/images/random14.jpg"
            alt="Great horned owl"
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
            Klare Linien, exakte Fugen und ruhige Flächen prägen die Wirkung
            moderner Ganzglasräume. Sie schaffen Transparenz und Weite, ohne die
            funktionale Trennung aufzugeben. So entstehen Innenräume, die hell,
            großzügig und zugleich konzentriert wirken – ein Gleichgewicht aus
            Offenheit und Diskretion. Ganzglastrennwände werden heute nicht nur
            als architektonisches Element verstanden, sondern als Teil eines
            durchdachten Raumkonzepts.
          </p>
          <p>
            In Büro- und Verwaltungsgebäuden ermöglichen sie flexible
            Grundrisse, optimierte Lichtführung und eine spürbare akustische
            Entlastung. Im privaten Bereich lassen sich durch ihre filigrane
            Gestaltung Wohn- und Arbeitszonen gliedern, ohne den Raumeindruck zu
            verlieren.
          </p>
        </div>
      </section>

      <section className="cluster clusterBurrowing">
        <div className="clusterPieces triangle" aria-hidden="true">
          <span className="window-border window-border--top" />
          <span className="window-border window-border--right" />
          <span className="window-border window-border--bottom" />
          <span className="window-border window-border--left" />
        </div>
        <div className="owlBurrowing clusterPieces">
          <Image
            src="/images/random16.jpg"
            alt="Burrowing owl"
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
            Trockenbau Leyer übernimmt die vollständige Umsetzung: von der
            Abstimmung mit Architekten und Planern bis zur präzisen Montage vor
            Ort. Jede Glaswand wird projektbezogen gefertigt, angepasst an
            Raumhöhe, Nutzung und architektonische Anforderungen. Die Ergebnisse
            überzeugen durch technische Genauigkeit, sichtbare Leichtigkeit und
            handwerkliche Sorgfalt bis ins Detail.
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
