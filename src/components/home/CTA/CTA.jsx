import {
  ArrowRight,
  MessageCircle,
  Zap,
  ShieldCheck,
  Cable,
} from "lucide-react";

import { Link } from "react-router-dom";

import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      {/* BACKGROUND ELECTRICAL DETAIL */}

      <div
        className={styles.background}
        aria-hidden="true"
      >
        <span className={styles.line1} />
        <span className={styles.line2} />
        <span className={styles.line3} />

        <i className={styles.node1} />
        <i className={styles.node2} />
        <i className={styles.node3} />
      </div>

      <div className={styles.container}>
        {/* MAIN CONTENT */}

        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            <span>Project / Product Enquiry</span>
          </div>

          <h2>
            Have an electrical
            <span> requirement?</span>
          </h2>

          <p>
            Tell us what you need. From UPS systems and
            batteries to control panels, solar and
            industrial electrical work, Rainbow can help
            identify the right solution.
          </p>

          <div className={styles.highlights}>
            <span>
              <Zap size={14} />
              Technical guidance
            </span>

            <span>
              <ShieldCheck size={14} />
              Application-focused solutions
            </span>

            <span>
              <Cable size={14} />
              Supply & installation support
            </span>
          </div>
        </div>

        {/* ACTION PANEL */}

        <div className={styles.actions}>
          <Link
            to="/products"
            className={styles.primary}
          >
            <span>
              Browse Products
              <small>
                Build your enquiry list
              </small>
            </span>

            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className={styles.secondary}
          >
            <span className={styles.secondaryIcon}>
              <MessageCircle size={17} />
            </span>

            <span>
              Contact Rainbow
              <small>
                Discuss your requirement
              </small>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
