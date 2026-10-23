import Header from "./site-header";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero wrap" id="top">
          <div className="hero-main">
            <div className="reveal">
              <div className="eyebrow">
                <span className="dot"></span>Small details. Real difference.
              </div>
              <h1>
                Thoughtful tech.
                <br />
                For <em>everyday life.</em>
              </h1>
              <p className="lead">
                We build focused software that makes the everyday a little
                simpler. Less friction. More room for what matters.
              </p>
              <div className="actions">
                <a className="button" href="#products">
                  Explore our products <span>↗</span>
                </a>
                <a className="text-link" href="#approach">
                  Meet TeamX <span>→</span>
                </a>
              </div>
            </div>
            <div className="scene" aria-hidden="true">
              <div className="orbit"></div>
              <div className="big-x" aria-hidden="true">
                X
              </div>
              <div className="float f1">
                <span className="icon green">↗</span>
                <div>
                  Xpense<small>A clearer view of your money.</small>
                </div>
              </div>
              <div className="float f2">
                <span className="icon orange">⌁</span>
                <div>
                  FuelX<small>Every journey, understood.</small>
                </div>
              </div>
              <div className="float f3">
                <span className="icon">+</span>
                <div>
                  CareX<small>Care, better connected.</small>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <span>ONE TEAM. MANY EVERYDAY POSSIBILITIES.</span>
            <div className="qualities">
              <span>Built around people</span>
              <span>Simple by design</span>
              <span>Thoughtful at every step</span>
            </div>
          </div>
        </section>
        <div className="product-strip">
          <div className="wrap strip-inner">
            <a href="#xpense">
              <span className="icon">↗</span>
              <div>
                Xpense<small>Money, made clearer</small>
              </div>
            </a>
            <a href="#fuelx">
              <span className="icon">⌁</span>
              <div>
                FuelX<small>Know your journey</small>
              </div>
            </a>
            <a href="#carex">
              <span className="icon">+</span>
              <div>
                CareX<small>Care, connected</small>
              </div>
            </a>
          </div>
        </div>
        <section className="section" id="about">
          <div className="wrap about-grid">
            <div>
              <div className="eyebrow">
                <span className="dot"></span>About TeamX
              </div>
              <h2 style={{ marginTop: 24 }}>
                Useful software.
                <br />A lasting purpose.
              </h2>
            </div>
            <div className="about-copy">
              <p>
                Everyday life comes with enough to keep track of. Understanding
                your spending. Managing the cost of a journey. Coordinating the
                many moving parts of a hospital.
              </p>
              <p>
                <strong>
                  We see opportunities to make those moments easier.
                </strong>{" "}
                TeamX is building a family of focused software products, each
                with a clear purpose and a shared commitment to thoughtful
                design.
              </p>
              <p>
                Our ambition is to build a software company that people can
                recognise for the quality of its products, wherever they
                encounter us next.
              </p>
              <div className="about-facts">
                <div>
                  <b>03</b>
                  <span>Products in development</span>
                </div>
                <div>
                  <b>01</b>
                  <span>Shared design philosophy</span>
                </div>
                <div>
                  <b>Everyday</b>
                  <span>Problems worth solving</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section products" id="products">
          <div className="wrap">
            <div className="eyebrow">
              <span className="dot"></span>The TeamX family
            </div>
            <div className="section-top">
              <h2>
                Different problems.
                <br />
                The same thoughtful approach.
              </h2>
              <p>
                Focused products for the way we live, move, and care. Here’s
                what we’re working on.
              </p>
            </div>
            <BentoGrid className="cards">
              <BentoGridItem
                as="article"
                className="card p-0 space-y-0"
                header={<div className="demo" aria-hidden="true">
                  <div className="demo-label">
                    <span>Xpense / Overview</span>
                    <span>•••</span>
                  </div>
                  <div className="balance">
                    A little more clarity.
                    <small>Your spending, brought into focus.</small>
                  </div>
                  <div className="bars" aria-hidden="true">
                    <i style={{ height: "30%" }}></i>
                    <i style={{ height: "52%" }}></i>
                    <i style={{ height: "43%" }}></i>
                    <i style={{ height: "75%" }}></i>
                    <i style={{ height: "59%" }}></i>
                    <i style={{ height: "96%" }}></i>
                    <i style={{ height: "72%" }}></i>
                  </div>
                  <span className="demo-note">Concept preview</span>
                </div>}
                title={<div className="card-content">
                  <div className="product-title">
                    <h3>Xpense</h3>
                    <span className="badge">Launching soon</span>
                  </div>
                  <p>
                    Turn transaction statements into a clearer picture of your
                    spending, with financial tracking and AI-powered insights.
                  </p>
                </div>}
                description={<a className="card-bottom" href="#xpense">
                    <span>EXPLORE XPENSE</span>
                    <span>↓</span>
                  </a>}
              />
              <BentoGridItem
                as="article"
                className="card p-0 space-y-0"
                header={<div className="demo fuel" aria-hidden="true">
                  <div className="demo-label">
                    <span>FuelX / Your vehicle</span>
                    <span>•••</span>
                  </div>
                  <div className="gauge" aria-hidden="true"></div>
                  <div className="fuel-number">
                    Every kilometre.
                    <br />
                    <small>A better view of every fill-up.</small>
                  </div>
                  <span className="demo-note">Concept preview</span>
                </div>}
                title={<div className="card-content">
                  <div className="product-title">
                    <h3>FuelX</h3>
                    <span className="badge">Launching soon</span>
                  </div>
                  <p>
                    Keep track of fuel, mileage, and your vehicle’s journeys.
                    Understand what goes into every kilometre.
                  </p>
                </div>}
                description={<a className="card-bottom" href="#fuelx">
                    <span>EXPLORE FUELX</span>
                    <span>↓</span>
                  </a>}
              />
              <BentoGridItem
                as="article"
                className="card p-0 space-y-0"
                header={<div className="demo care" aria-hidden="true">
                  <div className="demo-label">
                    <span>CareX / Connected care</span>
                    <span>•••</span>
                  </div>
                  <div className="care-row">
                    <span className="avatar">+</span>
                    <div>
                      Doctors<small>Care with the right context</small>
                    </div>
                    <span className="status">Connected</span>
                  </div>
                  <div className="care-row">
                    <span className="avatar">↔</span>
                    <div>
                      Nurses & staff<small>Keep the day moving together</small>
                    </div>
                    <span className="status">Connected</span>
                  </div>
                  <div className="care-row">
                    <span className="avatar">♡</span>
                    <div>
                      Patients<small>From admission to discharge</small>
                    </div>
                  </div>
                  <span className="demo-note">Concept preview</span>
                </div>}
                title={<div className="card-content">
                  <div className="product-title">
                    <h3>CareX</h3>
                    <span className="badge">Launching soon</span>
                  </div>
                  <p>
                    Bring hospital operations together, from admission to
                    discharge, with dedicated access for doctors, nurses, staff,
                    and patients.
                  </p>
                </div>}
                description={<a className="card-bottom" href="#carex">
                    <span>EXPLORE CAREX</span>
                    <span>↓</span>
                  </a>}
              />
            </BentoGrid>
            <p className="portfolio-note">
              Currently in development. A first look at what’s coming, with more
              to share as we build.
            </p>
          </div>
        </section>
        <section className="section deep-products">
          <div className="wrap">
            <div className="eyebrow">
              <span className="dot"></span>A closer look
            </div>
            <div className="section-top">
              <h2>Built around real life.</h2>
              <p>
                Three different starting points. The same goal: make important
                information easier to use.
              </p>
            </div>
            <article className="product-story" id="xpense">
              <div className="story-copy">
                <div className="eyebrow">01 / PERSONAL FINANCE</div>
                <h3>
                  A clearer picture.
                  <br />
                  Better money decisions.
                </h3>
                <span className="badge">Launching soon · In development</span>
                <p>
                  Xpense starts with the information you already have: your
                  transaction statement. We’re building a simpler way to turn
                  that information into financial tracking and AI-assisted
                  insights.
                </p>
                <ul>
                  <li>Upload a transaction statement</li>
                  <li>Bring spending information into one place</li>
                  <li>Explore insights that help explain your money</li>
                </ul>
                <a href="mailto:teamxworkspaces@gmail.com?subject=Tell%20me%20about%20xpense">
                  Ask us about Xpense ↗
                </a>
              </div>
              <div className="story-visual ">
                <div className="flow-title">The idea behind Xpense</div>
                <div className="flow-step">
                  <span>1</span>
                  <div>
                    <b>Your statement</b>
                    <small>Start with your transaction history</small>
                  </div>
                </div>
                <div className="flow-step">
                  <span>2</span>
                  <div>
                    <b>Your spending</b>
                    <small>Bring the details into focus</small>
                  </div>
                </div>
                <div className="flow-step">
                  <span>3</span>
                  <div>
                    <b>Your insights</b>
                    <small>Understand the bigger picture</small>
                  </div>
                </div>
                <div className="flow-caption">
                  Product direction preview · Features may evolve during
                  development.
                </div>
              </div>
            </article>
            <article className="product-story" id="fuelx">
              <div className="story-copy">
                <div className="eyebrow">02 / VEHICLE & FUEL TRACKING</div>
                <h3>
                  Less guesswork.
                  <br />
                  More understanding.
                </h3>
                <span className="badge">Launching soon · In development</span>
                <p>
                  FuelX is being built for people who want a better
                  understanding of their vehicle’s fuel use and mileage. A
                  focused place to keep track of the details behind everyday
                  journeys.
                </p>
                <ul>
                  <li>Track fuel and fill-ups</li>
                  <li>Follow your vehicle’s mileage</li>
                  <li>Keep vehicle and journey information organised</li>
                </ul>
                <a href="mailto:teamxworkspaces@gmail.com?subject=Tell%20me%20about%20fuelx">
                  Ask us about FuelX ↗
                </a>
              </div>
              <div className="story-visual orange-bg">
                <div className="flow-title">The idea behind FuelX</div>
                <div className="flow-step">
                  <span>1</span>
                  <div>
                    <b>Fill up</b>
                    <small>Keep track of fuel information</small>
                  </div>
                </div>
                <div className="flow-step">
                  <span>2</span>
                  <div>
                    <b>Keep moving</b>
                    <small>Follow mileage and journeys</small>
                  </div>
                </div>
                <div className="flow-step">
                  <span>3</span>
                  <div>
                    <b>Look back</b>
                    <small>Understand your vehicle over time</small>
                  </div>
                </div>
                <div className="flow-caption">
                  Product direction preview · Features may evolve during
                  development.
                </div>
              </div>
            </article>
            <article className="product-story" id="carex">
              <div className="story-copy">
                <div className="eyebrow">03 / HOSPITAL MANAGEMENT</div>
                <h3>
                  Many roles.
                  <br />
                  One coordinated day.
                </h3>
                <span className="badge">Launching soon · In development</span>
                <p>
                  CareX is being developed to bring hospital workflows into one
                  application. From admission to discharge, the focus is on
                  helping the people involved find the information relevant to
                  their role.
                </p>
                <ul>
                  <li>Hospital operations from admission to discharge</li>
                  <li>Dedicated access for doctors, nurses, and staff</li>
                  <li>A patient perspective within the same platform</li>
                </ul>
                <a href="mailto:teamxworkspaces@gmail.com?subject=Tell%20me%20about%20carex">
                  Ask us about CareX ↗
                </a>
              </div>
              <div className="story-visual blue-bg">
                <div className="flow-title">The idea behind CareX</div>
                <div className="flow-step">
                  <span>1</span>
                  <div>
                    <b>Admission</b>
                    <small>Begin the patient’s hospital journey</small>
                  </div>
                </div>
                <div className="flow-step">
                  <span>2</span>
                  <div>
                    <b>Care coordination</b>
                    <small>Bring the right roles into the workflow</small>
                  </div>
                </div>
                <div className="flow-step">
                  <span>3</span>
                  <div>
                    <b>Discharge</b>
                    <small>Keep the full journey in view</small>
                  </div>
                </div>
                <div className="flow-caption">
                  Product direction preview · Features may evolve during
                  development.
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="section audience">
          <div className="wrap">
            <div className="eyebrow">
              <span className="dot"></span>Who we’re building for
            </div>
            <div className="section-top">
              <h2>
                Everyday needs.
                <br />
                Different perspectives.
              </h2>
              <p>
                Our products begin with people and the practical challenges they
                face.
              </p>
            </div>
            <div className="audience-grid">
              <article className="audience-item">
                <span className="label">01 / MONEY</span>
                <h3>People seeking clarity.</h3>
                <p>
                  For anyone who wants to make sense of transaction history and
                  spend less time piecing together their financial picture.
                </p>
                <a href="#xpense">Discover Xpense →</a>
              </article>
              <article className="audience-item">
                <span className="label">02 / MOBILITY</span>
                <h3>People on the move.</h3>
                <p>
                  For vehicle owners who want to keep fuel, mileage, and journey
                  information in a more useful, organised form.
                </p>
                <a href="#fuelx">Discover FuelX →</a>
              </article>
              <article className="audience-item">
                <span className="label">03 / HEALTHCARE</span>
                <h3>People behind the care.</h3>
                <p>
                  For the doctors, nurses, staff, and patients who need a
                  clearer view of the hospital workflows they’re part of.
                </p>
                <a href="#carex">Discover CareX →</a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="approach">
          <div className="wrap philosophy">
            <div>
              <div className="eyebrow">
                <span className="dot"></span>Why we build
              </div>
              <h2>
                Good technology
                <br />
                should feel simple.
              </h2>
              <p className="lead">
                TeamX is a software company with a straightforward ambition:
                make useful things that take a little effort out of everyday
                life.
              </p>
              <p className="lead">
                Different products. One shared standard of clarity, care, and
                quality.
              </p>
            </div>
            <div>
              <div className="principle">
                <span className="number">01 /</span>
                <div>
                  <h3>Start with a real problem.</h3>
                  <p>
                    Every product begins with something people need. We focus on
                    solving that problem well.
                  </p>
                </div>
              </div>
              <div className="principle">
                <span className="number">02 /</span>
                <div>
                  <h3>Make room for simplicity.</h3>
                  <p>
                    Clear language. Purposeful features. An experience that
                    feels easy to understand from the start.
                  </p>
                </div>
              </div>
              <div className="principle">
                <span className="number">03 /</span>
                <div>
                  <h3>Care about the details.</h3>
                  <p>
                    Trust is built in the everyday experience. We put thought
                    into how our products look, work, and fit into your life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="eyebrow">
              <span className="dot"></span>From an idea to something useful
            </div>
            <div className="section-top">
              <h2>Thoughtful is a process.</h2>
              <p>
                The principles we want to carry into every TeamX product, today
                and as we grow.
              </p>
            </div>
            <div className="process-grid">
              <article className="process-card">
                <span>01 — UNDERSTAND</span>
                <h3>Listen before building.</h3>
                <p>
                  Start by understanding the problem, the people involved, and
                  what makes the current experience difficult.
                </p>
              </article>
              <article className="process-card">
                <span>02 — FOCUS</span>
                <h3>Give every feature a job.</h3>
                <p>
                  Choose a clear purpose. Keep the product focused on what helps
                  people get that task done.
                </p>
              </article>
              <article className="process-card">
                <span>03 — REFINE</span>
                <h3>Make the details count.</h3>
                <p>
                  Think through the language, layout, and interactions that
                  shape how a product feels to use.
                </p>
              </article>
              <article className="process-card">
                <span>04 — IMPROVE</span>
                <h3>Keep learning.</h3>
                <p>
                  Use feedback to question assumptions and guide the next steps
                  as the products develop.
                </p>
              </article>
            </div>
            <div className="belief">
              <p>
                “The best measure of our work is how much simpler it makes
                someone’s day.”
              </p>
              <span>THE TEAMX PRODUCT PHILOSOPHY</span>
            </div>
          </div>
        </section>
        <section className="section faq-section" id="faq">
          <div className="wrap faq-grid">
            <div>
              <div className="eyebrow">
                <span className="dot"></span>A few things to know
              </div>
              <h2>
                Good questions.
                <br />
                Clear answers.
              </h2>
              <p>
                Something else on your mind?
                <br />
                <a href="mailto:teamxworkspaces@gmail.com">
                  Talk to the team ↗
                </a>
              </p>
            </div>
            <div>
              <details open>
                <summary>What is TeamX?</summary>
                <p>
                  TeamX is a software company building focused products for
                  everyday problems. Our current portfolio in development
                  includes Xpense, FuelX, and CareX.
                </p>
              </details>
              <details>
                <summary>Can I use the products today?</summary>
                <p>
                  The three products are currently in development and marked as
                  launching soon. The visuals on this page are concept previews,
                  rather than live product screens.
                </p>
              </details>
              <details>
                <summary>When will the products launch?</summary>
                <p>
                  We haven’t announced launch dates yet. Follow TeamX on
                  LinkedIn for updates, or email us to ask about a product that
                  interests you.
                </p>
              </details>
              <details>
                <summary>Will every product share one account?</summary>
                <p>
                  We haven’t announced account or integration details. Each
                  product has its own purpose and audience, guided by the same
                  TeamX design philosophy.
                </p>
              </details>
              <details>
                <summary>How can I share feedback or discuss an idea?</summary>
                <p>
                  Send a note to teamxworkspaces@gmail.com. Tell us which
                  product you’re interested in and the problem you’d like to
                  discuss.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="contact-section wrap" id="contact">
          <div className="contact-box">
            <div>
              <div className="eyebrow">A conversation starts something.</div>
              <h2>Let’s make everyday better.</h2>
              <p>
                Have a question, an idea, or just want to say hello?
                <br />
                We’d love to hear from you.
              </p>
            </div>
            <a className="button" href="mailto:teamxworkspaces@gmail.com">
              Say hello <span>↗</span>
            </a>
          </div>
          <div className="contact-paths">
            <div>
              <h3>General questions</h3>
              <p>Learn more about TeamX and what we’re building.</p>
              <a href="mailto:teamxworkspaces@gmail.com?subject=Hello%20TeamX">
                Start a conversation ↗
              </a>
            </div>
            <div>
              <h3>Product feedback</h3>
              <p>
                Share a challenge or perspective that could help shape our
                products.
              </p>
              <a href="mailto:teamxworkspaces@gmail.com?subject=Product%20feedback">
                Share your thoughts ↗
              </a>
            </div>
            <div>
              <h3>Ideas & collaboration</h3>
              <p>
                Explore an idea or discuss opportunities to build something
                useful.
              </p>
              <a href="mailto:teamxworkspaces@gmail.com?subject=Collaboration">
                Connect with TeamX ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div>
              <a className="logo" href="#top">
                Team<b>X</b>
              </a>
              <p>Thoughtful tech for everyday life.</p>
            </div>
            <div className="footer-links">
              <div>
                <strong>COMPANY</strong>
                <a href="#about">About TeamX</a>
                <a href="#approach">Our approach</a>
                <a href="#faq">FAQs</a>
              </div>
              <div>
                <strong>PRODUCTS</strong>
                <a href="#xpense">Xpense</a>
                <a href="#fuelx">FuelX</a>
                <a href="#carex">CareX</a>
              </div>
              <div>
                <strong>CONNECT</strong>
                <a href="mailto:teamxworkspaces@gmail.com">Email ↗</a>
                <a
                  href="https://www.linkedin.com/in/teamxsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
                <a href="#contact">Let’s talk</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © <span>{new Date().getFullYear()}</span> TeamX. All rights
              reserved.
            </span>
            <span>Built with thought. Made for people.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
