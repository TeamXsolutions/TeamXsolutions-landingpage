import { Resend } from "resend";

export const runtime = "nodejs";

type ContactMessage = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

export async function POST(request: Request) {
  let body: ContactMessage;

  try {
    body = await request.json() as ContactMessage;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept bot submissions without sending mail.
  if (typeof body.companyWebsite === "string" && body.companyWebsite.trim()) {
    return Response.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    !name || name.length > 100 ||
    !email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !message || message.length > 5000
  ) {
    return Response.json({ error: "Please check your name, email, and message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return Response.json({ error: "Email is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: sender,
    to: [recipient],
    replyTo: email,
    subject: "New message from the TeamX website",
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return Response.json({ error: "Your message could not be sent." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
