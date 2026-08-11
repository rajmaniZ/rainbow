import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data";

export default function Services() {
  return (
    <section className="section services-page">
      <div className="container">
        <div className="page-hero">
          <div>
            <div className="eyebrow">Services</div>
            <h1>Engineering that stays with the system.</h1>
            <p>Rainbow supports the full lifecycle — from design and supply to installation, commissioning, maintenance and troubleshooting.</p>
          </div>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <article className="service-block" key={service.title}>
              <div className="service-number">0{index + 1}</div>
              <div className="service-title"><h2>{service.title}</h2><p>{service.description}</p></div>
              <div className="service-items">
                {service.items.map((item) => <span key={item}><CheckCircle2 size={16} />{item}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="service-cta">
          <SectionHeading eyebrow="Need a project-specific scope?" title="Tell us the load, site and objective." text="The Rainbow team can turn a requirement into a practical product + service proposal." action={<Link className="primary-btn" to="/contact">Send requirement <ArrowRight size={18} /></Link>} />
        </div>
      </div>
    </section>
  );
}
