import {
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { whyRainbow } from "../../../data/siteData";

import image01 from "./../../../assets/why-choose-us-hero/01.png";
import image02 from "./../../../assets/why-choose-us-hero/02.png";
import image03 from "./../../../assets/why-choose-us-hero/03.png";
import image04 from "./../../../assets/why-choose-us-hero/04.png";
import image05 from "./../../../assets/why-choose-us-hero/05.png";
import image06 from "./../../../assets/why-choose-us-hero/06.png";

import styles from "./WhyChoose.module.css";

const capabilityImages = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
];

const capabilityLabels = [
  "SUPPLY · INSTALL · SERVICE",
  "PROJECT EXECUTION",
  "PRODUCT SELECTION",
  "AMC · MAINTENANCE",
  "SWITCHGEAR · TESTING",
  "DISCUSS YOUR REQUIREMENT",
];

export default function WhyChoose() {
  const items = useMemo(
    () => (Array.isArray(whyRainbow) ? whyRainbow.slice(0, 6) : []),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [items.length]);

  if (!items.length) {
    return null;
  }

  const activeItem = items[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.gridTexture} aria-hidden="true" />
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.edgeGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            02 / WHY CHOOSE RAINBOW
          </div>

          <div className={styles.heading}>
            <span>Engineering support</span>

            <h2>
              Built around
              <br />
              <em>the whole project.</em>
            </h2>
          </div>

          <p className={styles.description}>
            Rainbow supports projects beyond equipment supply — from selection
            and installation to commissioning, servicing and maintenance.
          </p>

          <div className={styles.activePanel}>
            <div className={styles.activeIndex}>
              {String(activeIndex + 1).padStart(2, "0")}
              <span>/06</span>
            </div>

            <div className={styles.activeImage}>
              <img
                src={capabilityImages[activeIndex]}
                alt={activeItem[0]}
              />
            </div>

            <div className={styles.activeText}>
              <span>ACTIVE CAPABILITY</span>
              <h3>{activeItem[0]}</h3>
              <p>{activeItem[1]}</p>
            </div>
          </div>

          <div className={styles.leftBottom}>
            <Link to="/contact" className={styles.cta}>
              <span>Talk to Rainbow</span>
              <ArrowRight size={16} strokeWidth={1.8} />
            </Link>

            <div className={styles.progress}>
              <div className={styles.progressLabels}>
                <span>01</span>
                <span>06</span>
              </div>

              <div className={styles.progressTrack}>
                <span
                  style={{
                    width: `${((activeIndex + 1) / items.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.rightHeader}>
            <div>
              <span>ENGINEERING SYSTEM</span>
              <strong>CAPABILITIES / 01—06</strong>
            </div>

            <div className={styles.live}>
              <i />
              ROTATING VIEW
            </div>
          </div>

          <div className={styles.orbitArea}>
            <div className={`${styles.orbit} ${styles.orbitLarge}`} />
            <div className={`${styles.orbit} ${styles.orbitMedium}`} />
            <div className={`${styles.orbit} ${styles.orbitSmall}`} />

            <div className={styles.crosshair} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className={styles.connectionLayer} aria-hidden="true">
              {Array.from({ length: 6 }).map((_, index) => (
                <span
                  key={index}
                  className={`${styles.connection} ${styles[`connection${index + 1}`]}`}
                />
              ))}
            </div>

            <div className={styles.core}>
              <div className={styles.corePulse} />
              <div className={styles.coreHalo} />

              <div className={styles.coreIcon}>
                <ShieldCheck size={29} strokeWidth={1.45} />
              </div>

              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            </div>

            <div className={styles.orbitItems}>
              {items.map((item, index) => {
                const slot =
                  (index - activeIndex + items.length) % items.length;

                return (
                  <button
                    type="button"
                    key={item[0]}
                    className={`${styles.item} ${
                      index === activeIndex ? styles.active : ""
                    }`}
                    style={{
                      "--slot": slot,
                    }}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${item[0]}`}
                  >
                    <span className={styles.itemImage}>
                      <img
                        src={capabilityImages[index]}
                        alt=""
                        aria-hidden="true"
                      />
                    </span>

                    <span className={styles.itemMeta}>
                      <span className={styles.itemNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className={styles.itemArrow}>
                        <ArrowRight size={13} />
                      </span>
                    </span>

                    <span className={styles.itemContent}>
                      <strong>{item[0]}</strong>
                      <small>{capabilityLabels[index]}</small>
                    </span>

                    <span className={styles.itemStatus}>
                      {index === activeIndex ? "ACTIVE" : "VIEW"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.rightFooter}>
            <span>
              <i />
              ENGINEERED FOR CONTINUITY
            </span>

            <span>PRODUCT · PROJECT · SERVICE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
