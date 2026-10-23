"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  ["Our products", "#products"],
  ["About TeamX", "#about"],
  ["Our approach", "#approach"],
  ["FAQs", "#faq"],
  ["Let’s talk ↗", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 651px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);
  return (
    <header ref={header}>
      <div className="wrap nav">
        <a
          href="#top"
          className="logo"
          aria-label="TeamX home"
          onClick={() => setOpen(false)}
        >
          Team<b>X</b>
        </a>
        <button
          ref={toggle}
          className="menu"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close ×" : "Menu ☰"}
        </button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a
              href={href}
              key={href}
              className={href === "#contact" ? "nav-contact" : undefined}
            >
              {href === "#contact" ? (
                <>
                  Let’s talk <span>↗</span>
                </>
              ) : (
                label
              )}
            </a>
          ))}
        </nav>
      </div>
      <nav
        className={`mobile-nav${open ? " open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
