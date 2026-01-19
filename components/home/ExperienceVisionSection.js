"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const sections = [
  {
    title: "EXPERTISE",
    image: "/images/home_usp1.jpg",
    imageAlt: "Expertise",
    paragraphs: [
      "Wir verbinden technische Erfahrung mit einem klaren Verständnis für Akustik, Konstruktion und Gestaltung.",
      "Jede Lösung entsteht auf Basis eines strukturierten Planungsprozesses, der Architektur, Statik, Brandschutz und Ausführung frühzeitig verbindet.",
      "So entstehen Innenräume, die funktional abgestimmt und technisch nachvollziehbar sind.",
    ],
  },
  {
    title: "PRÄZISION",
    image: "/images/home_usp2.jpg",
    imageAlt: "Präzision",
    paragraphs: [
      "Unsere Arbeitsweise folgt klar definierten Prozessen: dokumentiert, koordiniert und auf langfristige Stabilität ausgelegt.",
      "Schnittstellen sind abgestimmt, Details durchdacht.",
      "Das Ergebnis sind termingerechte Umsetzungen mit technisch geprüfter Ausführung und dauerhaft sauberem Bestand.",
    ],
  },
  {
    title: "VERTRAUEN",
    image: "/images/home_usp3.jpg",
    imageAlt: "Vertrauen",
    paragraphs: [
      "Wir begleiten Projekte partnerschaftlich und verbindlich.",
      "Klare Kommunikation, realistische Zeitpläne und konsequent abgestimmte Entscheidungen prägen unseren Umgang mit Auftraggebern und Gewerken.",
      "So entstehen Lösungen, die wirtschaftlich sinnvoll, technisch solide und gestalterisch konsistent sind.",
    ],
  },
];

export default function ExperienceVisionSection() {
  const blockRefs = useRef([]);
  const scrollDirectionRef = useRef("down");
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const blocks = blockRefs.current;

    const activateBlock = (block) => {
      if (block) {
        block.classList.add("experience-block-active");
      }
    };

    const activateInitialBlock = () => {
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      blocks.forEach((block, index) => {
        if (!block) {
          return;
        }

        const rect = block.getBoundingClientRect();
        const isComfortablyVisible =
          rect.top >= 0 &&
          rect.top <= viewportHeight * 0.35 &&
          rect.bottom >= viewportHeight * 0.35;

        if ((index === 0 && window.scrollY === 0) || isComfortablyVisible) {
          activateBlock(block);
        }
      });
    };

    if (typeof window === "undefined" || !window.IntersectionObserver) {
      blocks.forEach(activateBlock);
      return;
    }

    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current) {
        scrollDirectionRef.current = "down";
      } else if (currentScrollY < lastScrollYRef.current) {
        scrollDirectionRef.current = "up";
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (scrollDirectionRef.current === "up") {
              entry.target.classList.remove("experience-block-active");
            } else {
              activateBlock(entry.target);
            }
          } else {
            entry.target.classList.remove("experience-block-active");
          }
        });
      },
      {
        threshold: 0.65,
        rootMargin: "-10% 0px -20% 0px",
      },
    );

    blocks.forEach((block) => {
      if (!block) {
        return;
      }
      observer.observe(block);
    });

    if (window.scrollY > 0) {
      requestAnimationFrame(activateInitialBlock);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      blocks.forEach((block) => {
        if (block) observer.unobserve(block);
      });
    };
  }, []);

  return (
    <section className="experience-vision-section">
      <div className="experience-vision-wrapper">
        {sections.map((section, index) => (
          <div
            key={section.title}
            ref={(el) => (blockRefs.current[index] = el)}
            className="experience-block"
          >
            <h2 className="experience-block__title">{section.title}</h2>
            <div className="experience-block__image-wrapper">
              <Image
                src={section.image}
                alt={section.imageAlt ?? section.title}
                className="experience-block__image"
                width={600}
                height={800}
                sizes="(max-width: 1100px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="experience-block__text">
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
