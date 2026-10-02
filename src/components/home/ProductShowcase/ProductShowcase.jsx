import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import { products } from "../../../data.js";

import ProductCard from "../../products/ProductCard/ProductCard";

import styles from "./ProductShowcase.module.css";

export default function ProductShowcase() {
  const featured = products
    .filter((product) => product.featured)
    .slice(0, 8);

  return (
    <section className={styles.section}>
      <div
        className={styles.gridTexture}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundGlowTwo}
        aria-hidden="true"
      />

      <div
        className={styles.energyBeam}
        aria-hidden="true"
      />

      <div className={styles.container}>
        {/* TOP SYSTEM BAR */}
        <div className={styles.topBar}>
          <span className={styles.eyebrow}>
            <i />
            04 / FEATURED CATALOG
          </span>

          <span className={styles.topStatus}>
            <i />
            ENGINEERING SYSTEM
          </span>
        </div>

        {/* MAIN HEADER */}
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.headingEyebrow}>
              ELECTRICAL EQUIPMENT
            </div>

            <h2 className={styles.title}>
              Products selected for real
              <span>electrical applications.</span>
            </h2>

            <p className={styles.description}>
              Browse the catalog, open a product, then add it
              to the enquiry cart. Pricing is confirmed after
              technical requirements are understood.
            </p>
          </div>

          <Link
            to="/products"
            className={styles.catalogButton}
          >
            <span>View all products</span>

            <span className={styles.catalogArrow}>
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
              />
            </span>
          </Link>
        </header>

        {/* CATALOG SYSTEM BAR */}
        <div className={styles.showcaseHeader}>
          <div className={styles.showcaseLabel}>
            <span className={styles.statusDot} />

            <span>
              FEATURED PRODUCT SYSTEM
            </span>
          </div>

          <div className={styles.showcaseMeta}>
            <span>
              {String(featured.length).padStart(2, "0")} / 08
            </span>

            <span className={styles.metaLine} />

            <span>
              PRODUCT · PROJECT · SERVICE
            </span>
          </div>
        </div>

        {/* PRODUCTS */}
        {featured.length > 0 ? (
          <div className={styles.grid}>
            {featured.map((product, index) => (
              <article
                key={product.id}
                className={styles.product}
              >
                <div
                  className={styles.productTop}
                  aria-hidden="true"
                >
                  <span className={styles.productNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.productStatus}>
                    {index === 0
                      ? "FEATURED"
                      : "AVAILABLE"}
                  </span>
                </div>

                <div
                  className={styles.productCorner}
                  aria-hidden="true"
                >
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.7}
                  />
                </div>

                <ProductCard product={product} />
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>
              <ArrowUpRight
                size={21}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <strong>
                Featured products will appear here.
              </strong>

              <span>
                Product availability is being prepared.
              </span>
            </div>
          </div>
        )}

        {/* BOTTOM CTA */}
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <span className={styles.bottomEyebrow}>
              <i />
              ENGINEERED FOR CONTINUITY
            </span>

            <p>
              Need a specific UPS, battery, panel, inverter,
              stabilizer or electrical component?
            </p>
          </div>

          <Link
            to="/contact"
            className={styles.enquiry}
          >
            <span>Talk to an engineer</span>

            <ArrowRight
              size={15}
              strokeWidth={1.8}
            />
          </Link>
        </div>

        {/* FOOTER SYSTEM LINE */}
        <div className={styles.footerLine}>
          <span>
            04 / FEATURED CATALOG
          </span>

          <span>
            RAINBOW ELECTRICAL & POWER SYSTEMS
          </span>

          <span>
            POWER · PROTECTION · CONTINUITY
          </span>
        </div>
      </div>
    </section>
  );
}