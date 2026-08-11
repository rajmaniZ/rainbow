import {
  ArrowUpRight,
  Building2,
  Factory,
  Home,
  Landmark,
} from "lucide-react";

import { industries } from "../../../data/siteData";

import SectionHeader from "../../common/SectionHeader";

import styles from "./Industries.module.css";

const fallbackIcons = [
  Home,
  Building2,
  Factory,
  Landmark,
];

export default function Industries() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="03 / Industries"
          title="Different environments. Different electrical demands."
          text="Rainbow serves residential, commercial, industrial and government clients with electrical, power backup, automation and infrastructure solutions."
        />

        <div className={styles.grid}>
          {industries.map((industry, index) => {
            const DataIcon =
              industry.icon ||
              fallbackIcons[index % fallbackIcons.length];

            return (
              <article
                key={industry.id}
                className={styles.card}
              >
                {/* =================================================
                    CARD HEADER
                ================================================= */}

                <div className={styles.top}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    className={styles.arrow}
                    size={17}
                  />
                </div>

                {/* =================================================
                    ICON
                ================================================= */}

                <div className={styles.iconWrap}>
                  <div className={styles.icon}>
                    <DataIcon size={21} />
                  </div>

                  <span className={styles.iconPulse} />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className={styles.content}>
                  <h3>{industry.title}</h3>

                  <p>{industry.description}</p>
                </div>

                {/* =================================================
                    BOTTOM
                ================================================= */}

                <div className={styles.bottom}>
                  <span>Electrical solutions</span>

                  <span className={styles.indicator}>
                    <i />
                    Application
                  </span>
                </div>

                {/* =================================================
                    CIRCUIT DECORATION
                ================================================= */}

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
    </section>
  );
}