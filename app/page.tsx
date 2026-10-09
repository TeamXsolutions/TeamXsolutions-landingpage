import Image from "next/image";
import ContactForm from "./contact-form";

const products = [
  {
    id: "xpense",
    number: "01",
    name: "Xpense",
    category: "PERSONAL FINANCE",
    accent: "mint",
    description:
      "Bring your transactions into focus. Upload a statement to explore your spending and get AI-generated insights from the details.",
    visual: "finance",
  },
  {
    id: "fuelx",
    number: "02",
    name: "FuelX",
    category: "MOBILITY",
    accent: "blue",
    description:
      "Keep an eye on every journey. Track vehicles, fuel and mileage in one place to understand how your vehicles are performing.",
    visual: "fuel",
  },
  {
    id: "carex",
    number: "03",
    name: "CareX",
    category: "HEALTHCARE OPERATIONS",
    accent: "peach",
    description:
      "Make hospital operations easier to follow, with connected details for doctors, nurses and staff—from patient records to admission and discharge.",
    visual: "care",
  },
];

function Mark() {
  return (
    <a className="brand" href="#top" aria-label="TeamX home">
      <Image className="brand-logo" src="/teamx-logo.png" alt="" width={42} height={42} priority />
      <span>Team<span className="brand-x">X</span></span>
    </a>
  );
}

