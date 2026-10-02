import { useEffect, useMemo, useState } from "react";

import {

  ArrowRight,

  ArrowUpRight,

  Building2,

  Factory,

  Home,

  Landmark,

} from "lucide-react";

import { industries } from "../../../data/siteData";

import styles from "./Industries.module.css";

const fallbackIcons = [

  Home,

  Building2,

  Factory,

  Landmark,

];

const ROTATION_TIME = 4200;

export default function Industries() {

  const items = useMemo(() => {

    return Array.isArray(industries)

      ? industries.slice(0, 4)

      : [];

  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    if (items.length < 2) {

      return undefined;

    }

    const timer = window.setInterval(() => {

      setActiveIndex((current) => {

        return (current + 1) % items.length;

      });

    }, ROTATION_TIME);

    return () => {

      window.clearInterval(timer);

    };

  }, [items.length]);

  if (!items.length) {

    return null;

  }

  const activeItem = items[activeIndex];

  const ActiveIcon =

    activeItem.icon ||

    fallbackIcons[

      activeIndex % fallbackIcons.length

    ];

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

      <div

        className={styles.edgeGlow}

        aria-hidden="true"

      />

      <div className={styles.container}>

        <div className={styles.left}>

          <div className={styles.eyebrow}>

            <span className={styles.eyebrowDot} />

            03 / INDUSTRIES

          </div>

          <div className={styles.heading}>

            <span>Industrial coverage</span>

            <h2>

              Different environments.

              <br />

              <em>Different electrical demands.</em>

            </h2>

          </div>

          <p className={styles.description}>

            Rainbow serves residential, commercial,

            industrial and government clients with

            electrical, power backup, automation and

            infrastructure solutions.

          </p>

          <div className={styles.activePanel}>

            <div className={styles.activeIndex}>

              {String(activeIndex + 1).padStart(2, "0")}

              <span>/{String(items.length).padStart(2, "0")}</span>

            </div>

            <div className={styles.activeIcon}>

              <ActiveIcon

                size={31}

                strokeWidth={1.8}

              />

            </div>

            <div className={styles.activeText}>

              <span>ACTIVE INDUSTRY</span>

              <h3>{activeItem.title}</h3>

              <p>{activeItem.description}</p>

            </div>

          </div>

          <div className={styles.leftBottom}>

            <button

              type="button"

              className={styles.cta}

              onClick={() => {

                const contact =

                  document.querySelector(

                    "#contact"

                  );

                if (contact) {

                  contact.scrollIntoView({

                    behavior: "smooth",

                  });

                }

              }}

            >

              <span>Talk to Rainbow</span>

              <ArrowRight

                size={16}

                strokeWidth={1.8}

              />

            </button>

            <div className={styles.progress}>

              <div className={styles.progressLabels}>

                <span>01</span>

                <span>

                  {String(items.length).padStart(

                    2,

                    "0"

                  )}

                </span>

              </div>

              <div className={styles.progressTrack}>

                <span

                  style={{

                    width: `${

                      ((activeIndex + 1) /

                        items.length) *

                      100

                    }%`,

                  }}

                />

              </div>

            </div>

          </div>

        </div>

        <div className={styles.right}>

          <div className={styles.rightHeader}>

            <div>

              <span>INDUSTRIAL SYSTEM</span>

              <strong>

                APPLICATIONS / 01—

                {String(items.length).padStart(

                  2,

                  "0"

                )}

              </strong>

            </div>

            <div className={styles.live}>

              <i />

              ROTATING VIEW

            </div>

          </div>

          <div className={styles.orbitArea}>

            <div

              className={`${styles.orbit} ${styles.orbitLarge}`}

              aria-hidden="true"

            />

            <div

              className={`${styles.orbit} ${styles.orbitMedium}`}

              aria-hidden="true"

            />

            <div

              className={`${styles.orbit} ${styles.orbitSmall}`}

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

              className={styles.connectionLayer}

              aria-hidden="true"

            >

              <span className={styles.connectionTop} />

              <span className={styles.connectionRight} />

              <span className={styles.connectionBottom} />

              <span className={styles.connectionLeft} />

            </div>

            <div className={styles.core}>

              <div className={styles.corePulse} />

              <div className={styles.coreHalo}>

                <div className={styles.coreIcon}>

                  <ActiveIcon

                    size={29}

                    strokeWidth={1.7}

                  />

                </div>

              </div>

              <span>

                {String(activeIndex + 1).padStart(

                  2,

                  "0"

                )}

              </span>

            </div>

            <div className={styles.orbitItems}>

              {items.map((item, index) => {

                const DataIcon =

                  item.icon ||

                  fallbackIcons[

                    index % fallbackIcons.length

                  ];

                const slot =

                  (index -

                    activeIndex +

                    items.length) %

                  items.length;

                const isActive =

                  index === activeIndex;

                return (

                  <button

                    type="button"

                    key={item.id || item.title}

                    className={`${styles.item} ${

                      isActive

                        ? styles.active

                        : ""

                    }`}

                    style={{

                      "--slot": slot,

                    }}

                    onClick={() =>

                      setActiveIndex(index)

                    }

                    aria-label={`Show ${item.title}`}

                  >

                    <span className={styles.itemGrid} />

                    <span className={styles.itemMeta}>

                      <span className={styles.itemNumber}>

                        {String(index + 1).padStart(

                          2,

                          "0"

                        )}

                      </span>

                      {isActive ? (

                        <span

                          className={

                            styles.itemActive

                          }

                        >

                          <i />

                          ACTIVE

                        </span>

                      ) : (

                        <ArrowUpRight

                          size={15}

                          strokeWidth={1.7}

                        />

                      )}

                    </span>

                    <span className={styles.itemBody}>

                      <span

                        className={

                          styles.itemIcon

                        }

                      >

                        <DataIcon

                          size={24}

                          strokeWidth={1.8}

                        />

                      </span>

                      <span

                        className={

                          styles.itemContent

                        }

                      >

                        <strong>

                          {item.title}

                        </strong>

                        <small>

                          ELECTRICAL APPLICATION

                        </small>

                      </span>

                    </span>

                    <span className={styles.itemStatus}>

                      {isActive

                        ? "ACTIVE"

                        : "VIEW"}

                    </span>

                  </button>

                );

              })}

            </div>

          </div>

          <div className={styles.rightFooter}>

            <span>

              <i />

              ROTATING APPLICATION

            </span>

            <div className={styles.rotationProgress}>

              {items.map((item, index) => (

                <span

                  key={item.id || item.title}

                  className={

                    index === activeIndex

                      ? styles.progressActive

                      : ""

                  }

                />

              ))}

            </div>

            <span>NEXT APPLICATION</span>

          </div>

        </div>

        <div className={styles.footerLine}>

          <span>

            <i />

            ENGINEERED FOR CONTINUITY

          </span>

          <span>

            PRODUCT · PROJECT · SERVICE

          </span>

        </div>

      </div>

    </section>

  );

}
