import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Headphones,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import { whyRainbow } from "../../../data/siteData";

import SectionHeader from "../../common/SectionHeader";

import styles from "./WhyChoose.module.css";

const icons = [
  Factory,
  ShieldCheck,
  Target,
  Headphones,
  ShieldCheck,
  CheckCircle2,
];

export default function WhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <SectionHeader
          eyebrow="02 / Why choose Rainbow"
          title="Engineering support around the product."
          text="Rainbow supports projects beyond equipment supply — from selection and installation to commissioning, servicing and maintenance."
        />

        {/* =================================================
            ENGINEERING FEATURES
        ================================================= */}

        <div className={styles.grid}>
          {whyRainbow.map((item, index) => {
            const Icon = icons[index] || Zap;

            return (
              <article
                className={styles.card}
                key={item[0]}
              >
                {/* Top line */}
                <div className={styles.cardTop}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className={styles.icon}>
                    <Icon size={19} />
                  </div>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <h3>{item[0]}</h3>

                  <p>{item[1]}</p>
                </div>

                {/* Bottom indicator */}
                <div className={styles.cardFooter}>
                  <span>Rainbow engineering</span>

                  <span className={styles.status}>
                    <i />
                    Supported
                  </span>
                </div>

                {/* Electrical decoration */}
                <div
                  className={styles.circuit}
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            CONTACT STRIP
        ================================================= */}

        <div className={styles.strip}>
          <div className={styles.stripContent}>
            <div className={styles.stripIcon}>
              <Zap size={19} />
            </div>

            <div>
              <span className={styles.stripLabel}>
                Need help selecting equipment?
              </span>

              <strong>
                Share your load, application or site requirement.
              </strong>
            </div>
          </div>

          <Link
            to="/contact"
            className={styles.stripButton}
          >
            <span>Talk to Rainbow</span>

            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}