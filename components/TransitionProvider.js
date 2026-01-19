"use client";

import { createContext, useContext, useMemo, useState } from "react";

const TransitionContext = createContext({
  playHomeIntro: true,
  setPlayHomeIntro: () => {},
});

export function TransitionProvider({ children }) {
  const [playHomeIntro, setPlayHomeIntro] = useState(true);

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
