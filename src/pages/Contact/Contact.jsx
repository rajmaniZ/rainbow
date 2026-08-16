// {

// }
// import {
// CheckCircle2,
// ChevronRight,
// Mail,
// MapPin,
// Phone,
// ShieldCheck,
// } from "lucide-react";

// import { FaInstagram, FaWhatsapp } from "react-icons/fa";

// import { useState } from "react";
// import { Link } from "react-router-dom";

// import { company } from "../../data.js";

// import styles from "./Contact.module.css";

// CONTACT PAGE

// export default function Contact() {
// const [showPhoneChooser, setShowPhoneChooser] = useState(false);

// const [sent, setSent] = useState(false);

// CONTACT NUMBERS

// const contactNumbers = [
// {
// name: "Ritik Kumar",
// phone: "7393974444",
// initial: "R",
// },
// {
// name: "Prateek Kumar",
// phone: "7007594124",
// initial: "P",
// },
// {
// name: "Sudhir Kumar",
// phone: "7054577777",
// initial: "S",
// },
// ];

// FORM DATA

// const getFormData = (form) => {
// const data = new FormData(form);

// return {
// name: data.get("name")?.trim() || "",

// companyName: data.get("company")?.trim() || "Not provided",

// phone: data.get("phone")?.trim() || "",

// email: data.get("email")?.trim() || "Not provided",

// requirement: data.get("requirement")?.trim() || "",
// };
// };

// NORMAL FORM SUBMIT

// EmailJS can be connected here later.
// Currently it prepares the form state.

// const submit = (e) => {
// e.preventDefault();

// setSent(true);

// * EmailJS can be added here later.

// * Example:

// * emailjs.send(...)

// };

// WHATSAPP ENQUIRY

// const sendWhatsApp = () => {
// const form = document.getElementById("rainbow-contact-form");

// if (!form) {
// return;
// }

// if (!form.checkValidity()) {
// form.reportValidity();
// return;
// }

// const data = getFormData(form);

// const message = `Hello Rainbow,

// I would like to discuss an electrical requirement.

// ━━━━━━━━━━━━━━━━━━━━
// CUSTOMER DETAILS
// ━━━━━━━━━━━━━━━━━━━━

// Name: ${data.name}
// Company / Organization: ${data.companyName}
// Phone: ${data.phone}
// Email: ${data.email}

// ━━━━━━━━━━━━━━━━━━━━
// REQUIREMENT
// ━━━━━━━━━━━━━━━━━━━━

// ${data.requirement}

// ━━━━━━━━━━━━━━━━━━━━
// SOURCE
// ━━━━━━━━━━━━━━━━━━━━

// Website enquiry
// ${window.location.href}

// Thank you.`;

// const whatsappUrl =
// `https://wa.me/${company.whatsapp}?text=` + encodeURIComponent(message);

// window.open(whatsappUrl, "_blank", "noopener,noreferrer");
// };

// CALL CONTACT

// const callContact = (phone) => {
// setShowPhoneChooser(false);

// window.location.href = `tel:+91${phone}`;
// };

// WHATSAPP CONTACT

// const whatsappContact = (phone) => {
// const message =
// "Hello Rainbow, I would like to discuss an electrical requirement.";

// const url = `https://wa.me/91${phone}?text=` + encodeURIComponent(message);

// window.open(url, "_blank", "noopener,noreferrer");
// };

// GOOGLE MAP

// Uses the existing company.location value from data.js.
// No Google Maps API key is required for this embedded
// search-style map.

// const mapLocation = company?.location || "Rainbow Electrical";

// const googleMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
// mapLocation,
// )}&output=embed`;

// RENDER

// return (
// <div className={styles.page}>
// {/* ===================================================
// HERO
// =================================================== */}

// <section className={styles.hero}>
// {/* Background grid */}
// <div className={styles.heroGrid} />

// {/* Background glow */}
// <div className={styles.heroGlow} />

// {/* Decorative nodes */}
// <div className={styles.heroNodes}>
// <span className={styles.nodeOne} />

// <span className={styles.nodeTwo} />

// <span className={styles.nodeThree} />

// <span className={styles.nodeFour} />
// </div>

// <div className={styles.heroContainer}>
// {/* =================================================
// HERO CONTENT
// ================================================= */}

// <div className={styles.heroContent}>
// <span className={styles.eyebrow}>
// <i />
// CONTACT RAINBOW
// </span>

// <h1>
// Let's discuss the <strong>electrical requirement.</strong>
// </h1>

// <p>
// Share a product requirement, project scope, maintenance need or
// electrical service enquiry with Rainbow's engineering team.
// </p>

