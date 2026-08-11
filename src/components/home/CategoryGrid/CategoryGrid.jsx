import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
  FaBatteryFull,
  FaBolt,
  FaCogs,
  FaMicrochip,
  FaSolarPanel,
  FaThLarge,
  FaTools,
} from "react-icons/fa";

import { categories as productCategories } from "../../../data.js";
import SectionHeader from "../../common/SectionHeader";

import styles from "./CategoryGrid.module.css";

const categoryIcons = {
  ups: FaBolt,
  components: FaMicrochip,
  batteries: FaBatteryFull,
  stabilizers: FaTools,
  inverters: FaBolt,
  solar: FaSolarPanel,
  panels: FaThLarge,
  "panel-components": FaCogs,
};

const categoryLabels = {
  ups: "Power Backup",
  components: "UPS Components",
  batteries: "Energy Storage",
  stabilizers: "Voltage Protection",
  inverters: "Power Conversion",
  solar: "Renewable Energy",
  panels: "Electrical Panels",
  "panel-components": "Control Components",
};

export default function CategoryGrid() {
  return (
    <section className={styles.section} id="solutions">
      <div className={styles.container}>
        <SectionHeader
          eyebrow="01 / Product solutions"
          title="Electrical products for real-world power systems."
          text="Explore UPS systems, batteries, voltage protection, solar equipment, control panels and industrial electrical components."
          action={
            <Link
              to="/products"
              className={styles.catalogLink}
            >
              <span>View complete catalog</span>
              <ArrowUpRight size={16} />
            </Link>
          }
        />

        <div className={styles.grid}>
          {productCategories.map((category, index) => {
            const Icon =
              categoryIcons[category.id] || FaBolt;

            const label =
              categoryLabels[category.id] ||
              "Electrical Solutions";

            return (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className={styles.card}
              >
                {/* Top */}
                <div className={styles.cardTop}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.categoryLabel}>
                    {label}
                  </span>
                </div>

                {/* Electrical visual */}
                <div className={styles.iconWrap}>
                  <span className={styles.iconPulse} />

                  <div className={styles.icon}>
                    <Icon />
                  </div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <h3>{category.name}</h3>

                  <p>{category.description}</p>
                </div>

                {/* Bottom */}
                <div className={styles.cardBottom}>
                  <span>Explore products</span>

                  <span className={styles.arrow}>
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                {/* Electrical circuit decoration */}
                <div
                  className={styles.circuit}
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}