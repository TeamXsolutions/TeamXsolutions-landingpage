import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 12_000;
const topics = new Set(["General question", "Xpense", "FuelX", "CareX", "Partnership"]);
const WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT = 5;
const MAX_RATE_KEYS = 2_000;
const attempts = new Map<string, { count: number; expiresAt: number }>();

function json(message: string, status: number) {
  return Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
}

async function readBoundedJson(request: Request): Promise<unknown | null> {
  const reader = request.body?.getReader();
  if (!reader) return null;
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (chunks.length >= 128) {
        await reader.cancel();
        return null;
      }
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    return JSON.parse(new TextDecoder().decode(bytes)) as unknown;
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
}

function limited(ip: string, now: number) {
  const current = attempts.get(ip);
  if (!current || current.expiresAt <= now) {
    if (attempts.size >= MAX_RATE_KEYS) {
      for (const [key, entry] of attempts) {
        if (entry.expiresAt <= now) attempts.delete(key);
      }
      if (attempts.size >= MAX_RATE_KEYS) attempts.delete(attempts.keys().next().value!);
    }
    attempts.set(ip, { count: 1, expiresAt: now + WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json("Send this form as JSON.", 415);
  }
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return json("This request could not be verified.", 403);

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) return json("Your message is too large.", 413);
  const payload = await readBoundedJson(request);
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return json("Please check the form and try again.", 400);

  const data = payload as Record<string, unknown>;
  if (typeof data.website === "string" && data.website.length > 0) {
    return json("Thanks. Your message has been received.", 200);
  }
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const topic = typeof data.topic === "string" ? data.topic : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  if (name.length < 1 || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !topics.has(topic) || message.length < 10 || message.length > 2000) {
    return json("Please provide a valid name, email, topic, and a message between 10 and 2,000 characters.", 400);
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",", 1)[0]?.trim();
  const ip = request.headers.get("x-real-ip")?.trim() || forwardedFor || "unknown";
  if (limited(ip, Date.now())) return json("Too many messages were submitted. Please try again later.", 429);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return json("The contact form is not configured yet. Please email teamxworkspaces@gmail.com directly.", 503);
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: `TeamX Website <${from}>`,
      to: ["teamxworkspaces@gmail.com"],
      replyTo: email,
      subject: `TeamX website: ${topic}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    });
    if (result.error) return json("We couldn’t send your message. Please email TeamX directly.", 502);
    return json("Thanks for reaching out. Your message has been sent.", 200);
  } catch {
    return json("We couldn’t send your message. Please email TeamX directly.", 502);
  }
}
