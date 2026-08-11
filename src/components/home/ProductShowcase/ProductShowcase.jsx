import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import { products } from "../../../data.js";

import SectionHeader from "../../common/SectionHeader";
import ProductCard from "../../products/ProductCard/ProductCard";

import styles from "./ProductShowcase.module.css";

export default function ProductShowcase() {
  const featured = products
    .filter((product) => product.featured)
    .slice(0, 8);

  return (
    <section className={styles.section}>
      {/* Electrical background decoration */}
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
            eyebrow="04 / Featured catalog"
            title="Products selected for real electrical applications."
            text="Browse the catalog, open a product, then add it to the enquiry cart. Pricing is confirmed after technical requirements are understood."
            action={
              <Link
                to="/products"
                className={styles.catalogLink}
              >
                <span>Open full catalog</span>
                <ArrowRight size={15} />
              </Link>
            }
          />

          <div className={styles.powerMark}>
            <div>
              <Zap size={17} />
            </div>

            <span>POWER<br />SOLUTIONS</span>
          </div>
        </div>

        <div className={styles.grid}>
          {featured.map((product) => (
            <div
              key={product.id}
              className={styles.product}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {featured.length === 0 && (
          <div className={styles.empty}>
            <Zap size={20} />

            <span>
              Featured products will appear here.
            </span>
          </div>
        )}

        <div className={styles.bottom}>
          <div className={styles.bottomLine}>
            <span />
            <span />
            <span />
          </div>

          <p>
            Need a specific UPS, battery, panel, inverter,
            stabilizer or electrical component?
          </p>

          <Link
            to="/contact"
            className={styles.enquiry}
          >
            Talk to an engineer
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}