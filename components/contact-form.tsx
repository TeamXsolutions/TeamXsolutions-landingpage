"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type FormState = { kind: "idle" | "success" | "error"; message: string };

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [state, setState] = useState<FormState>({ kind: "idle", message: "" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const values = new FormData(form);
    setSending(true);
    setState({ kind: "idle", message: "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(values.entries())),
      });
      const result = (await response.json()) as { message?: string };
      setState({
        kind: response.ok ? "success" : "error",
        message: result.message ?? "We couldn’t send that message. Please email TeamX directly.",
      });
      if (response.ok) form.reset();
    } catch {
      setState({ kind: "error", message: "We couldn’t reach the server. Please email TeamX directly." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-row">
        <label className="contact-field">Your name
          <input name="name" autoComplete="name" maxLength={100} required />
        </label>
        <label className="contact-field">Email address
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
      </div>
      <label className="contact-field">What is this about?
        <select name="topic" defaultValue="General question">
          <option>General question</option>
          <option>Xpense</option>
          <option>FuelX</option>
          <option>CareX</option>
          <option>Partnership</option>
        </select>
      </label>
      <label className="contact-field">Your message
        <textarea name="message" minLength={10} maxLength={2000} required />
      </label>
      <label className="contact-honeypot" aria-hidden="true">Leave this field empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="cta" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send your message"} <ArrowUpRight aria-hidden="true" />
      </button>
      <p className="contact-status" data-kind={state.kind} role="status" aria-live="polite">{state.message}</p>
    </form>
  );
}
