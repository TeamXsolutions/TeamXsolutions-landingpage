import type { Metadata } from "next";
import { ArrowUpRight, Check, ClipboardList, WalletCards, CarFront } from "lucide-react";
import Header from "../site-header";
import SiteFooter from "@/components/site-footer";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers at TeamX",
  description: "Learn how TeamX approaches practical software work and get in touch about contributing.",
};

const productAreas = [
  { name: "Xpense", area: "Personal finance", icon: <WalletCards aria-hidden="true" /> },
  { name: "FuelX", area: "Vehicle and fuel tracking", icon: <CarFront aria-hidden="true" /> },
  { name: "CareX", area: "Hospital operations", icon: <ClipboardList aria-hidden="true" /> },
];

const principles = [
  "Start with the task someone needs to finish.",
  "Make important information easier to follow.",
  "Keep the product focused on what helps.",
];

export default function CareersPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="careers-page">
        <section className="careers-hero shell" id="top">
          <p className="eyebrow"><span className="eyebrow-mark" />Careers at TeamX</p>
          <h1>Build software that has a job to do.</h1>
          <div className="careers-hero-bottom">
            <p>TeamX is working on focused apps for personal finances, vehicle costs, and hospital operations. We value clear thinking, useful details, and software that makes a real task easier to manage.</p>
            <a className={`${buttonVariants({ size: "lg" })} cta`} href="mailto:teamxworkspaces@gmail.com?subject=Careers%20at%20TeamX">Introduce yourself <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>

        <section className="careers-work-section section-pad">
          <div className="shell careers-work-layout">
            <div>
              <p className="eyebrow"><span className="eyebrow-mark" />How we approach the work</p>
              <h2>Useful beats complicated.</h2>
              <p className="careers-body">We begin with the person doing the work and the information they need. Then we shape a tool around that job, keeping the experience direct and the details understandable.</p>
            </div>
            <ul className="careers-principles">
              {principles.map((principle) => <li key={principle}><Check aria-hidden="true" />{principle}</li>)}
            </ul>
          </div>
        </section>

        <section className="careers-areas-section section-pad">
          <div className="shell">
            <div className="careers-areas-heading">
              <div><p className="eyebrow"><span className="eyebrow-mark" />The work we’re exploring</p><h2>Different problems. One practical approach.</h2></div>
              <p>These are the product areas TeamX is developing, not a list of current job openings.</p>
            </div>
            <div className="careers-area-list">
              {productAreas.map((item) => <article key={item.name}><span className="careers-area-icon">{item.icon}</span><strong>{item.name}</strong><span>{item.area}</span></article>)}
            </div>
          </div>
        </section>

        <section className="careers-contact-section">
          <div className="shell careers-contact-panel">
            <div><p className="eyebrow"><span className="eyebrow-mark" />Get in touch</p><h2>Interested in working with TeamX?</h2></div>
            <div><p>Share your background, the kind of work you care about, and which product area interests you. That context helps start a useful conversation.</p><a className={`${buttonVariants({ size: "lg" })} cta`} href="mailto:teamxworkspaces@gmail.com?subject=Careers%20at%20TeamX">Email TeamX <ArrowUpRight aria-hidden="true" /></a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
