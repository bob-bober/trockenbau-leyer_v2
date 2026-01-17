import { useEffect, useRef } from "react";

const sections = [
  {
    title: "Experience",
    image: "http://localhost:3845/assets/e38383a9f0f8b8735d05e98213a64730a8df8c82.png",
    paragraphs: [
      "With over 15 years of experience in architecture, I have cultivated a rich and diverse portfolio that spans residential, commercial, storage facilities, multifamily and civic projects.",
      "My journey began with a Bachelor of Architecture from the University of Texas at San Antonio (UTSA), where I developed a solid foundation in design principles and sustainable practices.",
      "I further enhanced my expertise by earning a Master of Science in Information Technology from the University of Texas Rio Grande Valley (UTRGV), which allows me to seamlessly integrate technology into my architectural solutions.",
      "Throughout my career, I have collaborated with clients and stakeholders to create functional and beautiful buildings, always striving for excellence in every project.",
    ],
  },
  {
    title: "Vision",
    image: "http://localhost:3845/assets/b1a621d48c5b2dcc93c1897535a5f84a6f491d6a.png",
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
    image: "http://localhost:3845/assets/3c94f88eac4801d126f11919a54369528fed1f23.png",
    paragraphs: [
      "From concept to implementation, architecture means embracing a wide variety of projects, styles, and challenges, each contributing to a richer understanding of the built environment.",
      "My experience spans with each project presenting unique challenges that require innovative solutions tailored to specific contexts and cultural nuances.",
      "Navigating these varied challenges enhances my creative problem-solving skills and fosters an inclusive design approach.",
      "By integrating diverse perspectives and ideas, I aim to create spaces that are not only functional but also resonate with the communities they serve, ultimately enriching the human experience in the built environment.",
    ],
  },
];

export default function ExperienceVisionSection() {
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add("advantages-active");
    }
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return;
    }

    const cards = wrapper.querySelectorAll(".advantages-block");
    if (!cards.length) {
      return;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("advantages-block-active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            entry.target.classList.add("advantages-block-active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="advantages" ref={sectionRef}>
      <div className="container">
        <div className="advantages__wrapper" ref={wrapperRef}>
          {sections.map((section) => (
            <div className="advantages-block" key={section.title}>
              <h2>{section.title}</h2>
              <img src={section.image} alt={`${section.title} imagery`} />
              <div className="advantages-block__description">
                <div className="text-block text-block--static">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
