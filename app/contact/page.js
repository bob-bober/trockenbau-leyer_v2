"use client";

import TransitionLink from "../../components/TransitionLink";

export default function ContactPage() {
	return (
		<div style={{ 
			padding: "120px 48px", 
			minHeight: "100vh",
			background: "#fff"
		}}>
			<h1 style={{
				fontSize: "48px",
				marginBottom: "24px",
				fontWeight: "bold"
			}}>Contact Page</h1>
			<p style={{
				fontSize: "18px",
				lineHeight: "1.6",
				marginBottom: "32px",
				maxWidth: "600px"
			}}>Dies ist die Contact-Seite zum Testen der Page Transition. Der Inhalt sollte nach der Vorhang-Animation sichtbar werden.</p>
			<TransitionLink 
				href="/"
				style={{
					display: "inline-block",
					padding: "12px 24px",
					background: "#000",
					color: "#fff",
					textDecoration: "none",
					borderRadius: "4px",
					fontWeight: "500"
				}}
			>
				← Zurück zur Startseite
			</TransitionLink>
		</div>
	);
}
