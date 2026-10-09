"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setMessage("");
    setSent(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          companyWebsite: formData.get("companyWebsite"),
        }),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      form.reset();
      setSent(true);
      setMessage("Thanks for reaching out. Your message is on its way.");
    } catch {
      setSent(false);
      setMessage("We couldn't send your message just now. Please try again in a moment.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-fields">
        <label className="contact-field">
          Your name
          <input name="name" type="text" autoComplete="name" maxLength={100} required />
        </label>
        <label className="contact-field">
          Email address
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
      </div>
      <label className="contact-field">
        What would you like to talk about?
        <textarea name="message" rows={4} maxLength={5000} required />
      </label>
      <div className="contact-honeypot" aria-hidden="true">
        <label>Website<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="contact-submit-row">
        <button className="button button-dark" type="submit" disabled={isSending}>
          {isSending ? "Sending…" : "Send your message"}<span aria-hidden="true" className="arrow">↗</span>
        </button>
        <p className={`contact-feedback${sent ? " contact-success" : ""}`} aria-live="polite">
          {message}
        </p>
      </div>
    </form>
  );
}