// {/* HERO ACTIONS */}

// <div className={styles.heroActions}>
// {/* Call chooser */}

// <div className={styles.callChooserWrapper}>
// <button
// type="button"
// className={styles.heroPrimary}
// onClick={() => setShowPhoneChooser((value) => !value)}
// aria-expanded={showPhoneChooser}
// aria-haspopup="dialog"

// Call Rainbow
// <Phone size={16} />
// </button>

// {/* PHONE CHOOSER */}

// {showPhoneChooser && (
// <div
// className={styles.phoneChooser}
// role="dialog"
// aria-label="Choose a contact"

// <div className={styles.phoneChooserHeader}>
// <strong>Choose a contact</strong>

// <span>Select a Rainbow team member to call</span>
// </div>

// <div className={styles.phoneChooserList}>
// {contactNumbers.map((contact) => (
// <button
// type="button"
// key={contact.phone}
// className={styles.phoneChooserOption}
// onClick={() => callContact(contact.phone)}

// <span className={styles.phoneChooserIcon}>
// <Phone size={15} />
// </span>

// <span className={styles.phoneChooserInfo}>
// <strong>{contact.name}</strong>

// <small>+91 {contact.phone}</small>
// </span>

// <ChevronRight
// size={14}
// className={styles.phoneChooserArrow}

// </button>
// ))}
// </div>
// </div>
// )}
// </div>

// {/* Send enquiry */}

// <Link to="/contact" className={styles.heroSecondary}>
// Send an enquiry
// <ChevronRight size={16} />
// </Link>
// </div>

// {/* HERO STATS */}

// <div className={styles.heroStats}>
// <div>
// <CheckCircle2 size={17} />

// <span>
// Direct
// <small>Engineering support</small>
// </span>
// </div>

// <div>
// <FaWhatsapp size={17} />

// <span>
// WhatsApp
// <small>Quick enquiry</small>
// </span>
// </div>

// <div>
// <Mail size={17} />

// <span>
// Email
// <small>Project details</small>
// </span>
// </div>
// </div>
// </div>

// {/* =================================================
// HERO VISUAL
// ================================================= */}

// <div className={styles.heroVisual}>
// <div className={styles.visualOrbit} />

// <div className={styles.visualOrbitTwo} />

// <div className={styles.connectionLine}>
// <span />
// <span />
// <span />
// </div>

// {/* CONTACT PANEL */}

// <div className={styles.contactPanel}>
// <div className={styles.panelTop}>
// <div className={styles.panelIcon}>
// <Phone size={23} />
// </div>

// <div>
// <small>RAINBOW / ENGINEERING</small>

// <strong>Direct support</strong>
// </div>

// <span className={styles.active}>
// <i />
// ACTIVE
// </span>
// </div>

// <h2>
// Talk to the <strong>right team.</strong>
// </h2>

// <p>
// Product enquiries, electrical projects, maintenance and
// technical requirements.
// </p>

// <div className={styles.panelItems}>
// {/* Phone */}

// <div className={styles.directSupportItem}>
// <Phone size={18} />

// <span>
// <small>PHONE</small>

// <strong>Direct support</strong>

// <em>Choose a contact to call</em>
// </span>
// </div>

// {/* Email */}

// <a
// href={`mailto:${company.email}`}
// className={styles.panelEmailItem}

// <Mail size={18} />

// <span>
// <small>EMAIL</small>

// {company.email}
// </span>
// </a>

// {/* WhatsApp */}

// <a
// href={`https://wa.me/${company.whatsapp}`}
// target="_blank"
// rel="noreferrer"
// className={styles.whatsappItem}

// <FaWhatsapp size={18} />

// <span>
// <small>WHATSAPP</small>
// Direct enquiry
// </span>
// </a>
// </div>

// <div className={styles.panelFooter}>
// <span>
// <CheckCircle2 size={14} />
// Requirement support
// </span>

// <span>
// <CheckCircle2 size={14} />
// Project discussion
// </span>
// </div>
// </div>

// {/* FLOATING WHATSAPP */}

// <a
// href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
// "Hello Rainbow, I would like to discuss an electrical requirement.",
// )}`}
// target="_blank"
// rel="noreferrer"
// className={styles.floatingBadge}

// <FaWhatsapp size={17} />

// <span>
// <strong>Quick enquiry</strong>
// WhatsApp support
// </span>
// </a>
// </div>
// </div>
// </section>

// {/* ===================================================
// CONTACT INFORMATION
// =================================================== */}

// <section className={styles.content}>
// <div className={styles.container}>
// {/* INFORMATION */}

