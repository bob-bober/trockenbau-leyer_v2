"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "lenis";
import { useTransitionContext } from "../components/TransitionProvider";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import CeoSection from "../components/home/CeoSection";
import CultureSection from "../components/home/CultureSection";
import ExperienceVisionSection from "../components/home/ExperienceVisionSection";

export default function Home() {
  const { playHomeIntro } = useTransitionContext();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let lenis;
    let lenisRaf;

    const initLenis = () => {
      if (window.innerWidth < 1100 || lenis) {
        return;
      }

      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        smoothTouch: false,
      });

      lenis.on("scroll", ScrollTrigger.update);

      lenisRaf = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(lenisRaf);
      gsap.ticker.lagSmoothing(0);
    };

    const destroyLenis = () => {
      if (!lenis) {
        return;
      }

      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      lenis = null;

      if (lenisRaf) {
        gsap.ticker.remove(lenisRaf);
        lenisRaf = null;
      }
    };

    const squares = document.querySelectorAll(".square-loader");
    const loaderNumbers = document.querySelector(".loader-numbers");
    const loaderCount = document.querySelector(".loader-count");
    const hasLoader = squares.length && loaderNumbers && loaderCount;

    let tl = null;

    if (hasLoader && playHomeIntro) {
      tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      // Hide header, experience, footer during intro animation
      gsap.set(".header, .experience, .footer", {
        opacity: 0,
        pointerEvents: "none",
      });

      tl.to(
        squares[0],
        { top: "0rem", left: "0rem", duration: 1, delay: 0.9 },
        0,
      );
      tl.to(
        squares[1],
        { top: "0rem", right: "0rem", duration: 1, delay: 0.9 },
        0,
      );
      tl.to(
        squares[2],
        { bottom: "0rem", left: "0rem", duration: 1, delay: 0.9 },
        0,
      );
      tl.to(
        squares[3],
        { bottom: "0rem", right: "0rem", duration: 1, delay: 0.9 },
        0,
      );

      tl.to(
        ".loader-numbers",
        {
          y: "0%",
          ease: "power4.out",
          delay: window.innerWidth > 1100 ? 1.1 : 2,
          duration: 1.2,
        },
        0,
      );

      let countCompleted = false;

      tl.fromTo(
        loaderNumbers,
        { innerText: 0 },
        {
          innerText: 100,
          duration: 7,
          delay: 0.5,
          snap: { innerText: 1 },
          ease: "power4.out",
          onUpdate: function () {
            const value = Math.round(this.targets()[0].innerText);
            loaderNumbers.textContent = `${value}`;

            if (value === 100 && !countCompleted) {
              countCompleted = true;

              gsap.to(".loader-numbers", {
                y: "100%",
                ease: "power4.inOut",
                duration: 1.2,
              });

              gsap.to(".header, .experience, .footer", {
                opacity: 1,
                pointerEvents: "auto",
                delay: 0.8,
                ease: "power4.inOut",
                duration: 0.9,
              });

              const gridCells = gsap.utils.toArray(".hero__grid-cell");
              gridCells.forEach((cell, index) => {
                gsap.delayedCall(1 + index * 0.1, () => {
                  cell.classList.add("hero__grid-cell-active");
                });
              });

              // Activate vertical lines on hero section
              gsap.delayedCall(1, () => {
                const heroSection = document.querySelector(".hero");
                if (heroSection && window.innerWidth > 1100) {
                  heroSection.classList.add("hero-lines-active");
                }
              });

              gsap.delayedCall(1, () => {
                const experienceSection = document.querySelector(".experience");
                if (experienceSection && window.innerWidth > 1100) {
                  experienceSection.classList.add("experience-line");
                }
                ScrollTrigger.refresh();
              });
            }
          },
        },
        0,
      );

      tl.to(
        loaderCount,
        {
          width: "95%",
          duration: 3,
          delay: 1,
          ease: "power4.inOut",
          onComplete: function () {
            squares.forEach((e) => e.classList.add("squares-loader-dis"));
          },
        },
        0,
      );

      tl.fromTo(
        ".innovative-word, .architecture-word, .design-word, .timeless-word",
        { opacity: 0 },
        { opacity: 1, duration: 1.3, delay: 2, ease: "power4.inOut" },
        0,
      );

      tl.fromTo(
        ".innovative-word",
        { x: window.innerWidth > 1100 ? "-60%" : "0%" },
        { x: 0, duration: 1.3, delay: 3.8, ease: "power4.inOut" },
        0,
      );
      tl.fromTo(
        ".innovative-word",
        { y: "-100%" },
        { y: 0, duration: 1.3, delay: 4.6, ease: "power4.inOut" },
        0,
      );

      tl.fromTo(
        ".design-word",
        {
          y: window.innerWidth > 1100 ? "100%" : "0%",
          x: window.innerWidth > 1100 ? "0%" : "-40%",
        },
        {
          y: 0,
          x: 0,
          duration: 1.3,
          delay: 3,
          ease: "power4.inOut",
        },
        0,
      );

      tl.fromTo(
        ".timeless-word",
        { x: window.innerWidth > 1100 ? "100%" : "45%" },
        { x: 0, duration: 1.3, delay: 3.7, ease: "power4.inOut" },
        0,
      );
      tl.fromTo(
        ".timeless-word",
        { y: window.innerWidth > 1100 ? "-100%" : "0%" },
        { y: 0, duration: 1.3, delay: 4.6, ease: "power4.inOut" },
        0,
      );

      tl.fromTo(
        ".architecture-word",
        { x: window.innerWidth > 1100 ? "-60%" : "0%" },
        { x: 0, duration: 1.5, delay: 3.2, ease: "power4.inOut" },
        0,
      );
    }

    if (hasLoader && !playHomeIntro) {
      gsap.set(".header, .experience, .footer", {
        opacity: 1,
        pointerEvents: "auto",
      });
      gsap.set(".loader, .loader-count, .square-loader", { display: "none" });

      // Activate lines immediately when coming back via SPA navigation
      const heroSection = document.querySelector(".hero");
      if (heroSection && window.innerWidth > 1100) {
        heroSection.classList.add("hero-lines-active");
      }

      const gridCells = gsap.utils.toArray(".hero__grid-cell");
      gridCells.forEach((cell) => {
        cell.classList.add("hero__grid-cell-active");
      });

      const experienceSection = document.querySelector(".experience");
      if (experienceSection && window.innerWidth > 1100) {
        experienceSection.classList.add("experience-line");
      }
    }

    let splitInstance;
    let parallaxTween;
    let lineTweens = [];
    let lineTriggers = [];
    let statsTweens = [];
    let ceoTweens = [];

    const updateSplit = () => {
      if (splitInstance) splitInstance.revert();

      splitInstance = new SplitType(".text-block p, .text-block h3", {
        types: "lines",
        lineClass: "line",
      });

      document.querySelectorAll(".line").forEach((line) => {
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

      gsap.utils.toArray(".text-block").forEach((el) => {
        const lines = el.querySelectorAll(".line-inner");

        if (!lines.length) {
          return;
        }

        // Animation mit ScrollTrigger direkt in gsap.fromTo
        gsap.fromTo(
          lines,
          {
            yPercent: -100,
          },
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
              scroller: window.innerWidth < 1100 ? ".scroll-container" : null,
            },
          },
        );
      });
    };

    const applyParallax = () => {
      if (!document.querySelector(".parallax-container")) {
        return;
      }

      const scroller = window.innerWidth < 1100 ? ".scroll-container" : null;

      parallaxTween = gsap.fromTo(
        ".parallax-image",
        { yPercent: -12, ease: "none" },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-container",
            scrub: true,
            scroller,
          },
        },
      );
    };

    const initStatsAnimations = () => {
      statsTweens.forEach((tween) => tween.kill());
      statsTweens = [];

      const statsSection = document.querySelector(".stats");
      if (!statsSection) {
        return;
      }
    };

    const initCeoAnimations = () => {
      ceoTweens.forEach((tween) => tween.kill());
      ceoTweens = [];

      const ceoSection = document.querySelector(".ceo");
      if (!ceoSection) {
        return;
      }

      const scroller = window.innerWidth < 1100 ? ".scroll-container" : null;
      const captureTween = (tween) => {
        if (tween) {
          ceoTweens.push(tween);
        }
      };

      captureTween(
        gsap.fromTo(
          ".ceo-img",
          { scale: 0.8 },
          {
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".ceo-img",
              start: "top 80%",
              scrub: 1.2,
              scroller,
            },
          },
        ),
      );

      if (window.innerWidth > 768) {
        // Desktop animations - from center outward
        captureTween(
          gsap.fromTo(
            ".ceo-top .ceo-left",
            { x: 0 },
            {
              x: window.innerWidth > 1100 ? "-125%" : "-80%",
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-text",
                start: "top 80%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-top .ceo-right",
            { x: 0 },
            {
              x: window.innerWidth > 1100 ? "175%" : "100%",
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-text",
                start: "top 80%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-middle .ceo-left",
            { x: 0 },
            {
              x: "-35%",
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-text",
                start: "top 80%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-middle .ceo-right",
            { x: 0 },
            {
              x: "120%",
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-text",
                start: "top 80%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-anim-top",
            { x: -150 },
            {
              x: 50,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-bottom",
                start: "top 100%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-anim-middle",
            { x: -150 },
            {
              x: 50,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-bottom",
                start: "top 120%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-anim-bottom",
            { x: -150 },
            {
              x: 50,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-bottom",
                start: "top 140%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );
      } else {
        // Mobile animations
        captureTween(
          gsap.fromTo(
            ".ceo-top .ceo-left",
            { x: "130%" },
            {
              x: "0%",
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-text",
                start: "top 80%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-top .ceo-right",
            { x: "150%" },
            {
              x: "0%",
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-text",
                start: "top 80%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-middle .ceo-left",
            { x: "-130%" },
            {
              x: "-40%",
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-text",
                start: "top 80%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-middle .ceo-right",
            { x: "-150%" },
            {
              x: "0%",
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-text",
                start: "top 80%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-anim-top",
            { x: -50 },
            {
              x: 0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-bottom",
                start: "top 100%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-anim-middle",
            { x: -50 },
            {
              x: 0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-bottom",
                start: "top 120%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );

        captureTween(
          gsap.fromTo(
            ".ceo-anim-bottom",
            { x: -50 },
            {
              x: 0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".ceo-bottom",
                start: "top 140%",
                scrub: 1.2,
                scroller,
              },
            },
          ),
        );
      }
    };

    updateSplit();
    requestAnimationFrame(() => {
      applyLineAnimations();
      applyParallax();
      initStatsAnimations();
      initCeoAnimations();
      ScrollTrigger.refresh();
    });

    const handleResize = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      parallaxTween?.kill();
      lineTweens.forEach((tween) => tween.kill());
      lineTriggers.forEach((trigger) => trigger.kill());
      if (window.innerWidth < 1100) {
        destroyLenis();
      } else {
        initLenis();
      }
      updateSplit();
      requestAnimationFrame(() => {
        applyLineAnimations();
        applyParallax();
        initStatsAnimations();
        initCeoAnimations();
        ScrollTrigger.refresh();
      });
    };

    initLenis();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      parallaxTween?.kill();
      lineTweens.forEach((tween) => tween.kill());
      lineTriggers.forEach((trigger) => trigger.kill());
      statsTweens.forEach((tween) => tween.kill());
      ceoTweens.forEach((tween) => tween.kill());
      splitInstance?.revert();
      destroyLenis();
      tl?.kill();
    };
  }, []);

  return (
    <div>
      <div className="loader" aria-hidden="true">
        <div className="loader-count">
          <span className="square square-loader" />
          <span className="square square-loader" />
          <span className="square square-loader" />
          <span className="square square-loader" />
          <div className="loader-count__wrapper">
            <span className="loader-numbers loader-numbers-wrap">00</span>
          </div>
        </div>
      </div>

      <HeroSection />

      <CultureSection />

      <ExperienceVisionSection />

      <StatsSection />

      <CeoSection />

      <footer className="footer" aria-hidden="true" />
    </div>
  );
}
