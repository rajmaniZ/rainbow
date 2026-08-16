import {
  CheckCircle2,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { useState } from "react";
import { Link } from "react-router-dom";

import { company } from "../../data.js";
import styles from "./Contact.module.css";

export default function Contact() {
  const [showPhoneChooser, setShowPhoneChooser] = useState(false);
  const [sent, setSent] = useState(false);

  /*
   * ----------------------------------------------------------
   * CONTACT NUMBERS
   * ----------------------------------------------------------
   */

  const contactNumbers = [
    {
      name: "Ritik Kumar",
      phone: "7393974444",
      initial: "R",
    },
    {
      name: "Prateek Kumar",
      phone: "7007594124",
      initial: "P",
    },
    {
      name: "Sudhir Kumar",
      phone: "7054577777",
      initial: "S",
    },
  ];

  /*
   * ----------------------------------------------------------
   * FORM DATA
   * ----------------------------------------------------------
   */

  const getFormData = (form) => {
    const data = new FormData(form);

    return {
      name: data.get("name")?.trim() || "",
      companyName:
        data.get("company")?.trim() || "Not provided",
      phone: data.get("phone")?.trim() || "",
      email:
        data.get("email")?.trim() || "Not provided",
      requirement:
        data.get("requirement")?.trim() || "",
    };
  };

  /*
   * ----------------------------------------------------------
   * NORMAL FORM SUBMIT
   *
   * EmailJS can be connected here later.
   * Currently it only prepares the form.
   * ----------------------------------------------------------
   */

  const submit = (e) => {
    e.preventDefault();

    setSent(true);

    /*
     * EmailJS can be added here later.
     *
     * Example:
     *
     * emailjs.send(...)
     *
     */
  };

  /*
   * ----------------------------------------------------------
   * WHATSAPP ENQUIRY
   * ----------------------------------------------------------
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

    const whatsappUrl =
      `https://wa.me/${company.whatsapp}?text=` +
      encodeURIComponent(message);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  /*
   * ----------------------------------------------------------
   * CALL CONTACT
   * ----------------------------------------------------------
   */

  const callContact = (phone) => {
    setShowPhoneChooser(false);

    window.location.href = `tel:+91${phone}`;
  };

  /*
   * ----------------------------------------------------------
   * WHATSAPP CONTACT
   * ----------------------------------------------------------
   */

  const whatsappContact = (phone) => {
    const message =
      "Hello Rainbow, I would like to discuss an electrical requirement.";

    const url =
      `https://wa.me/91${phone}?text=` +
      encodeURIComponent(message);

    window.open(
      url,
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
        {/* Background grid */}

        <div className={styles.heroGrid} />

        {/* Background glow */}

        <div className={styles.heroGlow} />

        {/* Decorative nodes */}

        <div className={styles.heroNodes}>
          <span className={styles.nodeOne} />
          <span className={styles.nodeTwo} />
          <span className={styles.nodeThree} />
          <span className={styles.nodeFour} />
        </div>

        <div className={styles.heroContainer}>
          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <i />
              CONTACT RAINBOW
            </span>

            <h1>
              Let's discuss the{" "}
              <strong>electrical requirement.</strong>
            </h1>

            <p>
              Share a product requirement, project scope,
              maintenance need or electrical service enquiry
              with Rainbow's engineering team.
            </p>

            {/* =================================================
                HERO ACTIONS
            ================================================= */}

            <div className={styles.heroActions}>
              {/* Call chooser */}

              <div
                className={styles.callChooserWrapper}
              >
                <button
                  type="button"
                  className={styles.heroPrimary}
                  onClick={() =>
                    setShowPhoneChooser(
                      (value) => !value,
                    )
                  }
                  aria-expanded={
                    showPhoneChooser
                  }
                  aria-haspopup="dialog"
                >
                  Call Rainbow
                  <Phone size={16} />
                </button>

                {/* =================================================
                    PHONE CHOOSER

                    HIGH Z-INDEX
                ================================================= */}

                {showPhoneChooser && (
                  <div
                    className={styles.phoneChooser}
                    role="dialog"
                    aria-label="Choose a contact"
                  >
                    <div
                      className={
                        styles.phoneChooserHeader
                      }
                    >
                      <strong>
                        Choose a contact
                      </strong>

                      <span>
                        Select a Rainbow team member
                        to call
                      </span>
                    </div>

                    <div
                      className={
                        styles.phoneChooserList
                      }
                    >
                      {contactNumbers.map(
                        (contact) => (
                          <button
                            type="button"
                            key={contact.phone}
                            className={
                              styles.phoneChooserOption
                            }
                            onClick={() =>
                              callContact(
                                contact.phone,
                              )
                            }
                          >
                            <span
                              className={
                                styles.phoneChooserIcon
                              }
                            >
                              <Phone size={15} />
                            </span>

                            <span
                              className={
                                styles.phoneChooserInfo
                              }
                            >
                              <strong>
                                {contact.name}
                              </strong>

                              <small>
                                +91{" "}
                                {contact.phone}
                              </small>
                            </span>

                            <ChevronRight
                              size={14}
                              className={
                                styles.phoneChooserArrow
                              }
                            />
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Email */}

              <Link
                to="/contact"
                className={styles.heroSecondary}
              >
                Send an enquiry
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* =================================================
                HERO STATS

                LOW Z-INDEX SO PHONE MENU STAYS ABOVE
            ================================================= */}

            <div className={styles.heroStats}>
              <div>
                <CheckCircle2 size={17} />

                <span>
                  Direct
                  <small>
                    Engineering support
                  </small>
                </span>
              </div>

              <div>
                <FaWhatsapp size={17} />

                <span>
                  WhatsApp
                  <small>
                    Quick enquiry
                  </small>
                </span>
              </div>

              <div>
                <Mail size={17} />

                <span>
                  Email
                  <small>
                    Project details
                  </small>
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              HERO VISUAL
          ================================================= */}

          <div className={styles.heroVisual}>
            <div
              className={styles.visualOrbit}
            />

            <div
              className={styles.visualOrbitTwo}
            />

            <div
              className={styles.connectionLine}
            >
              <span />
              <span />
              <span />
            </div>

            {/* =================================================
                CONTACT PANEL
            ================================================= */}

            <div
              className={styles.contactPanel}
            >
              <div
                className={styles.panelTop}
              >
                <div
                  className={styles.panelIcon}
                >
                  <Phone size={23} />
                </div>

                <div>
                  <small>
                    RAINBOW / ENGINEERING
                  </small>

                  <strong>
                    Direct support
                  </strong>
                </div>

                <span
                  className={styles.active}
                >
                  <i />
                  ACTIVE
                </span>
              </div>

              <h2>
                Talk to the{" "}
                <strong>
                  right team.
                </strong>
              </h2>

              <p>
                Product enquiries, electrical
                projects, maintenance and
                technical requirements.
              </p>

              <div
                className={styles.panelItems}
              >
                {/* Phone */}

                <div
                  className={
                    styles.directSupportItem
                  }
                >
                  <Phone size={18} />

                  <span>
                    <small>
                      PHONE
                    </small>

                    <strong>
                      Direct support
                    </strong>

                    <em>
                      Choose a contact to call
                    </em>
                  </span>
                </div>

                {/* Email */}

                <a
                  href={`mailto:${company.email}`}
                  className={
                    styles.panelEmailItem
                  }
                >
                  <Mail size={18} />

                  <span>
                    <small>
                      EMAIL
                    </small>

                    {company.email}
                  </span>
                </a>

                {/* WhatsApp */}

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    styles.whatsappItem
                  }
                >
                  <FaWhatsapp size={18} />

                  <span>
                    <small>
                      WHATSAPP
                    </small>

                    Direct enquiry
                  </span>
                </a>
              </div>

              <div
                className={styles.panelFooter}
              >
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

            {/* =================================================
                FLOATING WHATSAPP
            ================================================= */}

            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                "Hello Rainbow, I would like to discuss an electrical requirement.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className={styles.floatingBadge}
            >
              <FaWhatsapp size={17} />

              <span>
                <strong>
                  Quick enquiry
                </strong>

                WhatsApp support
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className={styles.content}>
        <div className={styles.container}>
          {/* =================================================
              INFORMATION
          ================================================= */}

          <div className={styles.info}>
            {/* Location */}

            <div className={styles.infoCard}>
              <MapPin />

              <span>
                Location
              </span>

              <b>
                {company.location}
              </b>
            </div>

            {/* =================================================
                ALL THREE PHONE NUMBERS
            ================================================= */}

            <div
              className={`${styles.infoCard} ${styles.phoneInfoCard}`}
            >
              <Phone />

              <span>
                Office Phone
              </span>

              <b>
                Choose a contact to call
              </b>

              <div
                className={
                  styles.infoPhoneList
                }
              >
                {contactNumbers.map(
                  (contact) => (
                    <div
                      key={contact.phone}
                      className={
                        styles.infoPhonePerson
                      }
                    >
                      <span
                        className={
                          styles.personAvatar
                        }
                      >
                        {contact.initial}
                      </span>

                      <span
                        className={
                          styles.personDetails
                        }
                      >
                        <strong>
                          {contact.name}
                        </strong>

                        <small>
                          +91{" "}
                          {contact.phone}
                        </small>
                      </span>

                      <a
                        href={`tel:+91${contact.phone}`}
                        className={
                          styles.callIcon
                        }
                        aria-label={`Call ${contact.name}`}
                        onClick={(e) =>
                          e.stopPropagation()
                        }
                      >
                        <Phone size={14} />
                      </a>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* WhatsApp */}

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className={`${styles.infoCard} ${styles.whatsappCard}`}
            >
              <FaWhatsapp />

              <span>
                WhatsApp
              </span>

              <b>
                Direct enquiry
              </b>
            </a>

            {/* Email */}

            <a
              href={`mailto:${company.email}`}
              className={styles.infoCard}
            >
              <Mail />

              <span>
                Email
              </span>

              <b>
                {company.email}
              </b>
            </a>

            {/* Instagram */}

            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              className={`${styles.infoCard} ${styles.instagramCard}`}
            >
              <FaInstagram />

              <span>
                Instagram
              </span>

              <b>
                @rainbow_varanasi
              </b>
            </a>
          </div>

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <form
            id="rainbow-contact-form"
            className={styles.form}
            onSubmit={submit}
          >
            <span
              className={styles.formEyebrow}
            >
              PROJECT / PRODUCT ENQUIRY
            </span>

            <h2>
              Start with the essentials.
            </h2>

            <p
              className={styles.formIntro}
            >
              Provide your basic details and
              requirement. You can submit the
              enquiry or send the same information
              directly through WhatsApp.
            </p>

            {/* Name + Company */}

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

            {/* Phone + Email */}

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

            {/* Requirement */}

            <label>
              Requirement

              <textarea
                name="requirement"
                rows="6"
                required
                placeholder="UPS capacity, control panel, solar project, electrical work, AMC, etc."
              />
            </label>

            {/* Actions */}

            <div className={styles.actions}>
              <button
                type="submit"
                className={
                  styles.submitButton
                }
              >
                {sent
                  ? "Enquiry prepared"
                  : "Send enquiry"}

                <Mail size={16} />
              </button>

              <button
                type="button"
                className={
                  styles.whatsappButton
                }
                onClick={sendWhatsApp}
              >
                Send via WhatsApp

                <FaWhatsapp size={19} />
              </button>
            </div>

            <small className={styles.note}>
              Your information is taken from
              the fields above. WhatsApp sends
              the complete enquiry directly to
              Rainbow.
            </small>
          </form>
        </div>
      </section>
    </div>
  );
}