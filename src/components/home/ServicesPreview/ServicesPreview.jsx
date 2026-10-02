import {
  ArrowUpRight,
  Cable,
  ClipboardCheck,
  Factory,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { services } from "../../../data.js";

import styles from "./ServicesPreview.module.css";

const serviceIcons = [
  Zap,
  Factory,
  Settings,
  ShieldCheck,
  Cable,
  ClipboardCheck,
];

const systemCards = [
  {
    title: "Reliable Systems",
    label: "POWER SOLUTIONS",
    icon: ShieldCheck,
    position: "top",
  },
  {
    title: "Smart Engineering",
    label: "CONTROL SYSTEMS",
    icon: Settings,
    position: "left",
  },
  {
    title: "Safe Operations",
    label: "TESTING",
    icon: ClipboardCheck,
    position: "right",
  },
  {
    title: "Expert Support",
    label: "MAINTENANCE",
    icon: Cable,
    position: "bottomLeft",
  },
  {
    title: "Turnkey Execution",
    label: "INSTALLATION",
    icon: Factory,
    position: "bottomRight",
  },
];

export default function ServicesPreview() {
  const allServices = useMemo(
    () => (Array.isArray(services) ? services : []),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (allServices.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setTransitioning(true);

      window.setTimeout(() => {
        setActiveIndex(
          (current) => (current + 1) % allServices.length
        );

        setTransitioning(false);
      }, 280);
    }, 4200);

    return () => {
      window.clearInterval(timer);
    };
  }, [allServices.length]);

  if (!allServices.length) {
    return null;
  }

  const activeService = allServices[activeIndex];

  const ActiveIcon =
    activeService.icon ||
    serviceIcons[activeIndex % serviceIcons.length];

  const selectService = (index) => {
    if (index === activeIndex) {
      return;
    }

    setTransitioning(true);

    window.setTimeout(() => {
      setActiveIndex(index);
      setTransitioning(false);
    }, 280);
  };

  return (
    <section className={styles.section}>
      <div
        className={styles.gridTexture}
        aria-hidden="true"
      />

      <div
        className={styles.ambient}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headingBlock}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span>05 / SERVICES</span>
            </div>

            <h2>
              Support from installation
              <br />
              <em>to long-term maintenance.</em>
            </h2>

            <p>
              Rainbow provides installation, manufacturing,
              commissioning, maintenance, protection, lighting
              and cabling services for electrical and power
              systems.
            </p>
          </div>

          <Link
            to="/services"
            className={styles.catalogLink}
          >
            <span>View all services</span>

            <span className={styles.catalogArrow}>
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </header>

        <div className={styles.content}>
          <div className={styles.serviceSide}>
            <div className={styles.serviceMeta}>
              <span>
                SERVICE /{" "}
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span>
                01 —{" "}
                {String(allServices.length).padStart(2, "0")}
              </span>
            </div>

            <article
              className={`${styles.serviceCard} ${
                transitioning
                  ? styles.serviceChanging
                  : ""
              }`}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <span className={styles.cardType}>
                  {activeService.category}
                </span>

                <span className={styles.cardStatus}>
                  <i />
                  ACTIVE
                </span>
              </div>

              <div className={styles.cardMain}>
                <div className={styles.serviceImage}>
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    draggable="false"
                  />
                </div>

                <div className={styles.cardText}>
                  <h3>{activeService.title}</h3>

                  <p>{activeService.description}</p>
                </div>

                <Link
                  to="/services"
                  className={styles.cardArrow}
                  aria-label={`View ${activeService.title}`}
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>

              <div className={styles.cardBottom}>
                <span>{activeService.category}</span>

                <span>RAINBOW ENGINEERING</span>
              </div>
            </article>

            <div className={styles.serviceProgress}>
              {allServices.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  className={
                    index === activeIndex
                      ? styles.progressActive
                      : ""
                  }
                  onClick={() => selectService(index)}
                  aria-label={`Show ${service.title}`}
                  aria-current={
                    index === activeIndex
                      ? "true"
                      : undefined
                  }
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.visualPanel}>
            <div
              className={styles.panelGrid}
              aria-hidden="true"
            />

            <div className={styles.panelHeader}>
              <div>
                <span>ENGINEERING SYSTEM</span>

                <strong>
                  SERVICES / 01—
                  {String(allServices.length).padStart(2, "0")}
                </strong>
              </div>

              <div className={styles.live}>
                <i />
                ROTATING VIEW
              </div>
            </div>

            <div
              className={`${styles.visual} ${
                transitioning
                  ? styles.visualChanging
                  : ""
              }`}
            >
              <div
                className={styles.orbitLarge}
                aria-hidden="true"
              />

              <div
                className={styles.orbitMedium}
                aria-hidden="true"
              />

              <div
                className={styles.orbitSmall}
                aria-hidden="true"
              />

              <div
                className={styles.crosshair}
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
                <span />
              </div>

              <div
                className={styles.connectionLines}
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className={styles.core}>
                <div className={styles.coreOuter} />

                <div className={styles.coreMiddle}>
                  <div className={styles.coreIcon}>
  <img
    src={activeService.image}
    alt=""
    aria-hidden="true"
    draggable="false"
  />
</div>
                </div>

                <span>
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>

              {systemCards.map((system, index) => {
                const SystemIcon = system.icon;

                const isActive =
                  index ===
                  activeIndex % systemCards.length;

                return (
                  <div
                    key={system.title}
                    className={`${styles.systemCard} ${
                      styles[system.position]
                    } ${
                      isActive
                        ? styles.systemActive
                        : ""
                    }`}
                  >
                    <div className={styles.systemIcon}>
                      <SystemIcon
                        size={17}
                        strokeWidth={1.6}
                      />
                    </div>

                    <div className={styles.systemContent}>
                      <strong>{system.title}</strong>

                      <small>{system.label}</small>
                    </div>

                    <span
                      className={styles.systemSignal}
                    />
                  </div>
                );
              })}

              <div className={styles.activeSystem}>
                <span>ACTIVE SERVICE</span>

                <strong>{activeService.title}</strong>

                <small>{activeService.category}</small>
              </div>
            </div>

            <div className={styles.panelFooter}>
              <span>
                <i />
                COMPLETE ELECTRICAL LIFECYCLE
              </span>

              <span>
                INSTALLATION · SERVICE · SUPPORT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}