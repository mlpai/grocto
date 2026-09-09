import { NextResponse } from "next/server";
import { getMailer, mailDefaults } from "@/lib/mail";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (clean(body.company, 80)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 100);
    const email = clean(body.email, 120).toLowerCase();
    const topic = clean(body.topic, 120) || "General";
    const message = String(body.message ?? "")
      .trim()
      .slice(0, 4000);

    if (name.length < 2 || !emailPattern.test(email) || message.length < 10) {
      return NextResponse.json(
        { error: "Please enter your name, a valid email, and a message." },
        { status: 400 },
      );
    }

    const { from, to } = mailDefaults();
    const subject = `Grocto website: ${topic}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${topic}`,
      "",
      message,
    ].join("\n");

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.5;color:#080828">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `;

    const mailer = getMailer();
    await mailer.sendMail({
      from: `"Grocto Website" <${from}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true, inbox: siteConfig.email });
  } catch (error) {
    console.error("Contact email failed");
    return NextResponse.json(
      {
        error:
          error instanceof Error && error.message.startsWith("Missing ")
            ? "Email is not configured on the server yet."
            : "We could not send your message. Please email us directly.",
      },
      { status: 500 },
    );
  }
}
