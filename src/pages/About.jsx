import { ArrowRight, Eye, Target, ShieldCheck, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";
import { certifications } from "../data";

const values = [
  ["01", Target, "Purpose-built", "We select and engineer around actual operating requirements instead of forcing a generic solution."],
  ["02", Settings2, "Execution", "Design, manufacturing, installation, testing and commissioning are treated as one engineering workflow."],
  ["03", ShieldCheck, "Reliability", "Safety, maintainability and lifecycle support are built into the way we approach electrical systems."],
  ["04", Eye, "Clarity", "Transparent product information and direct technical communication keep project decisions simple."]
];

export default function About() {
  return (
    <section className="about-page">
      <div className="container page-hero about-hero">
        <div><div className="eyebrow">About Rainbow</div><h1>Electrical engineering with a practical point of view.</h1><p>Rainbow is a power solutions and electrical engineering company focused on backup power, control panels, automation, solar and complete electrical systems.</p></div>
      </div>

      <div className="container manifesto">
        <div className="manifesto-mark">R</div>
        <div><span className="eyebrow">Our approach</span><h2>Reliable systems are designed, not assumed.</h2><p>We work across residential, commercial, industrial and government requirements, combining product supply with installation, commissioning and ongoing service.</p></div>
      </div>

      <div className="container value-grid">
        {values.map(([n, Icon, title, text]) => <article className="value-card" key={n}><span>{n}</span><Icon size={23} /><h3>{title}</h3><p>{text}</p></article>)}
      </div>

      <div className="section compact-section">
        <div className="container split-section">
          <div><div className="eyebrow">Mission</div><h2 className="display-small">Make dependable electrical infrastructure easier to specify, install and maintain.</h2></div>
          <div><div className="eyebrow">Vision</div><p className="lead">Become a trusted engineering partner for power continuity, industrial electrical systems and automation — with service quality that lasts beyond commissioning.</p><Link className="text-link" to="/projects">See our project experience <ArrowRight size={16} /></Link></div>
        </div>
      </div>

      <section className="cert-strip">
        <div className="container cert-inner"><div><div className="eyebrow">Registrations & certifications</div><h2>Professional foundations.</h2></div><div className="cert-list">{certifications.map((c) => <span key={c}><ShieldCheck size={17} />{c}</span>)}</div></div>
      </section>
    </section>
  );
}
