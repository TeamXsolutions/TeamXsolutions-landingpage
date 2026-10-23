import { ArrowDownRight, ArrowUpRight, CarFront, ClipboardList, WalletCards } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Header from "./site-header";
import ContactForm from "@/components/contact-form";
import SiteFooter from "@/components/site-footer";

const products = [
  {
    id: "xpense",
    name: "Xpense",
    category: "Personal finance",
    description:
      "Make transaction statements easier to understand. Xpense brings spending information into one clear view.",
    items: ["Transaction statements", "Spending categories", "A clearer financial picture"],
    accent: "xpense",
    icon: <WalletCards aria-hidden="true" />,
    visual: (
      <div className="concept xpense-concept" aria-label="Xpense product concept">
        <div className="concept-top"><span>XPENSE</span><span>PRODUCT CONCEPT</span></div>
        <div className="concept-sheet">
          <div className="sheet-heading"><span>Statement</span><span>Spending</span><span>Overview</span></div>
          <div className="sheet-lines" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="sheet-caption">Bring the details into focus</div>
        </div>
      </div>
    ),
  },
  {
    id: "fuelx",
    name: "FuelX",
    category: "Vehicle and fuel tracking",
    description:
      "Keep fuel, fill-ups, mileage, and vehicle details together to better understand the cost of a journey.",
    items: ["Fuel and fill-ups", "Vehicle mileage", "Journey history"],
    accent: "fuelx",
    icon: <CarFront aria-hidden="true" />,
    visual: (
      <div className="concept fuelx-concept" aria-label="FuelX product concept">
        <div className="concept-top"><span>FUELX</span><span>PRODUCT CONCEPT</span></div>
        <div className="journey-line" aria-hidden="true"><span /><i /><i /><i /><span /></div>
        <div className="journey-labels"><span>Fill up</span><span>Keep moving</span><span>Look back</span></div>
        <div className="vehicle-mark"><CarFront aria-hidden="true" /><span>Vehicle details, in one place</span></div>
      </div>
    ),
  },
  {
    id: "carex",
    name: "CareX",
    category: "Hospital operations",
    description:
      "Bring hospital workflows into one application, with role-specific access from admission through discharge.",
    items: ["Hospital operations", "Doctors, nurses, and staff", "The patient journey"],
    accent: "carex",
    icon: <ClipboardList aria-hidden="true" />,
    visual: (
      <div className="concept carex-concept" aria-label="CareX product concept">
        <div className="concept-top"><span>CAREX</span><span>PRODUCT CONCEPT</span></div>
        <div className="care-flow">
          <span>Admission</span><i aria-hidden="true" /><span>Care teams</span><i aria-hidden="true" /><span>Discharge</span>
        </div>
        <div className="care-roles"><span>Doctors</span><span>Nurses</span><span>Patients</span></div>
      </div>
    ),
  },
];

const faqs = [
  {
    question: "What is TeamX?",
    answer: "TeamX is a software company building focused products for everyday problems. The current products in development are Xpense, FuelX, and CareX.",
  },
  {
    question: "Can I use the products today?",
    answer: "Not yet. All three products are in development. The visuals on this page show product direction, not live software.",
  },
  {
    question: "When will they launch?",
    answer: "We haven’t announced launch dates. Email us about a product and we’ll share updates when we have them.",
  },
  {
    question: "How can I share feedback or discuss an idea?",
    answer: "Email teamxworkspaces@gmail.com. Tell us which product you’re interested in and what you think should work better.",
  },
];

