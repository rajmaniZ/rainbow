import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

import { company } from "../../data.js";
import styles from "./Contact.module.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const getFormData = (form) => {
    const data = new FormData(form);

    return {
      name: data.get("name")?.trim() || "",
      companyName:
        data.get("company")?.trim() || "Not provided",
      phone: data.get("phone")?.trim() || "",
      email: data.get("email")?.trim() || "Not provided",
      requirement:
        data.get("requirement")?.trim() || "",
    };
  };

  /*
   * Normal form submission.
   * EmailJS can be connected here later.
   */
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  /*
   * Send complete form information to WhatsApp.
   */
  const sendWhatsApp = () => {
    const form = document.getElementById(
      "rainbow-contact-form",
    );

    if (!form) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = getFormData(form);

    const message = `Hello Rainbow,

I would like to discuss an electrical requirement.

━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━

Name: ${data.name}
Company / Organization: ${data.companyName}
Phone: ${data.phone}
Email: ${data.email}

━━━━━━━━━━━━━━━━━━━━
REQUIREMENT
━━━━━━━━━━━━━━━━━━━━

${data.requirement}

━━━━━━━━━━━━━━━━━━━━
SOURCE
━━━━━━━━━━━━━━━━━━━━

Website enquiry
${window.location.href}

Thank you.`;

    const whatsappUrl = `https://wa.me/${
      company.whatsapp
    }?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />

        {/* Decorative technical nodes */}
        <div className={styles.heroNodes}>
          <span className={styles.nodeOne} />
          <span className={styles.nodeTwo} />
          <span className={styles.nodeThree} />
          <span className={styles.nodeFour} />
        </div>

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <i />
              CONTACT RAINBOW
            </span>

            <h1>
              Let's discuss the
              <strong> electrical requirement.</strong>
            </h1>

            <p>
              Share a product requirement, project scope,
              maintenance need or electrical service enquiry
              with Rainbow's engineering team.
            </p>

            <div className={styles.heroActions}>
              <a
                href={`tel:${company.phone}`}
                className={styles.heroPrimary}
              >
                Call Rainbow
                <Phone size={16} />
              </a>

              <button
                type="button"
                className={styles.heroSecondary}
                onClick={() =>
                  document
                    .getElementById("rainbow-contact-form")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                }
              >
                Send an enquiry
                <ArrowRight size={16} />
              </button>
            </div>

            <div className={styles.heroStats}>
              <div>
                <CheckCircle2 size={16} />
                <span>
                  Direct
                  <small>Engineering support</small>
                </span>
              </div>

              <div>
                <FaWhatsapp size={16} />
                <span>
                  WhatsApp
                  <small>Quick enquiry</small>
                </span>
              </div>

              <div>
                <Mail size={16} />
                <span>
                  Email
                  <small>Project details</small>
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              HERO CONTACT VISUAL
          ================================================= */}

          <div className={styles.heroVisual}>
            <div className={styles.visualOrbit} />
            <div className={styles.visualOrbitTwo} />

            <div className={styles.connectionLine}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.contactPanel}>
              <div className={styles.panelTop}>
                <div className={styles.panelIcon}>
                  <Phone size={20} />
                </div>

                <div>
                  <small>RAINBOW / ENGINEERING</small>
                  <strong>Direct support</strong>
                </div>

                <span className={styles.active}>
                  <i />
                  ACTIVE
                </span>
              </div>

              <h2>
                Talk to the
                <strong> right team.</strong>
              </h2>

              <p>
                Product enquiries, electrical projects,
                maintenance and technical requirements.
              </p>

              <div className={styles.panelItems}>
                <a href={`tel:${company.phone}`}>
                  <Phone size={15} />
                  <span>
                    <small>PHONE</small>
                    {company.phone}
                  </span>
                </a>

                <a href={`mailto:${company.email}`}>
                  <Mail size={15} />
                  <span>
                    <small>EMAIL</small>
                    {company.email}
                  </span>
                </a>

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.whatsappItem}
                >
                  <FaWhatsapp size={17} />
                  <span>
                    <small>WHATSAPP</small>
                    Direct enquiry
                  </span>
                </a>
              </div>

              <div className={styles.panelFooter}>
                <span>
                  <CheckCircle2 size={14} />
                  Requirement support
                </span>

                <span>
                  <CheckCircle2 size={14} />
                  Project discussion
                </span>
              </div>
            </div>

            <div className={styles.floatingBadge}>
              <FaWhatsapp size={17} />
              <span>
                <strong>Quick enquiry</strong>
                WhatsApp support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section className={styles.content}>
        <div className={styles.container}>
          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <div className={styles.info}>
            <a
              href={`tel:${company.phone}`}
              className={styles.infoCard}
            >
              <Phone />

              <span>Phone</span>

              <b>{company.phone}</b>
            </a>

            <a
              href={`mailto:${company.email}`}
              className={styles.infoCard}
            >
              <Mail />

              <span>Email</span>

              <b>{company.email}</b>
            </a>

            <div className={styles.infoCard}>
              <MapPin />

              <span>Location</span>

              <b>{company.location}</b>
            </div>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className={`${styles.infoCard} ${styles.whatsappCard}`}
            >
              <FaWhatsapp />

              <span>WhatsApp</span>

              <b>Direct enquiry</b>
            </a>

            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              className={`${styles.infoCard} ${styles.instagramCard}`}
            >
              <FaInstagram />

              <span>Instagram</span>

              <b>@rainbow_varanasi</b>
            </a>
          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <form
            id="rainbow-contact-form"
            className={styles.form}
            onSubmit={submit}
          >
            <span className={styles.formEyebrow}>
              PROJECT / PRODUCT ENQUIRY
            </span>

            <h2>Start with the essentials.</h2>

            <p className={styles.formIntro}>
              Provide your basic details and requirement.
              You can submit the enquiry now or send the
              same information directly through WhatsApp.
            </p>

            <div className={styles.row}>
              <label>
                Name
                <input
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </label>

              <label>
                Company
                <input
                  name="company"
                  autoComplete="organization"
                  placeholder="Company / organization"
                />
              </label>
            </div>

            <div className={styles.row}>
              <label>
                Phone
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+91..."
                />
              </label>

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label>
              Requirement

              <textarea
                name="requirement"
                rows="6"
                required
                placeholder="UPS capacity, control panel, solar project, electrical work, AMC, etc."
              />
            </label>

            <div className={styles.actions}>
              <button
                type="submit"
                className={styles.submitButton}
              >
                {sent
                  ? "Enquiry prepared"
                  : "Send enquiry"}

                <Mail size={16} />
              </button>

              <button
                type="button"
                className={styles.whatsappButton}
                onClick={sendWhatsApp}
              >
                Send via WhatsApp
                <FaWhatsapp size={19} />
              </button>
            </div>

            <small className={styles.note}>
              Your information is taken directly from the
              fields above. WhatsApp sends the complete
              enquiry to Rainbow.
            </small>
          </form>
        </div>
      </section>
    </div>
  );
}