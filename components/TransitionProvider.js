"use client";

import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

const TransitionContext = createContext({
	playHomeIntro: true,
	setPlayHomeIntro: () => {},
});

export function TransitionProvider({ children }) {
	const [playHomeIntro, setPlayHomeIntro] = useState(true);

	useEffect(() => {
		if (typeof performance === "undefined") return;
		const navEntries = performance.getEntriesByType("navigation");
		const navType = navEntries && navEntries[0] ? navEntries[0].type : "navigate";
		setPlayHomeIntro(navType === "reload");
	}, []);

	const value = useMemo(
		() => ({
			playHomeIntro,
			setPlayHomeIntro,
		}),
		[playHomeIntro],
	);

	return <TransitionContext.Provider value={value}>{children}</TransitionContext.Provider>;
}

export function useTransitionContext() {
	return useContext(TransitionContext);
}