// <div className={styles.info}>
// {/* Location */}

// <div className={styles.infoCard}>
// <MapPin />

// <span>Location</span>

// <b>{company.location}</b>
// </div>

// {/* ALL THREE PHONE NUMBERS */}

// <div className={`${styles.infoCard} ${styles.phoneInfoCard}`}>
// <Phone />

// <span>Office Phone</span>

// <b>Choose a contact to call</b>

// <div className={styles.infoPhoneList}>
// {contactNumbers.map((contact) => (
// <div key={contact.phone} className={styles.infoPhonePerson}>
// <span className={styles.personAvatar}>
// {contact.initial}
// </span>

// <span className={styles.personDetails}>
// <strong>{contact.name}</strong>

// <small>+91 {contact.phone}</small>
// </span>

// <a
// href={`tel:+91${contact.phone}`}
// className={styles.callIcon}
// aria-label={`Call ${contact.name}`}
// onClick={(e) => e.stopPropagation()}

// <Phone size={14} />
// </a>
// </div>
// ))}
// </div>
// </div>

// {/* WhatsApp */}

// <a
// href={`https://wa.me/${company.whatsapp}`}
// target="_blank"
// rel="noreferrer"
// className={`${styles.infoCard} ${styles.whatsappCard}`}

// <FaWhatsapp />

// <span>WhatsApp</span>

// <b>Direct enquiry</b>
// </a>

// {/* Email */}

// <a href={`mailto:${company.email}`} className={styles.infoCard}>
// <Mail />

// <span>Email</span>

// <b>{company.email}</b>
// </a>

// {/* Instagram */}

// <a
// href={company.instagram}
// target="_blank"
// rel="noreferrer"
// className={`${styles.infoCard} ${styles.instagramCard}`}

// <FaInstagram />

// <span>Instagram</span>

// <b>@rainbow_varanasi</b>
// </a>
// </div>

// {/* =================================================
// CONTACT FORM
// ================================================= */}

// <form
// id="rainbow-contact-form"
// className={styles.form}
// onSubmit={submit}

// <span className={styles.formEyebrow}>
// PROJECT / PRODUCT ENQUIRY
// </span>

// <h2>Start with the essentials.</h2>

// <p className={styles.formIntro}>
// Provide your basic details and requirement. You can submit the
// enquiry or send the same information directly through WhatsApp.
// </p>

// {/* Name + Company */}

// <div className={styles.row}>
// <label>
// Name
// <input
// name="name"
// required
// autoComplete="name"
// placeholder="Your name"

// </label>

// <label>
// Company
// <input
// name="company"
// autoComplete="organization"
// placeholder="Company / organization"

// </label>
// </div>

// {/* Phone + Email */}

// <div className={styles.row}>
// <label>
// Phone
// <input
// name="phone"
// type="tel"
// required
// autoComplete="tel"
// placeholder="+91..."

// </label>

// <label>
// Email
// <input
// name="email"
// type="email"
// autoComplete="email"
// placeholder="you@example.com"

// </label>
// </div>

// {/* Requirement */}

// <label>
// Requirement
// <textarea
// name="requirement"
// rows="6"
// required
// placeholder="UPS capacity, control panel, solar project, electrical work, AMC, etc."

// </label>

// {/* Actions */}

// <div className={styles.actions}>
// <button type="submit" className={styles.submitButton}>
// {sent ? "Enquiry prepared" : "Send enquiry"}

// <Mail size={16} />
// </button>

// <button
// type="button"
// className={styles.whatsappButton}
// onClick={sendWhatsApp}

// Send via WhatsApp
// <FaWhatsapp size={19} />
// </button>
// </div>

// <small className={styles.note}>
// Your information is taken from the fields above. WhatsApp sends
// the complete enquiry directly to Rainbow.
// </small>
// </form>
// </div>
// </section>

// {/* ===================================================
// GOOGLE MAP
// =================================================== */}

// <section className={styles.mapSection} aria-label="Rainbow location map">
// <div className={styles.mapContainer}>
// <div className={styles.mapHeader}>
// <div>
// <span className={styles.mapEyebrow}>
// <MapPin size={14} />
// RAINBOW / LOCATION
// </span>

// <h2>Find Rainbow Electrical.</h2>

// <p>
// Visit us or use the map below to get directions to our location.
// </p>
// </div>

// <a
// href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
// mapLocation,
// )}`}
// target="_blank"
// rel="noopener noreferrer"
// className={styles.mapDirections}

// Get directions
// <ChevronRight size={15} />
// </a>
// </div>

