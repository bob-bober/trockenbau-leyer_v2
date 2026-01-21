"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import TransitionLink from "../TransitionLink";

const services = [
  {
    title: "Ganzglastrennwände",
    image: "/images/home_service2.jpg",
    imageWidth: 900,
    imageHeight: 1350,
    description:
      "Klare Strukturen, hohe Schallschutzwerte, dezentes Design. Unsere Glaslösungen verbinden Transparenz mit Funktion – präzise geplant, sauber montiert. Wir stimmen Details wie Profile, Türen und Beschläge exakt auf Nutzung und Architektur ab. Das Ergebnis sind langlebige Systeme mit hochwertiger Optik und zuverlässiger Performance.",
  },
  {
    title: "Deckensysteme",
    image: "/images/home_service3.jpg",
    imageWidth: 900,
    imageHeight: 1350,
    description:
      "Decken, die mehr können: Akustik, Licht, Brandschutz und Technik. Für eine ruhige, funktionale Raumwirkung. Wir koordinieren die Schnittstellen zu Haustechnik und Beleuchtung frühzeitig und sorgen für eine saubere Integration. So entsteht eine durchgängige Deckenlösung, die Gestaltung und Funktion vereint.",
  },
  {
    title: "Trennwandsysteme",
    image: "/images/home_service7.jpg",
    imageWidth: 900,
    imageHeight: 1350,
    description:
      "Flexible Raumaufteilung für Neubau oder Umbau – stabil, modular und auf jede Nutzung abgestimmt. Wir planen Raster, Anschlüsse und Oberflächen so, dass Räume später anpassbar bleiben. Dadurch lassen sich Arbeits- und Nutzungsbereiche effizient organisieren, ohne auf Stabilität zu verzichten.",
  },
  {
    title: "Baulicher Brandschutz",
    image: "/images/home_service1.jpg",
    imageWidth: 900,
    imageHeight: 1200,
    description:
      "Geprüfte Systeme für Wände, Decken und Installationen. Sicherheit beginnt bei der Planung. Wir berücksichtigen Zulassungen, Detailanschlüsse und Durchdringungen von Anfang an. So wird der Brandschutz fachgerecht umgesetzt und zuverlässig dokumentiert.",
  },
  {
    title: "Trockenboden",
    image: "/images/home_service6.jpg",
    imageWidth: 900,
    imageHeight: 1200,
    description:
      "Schnell montiert, langlebig und belastbar – ideal für Sanierungen oder zeitkritische Bauphasen. Trockenböden ermöglichen eine saubere Verlegung ohne lange Trocknungszeiten. Damit bleiben Bauabläufe planbar und Flächen rasch nutzbar.",
  },
  {
    title: "Doppelböden",
    image: "/images/home_service2.jpg",
    imageWidth: 900,
    imageHeight: 1376,
    description:
      "Funktionale Bodensysteme mit Technikzugang – robust, wartungsfreundlich und präzise installiert. Wir planen Raster, Lasten und Belagsaufbau passgenau für die technische Infrastruktur. Das erleichtert Wartung und Anpassungen im laufenden Betrieb.",
  },
  {
    title: "Raumakustik",
    image: "/images/home_service5.jpg",
    imageWidth: 900,
    imageHeight: 1506,
    description:
      "Akustisch wirksame Systeme für bessere Konzentration und Ruhe – technisch fundiert, architektonisch integriert. Wir wählen Materialien und Absorber gezielt nach Nutzungsart und Raumgeometrie. So verbessern wir die Sprachverständlichkeit und schaffen eine spürbar angenehmere Atmosphäre.",
  },
];

