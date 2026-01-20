import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message, telefon } = await request.json();

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bitte fülle alle Pflichtfelder aus" },
        { status: 400 },
      );
    }

    // Email senden
    const { data, error } = await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: "nigelkaya@gmail.com",
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${telefon ? `<p><strong>Telefon:</strong> ${telefon}</p>` : ""}
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { error: "Fehler beim Senden der Email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Nachricht erfolgreich gesendet!", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Interner Server-Fehler" },
      { status: 500 },
    );
  }
}
