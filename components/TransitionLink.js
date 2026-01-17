"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { useTransitionContext } from "./TransitionProvider";

export default function TransitionLink({ href, children, className, ...rest }) {
  const router = useRouter();
  const { setPlayHomeIntro } = useTransitionContext();

  const handleTransition = async (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    e.preventDefault();

    const target = href.toString ? href.toString() : href;
    setPlayHomeIntro(false);

    // Get overlay elements
    const first = document.querySelector(".page-transition");
    const second = document.querySelector(".page-transition-second");

    if (!first || !second) {
      router.push(target);
      return;
    }

    // Orange curtains run through from top to bottom (smooth, no stop)
    gsap.fromTo(
      first,
      { y: "-100%" },
      { y: "100%", duration: 1.5, ease: "power4.inOut" },
    );
    gsap.fromTo(
      second,
      { y: "-100%" },
      { y: "100%", duration: 1.5, delay: 0.1, ease: "power4.inOut" },
    );

    // Navigate while curtain is in the middle (screen covered)
    setTimeout(() => {
      router.push(target);
    }, 750); // Navigate when curtain is covering screen

    // Wait for curtains to complete their run
    await new Promise((resolve) => setTimeout(resolve, 1600));

    // Reset overlays for next transition
    gsap.set([first, second], { y: "-100%" });
  };

  return (
    <Link
      {...rest}
      href={href}
      className={className}
      onClick={handleTransition}
    >
      {children}
    </Link>
  );
}
