import {
  FaBolt,
  FaChevronRight,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import logo from "../../../assets/rainbow-logo.png";
import { company, categories } from "../../../data.js";

import styles from "./Footer.module.css";

/*
 *    FALLBACK PRODUCT CATEGORIES
 *    Used only if categories are not available in data.js
 */

const fallbackCategories = [
  {
    name: "Online UPS Systems",
    slug: "ups",
  },
  {
    name: "UPS Components",
    slug: "components",
  },
  {
    name: "Batteries",
    slug: "batteries",
  },
  {
    name: "Servo Stabilizers",
    slug: "stabilizers",
  },
  {
    name: "Inverters",
    slug: "inverters",
  },
  {
    name: "Solar Solutions",
    slug: "solar",
  },
  {
    name: "Control Panels",
    slug: "panels",
  },
  {
    name: "Panel Components",
    slug: "panel-components",
  },
];

/* SERVICES */

const services = [
  "UPS Installation & Commissioning",
  "UPS Repair & Maintenance",
  "Battery Replacement & Testing",
  "Panel Design & Manufacturing",
  "PLC & Industrial Automation",
  "SCADA Integration",
  "Electrical Wiring & Installation",
  "Switchgear & Protection",
];

/* COMPANY LINKS */

const companyLinks = [
  {
    label: "About Rainbow",
    path: "/about",
  },
  {
    label: "Our Services",
    path: "/services",
  },
  {
    label: "Major Projects",
    path: "/projects",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
  {
    label: "Enquiry Cart",
    path: "/cart",
  },
];

/* INDUSTRIES */

const industries = [
  "Railways",
  "Government",
  "Banking",
  "Healthcare",
  "Industrial",
  "Commercial",
];

/* CATEGORY HELPERS */

function getCategoryName(category) {
  if (typeof category === "string") {
    return category;
  }

  return (
    category?.name ||
    category?.title ||
    category?.label ||
    category?.category ||
    "Product"
  );
}

function getCategorySlug(category) {
  if (typeof category === "string") {
    return category
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");
  }

  return (
    category?.slug ||
    category?.id ||
    category?.key ||
    getCategoryName(category)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
  );
}

/* FOOTER */

export default function Footer() {
  const productList =
    Array.isArray(categories) && categories.length > 0
      ? categories.slice(0, 8)
      : fallbackCategories;

  const phone = company?.phone || "";
  const location = company?.location || "";
  const instagram = company?.instagram || "";
  const whatsapp = company?.whatsapp || "";

  const whatsappNumber = String(whatsapp).replace(
    /\D/g,
    ""
  );

  return (
    <footer className={styles.footer}>
      {/* ELECTRICAL DECORATION */}

      <div
        className={`${styles.circuit} ${styles.circuitOne}`}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>

      <div
        className={`${styles.circuit} ${styles.circuitTwo}`}
        aria-hidden="true"
      >
        <span />
        <span />
      </div>

      <div
        className={styles.footerGlow}
        aria-hidden="true"
      />

      {/* MAIN CONTAINER */}

      <div className={styles.container}>
        {/* COMPANY INTRO + PROJECT */}

        <section className={styles.topSection}>
          {/* COMPANY */}

          <div className={styles.companyBlock}>
            <Link
              to="/"
              className={styles.logoLink}
              aria-label="Rainbow Home"
            >
              <img
                src={logo}
                alt="Rainbow"
                className={styles.logo}
              />
            </Link>

            <p className={styles.description}>
              Rainbow provides complete electrical and
              power solutions for residential,
              commercial, industrial and government
              projects.
            </p>

            <p className={styles.descriptionSecondary}>
              Our solutions cover UPS systems,
              batteries, electrical panels, automation,
              solar systems, electrical installation
              and maintenance.
            </p>

            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <FaShieldAlt />

                <span>
                  A Class Electrical Contractor
                </span>
              </div>

              <div className={styles.trustItem}>
                <FaShieldAlt />

                <span>
                  ISO Certified
                </span>
              </div>
            </div>
          </div>

          {/* PROJECT HIGHLIGHT */}

          <div className={styles.projectCard}>
            <div className={styles.projectIcon}>
              <FaBolt />
            </div>

            <div className={styles.projectContent}>
              <span className={styles.cardLabel}>
                MAJOR PROJECT
              </span>

              <h3>
                North Eastern Railway
              </h3>

              <p>
                Electrical works across 17 railway
                stations including wiring, lighting,
                cabling, electrical panels, appliances
                and commissioning.
              </p>

              <Link
                to="/projects"
                className={styles.projectLink}
              >
                View Project
                <FaChevronRight />
              </Link>
            </div>

            <div className={styles.projectNumber}>
              <strong>17</strong>
              <span>Stations</span>
            </div>
          </div>
        </section>

        {/* FOOTER NAVIGATION */}

        <section className={styles.mainGrid}>
          {/* PRODUCTS */}

          <div className={styles.column}>
            <div className={styles.heading}>
              <span>Products</span>
              <i />
            </div>

            <ul className={styles.linkList}>
              {productList.map(
                (product, index) => {
                  const name =
                    getCategoryName(product);

                  const slug =
                    getCategorySlug(product);

                  return (
                    <li
                      key={`${slug}-${index}`}
                    >
                      <Link
                        to={`/products?category=${encodeURIComponent(
                          slug
                        )}`}
                      >
                        <span
                          className={
                            styles.linkIcon
                          }
                        >
                          <FaChevronRight />
                        </span>

                        <span>{name}</span>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>

            <Link
              to="/products"
              className={styles.viewAll}
            >
              View all products
              <FaChevronRight />
            </Link>
          </div>

          {/* SERVICES */}

          <div className={styles.column}>
            <div className={styles.heading}>
              <span>Services</span>
              <i />
            </div>

            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services">
                    <span
                      className={
                        styles.linkIcon
                      }
                    >
                      <FaChevronRight />
                    </span>

                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/services"
              className={styles.viewAll}
            >
              Explore services
              <FaChevronRight />
            </Link>
          </div>

          {/* COMPANY */}

          <div className={styles.column}>
            <div className={styles.heading}>
              <span>Company</span>
              <i />
            </div>

            <ul className={styles.linkList}>
              {companyLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <span
                      className={
                        styles.linkIcon
                      }
                    >
                      <FaChevronRight />
                    </span>

                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.industries}>
              <span className={styles.smallTitle}>
                INDUSTRIES WE SERVE
              </span>

              <div className={styles.industryTags}>
                {industries.map((industry) => (
                  <span key={industry}>
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACT */}

          <div className={styles.column}>
            <div className={styles.heading}>
              <span>Contact</span>
              <i />
            </div>

            <div className={styles.contactList}>
              {/* LOCATION */}

              <div className={styles.contactRow}>
                <div className={styles.contactIcon}>
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span
                    className={
                      styles.contactLabel
                    }
                  >
                    OFFICE
                  </span>

                  <p>
                    {location ||
                      "Varanasi, Uttar Pradesh, India"}
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <div className={styles.contactRow}>
                <div className={styles.contactIcon}>
                  <FaPhoneAlt />
                </div>

                <div>
                  <span
                    className={
                      styles.contactLabel
                    }
                  >
                    CALL US
                  </span>

                  {phone ? (
                    <a
                      href={`tel:${phone}`}
                    >
                      {phone}
                    </a>
                  ) : (
                    <span
                      className={
                        styles.contactValue
                      }
                    >
                      Contact Rainbow
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* ENQUIRY */}

            <Link
              to="/contact"
              className={styles.enquiryButton}
            >
              <span>
                Discuss your requirement
              </span>

              <FaChevronRight />
            </Link>

            {/* SOCIAL */}

            <div className={styles.socialSection}>
              <span
                className={styles.socialLabel}
              >
                CONNECT WITH RAINBOW
              </span>

              <div className={styles.socials}>
                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rainbow Instagram"
                    className={styles.socialButton}
                  >
                    <FaInstagram />
                  </a>
                )}

                {whatsappNumber && (
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rainbow WhatsApp"
                    className={`${styles.socialButton} ${styles.whatsapp}`}
                  >
                    <FaWhatsapp />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CREDIBILITY */}

        <section className={styles.credibility}>
          <div className={styles.credibilityItem}>
            <strong>17</strong>

            <span>
              Railway Stations
            </span>
          </div>

          <div className={styles.credibilityItem}>
            <strong>A Class</strong>

            <span>
              Electrical Contractor
            </span>
          </div>

          <div className={styles.credibilityItem}>
            <strong>ISO 9001</strong>

            <span>
              Quality Management
            </span>
          </div>

          <div className={styles.credibilityItem}>
            <strong>ISO 14001</strong>

            <span>
              Environmental Management
            </span>
          </div>

          <div className={styles.credibilityItem}>
            <strong>GeM</strong>

            <span>
              Government Marketplace
            </span>
          </div>
        </section>

        {/* BOTTOM BAR */}

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()}{" "}
            <strong>Rainbow</strong>.
            All rights reserved.
          </div>

          <div className={styles.bottomLinks}>
            <Link to="/about">
              About
            </Link>

            <span />

            <Link to="/products">
              Products
            </Link>

            <span />

            <Link to="/contact">
              Contact
            </Link>

            <span />

            <Link to="/cart">
              Enquiry Cart
            </Link>
          </div>

          <div className={styles.bottomText}>
            Electrical • Electronics • Power • Automation
          </div>
        </div>
      </div>
    </footer>
  );
}
