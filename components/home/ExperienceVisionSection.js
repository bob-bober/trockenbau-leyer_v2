"use client";

import { useEffect, useRef } from "react";

const sections = [
  {
    title: "Experience",
    image:
      "http://localhost:3845/assets/e38383a9f0f8b8735d05e98213a64730a8df8c82.png",
    paragraphs: [
      "With over 15 years of experience in architecture, I have cultivated a rich and diverse portfolio that spans residential, commercial, storage facilities, multifamily and civic projects.",
      "My journey began with a Bachelor of Architecture from the University of Texas at San Antonio (UTSA), where I developed a solid foundation in design principles and sustainable practices.",
      "I further enhanced my expertise by earning a Master of Science in Information Technology from the University of Texas Rio Grande Valley (UTRGV), which allows me to seamlessly integrate technology into my architectural solutions.",
      "Throughout my career, I have collaborated with clients and stakeholders to create functional and beautiful buildings, always striving for excellence in every project.",
    ],
  },
  {
    title: "Vision",
    image:
      "http://localhost:3845/assets/b1a621d48c5b2dcc93c1897535a5f84a6f491d6a.png",
    paragraphs: [
      "My vision as an architect is to create spaces that inspire and enhance the quality of life for their users.",
      "I believe that architecture should not only be functional but also resonate with the community and environment it inhabits.",
      "By merging innovative design with sustainable practices, I aim to push the boundaries of what is possible in architecture.",
      "My goal is to craft spaces that foster connection and well-being, reflecting the unique needs and aspirations of the people who inhabit them.",
      "I approach each project with a fresh perspective, eager to explore new ideas that elevate the built environment.",
    ],
  },
  {
    title: "Diversity",
    image:
      "http://localhost:3845/assets/3c94f88eac4801d126f11919a54369528fed1f23.png",
    paragraphs: [
      "From concept to implementation, architecture means embracing a wide variety of projects, styles, and challenges, each contributing to a richer understanding of the built environment.",
      "My experience spans with each project presenting unique challenges that require innovative solutions tailored to specific contexts and cultural nuances.",
      "Navigating these varied challenges enhances my creative problem-solving skills and fosters an inclusive design approach.",
      "By integrating diverse perspectives and ideas, I aim to create spaces that are not only functional but also resonate with the communities they serve, ultimately enriching the human experience in the built environment.",
    ],
  },
];

export default function ExperienceVisionSection() {
  const blockRefs = useRef([]);

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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activateBlock(entry.target);
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
              <img
                src={section.image}
                alt={section.title}
                className="experience-block__image"
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
