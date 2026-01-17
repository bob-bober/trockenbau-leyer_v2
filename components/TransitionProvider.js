"use client";

import { createContext, useContext, useMemo, useState } from "react";

const TransitionContext = createContext({
  playHomeIntro: true,
  setPlayHomeIntro: () => {},
});

export function TransitionProvider({ children }) {
  // Calculate initial value directly, avoiding setState in effect
  const [playHomeIntro, setPlayHomeIntro] = useState(() => {
    if (typeof performance === "undefined") return true;
    const navEntries = performance.getEntriesByType("navigation");
    const navType =
      navEntries && navEntries[0] ? navEntries[0].type : "navigate";
    return navType === "reload";
  });

  const value = useMemo(
    () => ({
      playHomeIntro,
      setPlayHomeIntro,
    }),
    [playHomeIntro],
  );

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransitionContext() {
  return useContext(TransitionContext);
}
