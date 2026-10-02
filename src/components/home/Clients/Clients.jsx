import {
  Building2,
  Factory,
  Landmark,
  Stethoscope,
  Users,
  ArrowUpRight,
} from "lucide-react";

import { clients } from "../../../data.js";

import styles from "./Clients.module.css";

const sectorIcons = {
  Government: Landmark,
  "Banking Sector": Building2,
  Banking: Building2,
  "Banking & Finance": Building2,
  Healthcare: Stethoscope,
  Automotive: Factory,
  Commercial: Building2,
  Industrial: Factory,
  "Industrial & Commercial": Factory,
};

const fallbackIcons = [
  Landmark,
  Building2,
  Stethoscope,
  Factory,
];

const groupClientsByCategory = (clientList) => {
  if (!Array.isArray(clientList)) {
    return [];
  }

  const groups = new Map();

  clientList.forEach((client) => {
    if (
      !client ||
      typeof client !== "object" ||
      !client.name
    ) {
      return;
    }

    const category =
      client.category || "Other";

    if (!groups.has(category)) {
      groups.set(category, []);
    }

    groups.get(category).push(client);
  });

  return Array.from(groups.entries()).map(
    ([category, categoryClients]) => ({
      category,
      clients: categoryClients,
    }),
  );
};

export default function Clients() {
  const sectors = groupClientsByCategory(clients);

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
        className={styles.backgroundCircuit}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={styles.container}>
        {/* SYSTEM BAR */}

        <div className={styles.systemBar}>
          <span className={styles.systemLabel}>
            <i />
            07 / CLIENT NETWORK
          </span>

          <span className={styles.systemStatus}>
            <i />
            TRUSTED ORGANIZATIONS
          </span>
        </div>

        {/* HEADER */}

        <header className={styles.header}>
          <div className={styles.headerMain}>
            <span className={styles.headingEyebrow}>
              VALUED CLIENTS
            </span>

            <h2 className={styles.title}>
              Trusted across
              <span>essential sectors.</span>
            </h2>

            <p className={styles.description}>
              Rainbow serves organizations across government,
              banking, healthcare, automotive, industrial and
              commercial environments.
            </p>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.trustMark}>
              <div className={styles.trustIcon}>
                <Users
                  size={18}
                  strokeWidth={1.7}
                />
              </div>

              <span>
                CLIENT
                <br />
                NETWORK
              </span>
            </div>
          </div>
        </header>

        {/* CLIENT SYSTEM BAR */}

        <div className={styles.networkBar}>
          <div className={styles.networkLabel}>
            <span className={styles.statusDot} />

            <span>
              ACTIVE CLIENT NETWORK
            </span>
          </div>

          <div className={styles.networkMeta}>
            <span>
              {String(sectors.length).padStart(2, "0")} SECTORS
            </span>

            <span className={styles.networkLine} />

            <span>
              GOVERNMENT · PRIVATE · INDUSTRIAL
            </span>
          </div>
        </div>

        {/* CLIENT GRID */}

        <div className={styles.grid}>
          {sectors.map(
            ({ category, clients: categoryClients }, index) => {
              const Icon =
                sectorIcons[category] ||
                fallbackIcons[
                  index % fallbackIcons.length
                ];

              return (
                <article
                  key={category}
                  className={styles.card}
                >
                  <div
                    className={styles.cardGlow}
                    aria-hidden="true"
                  />

                  <div className={styles.cardTop}>
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.cardStatus}>
                      <i />
                      ACTIVE
                    </span>
                  </div>

                  <div className={styles.cardMain}>
                    <div className={styles.iconWrap}>
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                      />
                    </div>

                    <div className={styles.cardHeading}>
                      <span>
                        SECTOR
                      </span>

                      <h3>
                        {category}
                      </h3>
                    </div>

                    <div className={styles.cardArrow}>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>

                  <div className={styles.clientList}>
                    {categoryClients.map((client) => (
                      <div
                        className={styles.client}
                        key={
                          client.id ||
                          client.name
                        }
                      >
                        <span
                          className={styles.clientDot}
                        />

                        <strong>
                          {client.name}
                        </strong>

                        <span
                          className={styles.clientArrow}
                        >
                          <ArrowUpRight
                            size={10}
                            strokeWidth={1.7}
                          />
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <span>
                      RAINBOW CLIENT
                    </span>

                    <span className={styles.served}>
                      <i />
                      SERVED
                    </span>
                  </div>

                  <div
                    className={styles.circuit}
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </article>
              );
            },
          )}
        </div>

        {/* TRUST STRIP */}

        <div className={styles.strip}>
          <div className={styles.stripLeft}>
            <div className={styles.stripIcon}>
              <Landmark
                size={17}
                strokeWidth={1.7}
              />
            </div>

            <div className={styles.stripContent}>
              <span>
                GOVERNMENT · BANKING · HEALTHCARE ·
                AUTOMOTIVE · INDUSTRIAL · COMMERCIAL
              </span>

              <strong>
                Electrical solutions for environments
                where reliability matters.
              </strong>
            </div>
          </div>

          <div className={styles.connection}>
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* FOOTER LINE */}

        <div className={styles.footerLine}>
          <span>
            07 / CLIENT NETWORK
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