"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function PageTransitionOverlays() {
  useEffect(() => {
    // Ensure overlays are positioned correctly on mount
    gsap.set([".page-transition", ".page-transition-second"], { y: "-100%" });
  }, []);

  return (
    <>
      <div className="page-transition" aria-hidden="true" />
      <div className="page-transition-second" aria-hidden="true" />
    </>
  );
}
