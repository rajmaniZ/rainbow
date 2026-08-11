import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "../data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = encodeURIComponent(
      `Hello Rainbow,\n\nName: ${data.get("name")}\nCompany: ${data.get("company") || "Not provided"}\nPhone: ${data.get("phone")}\nRequirement: ${data.get("requirement")}\n\nPlease contact me regarding this requirement.`
    );
    window.open(`https://wa.me/${company.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section className="section contact-page">
      <div className="container">
        <div className="page-hero"><div><div className="eyebrow">Contact Rainbow</div><h1>Tell us what you need to power.</h1><p>No login. No payment gateway. Just a direct project enquiry to the Rainbow team.</p></div></div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-card"><span><Phone size={19} /></span><div><small>Call</small><strong>{company.phone}</strong></div></div>
            <div className="contact-info-card"><span><Mail size={19} /></span><div><small>Email</small><strong>{company.email}</strong></div></div>
            <div className="contact-info-card"><span><MapPin size={19} /></span><div><small>Location</small><strong>{company.location}</strong></div></div>
            <a className="whatsapp-box" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={22} /><div><strong>WhatsApp enquiry</strong><span>Fastest way to share a requirement</span></div><ArrowRight size={18} /></a>
          </div>
          <form className="enquiry-form" onSubmit={submit}>
            <div className="form-head"><span className="eyebrow">Project enquiry</span><h2>Start with the essentials.</h2></div>
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Company / organization<input name="company" placeholder="Company name" /></label>
            <label>Phone<input name="phone" required placeholder="+91..." /></label>
            <label>Requirement<textarea name="requirement" required rows="6" placeholder="UPS capacity, control panel, solar project, electrical work, AMC, etc." /></label>
            <button className="primary-btn full" type="submit">{sent ? "Enquiry window opened" : "Send via WhatsApp"} <MessageCircle size={18} /></button>
            <small>We use WhatsApp only to transmit the enquiry. There is no online payment or account creation.</small>
          </form>
        </div>
      </div>
    </section>
  );
}