const productFocus = [
  {
    id: "xpense",
    name: "Xpense",
    category: "Personal finance",
    title: "Make everyday spending easier to review.",
    description: "Bring transaction statements and spending categories into one view, so the details behind a purchase are easier to understand.",
    icon: <WalletCards aria-hidden="true" />,
  },
  {
    id: "fuelx",
    name: "FuelX",
    category: "Vehicle and fuel tracking",
    title: "Give vehicle costs more context.",
    description: "Keep fill-ups, mileage, and vehicle details together to make it easier to look back at the cost of using a vehicle.",
    icon: <CarFront aria-hidden="true" />,
  },
  {
    id: "carex",
    name: "CareX",
    category: "Hospital operations",
    title: "Keep operational work connected.",
    description: "Shape hospital workflows around the people doing the work, with role-specific access across the patient journey from admission to discharge.",
    icon: <ClipboardList aria-hidden="true" />,
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header homePage />
      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" />A practical software company</p>
            <h1>Useful software for the parts of life that need to work.</h1>
            <p className="hero-intro">
              TeamX builds focused apps for personal finances, vehicle costs, and hospital operations. Each product starts with a real job and keeps the rest out of the way.
            </p>
            <div className="hero-actions">
              <a href="#products" className={`${buttonVariants({ size: "lg" })} cta`}>
                Explore the products <ArrowDownRight aria-hidden="true" />
              </a>
              <a className={`${buttonVariants({ size: "lg", variant: "outline" })} cta cta-secondary`} href="mailto:teamxworkspaces@gmail.com">
                Talk to TeamX <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <aside className="focus-panel" aria-label="Current product focus">
            <div className="focus-heading"><span>Current product focus</span><span className="focus-count">03</span></div>
            {products.map((product) => (
              <a className={`focus-row ${product.accent}`} href={`#${product.id}`} key={product.id}>
                <span className="focus-icon">{product.icon}</span>
                <span className="focus-name">{product.name}<small>{product.category}</small></span>
                <ArrowUpRight className="focus-arrow" aria-hidden="true" />
              </a>
            ))}
            <p className="focus-note"><span className="status-dot" />All three products are in development</p>
          </aside>
          <div className="hero-rule"><span>Built around a clear purpose.</span><span>Designed to do the useful thing well.</span></div>
        </section>

        <section className="products-section section-pad" id="products">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-mark" />What we’re building</p>
                <h2>Three apps. Three everyday jobs.</h2>
              </div>
              <p className="section-summary">A clearer view of your spending. A better record of your journeys. More coordinated hospital work.</p>
            </div>
            <BentoGrid className="products-grid">
              {products.map((product) => (
                <BentoGridItem
                  as="article"
                  id={product.id}
                  key={product.id}
                  className={`product-card ${product.accent}`}
                  header={product.visual}
                  title={
                    <div className="product-body">
                      <div className="product-heading"><div><p>{product.category}</p><h3>{product.name}</h3></div><span className="product-status">In development</span></div>
                      <p className="product-description">{product.description}</p>
                      <ul className="product-list">{product.items.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                  }
                  description={
                    <a className="product-link" href={`mailto:teamxworkspaces@gmail.com?subject=${encodeURIComponent(`Tell me about ${product.name}`)}`}>
                      Ask about {product.name}<ArrowUpRight aria-hidden="true" />
                    </a>
                  }
                />
              ))}
            </BentoGrid>
            <p className="preview-note">These are product concepts. Features may change as development continues.</p>
          </div>
        </section>

        <section className="product-focus-section section-pad" id="product-focus">
          <div className="shell">
            <div className="product-focus-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-mark" />The job behind each app</p>
                <h2>Different work deserves purpose-built tools.</h2>
              </div>
              <p>TeamX products focus on a specific kind of work. Each is in development, with a clear job to do and room to improve as the details come into focus.</p>
            </div>
            <div className="product-focus-list">
              {productFocus.map((product) => (
                <article className={`product-focus-row ${product.id}`} key={product.id}>
                  <div className="product-focus-label">
                    <span className="product-focus-icon">{product.icon}</span>
                    <span><small>{product.category}</small><strong>{product.name}</strong></span>
                  </div>
                  <div className="product-focus-content">
                    <div><h3>{product.title}</h3><p>{product.description}</p></div>
                    <a href={`#${product.id}`}>See {product.name} <ArrowDownRight aria-hidden="true" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="shell approach-layout">
            <div className="approach-lead">
              <p className="eyebrow"><span className="eyebrow-mark" />How we work</p>
              <h2>If a feature can’t explain its job, it doesn’t make the cut.</h2>
              <p>Technology should take work off someone’s plate. We start with a real task, make the information easier to follow, and give each feature a clear reason to exist.</p>
            </div>
            <div className="principles">
              <article><span className="principle-index">A</span><div><h3>Start with the problem</h3><p>Understand what someone is trying to do and where useful details get lost in the current process.</p></div></article>
              <article><span className="principle-index">B</span><div><h3>Make the next step clear</h3><p>Use straightforward language, keep relevant information close, and make the path forward easy to see.</p></div></article>
              <article><span className="principle-index">C</span><div><h3>Improve what earns its place</h3><p>Refine the parts that help people do the work. Leave out the features that only make the product harder to use.</p></div></article>
            </div>
          </div>
        </section>

        <section className="careers-section section-pad" id="careers">
          <div className="shell careers-callout">
            <div>
              <p className="eyebrow"><span className="eyebrow-mark" />Careers at TeamX</p>
              <h2>Do useful work with people who care how it works.</h2>
            </div>
            <div className="careers-callout-copy">
              <p>We build focused software around real tasks in personal finance, vehicle costs, and hospital operations. If that kind of problem sounds worth solving, tell us what you could bring to the work.</p>
              <a className={`${buttonVariants({ size: "lg", variant: "outline" })} cta cta-secondary`} href="/careers">More about careers <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="shell faq-layout">
            <div className="faq-heading">
              <p className="eyebrow"><span className="eyebrow-mark" />A few clear answers</p>
              <h2>Before you ask.</h2>
              <p>Still have a question? <a href="mailto:teamxworkspaces@gmail.com">Email the team <ArrowUpRight aria-hidden="true" /></a></p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-panel">
            <div><p className="eyebrow"><span className="eyebrow-mark" />Get in touch</p><h2>Tell us what needs to work better.</h2><p>Questions, feedback, or an idea worth building? Send us a note.</p><p className="contact-email-fallback">Prefer email? <a href="mailto:teamxworkspaces@gmail.com?subject=Hello%20TeamX">teamxworkspaces@gmail.com</a></p></div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter homePage />
    </>
  );
}
