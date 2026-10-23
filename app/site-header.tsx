"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const links = [
  ["Our products", "products"],
  ["Product focus", "product-focus"],
  ["How we work", "approach"],
  ["Careers", "careers"],
  ["FAQs", "faq"],
  ["Let’s talk", "contact"],
];

export default function Header({ homePage = false }: { homePage?: boolean }) {
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
      <div className="shell nav">
        <a
          href={homePage ? "#top" : "/#top"}
          className="logo"
          aria-label="TeamX home"
          onClick={() => setOpen(false)}
        >
          Team<Image className="logo-mark" src="/teamx-logo.png" width={32} height={32} alt="" />
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
          {links.map(([label, section]) => {
            const href = section === "careers" ? "/careers" : `${homePage ? "" : "/"}#${section}`;
            return (
            <a
              href={href}
              key={href}
              className={section === "contact" ? "nav-contact" : undefined}
            >
              {section === "contact" ? (
                <>
                  Let’s talk <span>↗</span>
                </>
              ) : (
                label
              )}
            </a>
            );
          })}
        </nav>
      </div>
      <nav
        className={`mobile-nav${open ? " open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map(([label, section]) => {
          const href = section === "careers" ? "/careers" : `${homePage ? "" : "/"}#${section}`;
          return <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        })}
      </nav>
    </header>
  );
}
