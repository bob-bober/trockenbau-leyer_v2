"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import TransitionLink from "./TransitionLink";

const logoSrc = "/images/logo.svg";

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
        <TransitionLink
          className="header__logo"
          href="/"
          aria-label="Raine Architects"
        >
          <Image
            className="header__logo-image"
            src={logoSrc}
            alt="Raine Architects"
            width={174}
            height={94}
            priority
          />
        </TransitionLink>

        <nav className="header__nav" aria-label="Main">
          <ul className="header__menu">
            <li>
              <TransitionLink
                className="header__link"
                href="/#sectionAbout"
              >
                <span className="header__dot" aria-hidden="true" />
                <span>Über Uns</span>
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                className="header__link expertise-link"
                href="/#sectionExpertise"
              >
                <span className="header__dot" aria-hidden="true" />
                <span>Leistungen</span>
              </TransitionLink>
            </li>
            <li>
              <TransitionLink className="header__link" href="/contact">
                <span className="header__dot" aria-hidden="true" />
                <span>Kontakt</span>
              </TransitionLink>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <a className="header__phone" href="tel:022535448265">
            02253 – 544 82 65
          </a>
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
      </div>
    </header>
  );
}
