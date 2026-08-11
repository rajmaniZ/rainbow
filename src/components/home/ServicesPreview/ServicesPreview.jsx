import {
  ArrowRight,
  ArrowUpRight,
  Cable,
  ClipboardCheck,
  Factory,
  Lightbulb,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import { services } from "../../../data.js";

import SectionHeader from "../../common/SectionHeader";

import styles from "./ServicesPreview.module.css";

const serviceIcons = [
  Zap,
  Factory,
  Settings,
  ShieldCheck,
  Cable,
  Lightbulb,
  ClipboardCheck,
];

const serviceTypes = [
  "Power Solutions",
  "Electrical Engineering",
  "Industrial Automation",
  "Maintenance & Support",
  "Electrical Installation",
  "Lighting Solutions",
  "Testing & Commissioning",
];

export default function ServicesPreview() {
  const featuredServices = services.slice(0, 5);

  return (
    <section className={styles.section}>
      {/* Background electrical decoration */}
      <div
        className={styles.backgroundCircuit}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <SectionHeader
            eyebrow="05 / Services"
            title="Support from installation to long-term maintenance."
            text="Rainbow provides installation, manufacturing, commissioning, maintenance, protection, lighting and cabling services for electrical and power systems."
            action={
              <Link
                to="/services"
                className={styles.catalogLink}
              >
                <span>View all services</span>
                <ArrowUpRight size={15} />
              </Link>
            }
          />

          <div className={styles.serviceMark}>
            <div>
              <Settings size={18} />
            </div>

            <span>
              ENGINEERING
              <br />
              SUPPORT
            </span>
          </div>
        </div>

        <div className={styles.serviceLayout}>
          {/* SERVICE LIST */}

          <div className={styles.list}>
            {featuredServices.map((service, index) => {
              const Icon =
                service.icon ||
                serviceIcons[index % serviceIcons.length];

              const type =
                serviceTypes[index] ||
                "Electrical Services";

              return (
                <Link
                  key={service.title}
                  to="/services"
                  className={`${styles.item} ${
                    index === 0 ? styles.featured : ""
                  }`}
                >
                  {/* Number */}
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className={styles.icon}>
                    <Icon size={18} />
                  </div>

                  {/* Content */}
                  <div className={styles.content}>
                    <span className={styles.type}>
                      {type}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>

                  {/* Action */}
                  <div className={styles.itemAction}>
                    <ArrowUpRight size={17} />
                  </div>

                  {/* Electrical line */}
                  <div
                    className={styles.itemLine}
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* SERVICE SIDE PANEL */}

          <aside className={styles.sidePanel}>
            <div className={styles.panelTop}>
              <span className={styles.panelNumber}>
                05
              </span>

              <span className={styles.live}>
                <i />
                SERVICE SUPPORT
              </span>
            </div>

            <div className={styles.panelIcon}>
              <Zap size={25} />
            </div>

            <h3>
              One engineering partner for the complete system.
            </h3>

            <p>
              From equipment selection and installation to
              testing, commissioning and maintenance, Rainbow
              supports the complete electrical lifecycle.
            </p>

            <div className={styles.checkList}>
              <span>
                <ShieldCheck size={14} />
                Installation & commissioning
              </span>

              <span>
                <ShieldCheck size={14} />
                Preventive maintenance
              </span>

              <span>
                <ShieldCheck size={14} />
                Breakdown support
              </span>

              <span>
                <ShieldCheck size={14} />
                Electrical troubleshooting
              </span>
            </div>

            <Link
              to="/contact"
              className={styles.panelButton}
            >
              <span>Discuss your requirement</span>

              <ArrowRight size={15} />
            </Link>

            {/* Circuit */}
            <div
              className={styles.panelCircuit}
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
              <span />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
