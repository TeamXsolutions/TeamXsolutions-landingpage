import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter({ homePage = false }: { homePage?: boolean }) {
  const sectionHref = (id: string) => `${homePage ? "" : "/"}#${id}`;

  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <a className="wordmark" href={sectionHref("top")} aria-label="TeamX home">
            Team<Image className="wordmark-mark" src="/teamx-logo.png" width={32} height={32} alt="" />
          </a>
          <p>Software for the things that need to work.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <div><strong>Company</strong><a href={sectionHref("product-focus")}>Product focus</a><a href={sectionHref("approach")}>How we work</a><a href="/careers">Careers</a><a href={sectionHref("faq")}>Questions</a><a href={sectionHref("contact")}>Contact</a></div>
          <div><strong>Products</strong><a href={sectionHref("xpense")}>Xpense</a><a href={sectionHref("fuelx")}>FuelX</a><a href={sectionHref("carex")}>CareX</a></div>
          <div><strong>Connect</strong><a href="mailto:teamxworkspaces@gmail.com">Email TeamX</a><a href="https://www.linkedin.com/in/teamxsolutions" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a></div>
        </nav>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} TeamX. All rights reserved.</span><span>Built around real work.</span></div>
    </footer>
  );
}