function ProductVisual({ type }: { type: string }) {
  if (type === "finance") {
    return (
      <div className="product-art finance-art" aria-hidden="true">
        <div className="mini-window">
          <div className="mini-top"><span /><span /><span /><b>Overview</b><em>•••</em></div>
          <div className="mini-label">TOTAL SPENDING <span>↗</span></div>
          <div className="mini-amount">₹ 24,680<span>.00</span></div>
          <div className="mini-rule" />
          <div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="chart-months"><span>W1</span><span>W2</span><span>W3</span><span>W4</span></div>
        </div>
        <div className="art-note finance-note"><span className="note-dot" /> Your month, in focus</div>
        <span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" />
      </div>
    );
  }
  if (type === "fuel") {
    return (
      <div className="product-art fuel-art" aria-hidden="true">
        <div className="fuel-ring"><span className="ring-label">EFFICIENCY</span><strong>18.4</strong><small>km / L</small><span className="ring-spark">↗</span></div>
        <div className="fuel-route"><div className="route-line" /><span className="route-start">A</span><span className="route-end">B</span><div className="route-caption"><b>Every trip adds up.</b><small>Built around your vehicle</small></div></div>
        <div className="fuel-chip">⌁ &nbsp; Vehicle log</div>
      </div>
    );
  }
  return (
    <div className="product-art care-art" aria-hidden="true">
      <div className="care-sidebar"><span className="care-symbol">✳</span><i /><i /><i /><i /></div>
      <div className="care-board">
        <div className="care-head"><span>Care overview</span><small>Today&nbsp; · &nbsp;All units</small></div>
        <div className="care-stat-row"><div><small>Care teams</small><b>In sync</b></div><div className="care-avatar-stack"><i>DR</i><i>NS</i><i>+</i></div></div>
        <div className="care-patient"><span className="patient-avatar">A</span><div><b>Patient record</b><small>Admission details</small></div><span className="patient-status">Active</span></div>
        <div className="care-patient"><span className="patient-avatar patient-two">R</span><div><b>Care plan</b><small>Discharge summary</small></div><span className="patient-arrow">↗</span></div>
      </div>
      <div className="care-bubble">⌕ <span>Every detail, connected</span></div>
    </div>
  );
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <Mark />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#products">Products</a><a href="#about">About us</a><a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="#contact">Let’s talk <Arrow diagonal /></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> BUILDING PRACTICAL DIGITAL PRODUCTS</div>
          <h1>Thoughtful tech<br />for <span>everyday</span> life.</h1>
          <p className="hero-copy">We’re TeamX. We build focused digital products that make the important things a little easier to manage.</p>
          <a className="button button-dark" href="#products">Meet our products <Arrow /></a>
          <div className="hero-foot"><span>DESIGNED AROUND REAL LIFE</span><span className="hero-foot-line" /><span>01 — 03</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of three connected TeamX products">
          <div className="hero-art-grid" />
          <svg className="constellation" viewBox="0 0 660 560" fill="none" aria-hidden="true">
            <path d="M166 134 351 260 495 107M351 260l112 178" stroke="currentColor" strokeOpacity=".23" strokeWidth="1.5" strokeDasharray="4 8" />
            <circle cx="166" cy="134" r="64" fill="#E8F5EF" /><circle cx="166" cy="134" r="51" fill="#fff" />
            <circle cx="351" cy="260" r="83" fill="#E9EEFF" /><circle cx="351" cy="260" r="67" fill="#fff" />
            <circle cx="495" cy="107" r="48" fill="#FFF0E8" /><circle cx="495" cy="107" r="37" fill="#fff" />
            <circle cx="463" cy="438" r="40" fill="#F1EDFF" /><circle cx="463" cy="438" r="31" fill="#fff" />
            <path d="M149 139c7-17 26-28 43-19 18 9 19 33 2 43-17 10-39-1-39-20" stroke="#287A5E" strokeWidth="5" strokeLinecap="round" />
            <path d="M328 278v-40h46v40m-55-1h64m-55-31h46" stroke="#4268D5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M486 99h18v21h-18zm-9 0h36m-29-9h22" stroke="#D8754D" strokeWidth="3" strokeLinecap="round" />
            <path d="M452 439h23m-11-11v23" stroke="#7666B2" strokeWidth="4" strokeLinecap="round" />
            <circle cx="211" cy="299" r="5" fill="#4268D5" /><circle cx="540" cy="284" r="4" fill="#D8754D" /><circle cx="275" cy="91" r="4" fill="#287A5E" />
          </svg>
          <div className="hero-tag tag-xpense"><span className="tag-icon tag-mint">x</span><span><b>Xpense</b><small>Money, made clearer</small></span></div>
          <div className="hero-tag tag-fuel"><span className="tag-icon tag-blue">f</span><span><b>FuelX</b><small>Move with insight</small></span></div>
          <div className="hero-tag tag-care"><span className="tag-icon tag-peach">c</span><span><b>CareX</b><small>Care, connected</small></span></div>
          <div className="hero-caption">A little more clarity,<br />wherever it matters.</div>
        </div>
        <a className="scroll-cue" href="#products"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="products-section section-pad" id="products">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="eyebrow-line" /> OUR PRODUCT PORTFOLIO</div><h2>Three ideas.<br /><span>Made for real life.</span></h2></div>
          <p>Different parts of the day call for different tools. Our first products are being built around the details that make each one matter. The previews below are illustrative concepts; all three products are in development.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className={`product-card ${product.accent}`} id={product.id} key={product.id}>
              <ProductVisual type={product.visual} />
              <div className="product-info">
                <div className="product-overline"><span>{product.category}</span><span>{product.number}</span></div>
                <div className="product-title-row"><h3>{product.name}<span className="product-x">X</span></h3><span className="launch-pill"><i /> LAUNCHING SOON</span></div>
                <p>{product.description}</p>
                <a href="mailto:teamxworkspaces@gmail.com?subject=TeamX%20product%20updates" className="product-link">Ask us about {product.name}<Arrow diagonal /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-ornament" aria-hidden="true"><span>tx</span><i /><i /><i /></div>
        <div className="about-copy">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A LITTLE ABOUT US</div>
          <h2>Technology should<br />feel like <em>less</em> work.</h2>
          <p>TeamX is a technology company building practical products for the moments that fill our days—from keeping track of spending and journeys to coordinating care.</p>
          <p>We start with a real-world problem, pay attention to the details, and shape a focused tool around it. Simple idea. Useful technology.</p>
          <a className="text-link" href="mailto:teamxworkspaces@gmail.com">Get to know TeamX <Arrow /></a>
        </div>
        <div className="about-side">
          <div className="about-principle"><span>01</span><div><b>Start with the everyday</b><p>Build around real routines and the details that are easy to lose track of.</p></div></div>
          <div className="about-principle"><span>02</span><div><b>Make the complex feel clear</b><p>Give useful information a place where people can actually find it.</p></div></div>
          <div className="about-principle"><span>03</span><div><b>Keep people in the picture</b><p>Let thoughtful technology support the people doing the work.</p></div></div>
        </div>
      </section>

      <section className="closing-section" id="contact">
        <div className="closing-orb" aria-hidden="true"><span>✳</span></div>
        <div className="closing-content">
          <div className="eyebrow"><span className="eyebrow-line" /> START A CONVERSATION</div>
          <h2>Have a good idea?<br /><span>We’re listening.</span></h2>
          <p>Tell us what you’re working on, ask a question, or just say hello. We’d love to hear from you.</p>
        </div>
        <ContactForm />
        <div className="closing-index">TEAMX&nbsp; / &nbsp;TECHNOLOGY<br />BUILT AROUND EVERYDAY NEEDS</div>
      </section>

      <footer className="site-footer">
        <div className="footer-top"><Mark /><p>Building useful technology<br />for the everyday.</p><div className="footer-social"><span>FIND US AROUND</span><a href="https://www.linkedin.com/in/teamxsolutions" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://www.instagram.com/teamx_solutions/" target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a></div></div>
        <div className="footer-bottom"><span>© 2026 TeamX. Built with intention.</span><a href="mailto:teamxworkspaces@gmail.com">teamxworkspaces@gmail.com</a><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
