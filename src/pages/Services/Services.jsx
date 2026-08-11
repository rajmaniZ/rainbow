import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { company, services } from "../../data.js";
import SectionHeader from "../../components/common/SectionHeader";

import styles from "./Services.module.css";

const WHATSAPP_NUMBER = String(company?.whatsapp || "").replace(
  /\D/g,
  "",
);

/* WHATSAPP */

function sendWhatsApp(service, item = "") {
  const servicesUrl = `${window.location.origin}/services`;

  const message = [
    "Hello Rainbow,",
    "",
    "I am interested in a service from Rainbow Electrical.",
    "",
    `Service group: ${service}`,
    item ? `Required service: ${item}` : "",
    "",
    "Please share the details, technical requirements and quotation.",
    "",
    `Services page: ${servicesUrl}`,
  ]
    .filter(Boolean)
    .join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

/* SERVICE CARD */

function ServiceCard({
  service,
  index,
  open,
  onToggle,
}) {
  const Icon = service.icon || Zap;

  return (
    <article
      className={`${styles.serviceCard} ${
        open ? styles.serviceCardOpen : ""
      }`}
    >
      <button
        type="button"
        className={styles.cardHeader}
        onClick={() => onToggle(service.title)}
        aria-expanded={open}
      >
        <div className={styles.serviceIcon}>
          <Icon size={23} strokeWidth={1.8} />
        </div>

        <div className={styles.cardTitle}>
          <span className={styles.number}>
            {String(index + 1).padStart(2, "0")}
          </span>

          <h2>{service.title}</h2>
        </div>

        <span className={styles.expandButton}>
          {open ? (
            <ChevronUp size={19} />
          ) : (
            <ChevronDown size={19} />
          )}
        </span>
      </button>

      <div className={styles.cardDescription}>
        <p>{service.description}</p>
      </div>

      {open && (
        <div className={styles.expandedContent}>
          <div className={styles.serviceItems}>
            {service.items.map((item) => (
              <div
                className={styles.serviceItem}
                key={item}
              >
                <span className={styles.check}>
                  <CheckCircle2 size={18} />
                </span>

                <button
                  type="button"
                  className={styles.serviceName}
                  onClick={() =>
                    sendWhatsApp(service.title, item)
                  }
                >
                  {item}
                </button>

                <button
                  type="button"
                  className={styles.whatsappButton}
                  aria-label={`WhatsApp enquiry for ${item}`}
                  title={`Enquire about ${item}`}
                  onClick={() =>
                    sendWhatsApp(service.title, item)
                  }
                >
                  <FaWhatsapp size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className={styles.cardActions}>
            <button
              type="button"
              className={styles.primaryAction}
              onClick={() =>
                sendWhatsApp(service.title)
              }
            >
              Discuss this service
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className={styles.whatsappAction}
              onClick={() =>
                sendWhatsApp(service.title)
              }
            >
              <FaWhatsapp size={18} />
              WhatsApp enquiry
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

/* SERVICES PAGE */

export default function Services() {
  const [openServices, setOpenServices] = useState(
    () => new Set(),
  );

  const toggleService = (title) => {
    setOpenServices((previous) => {
      const next = new Set(previous);

      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }

      return next;
    });
  };

  /*
 *  Independent columns.
 *      This prevents one opened card from moving
 *      the card on the opposite side.
 */
  const columns = useMemo(() => {
    const left = [];
    const right = [];

    services.forEach((service, index) => {
      if (index % 2 === 0) {
        left.push({
          service,
          index,
        });
      } else {
        right.push({
          service,
          index,
        });
      }
    });

    return {
      left,
      right,
    };
  }, []);

  const openCount = openServices.size;

  const totalItems = services.reduce(
    (total, service) =>
      total + service.items.length,
    0,
  );

  const collapseAll = () => {
    setOpenServices(new Set());
  };

  const expandAll = () => {
    setOpenServices(
      new Set(
        services.map((service) => service.title),
      ),
    );
  };

  return (
    <div className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroGrid} />

        <div className={styles.heroGlow} />

        <div className={styles.heroCircuit}>
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className={styles.container}>
          <div className={styles.heroLayout}>
            {/* LEFT */}
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                <i />
                RAINBOW / SERVICES
              </span>

              <h1>
                Complete electrical
                <strong> service support.</strong>
              </h1>

              <p>
                From power backup and control panels to
                electrical installation, protection,
                automation and maintenance — Rainbow
                provides engineering support around the
                complete electrical lifecycle.
              </p>

              <div className={styles.heroActions}>
                <button
                  type="button"
                  className={styles.heroPrimary}
                  onClick={() =>
                    sendWhatsApp(
                      "Electrical Services",
                    )
                  }
                >
                  <FaWhatsapp size={18} />
                  Discuss your requirement
                </button>

                <a
                  href="#service-portfolio"
                  className={styles.heroSecondary}
                >
                  Explore services
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className={styles.heroMeta}>
                <span>
                  <CheckCircle2 size={16} />
                  {services.length} service groups
                </span>

                <span>
                  <ShieldCheck size={16} />
                  {totalItems}+ individual services
                </span>
              </div>
            </div>

            {/* RIGHT HERO PANEL */}
            <div className={styles.heroPanel}>
              <div className={styles.panelTop}>
                <div className={styles.panelIcon}>
                  <Zap size={23} />
                </div>

                <span>
                  ENGINEERING SUPPORT
                </span>
              </div>

              <h2>
                One team for the complete
                electrical lifecycle.
              </h2>

              <p>
                Supply, installation, commissioning,
                testing, repair, maintenance and
                technical support.
              </p>

              <div className={styles.panelStats}>
                <div>
                  <strong>
                    {services.length}
                  </strong>

                  <span>
                    Service groups
                  </span>
                </div>

                <div>
                  <strong>
                    {totalItems}+
                  </strong>

                  <span>
                    Service options
                  </span>
                </div>

                <div>
                  <strong>
                    24/7
                  </strong>

                  <span>
                    Direct enquiry
                  </span>
                </div>
              </div>

              <div className={styles.panelList}>
                <span>
                  <CheckCircle2 size={16} />
                  Power backup & UPS
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Electrical control panels
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Protection & switching
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Installation & maintenance
                </span>
              </div>

              <button
                type="button"
                className={styles.panelButton}
                onClick={() =>
                  sendWhatsApp(
                    "Electrical Services",
                  )
                }
              >
                <FaWhatsapp size={18} />
                Talk to Rainbow
                <ArrowRight size={16} />
              </button>

              <div className={styles.panelLine}>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CONTENT */}

      <main
        className={styles.content}
        id="service-portfolio"
      >
        <div className={styles.container}>
          <SectionHeader
            eyebrow="01 / Service portfolio"
            title="Services built around real electrical requirements."
            text="Choose a service group to view the individual services available from Rainbow. Every service can be discussed directly with our team."
          />

          {/* SUMMARY */}

          <div className={styles.summary}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <Zap size={20} />
              </div>

              <div>
                <strong>
                  {services.length}
                </strong>

                <span>
                  Service groups
                </span>
              </div>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <MessageCircle size={20} />
              </div>

              <div>
                <strong>
                  {totalItems}+
                </strong>

                <span>
                  Individual services
                </span>
              </div>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <FaWhatsapp size={20} />
              </div>

              <div>
                <strong>
                  Direct
                </strong>

                <span>
                  WhatsApp enquiry
                </span>
              </div>
            </div>
          </div>

          {/* TOOLBAR */}

          <div className={styles.serviceToolbar}>
            <div>
              <strong>
                {openCount} of {services.length}
              </strong>

              <span>
                service groups open
              </span>
            </div>

            {openCount === services.length ? (
              <button
                type="button"
                onClick={collapseAll}
                className={styles.toolbarButton}
              >
                Collapse all
                <ChevronUp size={17} />
              </button>
            ) : (
              <button
                type="button"
                onClick={expandAll}
                className={styles.toolbarButton}
              >
                Expand all
                <ChevronDown size={17} />
              </button>
            )}
          </div>

          {/* INDEPENDENT COLUMNS */}

          <div className={styles.serviceColumns}>
            <div className={styles.serviceColumn}>
              {columns.left.map(
                ({ service, index }) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={index}
                    open={openServices.has(
                      service.title,
                    )}
                    onToggle={toggleService}
                  />
                ),
              )}
            </div>

            <div className={styles.serviceColumn}>
              {columns.right.map(
                ({ service, index }) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={index}
                    open={openServices.has(
                      service.title,
                    )}
                    onToggle={toggleService}
                  />
                ),
              )}
            </div>
          </div>

          {/* CTA */}

          <section className={styles.bottomCta}>
            <div className={styles.bottomIcon}>
              <FaWhatsapp size={25} />
            </div>

            <div>
              <span>
                Need a specific service?
              </span>

              <h2>
                Tell Rainbow what you need
                to get done.
              </h2>

              <p>
                Share your site, equipment,
                load, application or
                maintenance requirement
                directly with our team.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                sendWhatsApp(
                  "Electrical Services",
                )
              }
              className={styles.bottomButton}
            >
              WhatsApp Rainbow
              <ArrowRight size={17} />
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
