"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "../../../components/TransitionLink";

export default function TrennwandsystemePage() {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let splitInstance;
    let lineTweens = [];
    let lineTriggers = [];

    const ctx = gsap.context(() => {
      /* Oben: jetzt triangle/dotsWhite/owlBurrowing */
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

      /* Unten: jetzt circle/dotsBlue/owlHorned */
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

  /* VARIANTE 2: Oben/unten tauschen */
  return (
    <div className="owl-template" ref={rootRef}>
      <section>
        <div className="title titleGreathorned text-block">
          <h1 className="owl-title-heading">Trennwandsysteme</h1>
          <p>Platzhalter Text – wird später ersetzt.</p>
        </div>
      </section>

      {/* Oben: triangle, dotsWhite, owlBurrowing (ursprünglich unten) */}
      <section className="cluster clusterGreat">
        <div
          className="clusterPieces triangle"
          aria-hidden="true"
          style={{ left: "-28px", top: "0" }}
        >
          <span className="window-border window-border--top" />
          <span className="window-border window-border--right" />
          <span className="window-border window-border--bottom" />
          <span className="window-border window-border--left" />
        </div>
        <div
          className="clusterPieces owlBurrowing"
          style={{ right: "0", left: "auto", top: "0" }}
        >
          <img
            src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/burrrowing_owl_674x700.jpg"
            alt="Service image"
          />
          <div className="caption">
            <span>/01</span> TRENNWANDSYSTEME
          </div>
        </div>
        <img
          className="clusterPieces dotsWhite"
          style={{ left: "0", top: "80px" }}
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_white_310x588.svg"
          alt=""
          aria-hidden="true"
        />
      </section>

      <section>
        <div className="title titleBurrowing text-block">
          <p>Platzhalter Text Absatz 1 – wird später ersetzt.</p>
          <p>Platzhalter Text Absatz 2 – wird später ersetzt.</p>
        </div>
      </section>

      {/* Unten: circle, dotsBlue, owlHorned (ursprünglich oben) */}
      <section className="cluster clusterBurrowing">
        <div
          className="circle clusterPieces"
          style={{ left: "214px", bottom: "0" }}
        />
        <div
          className="owlHorned clusterPieces"
          style={{ right: "0", left: "auto", top: "162px" }}
        >
          <img
            src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/great_horned_owl.jpg"
            alt="Service image"
          />
          <div className="caption captionBurrowing">
            <span>/02</span> DETAIL
          </div>
        </div>
        <img
          className="dotsBlue clusterPieces"
          style={{ left: "0", top: "400px" }}
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg"
          alt=""
          aria-hidden="true"
        />
      </section>

      <section>
        <div className="title titleAfter text-block">
          <p>Platzhalter Text Abschluss – wird später ersetzt.</p>
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
