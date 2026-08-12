import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  CheckCircle2,
  Eye,
  Factory,
  Gauge,
  Headphones,
  Leaf,
  Network,
  ShieldCheck,
  Sun,
  Target,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import SectionHeader from "../../components/common/SectionHeader";

import { certifications } from "../../data.js";
import { whyRainbow } from "../../data/siteData";

import styles from "./About.module.css";

/* ASSETS */

import rainbowLogo from "../../assets/rainbow-logo.png";
import rainbowFavicon from "/favicon.png";

/* EXPERTISE */

const expertise = [
  {
    icon: BatteryCharging,
    title: "Power Backup & UPS",
    text: "Online UPS systems, industrial UPS, battery systems and backup infrastructure.",
  },
  {
    icon: Network,
    title: "Electrical Control Panels",
    text: "Power distribution, motor control, automation and protection panels.",
  },
  {
    icon: Gauge,
    title: "Industrial Automation",
    text: "PLC, HMI, SCADA, VFD and instrumentation-based control solutions.",
  },
  {
    icon: Zap,
    title: "Electrical Installation",
    text: "Complete electrical installation, cabling, testing and commissioning.",
  },
  {
    icon: Sun,
    title: "Solar Solutions",
    text: "On-grid, off-grid and hybrid solar power systems and related equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Protection & Switching",
    text: "Switchgear, protection devices, changeover systems and electrical safety.",
  },
];

/* CERTIFICATION ICONS */

const certificationIcons = [
  BadgeCheck,
  ShieldCheck,
  Factory,
  Leaf,
];

/* ABOUT PAGE */

