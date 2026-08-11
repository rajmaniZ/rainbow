import { ArrowRight, CheckCircle2, TrainFront } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, clients } from "../data";

export default function Projects() {
  const clientGroups = Object.entries(clients);
  return (
    <section className="section projects-page">
      <div className="container">
        <div className="page-hero">
          <div><div className="eyebrow">Projects & clients</div><h1>Electrical work where uptime matters.</h1><p>Rainbow serves government, banking, healthcare, industrial and commercial environments.</p></div>
        </div>

        {projects.map((project) => (
          <article className="project-detail-card" key={project.title}>
            <div className="project-detail-top"><span className="project-icon"><TrainFront size={25} /></span><span className="eyebrow">{project.type}</span></div>
            <h2>{project.title}</h2>
            <p className="lead">{project.description}</p>
            <div className="scope-grid">{project.scope.map((item) => <span key={item}><CheckCircle2 size={16} />{item}</span>)}</div>
          </article>
        ))}

        <div className="client-section">
          <div className="eyebrow">Our valued clients</div><h2 className="display-small">Trusted across sectors.</h2>
          <div className="client-grid">{clientGroups.map(([group, names]) => <div className="client-group" key={group}><span>{group}</span>{names.map((name) => <strong key={name}>{name}</strong>)}</div>)}</div>
        </div>

        <div className="cta-box project-cta"><div><span className="eyebrow">Your next project</span><h2>Let's discuss the electrical scope.</h2></div><Link className="primary-btn" to="/contact">Contact Rainbow <ArrowRight size={18} /></Link></div>
      </div>
    </section>
  );
}
