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
  {
    title: "Conceptual Design",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img8.jpg",
    description:
      "In the conceptual design phase, we translate ideas into tangible sketches and models, exploring various design themes and aesthetics. This iterative process allows us to refine concepts based on client feedback, ensuring alignment with their vision.",
  },
  {
    title: "Residential Architecture",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img9.jpg",
    description:
      "We specialize in residential architecture, creating personalized homes that reflect our clients' lifestyles and preferences. Our designs focus on comfort, functionality, and aesthetic appeal, resulting in spaces that families cherish for years.",
  },
  {
    title: "Commercial Architecture",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img10.jpg",
    description:
      "Our commercial architecture services cater to businesses seeking innovative and practical solutions. We design spaces that enhance productivity and brand identity, ensuring a functional environment that meets the needs of both clients and employees.",
  },
  {
    title: "Multifamily Architecture",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img11.jpg",
    description:
      "We excel in multifamily architecture, creating harmonious living environments that promote community while maintaining individual privacy. Our designs prioritize efficient use of space and sustainable practices, catering to diverse lifestyles.",
  },
  {
    title: "Storage Facilities",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img12.jpg",
    description:
      "We design storage facilities that maximize efficiency and accessibility while prioritizing security and functionality. Our approach focuses on creating versatile spaces that cater to various storage needs, ensuring that clients receive tailored solutions for their operational requirements.",
  },
  {
    title: "Civic / Municipal",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img13.jpg",
    description:
      "Our civic and municipal architecture focuses on public buildings that serve communities effectively. We prioritize accessibility, sustainability, and aesthetic appeal, ensuring that these structures enhance civic engagement and reflect community values.",
  },
  {
    title: "Project Management",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img14.jpg",
    description:
      "Our project management team oversees every aspect of a project, ensuring that timelines, budgets, and quality standards are met. We serve as the central point of communication, coordinating all stakeholders to deliver successful outcomes.",
  },
  {
    title: "Cost Estimating",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img15.jpg",
    description:
      "We provide precise cost estimating services to help clients understand the financial implications of their projects. Our detailed estimates guide budgeting decisions and ensure that projects remain financially feasible throughout the development process.",
  },
  {
    title: "Interior Design",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img16.jpg",
    description:
      "Our interior design services create cohesive and inviting interiors that reflect our clients' tastes and enhance functionality. We select materials, colors, and furnishings that harmonize with the overall design, creating spaces that inspire and comfort.",
  },
  {
    title: "Furniture, Fixtures, and Equipment",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img17.jpg",
    description:
      "We assist in the selection and specification of furniture, fixtures, and equipment (FF&E) to complement our designs. Our expertise ensures that every element is functional, aesthetically pleasing, and aligned with the overall vision of the project.",
  },
  {
    title: "Archviz Renders and Animations",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img18.jpg",
    description:
      "Our architectural visualization services provide 3D renders and animations that bring designs to life. These visual tools help clients visualize the final outcome, facilitating better decision-making and enhancing presentations.",
  },
  {
    title: "BIM Management",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img19.jpg",
    description:
      "We utilize Building Information Modeling to enhance collaboration and efficiency throughout the design and construction process. Our BIM management services streamline workflows, improve accuracy, and foster communication among all project stakeholders.",
  },
  {
    title: "Architecture Production & Coordination",
    image:
      "https://rainearchitects.com/wp-content/themes/arc/assets/images/services-img20.jpg",
    description:
      "Our architecture production and coordination services ensure that all drawings and documents are meticulously prepared and aligned. We manage the integration of different disciplines, facilitating a cohesive approach to project delivery and reducing potential conflicts.",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);
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

  const showAllServices = () => {
    setVisibleCount(services.length);
  };

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
            {visibleCount < services.length ? (
              <button
                type="button"
                className="services-btn"
                onClick={showAllServices}
              >
                More
              </button>
            ) : null}
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