// <div className={styles.mapFrame}>
// <div className={styles.mapFrame}>
// <div className={styles.mapFrame}>
// <iframe
// title="Rainbow Electrical location"
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1658878261733!2d82.96304407485341!3d25.26500447766738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33002deb4207%3A0x3a85f9f600a73d70!2sRainbow!5e0!3m2!1sen!2sin!4v1786921336503!5m2!1sen!2sin"
// style={{ border: 0 }}
// allowFullScreen
// loading="lazy"
// referrerPolicy="strict-origin-when-cross-origin"

// </div>
// </div>
// </div>
// </div>
// </section>
// </div>
// );
// }

import { CheckCircle2, ChevronRight, Mail, MapPin, Phone } from "lucide-react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { useState } from "react";
import { Link } from "react-router-dom";

import { company } from "../../data.js";

import styles from "./Contact.module.css";

/* CONTACT PAGE */

export default function Contact() {
  const [showPhoneChooser, setShowPhoneChooser] = useState(false);
  const [sent, setSent] = useState(false);

  /* CONTACT NUMBERS */

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

  /* FORM DATA */

  const getFormData = (form) => {
    const data = new FormData(form);

    return {
      name: data.get("name")?.trim() || "",
      companyName: data.get("company")?.trim() || "Not provided",
      phone: data.get("phone")?.trim() || "",
      email: data.get("email")?.trim() || "Not provided",
      requirement: data.get("requirement")?.trim() || "",
    };
  };

  /*
 *      NORMAL FORM SUBMIT
 *      EmailJS can be connected here later.
 *      Currently it prepares the form state.
 */

  const submit = (e) => {
    e.preventDefault();

    setSent(true);
  };

  /* WHATSAPP ENQUIRY */

  const sendWhatsApp = () => {
    const form = document.getElementById("rainbow-contact-form");

    if (!form) {
      return;
    }

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
      `https://wa.me/${company.whatsapp}?text=` + encodeURIComponent(message);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  /* CALL CONTACT */

  const callContact = (phone) => {
    setShowPhoneChooser(false);

    window.location.href = `tel:+91${phone}`;
  };

  /* WHATSAPP CONTACT */

  const whatsappContact = (phone) => {
    const message =
      "Hello Rainbow, I would like to discuss an electrical requirement.";

    const url = `https://wa.me/91${phone}?text=` + encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  };

  /*
 *      GOOGLE MAP
 *      Uses company.location from data.js.
 */

  const mapLocation = company?.location || "Rainbow Electrical";

  const googleMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1658871624295!2d82.965619!3d25.2650045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33002deb4207%3A0x3a85f9f600a73d70!2sRainbow!5e0!3m2!1sen!2sin!4v1786923044614!5m2!1sen!2sin${encodeURIComponent(
    mapLocation,
  )}&output=embed`;

  const googleDirectionsUrl = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1658871624295!2d82.965619!3d25.2650045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33002deb4207%3A0x3a85f9f600a73d70!2sRainbow!5e0!3m2!1sen!2sin!4v1786922269853!5m2!1sen!2sin=${encodeURIComponent(
    mapLocation,
  )}`;

  /* RENDER */

  return (
    <div className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={styles.heroNodes} aria-hidden="true">
          <span className={styles.nodeOne} />
          <span className={styles.nodeTwo} />
          <span className={styles.nodeThree} />
          <span className={styles.nodeFour} />
        </div>

        <div className={styles.heroContainer}>
          {/* HERO CONTENT */}

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <i />
              CONTACT RAINBOW
            </span>

            <h1>
              Let's discuss the <strong>electrical requirement.</strong>
            </h1>

            <p>
              Share a product requirement, project scope, maintenance need or
              electrical service enquiry with Rainbow's engineering team.
            </p>

            {/* HERO ACTIONS */}

            <div className={styles.heroActions}>
              <div className={styles.callChooserWrapper}>
                <button
                  type="button"
                  className={styles.heroPrimary}
                  onClick={() => setShowPhoneChooser((value) => !value)}
                  aria-expanded={showPhoneChooser}
                  aria-haspopup="dialog"
                >
                  Call Rainbow
                  <Phone size={16} />
                </button>

                {showPhoneChooser && (
                  <div
                    className={styles.phoneChooser}
                    role="dialog"
                    aria-label="Choose a contact"
                  >
                    <div className={styles.phoneChooserHeader}>
                      <strong>Choose a contact</strong>

                      <span>Select a Rainbow team member to call</span>
                    </div>

                    <div className={styles.phoneChooserList}>
                      {contactNumbers.map((contact) => (
                        <button
                          type="button"
                          key={contact.phone}
                          className={styles.phoneChooserOption}
                          onClick={() => callContact(contact.phone)}
                        >
                          <span className={styles.phoneChooserIcon}>
                            <Phone size={15} />
                          </span>

                          <span className={styles.phoneChooserInfo}>
                            <strong>{contact.name}</strong>

                            <small>+91 {contact.phone}</small>
                          </span>

                          <ChevronRight
                            size={14}
                            className={styles.phoneChooserArrow}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/contact" className={styles.heroSecondary}>
                Send an enquiry
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* HERO STATS */}

            <div className={styles.heroStats}>
              <div>
                <CheckCircle2 size={17} />

                <span>
                  Direct
                  <small>Engineering support</small>
                </span>
              </div>

              <div>
                <FaWhatsapp size={17} />

                <span>
                  WhatsApp
                  <small>Quick enquiry</small>
                </span>
              </div>

              <div>
                <Mail size={17} />

                <span>
                  Email
                  <small>Project details</small>
                </span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}

          <div className={styles.heroVisual}>
            <div className={styles.visualOrbit} aria-hidden="true" />

            <div className={styles.visualOrbitTwo} aria-hidden="true" />

            <div className={styles.connectionLine} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            {/* CONTACT PANEL */}

            <div className={styles.contactPanel}>
              <div className={styles.panelTop}>
                <div className={styles.panelIcon}>
                  <Phone size={23} />
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
                Talk to the <strong>right team.</strong>
              </h2>

              <p>
                Product enquiries, electrical projects, maintenance and
                technical requirements.
              </p>

              <div className={styles.panelItems}>
                <div className={styles.directSupportItem}>
                  <Phone size={18} />

                  <span>
                    <small>PHONE</small>

                    <strong>Direct support</strong>

                    <em>Choose a contact to call</em>
                  </span>
                </div>

                <a
                  href={`mailto:${company.email}`}
                  className={styles.panelEmailItem}
                >
                  <Mail size={18} />

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
                  <FaWhatsapp size={18} />

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

            {/* FLOATING WHATSAPP */}

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
                <strong>Quick enquiry</strong>
                WhatsApp support
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}

      <section className={styles.content}>
        <div className={styles.container}>
          {/* INFORMATION */}

          <div className={styles.info}>
            <div className={styles.infoCard}>
              <MapPin />

              <span>Location</span>

              <b>{company.location}</b>
            </div>

            <div className={`${styles.infoCard} ${styles.phoneInfoCard}`}>
              <Phone />

              <span>Office Phone</span>

              <b>Choose a contact to call</b>

              <div className={styles.infoPhoneList}>
                {contactNumbers.map((contact) => (
                  <div key={contact.phone} className={styles.infoPhonePerson}>
                    <span className={styles.personAvatar}>
                      {contact.initial}
                    </span>

                    <span className={styles.personDetails}>
                      <strong>{contact.name}</strong>

                      <small>+91 {contact.phone}</small>
                    </span>

                    <a
                      href={`tel:+91${contact.phone}`}
                      className={styles.callIcon}
                      aria-label={`Call ${contact.name}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone size={14} />
                    </a>
                  </div>
                ))}
              </div>
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

            <a href={`mailto:${company.email}`} className={styles.infoCard}>
              <Mail />

              <span>Email</span>

              <b>{company.email}</b>
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

          {/* CONTACT FORM */}

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
              Provide your basic details and requirement. You can submit the
              enquiry or send the same information directly through WhatsApp.
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
              <button type="submit" className={styles.submitButton}>
                {sent ? "Enquiry prepared" : "Send enquiry"}

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
              Your information is taken from the fields above. WhatsApp sends
              the complete enquiry directly to Rainbow.
            </small>
          </form>
        </div>
      </section>

      {/* GOOGLE MAP */}

      <section className={styles.mapSection} aria-label="Rainbow location map">
        <div className={styles.mapContainer}>
          <div className={styles.mapHeader}>
            <div>
              <span className={styles.mapEyebrow}>
                <MapPin size={14} />
                RAINBOW / LOCATION
              </span>

              <h2>Find Rainbow Electrical.</h2>

              <p>
                Visit us or use the map below to get directions to our location.
              </p>
            </div>

            <a
              href={googleDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapDirections}
            >
              Get directions
              <ChevronRight size={15} />
            </a>
          </div>

          {/*
 *  IMPORTANT:
 *               Only ONE mapFrame wrapper.
 */}

          <div className={styles.mapFrame}>
            <iframe
              title="Rainbow Electrical location"
              src={googleMapUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
