"use client";

import { useEffect } from "react";
import Link from "next/link";

const logoSrc =
  "http://localhost:3845/assets/a73ec3df9bdd2e3bbcbfcf37ee07a99805ec0fc4.svg";

export default function Navbar() {
  useEffect(() => {
    let lastScroll = 0;
    const header = document.querySelector(".header");
    const scroller = document.querySelector(".scroll-container");

    if (!header) {
      return undefined;
    }

    function getScrollSource() {
      return window.innerWidth > 1100 ? window : scroller || window;
    }

    function getScrollTop() {
      return window.innerWidth > 1100
        ? window.pageYOffset
        : scroller
          ? scroller.scrollTop
          : window.pageYOffset;
    }

    function onScroll() {
      const currentScroll = getScrollTop();
      if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
      }
      lastScroll = currentScroll;
    }

    let currentSource = getScrollSource();
    currentSource.addEventListener("scroll", onScroll, { passive: true });

    function handleResize() {
      const newSource = getScrollSource();
      if (newSource !== currentSource) {
        currentSource.removeEventListener("scroll", onScroll);
        newSource.addEventListener("scroll", onScroll, { passive: true });
        lastScroll = getScrollTop();
        currentSource = newSource;
      }
    }

    window.addEventListener("resize", handleResize);

    const burger = document.querySelector(".header-burger-menu");
    const menu = document.querySelector(".header__menu");
    const expertiseLink = document.querySelector(".expertise-link");

    function closeMenu() {
      menu?.classList.remove("menu-active");
      burger?.classList.remove("burger-active");
    }

    function toggleMenu() {
      menu?.classList.toggle("menu-active");
      burger?.classList.toggle("burger-active");
    }

    expertiseLink?.addEventListener("click", closeMenu);
    burger?.addEventListener("click", toggleMenu);

    return () => {
      currentSource.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      expertiseLink?.removeEventListener("click", closeMenu);
      burger?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__inner">
        <Link className="header__logo" href="/" aria-label="Raine Architects">
          <img src={logoSrc} alt="Raine Architects" />
        </Link>

        <nav className="header__nav" aria-label="Main">
          <ul className="header__menu">
            <li>
              <Link className="header__link expertise-link" href="#expertise">
                <span className="header__dot" aria-hidden="true" />
                <span>Expertise</span>
              </Link>
            </li>
            <li>
              <Link className="header__link" href="#portfolio">
                <span className="header__dot" aria-hidden="true" />
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link className="header__link" href="#viz">
                <span className="header__dot" aria-hidden="true" />
                <span>3D Viz</span>
              </Link>
            </li>
            <li>
              <Link className="header__link" href="#about">
                <span className="header__dot" aria-hidden="true" />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link className="header__link" href="#contact">
                <span className="header__dot" aria-hidden="true" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="header-burger-menu"
          type="button"
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
