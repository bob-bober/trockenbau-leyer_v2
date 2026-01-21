"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BodyClassController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (pathname === "/") {
      root.classList.add("is-home");
      document.body.classList.add("is-home");
    } else {
      root.classList.remove("is-home");
      document.body.classList.remove("is-home");
    }
  }, [pathname]);

  return null;
}
