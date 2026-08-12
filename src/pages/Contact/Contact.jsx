import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";

import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { useEffect, useRef, useState } from "react";

import { company } from "../../data.js";

import styles from "./Contact.module.css";

/* DIRECT CONTACT PERSONS */

const contactPersons = [
  {
    name: "Ritik Kumar",
    phone: "7393974444",
  },
  {
    name: "Prateek Kumar",
    phone: "7007594124",
  },
  {
    name: "Sudhir Kumar",
    phone: "7054577777",
  },
];

/* CONTACT PAGE */

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [showPhoneChooser, setShowPhoneChooser] =
    useState(false);

  const phoneChooserRef = useRef(null);

  /* CLOSE CALL MENU WHEN CLICKING OUTSIDE */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        phoneChooserRef.current &&
        !phoneChooserRef.current.contains(event.target)
      ) {
        setShowPhoneChooser(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );
    };
  }, []);

  /* ESCAPE TO CLOSE CALL MENU */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowPhoneChooser(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  /* FORM DATA */

  const getFormData = (form) => {
    const data = new FormData(form);

    return {
      name:
        data.get("name")?.trim() || "",

      companyName:
        data.get("company")?.trim() ||
        "Not provided",

      phone:
        data.get("phone")?.trim() || "",

      email:
        data.get("email")?.trim() ||
        "Not provided",

      requirement:
        data.get("requirement")?.trim() || "",
    };
  };

  /* FORM SUBMIT */

  const submit = (e) => {
    e.preventDefault();

    setSent(true);
  };

  /* CALL SELECTED PERSON */

  const callPerson = (phone) => {
    setShowPhoneChooser(false);

    window.location.href = `tel:${phone}`;
  };

  /* WHATSAPP ENQUIRY */

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
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroGrid} />

        <div className={styles.heroGlow} />

        <div className={styles.heroNodes}>
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
              Let's discuss the
              <strong>
                {" "}
                electrical requirement.
              </strong>
            </h1>

            <p>
              Share a product requirement, project
              scope, maintenance need or electrical
              service enquiry with Rainbow's
              engineering team.
            </p>

            {/* HERO ACTIONS */}

            <div className={styles.heroActions}>
              {/* CALL RAINBOW */}

              <div
                className={
                  styles.callChooserWrapper
                }
                ref={phoneChooserRef}
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
                  aria-haspopup="menu"
                >
                  <span>Call Rainbow</span>

                  <Phone size={16} />
                </button>

                {/* PHONE SELECTION MENU */}

                {showPhoneChooser && (
                  <div
                    className={
                      styles.phoneChooser
                    }
                    role="menu"
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
                        Select a Rainbow team
                        member to call
                      </span>
                    </div>

                    <div
                      className={
                        styles.phoneChooserList
                      }
                    >
                      {contactPersons.map(
                        (person) => (
                          <button
                            key={
                              person.phone
                            }
                            type="button"
                            className={
                              styles.phoneChooserOption
                            }
                            onClick={() =>
                              callPerson(
                                person.phone,
                              )
                            }
                            role="menuitem"
                          >
                            <span
                              className={
                                styles.phoneChooserIcon
                              }
                            >
                              <Phone
                                size={14}
                              />
                            </span>

                            <span
                              className={
                                styles.phoneChooserInfo
                              }
                            >
                              <strong>
                                {person.name}
                              </strong>

                              <small>
                                Available for
                                direct support
                              </small>
                            </span>

                            <ArrowRight
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

              {/* SEND ENQUIRY */}

              <button
                type="button"
                className={
                  styles.heroSecondary
                }
                onClick={() =>
                  document
                    .getElementById(
                      "rainbow-contact-form",
                    )
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

            {/* HERO STATS */}

            <div className={styles.heroStats}>
              <div>
                <CheckCircle2 size={16} />

                <span>
                  Direct

                  <small>
                    Engineering support
                  </small>
                </span>
              </div>

              <div>
                <FaWhatsapp size={16} />

                <span>
                  WhatsApp

                  <small>
                    Quick enquiry
                  </small>
                </span>
              </div>

              <div>
                <Mail size={16} />

                <span>
                  Email

                  <small>
                    Project details
                  </small>
                </span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}

          <div className={styles.heroVisual}>
            <div
              className={styles.visualOrbit}
            />

            <div
              className={
                styles.visualOrbitTwo
              }
            />

            <div
              className={
                styles.connectionLine
              }
            >
              <span />
              <span />
              <span />
            </div>

            {/* HERO CONTACT PANEL */}

            <div
              className={
                styles.contactPanel
              }
            >
              <div className={styles.panelTop}>
                <div
                  className={
                    styles.panelIcon
                  }
                >
                  <Phone size={20} />
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
                  className={
                    styles.active
                  }
                >
                  <i />
                  ACTIVE
                </span>
              </div>

              <h2>
                Talk to the
                <strong>
                  {" "}
                  right team.
                </strong>
              </h2>

              <p>
                Product enquiries, electrical
                projects, maintenance and
                technical requirements.
              </p>

              {/*
 *                   HERO PANEL CONTACTS
 *                   IMPORTANT:
 *                   No phone numbers here.
 */}

              <div
                className={
                  styles.panelItems
                }
              >
                {/* DIRECT SUPPORT */}

                <div
                  className={
                    styles.directSupportItem
                  }
                >
                  <Phone size={17} />

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

                {/* EMAIL */}

                <a
                  href={`mailto:${company.email}`}
                  className={
                    styles.panelEmailItem
                  }
                >
                  <Mail size={15} />

                  <span>
                    <small>
                      EMAIL
                    </small>

                    {company.email}
                  </span>
                </a>

                {/* WHATSAPP */}

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    styles.whatsappItem
                  }
                >
                  <FaWhatsapp size={17} />

                  <span>
                    <small>
                      WHATSAPP
                    </small>

                    Direct enquiry
                  </span>
                </a>
              </div>

              {/* PANEL FOOTER */}

              <div
                className={
                  styles.panelFooter
                }
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

            {/* FLOATING WHATSAPP */}

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className={
                styles.floatingBadge
              }
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

      {/*
 *           CONTACT INFORMATION
 *           THIS IS WHERE ALL THREE PHONE NUMBERS APPEAR
 */}

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.info}>
            {/* PHONE CARD */}

            <div
              className={`${styles.infoCard} ${styles.phoneInfoCard}`}
            >
              <Phone />

              <span>
                Direct phone contacts
              </span>

              <div
                className={
                  styles.infoPhoneList
                }
              >
                {contactPersons.map(
                  (person) => (
                    <a
                      href={`tel:${person.phone}`}
                      key={person.phone}
                      className={
                        styles.infoPhonePerson
                      }
                    >
                      <span
                        className={
                          styles.personAvatar
                        }
                      >
                        {person.name
                          .charAt(0)
                          .toUpperCase()}
                      </span>

                      <span
                        className={
                          styles.personDetails
                        }
                      >
                        <strong>
                          {person.name}
                        </strong>

                        <small>
                          +91{" "}
                          {person.phone}
                        </small>
                      </span>

                      <span
                        className={
                          styles.callIcon
                        }
                      >
                        <Phone
                          size={14}
                        />
                      </span>
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* EMAIL */}

            <a
              href={`mailto:${company.email}`}
              className={styles.infoCard}
            >
              <Mail />

              <span>Email</span>

              <b>
                {company.email}
              </b>
            </a>

            {/* LOCATION */}

            <div
              className={styles.infoCard}
            >
              <MapPin />

              <span>Location</span>

              <b>
                {company.location}
              </b>
            </div>

            {/* WHATSAPP */}

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className={`${styles.infoCard} ${styles.whatsappCard}`}
            >
              <FaWhatsapp />

              <span>WhatsApp</span>

              <b>
                Direct enquiry
              </b>
            </a>

            {/* INSTAGRAM */}

            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              className={`${styles.infoCard} ${styles.instagramCard}`}
            >
              <FaInstagram />

              <span>Instagram</span>

              <b>
                @rainbow_varanasi
              </b>
            </a>
          </div>

          {/* CONTACT FORM */}

          <form
            id="rainbow-contact-form"
            className={styles.form}
            onSubmit={submit}
          >
            <span
              className={
                styles.formEyebrow
              }
            >
              PROJECT / PRODUCT ENQUIRY
            </span>

            <h2>
              Start with the essentials.
            </h2>

            <p
              className={
                styles.formIntro
              }
            >
              Provide your basic details and
              requirement. You can submit the
              enquiry now or send the same
              information directly through
              WhatsApp.
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

            <div
              className={
                styles.actions
              }
            >
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

            <small
              className={
                styles.note
              }
            >
              Your information is taken
              directly from the fields above.
              WhatsApp sends the complete
              enquiry to Rainbow.
            </small>
          </form>
        </div>
      </section>
    </div>
  );
}
