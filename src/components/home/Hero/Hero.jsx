import {
  ArrowRight,
  Cable,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* BACKGROUND */}

      <div className={styles.background} aria-hidden="true">
        <div className={styles.grid} />

        <div className={styles.bgCircuit}>
          <span className={styles.bgNodeOne} />
          <span className={styles.bgNodeTwo} />
          <span className={styles.bgNodeThree} />
        </div>

        <div className={styles.bgCurrent} />
      </div>

      {/* HERO CONTENT */}

      <div className={styles.container}>
        {/* LEFT SIDE */}

        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.statusDot} />
            <span>Electrical &amp; Power Solutions</span>
          </div>

          <h1>
            Reliable power for
            <span>every connection.</span>
          </h1>

          <p className={styles.description}>
            UPS systems, electrical panels, automation and
            complete electrical solutions for industrial,
            commercial and infrastructure projects.
          </p>

          <div className={styles.actions}>
            <Link
              to="/products"
              className={styles.primaryButton}
            >
              <span>Explore Products</span>
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className={styles.secondaryButton}
            >
              Talk to an Engineer
            </Link>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <CheckCircle2 size={15} />
              <span>Installation</span>
            </div>

            <div className={styles.trustItem}>
              <CheckCircle2 size={15} />
              <span>Maintenance</span>
            </div>

            <div className={styles.trustItem}>
              <CheckCircle2 size={15} />
              <span>Technical Support</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — ELECTRICAL FLOW */}

        <div className={styles.visual}>
          <div className={styles.visualGlow} />

          <div className={styles.powerFlow}>
            <svg
              className={styles.flowSvg}
              viewBox="0 0 620 420"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {/* Main electrical route */}
              <path
                className={styles.flowTrack}
                d="
                  M42 210
                  H145
                  V110
                  H245
                  V210
                  H375
                  V310
                  H475
                  V210
                  H578
                "
              />

              {/* Secondary route */}
              <path
                className={styles.flowTrackSecondary}
                d="
                  M42 210
                  H145
                  V310
                  H245
                  V210
                "
              />

              {/* Moving current */}
              <circle
                className={styles.energyDot}
                r="5"
              >
                <animateMotion
                  dur="3.8s"
                  repeatCount="indefinite"
                  path="
                    M42 210
                    H145
                    V110
                    H245
                    V210
                    H375
                    V310
                    H475
                    V210
                    H578
                  "
                />
              </circle>

              <circle
                className={styles.energyDotSmall}
                r="3"
              >
                <animateMotion
                  dur="3.8s"
                  begin="1.25s"
                  repeatCount="indefinite"
                  path="
                    M42 210
                    H145
                    V110
                    H245
                    V210
                    H375
                    V310
                    H475
                    V210
                    H578
                  "
                />
              </circle>

              <circle
                className={styles.energyDotSmall}
                r="3"
              >
                <animateMotion
                  dur="3.8s"
                  begin="2.5s"
                  repeatCount="indefinite"
                  path="
                    M42 210
                    H145
                    V110
                    H245
                    V210
                    H375
                    V310
                    H475
                    V210
                    H578
                  "
                />
              </circle>

              {/* Nodes */}
              <circle
                className={styles.flowNode}
                cx="42"
                cy="210"
                r="9"
              />

              <circle
                className={styles.flowNode}
                cx="145"
                cy="110"
                r="8"
              />

              <circle
                className={styles.flowNode}
                cx="245"
                cy="210"
                r="9"
              />

              <circle
                className={styles.flowNode}
                cx="375"
                cy="210"
                r="9"
              />

              <circle
                className={styles.flowNode}
                cx="475"
                cy="310"
                r="8"
              />

              <circle
                className={styles.flowNode}
                cx="578"
                cy="210"
                r="9"
              />

              {/* Node centers */}
              <circle
                className={styles.terminal}
                cx="42"
                cy="210"
                r="3"
              />

              <circle
                className={styles.terminal}
                cx="145"
                cy="110"
                r="3"
              />

              <circle
                className={styles.terminal}
                cx="245"
                cy="210"
                r="3"
              />

              <circle
                className={styles.terminal}
                cx="375"
                cy="210"
                r="3"
              />

              <circle
                className={styles.terminal}
                cx="475"
                cy="310"
                r="3"
              />

              <circle
                className={styles.terminal}
                cx="578"
                cy="210"
                r="3"
              />

              {/* Direction indicators */}
              <path
                className={styles.arrowLine}
                d="M75 210 H108"
              />

              <path
                className={styles.arrowHead}
                d="
                  M108 210 L100 205
                  M108 210 L100 215
                "
              />

              <path
                className={styles.arrowLine}
                d="M505 210 H540"
              />

              <path
                className={styles.arrowHead}
                d="
                  M540 210 L532 205
                  M540 210 L532 215
                "
              />
            </svg>

            {/* Power */}
            <div
              className={`${styles.iconNode} ${styles.sourceNode}`}
            >
              <div className={styles.iconCircle}>
                <Cable size={18} />
              </div>

              <span>Power</span>
            </div>

            {/* Protection */}
            <div
              className={`${styles.iconNode} ${styles.protectionNode}`}
            >
              <div className={styles.iconCircle}>
                <ShieldCheck size={18} />
              </div>

              <span>Protection</span>
            </div>

            {/* UPS */}
            <div
              className={`${styles.iconNode} ${styles.controlNode}`}
            >
              <div
                className={`${styles.iconCircle} ${styles.activeIcon}`}
              >
                <Zap size={20} />
              </div>

              <span>UPS</span>
            </div>

            {/* Solar / Energy */}
            <div
              className={`${styles.iconNode} ${styles.solarNode}`}
            >
              <div className={styles.iconCircle}>
                <Sun size={18} />
              </div>

              <span>Energy</span>
            </div>

            {/* Load */}
            <div
              className={`${styles.iconNode} ${styles.loadNode}`}
            >
              <div className={styles.iconCircle}>
                <Factory size={18} />
              </div>

              <span>Load</span>
            </div>
          </div>

          {/* Railway project */}
          <div
            className={`${styles.floatingCard} ${styles.projectCard}`}
          >
            <div className={styles.floatingIcon}>
              <Factory size={17} />
            </div>

            <div>
              <strong>Railway Projects</strong>
              <span>Electrical infrastructure</span>
            </div>
          </div>

          {/* UPS */}
          <div
            className={`${styles.floatingCard} ${styles.upsCard}`}
          >
            <div className={styles.floatingIconBlue}>
              <Zap size={15} />
            </div>

            <div>
              <strong>UPS Systems</strong>
              <span>Reliable backup power</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SERVICES */}

      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <div className={styles.bottomItem}>
            <strong>UPS</strong>
            <span>Power Backup</span>
          </div>

          <div className={styles.bottomItem}>
            <strong>Panels</strong>
            <span>Control &amp; Distribution</span>
          </div>

          <div className={styles.bottomItem}>
            <strong>Automation</strong>
            <span>Industrial Control</span>
          </div>

          <div className={styles.bottomItem}>
            <strong>Solar</strong>
            <span>Energy Solutions</span>
          </div>

          <div className={styles.bottomItem}>
            <strong>Services</strong>
            <span>Technical Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
