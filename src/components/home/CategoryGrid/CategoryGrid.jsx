import { useEffect, useMemo, useState } from "react";

import {

  ArrowLeft,

  ArrowRight,

  ArrowUpRight,

  Sparkles,

} from "lucide-react";

import { Link } from "react-router-dom";

import {

  FaBatteryFull,

  FaBell,

  FaBolt,

  FaBox,

  FaFan,

  FaLightbulb,

  FaMicrochip,

  FaPlug,

  FaSolarPanel,

  FaTools,

} from "react-icons/fa";

import { categories as productCategories } from "../../../data.js";

import styles from "./CategoryGrid.module.css";



const categoryIcons = {

  ups: FaBolt,

  components: FaMicrochip,

  batteries: FaBatteryFull,

  stabilizers: FaTools,

  inverters: FaBolt,

  solar: FaSolarPanel,

  "wiring-accessories": FaPlug,

  "electrical-boxes": FaBox,

  "wires-conduits": FaPlug,

  lighting: FaLightbulb,

  fans: FaFan,

  bells: FaBell,

};



const categoryLabels = {

  ups: "Power Backup",

  components: "UPS Components",

  batteries: "Energy Storage",

  stabilizers: "Voltage Protection",

  inverters: "Power Conversion",

  solar: "Renewable Energy",

  "wiring-accessories": "Wiring",

  "electrical-boxes": "Enclosures",

  "wires-conduits": "Electrical Wiring",

  lighting: "Lighting",

  fans: "Cooling",

  bells: "Signalling",

};



const categoryDescriptions = {

  ups: "Online and industrial UPS systems for continuous, conditioned and dependable power protection.",

  components:

    "Power electronics and replacement components for UPS servicing, maintenance and system restoration.",

  batteries:

    "Reliable energy storage systems for UPS, inverter and critical-power applications.",

  stabilizers:

    "Servo stabilizers and voltage regulation systems for sensitive electrical equipment.",

  inverters:

    "Power conversion systems for residential, commercial, backup and hybrid energy applications.",

  solar:

    "Solar power equipment and solutions for on-grid, off-grid and hybrid energy requirements.",

  "wiring-accessories":

    "Switches, sockets, connectors and essential wiring accessories for residential and commercial electrical installations.",

  "electrical-boxes":

    "Electrical boxes and protective enclosures designed to organize and protect electrical equipment.",

  "wires-conduits":

    "Electrical wires, cables and conduits for safe and organized power distribution installations.",

  lighting:

    "Efficient LED lighting products for residential, commercial and industrial applications.",

  fans:

    "Fans and ventilation products designed for effective airflow and thermal management.",

  bells:

    "Electrical bells and signalling products for homes, offices, commercial spaces and industrial applications.",

};



