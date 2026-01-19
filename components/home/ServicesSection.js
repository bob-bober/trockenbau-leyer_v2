"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "Planning",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img1.jpg",
    description:
      "Our planning services establish a strategic framework for successful projects, ensuring that every phase from conception to completion aligns with the client's vision and goals. We create comprehensive timelines and development strategies that guide the project efficiently through all stages.",
  },
  {
    title: "Feasibility Study",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img2.jpg",
    description:
      "We conduct thorough feasibility studies to assess the viability of proposed projects. This includes evaluating site conditions, market demands, financial implications, and regulatory constraints, providing clients with informed insights to make strategic decisions.",
  },
  {
    title: "Site Analysis",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img3.jpg",
    description:
      "Our site analysis examines the physical, environmental, and contextual factors of a location. By understanding topography, climate, and surrounding infrastructure, we ensure that designs harmonize with their surroundings and maximize potential.",
  },
  {
    title: "Masterplans",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img4.jpg",
    description:
      "Our masterplanning services provide a comprehensive vision for large-scale developments. We analyze land use, infrastructure, and community needs to create cohesive, sustainable plans that guide future growth while enhancing the overall quality of life for residents and users.",
  },
  {
    title: "Code Analysis",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img5.jpg",
    description:
      "We perform detailed code analysis to ensure compliance with local building regulations and zoning laws. This process mitigates risks and guarantees that our designs meet safety standards and legal requirements, facilitating smoother project approvals.",
  },
  {
    title: "Program of Spaces",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img6.jpg",
    description:
      "The program of spaces outlines the functional requirements and desired characteristics of each area within a project. We work closely with clients to define their needs, ensuring that the final design aligns seamlessly with their vision and operational goals.",
  },
  {
    title: "Space Planning",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img7.jpg",
    description:
      "Our space planning services optimize the layout and flow of interior environments. We focus on creating functional, efficient spaces that enhance user experience while maximizing the potential of each area.",
  },
];

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
            EXPERTISE
          </h2>
          <div className="services__descr text-block">
            <p>
              Raine blends the agility of a boutique studio with the depth and
              confidence of a seasoned firm. We deliver bold, expressive design
              anchored by decades of expertise.
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
                  onMouseEnter={() => handleActivate(index)}
                  onFocus={() => handleActivate(index)}
                  onClick={() => handleActivate(index)}
                  tabIndex={0}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                >
                  <div className="services-card__header">
                    <span className="services-card__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="services-card__title">{service.title}</h3>
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
                  <img src={service.image} alt={service.title} />
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
