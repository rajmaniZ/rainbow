import {
  BadgeCheck,
  Building2,
  FileCheck2,
  Leaf,
  ShieldCheck,
  Award,
} from "lucide-react";

import { certifications } from "../../../data.js";

import styles from "./Certifications.module.css";

const certificationIcons = [
  Building2,
  ShieldCheck,
  Award,
  Leaf,
];

export default function Certifications() {
  return (
    <section className={styles.section}>
      <div
        className={styles.background}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>

      <div className={styles.container}>
        {/* =================================================
            INTRO
        ================================================= */}

        <div className={styles.intro}>
          <div className={styles.eyebrow}>
            <span className={styles.line} />
            <span>08 / Credentials</span>
          </div>

          <h2>
            Registered, certified and
            <span> compliance-minded.</span>
          </h2>

          <p>
            Rainbow's registrations and certifications
            reflect its commitment to quality, environmental
            responsibility and professional electrical work.
          </p>

          <div className={styles.credentialBadge}>
            <BadgeCheck size={18} />

            <div>
              <strong>Verified credentials</strong>
              <span>
                Quality · Safety · Compliance
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            CERTIFICATION LIST
        ================================================= */}

        <div className={styles.list}>
          {certifications.map((certification, index) => {
            const Icon =
              certificationIcons[
                index % certificationIcons.length
              ];

            return (
              <article
                className={styles.card}
                key={certification}
              >
                <div className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className={styles.icon}>
                  <Icon size={19} />
                </div>

                <div className={styles.content}>
                  <span className={styles.type}>
                    CREDENTIAL
                  </span>

                  <h3>{certification}</h3>

                  <div className={styles.status}>
                    <i />
                    <span>Registered / Certified</span>
                  </div>
                </div>

                <div className={styles.check}>
                  <ShieldCheck size={16} />
                </div>

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
      </div>

      {/* =================================================
          BOTTOM BAR
      ================================================= */}

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <div className={styles.bottomIcon}>
            <FileCheck2 size={16} />
          </div>

          <span>
            Professional credentials supporting Rainbow's
            electrical engineering and service capabilities.
          </span>

          <div className={styles.signal}>
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}