const slugifyService = (value) =>
  value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCount] = useState(7);
  const listRef = useRef(null);
  const bgRef = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const descRefs = useRef([]);
  const itemRefs = useRef([]);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const handleActivate = (index) => {
    // Mobile: Toggle-Verhalten
    if (typeof window !== "undefined" && window.innerWidth <= 900) {
      if (activeIndex === index) {
        // Wenn bereits aktiv, schließen
        setActiveIndex(null);
      } else {
        // Sonst öffnen
        setActiveIndex(index);
      }
      return;
    }

    // Desktop: Normales Hover-Verhalten
    setActiveIndex(index);
    activeIndexRef.current = index;

    if (typeof window === "undefined" || window.innerWidth <= 1100) {
      return;
    }

    const listEl = listRef.current;
    const bgEl = bgRef.current;
    const itemEl = itemRefs.current[index];
    const descEl = descRefs.current[index];

    if (!listEl || !itemEl || !descEl) {
      return;
    }

    const itemRect = itemEl.getBoundingClientRect();
    const listRect = listEl.getBoundingClientRect();
    const contentRect = contentRef.current?.getBoundingClientRect();
    const targetHeight = descEl.scrollHeight;
    const offsetTop = itemRect.top - listRect.top;
    const centerTop = offsetTop + itemRect.height / 2 - targetHeight / 2;
    const containerHeight = contentRect ? contentRect.height : listRect.height;
    const minY = -targetHeight * 0.35;
    const maxY = containerHeight - targetHeight * 0.65;
    const clampedTop = Math.max(minY, Math.min(centerTop, maxY));

    if (bgEl) {
      gsap.to(bgEl, {
        top: offsetTop,
        height: itemRect.height,
        width: itemRect.width,
        x: 0,
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      });
    }

    // hide all other description blocks
    descRefs.current.forEach((block, blockIndex) => {
      if (blockIndex === index || !block) return;
      gsap.set(block, {
        opacity: 0,
        pointerEvents: "none",
        height: 0,
        y: 0,
      });
    });

    if (descEl) {
      gsap.set(descEl, {
        top: 0,
        y: clampedTop,
        opacity: 1,
        pointerEvents: "auto",
        height: targetHeight,
      });
      gsap.fromTo(
        descEl,
        { height: 0 },
        {
          height: targetHeight,
          duration: 0.7,
          ease: "power2.out",
          overwrite: "auto",
        },
      );
    }
  };

  const handleMouseMove = (event) => {
    if (typeof window === "undefined" || window.innerWidth <= 1100) return;
    const currentIndex = activeIndexRef.current;
    if (currentIndex === null || currentIndex === undefined) return;
    const descEl = descRefs.current[currentIndex];
    const contentEl = contentRef.current;
    if (!descEl || !contentEl) return;

    const contentRect = contentEl.getBoundingClientRect();
    const targetHeight = descEl.scrollHeight;
    const targetY = event.clientY - contentRect.top - targetHeight / 2;
    const minY = -targetHeight * 0.35;
    const maxY = contentRect.height - targetHeight * 0.65;
    const clampedY = Math.max(minY, Math.min(targetY, maxY));

    gsap.to(descEl, {
      y: clampedY,
      duration: 0.7,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleListLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth > 1100) {
      const bgEl = bgRef.current;
      if (bgEl) {
        gsap.to(bgEl, {
          x: "-100%",
          width: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });
      }

      descRefs.current.forEach((block) => {
        if (block) {
          gsap.to(block, {
            opacity: 0,
            height: 0,
            duration: 0.25,
            ease: "power2.inOut",
            onComplete: () => {
              block.style.pointerEvents = "none";
            },
          });
        }
      });
    }

    setActiveIndex(null);
  };

  useEffect(() => {
    return undefined;
  }, []);

  return (
    <section
      className="services"
      id="sectionExpertise"
      aria-labelledby="services-heading"
      ref={sectionRef}
    >
      <div className="container">
        <div className="services__header">
          <h2 className="services__title title" id="services-heading">
            LEISTUNGEN
          </h2>
          <div className="services__descr text-block">
            <p>
              Von der Glastrennwand bis zur Akustikdecke – Lösungen, die
              Funktion, Ästhetik und Präzision verbinden. Projektspezifisch
              geplant, mit klaren Prozessen und sauberer Ausführung.
            </p>
          </div>
        </div>

        <div
          className="services__content"
          onMouseLeave={handleListLeave}
          onMouseMove={handleMouseMove}
          ref={contentRef}
        >
          <div className="services__list-wrap">
            <div className="hover-bg" ref={bgRef} aria-hidden="true" />
            <ol className="services-list" role="list" ref={listRef}>
              {services.map((service, index) => (
                <li
                  key={service.title}
                  data-index={index}
                  className={`services-card ${
                    activeIndex === index ? "is-active" : ""
                  } ${index >= visibleCount ? "hidden-services" : ""}`}
                  onMouseEnter={() => {
                    if (window.innerWidth > 900) handleActivate(index);
                  }}
                  onFocus={() => {
                    if (window.innerWidth > 900) handleActivate(index);
                  }}
                  onClick={() => handleActivate(index)}
                  tabIndex={0}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                >
                  {/* Desktop: Link um Header */}
                  <TransitionLink
                    href={`/leistungen/${slugifyService(service.title)}`}
                    className="services-card__link services-card__link--desktop"
                    onFocus={() => handleActivate(index)}
                    aria-label={service.title}
                  >
                    <div className="services-card__header">
                      <span className="services-card__index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="services-card__title">{service.title}</h3>
                    </div>
                  </TransitionLink>

                  {/* Mobile: Header ohne Link */}
                  <div className="services-card__header services-card__header--mobile">
                    <span className="services-card__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="services-card__title">{service.title}</h3>
                  </div>

                  {/* Mobile: Description direkt unter der Karte */}
                  <div className="services__description-mobile">
                    <div className="services__description-block-mobile">
                      <div className="services__description-block-img">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={service.imageWidth}
                          height={service.imageHeight}
                          sizes="(max-width: 1100px) 100vw, 40vw"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="services__description-text">
                        <p>{service.description}</p>
                        <TransitionLink
                          href={`/leistungen/${slugifyService(service.title)}`}
                          className="services__description-link"
                        >
                          Mehr erfahren →
                        </TransitionLink>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="services__description">
            {services.map((service, index) => (
              <div
                key={`${service.title}-${index}`}
                className={`services__description-block ${
                  activeIndex === index ? "is-active" : ""
                } ${index >= visibleCount ? "hidden-services" : ""}`}
                ref={(el) => {
                  descRefs.current[index] = el;
                }}
              >
                <div className="services__description-block-img">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={service.imageWidth}
                    height={service.imageHeight}
                    sizes="(max-width: 1100px) 100vw, 40vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="services__description-text">
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
