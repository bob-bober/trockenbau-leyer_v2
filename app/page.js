"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    const squares = document.querySelectorAll(".square-loader");
    const loaderNumbers = document.querySelector(".loader-numbers");
    const loaderCount = document.querySelector(".loader-count");

    if (!squares.length || !loaderNumbers || !loaderCount) {
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

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

            gsap.delayedCall(1, () => {
              const experienceSection = document.querySelector(".experience");
              if (experienceSection && window.innerWidth > 1100) {
                experienceSection.classList.add("experience-line");
              }
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

    return () => {
      tl.kill();
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

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div className="hero__grid-cell" />
          <div className="hero__title" style={{ gridColumn: "span 4" }}>
            <h1>
              <span className="innovative-word">INNOVATIVE </span>
              <span className="design-word">DESIGN </span>
              <span className="timeless-word">TIMELESS </span>
              <span className="architecture-word">ARCHITECTURE</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <div className="experience__grid">
            <div
              className="experience__grid-cell parallax-container"
              style={{ gridColumn: "1 / 5", gridRow: "1 / 3" }}
            >
              <img
                className="parallax-image"
                src="https://rainearchitects.com/wp-content/uploads/2025/06/hero-img-1.jpg"
                alt="hero"
              />
            </div>
            <div className="experience__description">
              <h2>ARCHITECTURE WITH CLARITY</h2>
              <h3>
                Design-Driven Architecture for Civic & Municipal · Commercial ·
                Industrial Warehouse · Luxury Residential · Adaptive Reuse
                Projects
              </h3>
              <p>
                Raine Architects elevates cities and communities through
                clarity, craft, and long-term performance grounded in context,
                community, and culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" aria-hidden="true" />
    </div>
  );
}
