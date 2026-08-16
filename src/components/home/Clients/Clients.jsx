import {
  Building2,
  Factory,
  Landmark,
  Stethoscope,
  Users,
  ArrowUpRight,
} from "lucide-react";

import { clients } from "../../../data.js";

import SectionHeader from "../../common/SectionHeader";

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
        className={styles.background}
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
            eyebrow="07 / Valued clients"
            title="Trusted across essential sectors."
            text="Rainbow serves organizations across government, banking, healthcare, automotive, industrial and commercial environments."
          />

          <div className={styles.trustMark}>
            <div>
              <Users size={18} />
            </div>

            <span>
              CLIENT
              <br />
              NETWORK
            </span>
          </div>
        </div>

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
                  <div className={styles.cardTop}>
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className={styles.arrow}
                    />
                  </div>

                  <div className={styles.icon}>
                    <Icon size={19} />
                  </div>

                  <div className={styles.sector}>
                    <span>SECTOR</span>

                    <h3>{category}</h3>
                  </div>

                  <div className={styles.clients}>
                    {categoryClients.map((client) => (
                      <div
                        className={styles.client}
                        key={
                          client.id ||
                          client.name
                        }
                      >
                        <span
                          className={
                            styles.clientDot
                          }
                        />

                        <strong>
                          {client.name}
                        </strong>
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <span>Rainbow client</span>

                    <span
                      className={styles.active}
                    >
                      <i />
                      Served
                    </span>
                  </div>

                  <div
                    className={styles.circuit}
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </article>
              );
            },
          )}
        </div>

        <div className={styles.strip}>
          <div className={styles.stripLeft}>
            <div className={styles.stripIcon}>
              <Landmark size={17} />
            </div>

            <div>
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
      </div>
    </section>
  );
}
