import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Zap, Cpu, Sun, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import { categories, products, projects, certifications, company } from "../data";

const categoryIcons = { Zap, Cpu, Sun, Factory, Wrench, ShieldCheck };

export default function Home({ addToCart }) {
  const featured = products.filter((p) => p.featured).slice(0, 8);

  return (
    <>
      <section className="hero">
        <div className="hero-grid-pattern" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="pill"><span className="pulse-dot" /> Power & Electrical Engineering</div>
            <h1>Reliable power.<br /><em>Engineered</em> for reality.</h1>
            <p>
              Rainbow delivers backup power, electrical control panels, automation,
              solar and end-to-end electrical solutions for critical environments.
            </p>
            <div className="hero-actions">
              <Link className="primary-btn" to="/products">Explore products <ArrowRight size={18} /></Link>
              <Link className="secondary-btn" to="/contact">Talk to an engineer</Link>
            </div>
            <div className="hero-trust">
              <span><CheckCircle2 size={16} /> Government projects</span>
              <span><CheckCircle2 size={16} /> Industrial solutions</span>
              <span><CheckCircle2 size={16} /> Lifecycle support</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="power-card main">
              <div className="power-card-top">
                <span>RAINBOW / POWER</span><span>24×7</span>
              </div>
              <div className="power-core">
                <div className="core-ring"><Zap size={42} /></div>
                <div>
                  <small>ENGINEERED CONTINUITY</small>
                  <strong>Critical Power</strong>
                </div>
              </div>
              <div className="signal">
                <span /><span /><span /><span /><span /><span /><span />
              </div>
            </div>
            <div className="floating-stat stat-one"><strong>17</strong><span>Railway stations</span></div>
            <div className="floating-stat stat-two"><strong>360°</strong><span>Electrical support</span></div>
            <div className="hero-ring" />
          </div>
        </div>
        <div className="hero-bottom">
          <div className="container marquee">
            <span>UPS</span><i>•</i><span>CONTROL PANELS</span><i>•</i><span>AUTOMATION</span><i>•</i><span>SOLAR</span><i>•</i><span>STABILIZERS</span><i>•</i><span>ELECTRICAL SERVICES</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="01 / Solutions"
            title="Power infrastructure, without the complexity."
            text="Browse Rainbow's solution portfolio. Build an enquiry list and send the requirements directly to the team."
            action={<Link className="text-link desktop-only" to="/products">View all products <ArrowRight size={16} /></Link>}
          />
          <div className="category-grid">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.icon] || Zap;
              return (
                <Link to={`/products?category=${cat.id}`} className={`category-card ${cat.tone}`} key={cat.id}>
                  <span className="category-icon"><Icon size={24} /></span>
                  <div><span className="category-index">0{categories.indexOf(cat)+1}</span><h3>{cat.name}</h3></div>
                  <ArrowRight size={18} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="02 / Featured catalog"
            title="Built for serious electrical environments."
            text="A curated view of the product catalog. Pricing is intentionally enquiry-based for project-specific configuration."
            action={<Link className="secondary-btn light desktop-only" to="/products">Open catalog <ArrowRight size={16} /></Link>}
          />
          <div className="product-grid">
            {featured.map((product) => <ProductCard key={product.id} product={product} onAdd={addToCart} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <div className="eyebrow">03 / Why Rainbow</div>
            <h2 className="display-small">From component to commissioned system.</h2>
            <p className="lead">
              Rainbow combines product supply with engineering, installation, commissioning
              and maintenance — so the system is treated as one connected job.
            </p>
            <Link className="primary-btn" to="/services">Explore services <ArrowRight size={18} /></Link>
          </div>
          <div className="feature-stack">
            {[
              ["01", "Engineering-first", "System selection and implementation around the actual load, site and operating conditions."],
              ["02", "Project execution", "Design, manufacturing, installation, testing and commissioning under one workflow."],
              ["03", "Lifecycle support", "AMC, preventive maintenance, breakdown support, battery services and troubleshooting."]
            ].map(([n, t, d]) => (
              <div className="feature-row" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section project-preview">
        <div className="container">
          <SectionHeading eyebrow="04 / Major project" title={projects[0].title} text={projects[0].description} />
          <div className="project-card">
            <div className="project-number">01</div>
            <div className="project-main">
              <span>{projects[0].type}</span>
              <h3>{projects[0].client}</h3>
              <p>Scope covering wiring, power and control cabling, lighting, appliances, panels, testing and commissioning.</p>
              <Link className="text-link" to="/projects">See project scope <ArrowRight size={16} /></Link>
            </div>
            <div className="project-metric"><strong>17</strong><span>Stations</span></div>
          </div>
        </div>
      </section>

      <section className="cert-strip">
        <div className="container cert-inner">
          <div><div className="eyebrow">Credentials</div><h2>Built on compliance.</h2></div>
          <div className="cert-list">{certifications.map((c) => <span key={c}><ShieldCheck size={17} />{c}</span>)}</div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div><span className="eyebrow">Have a requirement?</span><h2>Let's engineer the right power solution.</h2></div>
          <Link className="primary-btn" to="/contact">Start an enquiry <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