export default function CategoryGrid() {

  const categories = Array.isArray(productCategories) ? productCategories : [];

  const [activeIndex, setActiveIndex] = useState(0);

  const total = categories.length;

  const activeCategory = categories[activeIndex];



  const ActiveIcon = categoryIcons[activeCategory?.id] || FaPlug;



  const getLabel = (category) =>

    categoryLabels[category?.id] || "Electrical Solutions";



  const getDescription = (category) =>

    category?.description ||

    categoryDescriptions[category?.id] ||

    "Electrical products and engineering solutions for practical applications.";



  useEffect(() => {

    if (total <= 1) {

      return undefined;

    }



    const timer = window.setInterval(() => {

      setActiveIndex((current) => (current + 1) % total);

    }, 1500);



    return () => {

      window.clearInterval(timer);

    };

  }, [total]);



  const next = () => {

    if (!total) return;

    setActiveIndex((current) => (current + 1) % total);

  };



  const previous = () => {

    if (!total) return;

    setActiveIndex((current) => (current - 1 + total) % total);

  };



  const goTo = (index) => {

    if (index >= 0 && index < total) {

      setActiveIndex(index);

    }

  };



  const orbitItems = useMemo(() => {

    if (!total) return [];



    return categories

      .map((category, index) => {

        let offset = index - activeIndex;



        if (offset > total / 2) offset -= total;

        if (offset < -total / 2) offset += total;



        return {

          category,

          index,

          offset,

        };

      })

      .filter(({ offset }) => Math.abs(offset) <= 2);

  }, [categories, activeIndex, total]);



  if (!categories.length) {

    return null;

  }



  const progress = ((activeIndex + 1) / total) * 100;



  return (

    <section className={styles.section} id="solutions">

      <div className={styles.backgroundGrid} />

      <div className={styles.backgroundGlow} />

      <div className={styles.backgroundGlowTwo} />

      <div className={`${styles.energyBeam} ${styles.energyBeamOne}`} />

      <div className={`${styles.energyBeam} ${styles.energyBeamTwo}`} />



      <div className={styles.container}>

        <header className={styles.header}>

          <div className={styles.headerContent}>

            <div className={styles.eyebrow}>

              <span className={styles.eyebrowDot} />

              <span>01 / PRODUCT ECOSYSTEM</span>

            </div>



            <h2>

              Power solutions.

              <span> Connected.</span>

            </h2>



            <p>

              Explore our complete electrical and power portfolio through the

              categories built around your energy needs.

            </p>

          </div>



          <Link to="/products" className={styles.catalogButton}>

            <span>View complete catalog</span>

            <span className={styles.catalogArrow}>

              <ArrowUpRight size={16} />

            </span>

          </Link>

        </header>



        <div className={styles.showcase}>

          <div className={styles.orbitSystem}>

            <div className={`${styles.orbit} ${styles.orbitOne}`} />

            <div className={`${styles.orbit} ${styles.orbitTwo}`} />

            <div className={styles.orbitHalo} />



            <div className={styles.centerEnergy}>

              <div className={styles.centerEnergyOuter} />



              <div className={styles.centerProduct}>

                <div className={styles.centerProductGlow} />



                {activeCategory?.image ? (

                  <img

                    key={activeCategory.id}

                    src={activeCategory.image}

                    alt={activeCategory.name}

                    className={styles.centerProductImage}

                  />

                ) : (

                  <div className={styles.centerProductFallback}>

                    <ActiveIcon />

                  </div>

                )}

              </div>



              <span className={styles.centerEnergyPulse} />

            </div>



            {orbitItems.map(({ category, index, offset }) => {

              const Icon = categoryIcons[category.id] || FaPlug;

              const positionClass = styles[`position${offset}`];

              const isActive = offset === 0;



              return (

                <button

                  key={category.id}

                  type="button"

                  className={`${styles.orbitCard} ${

                    positionClass || ""

                  } ${isActive ? styles.orbitCardActive : ""}`}

                  onClick={() => goTo(index)}

                  aria-label={`Show ${category.name}`}

                >

                  <span className={styles.orbitCardTop}>

                    <span className={styles.orbitCardNumber}>

                      {String(index + 1).padStart(2, "0")}

                    </span>



                    <span className={styles.orbitCardIcon}>

                      {category.image ? (

                        <img src={category.image} alt="" />

                      ) : (

                        <Icon />

                      )}

                    </span>

                  </span>



                  <span className={styles.orbitCardName}>

                    {category.name}

                  </span>



                  <span className={styles.orbitCardLabel}>

                    {getLabel(category)}

                  </span>



                  <span className={styles.orbitCardIndicator} />

                </button>

              );

            })}



            <div className={styles.energyParticles}>

              <span />

              <span />

              <span />

              <span />

              <span />

              <span />

            </div>

          </div>



          <div className={styles.activeInfo}>

            <div className={styles.activeFeaturedImage}>

              {activeCategory?.image ? (

                <img

                  key={activeCategory.id}

                  src={activeCategory.image}

                  alt={activeCategory.name}

                  className={styles.activeFeaturedImageImg}

                />

              ) : (

                <div className={styles.activeFeaturedFallback}>

                  <ActiveIcon />

                </div>

              )}

            </div>



            <div className={styles.activeMeta}>

              <span className={styles.activeNumber}>

                {String(activeIndex + 1).padStart(2, "0")}

              </span>

              <span className={styles.activeDivider} />

              <span className={styles.activeCategory}>

                {getLabel(activeCategory)}

              </span>

            </div>



            <div key={activeCategory.id} className={styles.activeText}>

              <h3>{activeCategory.name}</h3>

              <p>{getDescription(activeCategory)}</p>



              <Link

                to={`/products?category=${activeCategory.id}`}

                className={styles.exploreButton}

              >

                <span>Explore products</span>

                <span>

                  <ArrowUpRight size={17} />

                </span>

              </Link>

            </div>

          </div>

        </div>



{/*         <div className={styles.controls}>

          <button

            type="button"

            className={styles.controlButton}

            onClick={previous}

            aria-label="Previous category"

          >

            <ArrowLeft size={16} />

          </button>



          <div className={styles.progress}>

            <div className={styles.progressTop}>

              <span>{String(activeIndex + 1).padStart(2, "0")}</span>

              <span>{String(total).padStart(2, "0")}</span>

            </div>



            <div className={styles.progressTrack}>

              <span

                className={styles.progressValue}

                style={{ width: `${progress}%` }}

              />

            </div>

          </div> */}



{/*           <button

            type="button"

            className={styles.controlButton}

            onClick={next}

            aria-label="Next category"

          >

            <ArrowRight size={16} />

          </button> */}



{/*           <div className={styles.autoIndicator}>

            <span className={styles.autoDot} />

            <span>AUTO • 1.5S</span>

          </div> */}

{/*         </div> */}



{/*         <div className={styles.mobileCategories}>

          {categories.map((category, index) => {

            const Icon = categoryIcons[category.id] || FaPlug;

            const isActive = index === activeIndex;



            return (

              <button

                key={category.id}

                type="button"

                className={`${styles.mobileCategory} ${

                  isActive ? styles.mobileCategoryActive : ""

                }`}

                onClick={() => goTo(index)}

              >

                <span className={styles.mobileCategoryIcon}>

                  {category.image ? (

                    <img src={category.image} alt="" />

                  ) : (

                    <Icon />

                  )}

                </span>

                <span>{category.name}</span>

              </button>

            );

          })}

        </div> */}



      

      </div>

    </section>

  );

}