export default function About() {
  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div
          className={styles.heroCircuit}
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <i />
              ABOUT RAINBOW
            </div>

            <h1>
              Electrical engineering
              <span>
                {" "}
                built around reliability.
              </span>
            </h1>

            <p>
              Rainbow provides power backup,
              electrical control panels,
              industrial automation, solar and
              complete electrical solutions for
              residential, commercial, industrial
              and government requirements.
            </p>

            <div className={styles.heroActions}>
              <Link
                to="/products"
                className={styles.primaryButton}
              >
                Explore solutions
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/contact"
                className={styles.secondaryButton}
              >
                Talk to Rainbow
              </Link>
            </div>
          </div>

          {/* HERO VISUAL */}

          <div
            className={styles.heroVisual}
            aria-hidden="true"
          >
            <div className={styles.visualRing} />

            <div className={styles.powerCard}>
              <div className={styles.powerTop}>
                <span>
                  RAINBOW / ENGINEERING
                </span>

                <span className={styles.live}>
                  <i />
                  ACTIVE
                </span>
              </div>

              <div className={styles.powerCore}>
                <div className={styles.powerIcon}>
                  <Zap size={27} />
                </div>

                <div>
                  <span>POWER</span>
                  <strong>CONTINUITY</strong>
                </div>
              </div>

              <div className={styles.powerLines}>
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className={styles.powerFooter}>
                <span>SUPPLY</span>
                <span>INSTALLATION</span>
                <span>SERVICE</span>
              </div>
            </div>

            <div className={styles.visualBadge}>
              <ShieldCheck size={16} />

              <span>
                Engineering
                <strong>Support</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}

      <section className={styles.profile}>
        <div className={styles.container}>

          {/* RAINBOW IMAGE CARD */}

          <div className={styles.profileMark}>
            <div className={styles.profileImageArea}>
              <img
                src={rainbowFavicon}
                alt="Rainbow"
                className={styles.profileFavicon}
              />
            </div>

            <div className={styles.profileLogoArea}>
              <img
                src={rainbowLogo}
                alt="Rainbow"
                className={styles.profileLogo}
              />
            </div>

            {/*
 *  <div className={styles.markLine}>
 *               <i />
 *               <i />
 *               <i />
 *             </div>
 */}
          </div>

          {/* COMPANY CONTENT */}

          <div className={styles.profileContent}>
            <div className={styles.sectionLabel}>
              COMPANY PROFILE
            </div>

            <h2>
              One engineering partner for
              <span>
                {" "}
                power and electrical systems.
              </span>
            </h2>

            <p>
              Rainbow brings electrical products,
              engineering services and technical
              support together under one roof. The
              company works across the complete
              lifecycle of electrical systems — from
              product supply and system design through
              installation, commissioning, servicing
              and maintenance.
            </p>

            <div className={styles.profilePoints}>
              <span>
                <CheckCircle2 size={15} />
                Product supply
              </span>

              <span>
                <CheckCircle2 size={15} />
                Installation & commissioning
              </span>

              <span>
                <CheckCircle2 size={15} />
                Maintenance & support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}

      <section className={styles.mission}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="MISSION & VISION"
            title="Dependable infrastructure starts with practical engineering."
            text="Rainbow's approach combines suitable equipment, disciplined installation and responsive technical support."
          />

          <div className={styles.mvGrid}>
            {/* MISSION */}

            <article className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <Target size={21} />
              </div>

              <div className={styles.mvNumber}>
                01
              </div>

              <h3>Mission</h3>

              <p>
                Deliver dependable electrical and
                power solutions through practical
                engineering, quality products,
                disciplined installation and
                responsive service.
              </p>

              <div
                className={styles.cardCircuit}
                aria-hidden="true"
              >
                <span />
                <span />
              </div>
            </article>

            {/* VISION */}

            <article className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <Eye size={21} />
              </div>

              <div className={styles.mvNumber}>
                02
              </div>

              <h3>Vision</h3>

              <p>
                Become a trusted engineering partner
                for power continuity, electrical
                distribution, automation and
                long-term maintenance.
              </p>

              <div
                className={styles.cardCircuit}
                aria-hidden="true"
              >
                <span />
                <span />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}

      <section className={styles.expertiseSection}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="OUR EXPERTISE"
            title="Electrical systems from equipment to implementation."
            text="Rainbow's capabilities cover the major power, electrical and automation requirements of modern facilities."
          />

          <div className={styles.expertiseGrid}>
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={styles.expertiseCard}
                >
                  <div className={styles.expertiseTop}>
                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <Icon size={20} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div
                    className={
                      styles.expertiseLine
                    }
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY RAINBOW */}

      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyHeader}>
            <SectionHeader
              eyebrow="WHY CHOOSE RAINBOW"
              title="Support around the complete electrical requirement."
              text="Rainbow's value is not limited to supplying equipment. The focus is on selecting, implementing and supporting solutions that work in the actual application."
            />

            <div className={styles.supportBadge}>
              <Headphones size={18} />

              <div>
                <strong>
                  Lifecycle support
                </strong>

                <span>
                  Before · During · After installation
                </span>
              </div>
            </div>
          </div>

          <div className={styles.whyGrid}>
            {whyRainbow.map(
              (item, index) => (
                <article
                  key={item[0]}
                  className={styles.whyCard}
                >
                  <div className={styles.whyTop}>
                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <ShieldCheck size={18} />
                  </div>

                  <h3>{item[0]}</h3>

                  <p>{item[1]}</p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}

      <section className={styles.credentials}>
        <div className={styles.container}>
          <div className={styles.credentialsIntro}>
            <div className={styles.sectionLabel}>
              CREDENTIALS
            </div>

            <h2>
              Registered and certified for
              <span>
                {" "}
                professional work.
              </span>
            </h2>

            <p>
              Rainbow's registrations and
              certifications demonstrate its
              commitment to quality, environmental
              responsibility and professional
              electrical practice.
            </p>
          </div>

          <div className={styles.credentialsList}>
            {certifications.map(
              (certification, index) => {
                const Icon =
                  certificationIcons[
                    index %
                      certificationIcons.length
                  ];

                return (
                  <article
                    key={certification}
                    className={
                      styles.credentialCard
                    }
                  >
                    <span
                      className={
                        styles.credentialNumber
                      }
                    >
                      {String(
                        index + 1,
                      ).padStart(2, "0")}
                    </span>

                    <div
                      className={
                        styles.credentialIcon
                      }
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <small>
                        CREDENTIAL
                      </small>

                      <strong>
                        {certification}
                      </strong>

                      <span>
                        <i />
                        Registered / Certified
                      </span>
                    </div>

                    <ShieldCheck
                      className={
                        styles.credentialCheck
                      }
                      size={17}
                    />
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.sectionLabel}>
              WORK WITH RAINBOW
            </div>

            <h2>
              Have an electrical
              <span>
                {" "}
                requirement?
              </span>
            </h2>

            <p>
              Share your application, load or site
              requirement and let Rainbow help
              identify the right solution.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link
              to="/products"
              className={styles.ctaPrimary}
            >
              Explore products
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className={styles.ctaSecondary}
            >
              Contact Rainbow
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
