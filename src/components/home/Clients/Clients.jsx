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
  Healthcare: Stethoscope,
  "Industrial & Commercial": Factory,
  Commercial: Building2,
  Industrial: Factory,
};

const fallbackIcons = [
  Landmark,
  Building2,
  Stethoscope,
  Factory,
];

export default function Clients() {
  const sectors = Object.entries(clients);

  return (
    <section className={styles.section}>
      {/* BACKGROUND ELECTRICAL DECORATION */}

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
        {/* HEADER */}

        <div className={styles.header}>
          <SectionHeader
            eyebrow="07 / Valued clients"
            title="Trusted across essential sectors."
            text="Rainbow serves clients across government, banking, healthcare, industrial and commercial environments."
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

        {/* CLIENT GRID */}

        <div className={styles.grid}>
          {sectors.map(([sector, names], index) => {
            const Icon =
              sectorIcons[sector] ||
              fallbackIcons[index % fallbackIcons.length];

            return (
              <article
                key={sector}
                className={styles.card}
              >
                {/* Card top */}
                <div className={styles.cardTop}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className={styles.arrow}
                  />
                </div>

                {/* Sector icon */}
                <div className={styles.icon}>
                  <Icon size={19} />
                </div>

                {/* Sector */}
                <div className={styles.sector}>
                  <span>SECTOR</span>

                  <h3>{sector}</h3>
                </div>

                {/* Client names */}
                <div className={styles.clients}>
                  {names.map((name) => (
                    <div
                      className={styles.client}
                      key={name}
                    >
                      <span className={styles.clientDot} />

                      <strong>{name}</strong>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className={styles.cardFooter}>
                  <span>Rainbow client</span>

                  <span className={styles.active}>
                    <i />
                    Served
                  </span>
                </div>

                {/* Electrical circuit */}
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
          })}
        </div>

        {/* TRUST STRIP */}

        <div className={styles.strip}>
          <div className={styles.stripLeft}>
            <div className={styles.stripIcon}>
              <Landmark size={17} />
            </div>

            <div>
              <span>
                Government · Banking · Healthcare · Industrial
              </span>

              <strong>
                Electrical solutions for environments where reliability matters.
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

// import {
// Building2,
// Landmark,
// Stethoscope,
// Factory,
// ArrowUpRight,
// Users,
// } from "lucide-react";

// import SectionHeader from "../../common/SectionHeader";

// import styles from "./Clients.module.css";

// import indianRailways from "../../../assets/clients/indian-railways.png";
// import unionBank from "../../../assets/clients/union-bank.png";
// import bankOfBaroda from "../../../assets/clients/bank-of-baroda.png";
// import upGraminBank from "../../../assets/clients/up-gramin-bank.png";
// import centralBank from "../../../assets/clients/central-bank.png";
// import bankOfIndia from "../../../assets/clients/bank-of-india.png";
// import apexHospital from "../../../assets/clients/apex-hospital.png";
// import agrimHospital from "../../../assets/clients/agrim-hospital.png";
// import rajendraToyota from "../../../assets/clients/rajendra-toyota.png";

// const clientGroups = [
// {
// id: "government",
// title: "Government",
// icon: Landmark,
// clients: [
// {
// name: "Indian Railways",
// subtitle: "North Eastern Railway",
// logo: indianRailways,
// },
// ],
// },

// {
// id: "banking",
// title: "Banking",
// icon: Building2,
// clients: [
// {
// name: "Union Bank of India",
// logo: unionBank,
// },
// {
// name: "Bank of Baroda",
// logo: bankOfBaroda,
// },
// {
// name: "Uttar Pradesh Gramin Bank",
// logo: upGraminBank,
// },
// {
// name: "Central Bank of India",
// logo: centralBank,
// },
// {
// name: "Bank of India",
// logo: bankOfIndia,
// },
// ],
// },

// {
// id: "healthcare",
// title: "Healthcare",
// icon: Stethoscope,
// clients: [
// {
// name: "Apex Hospital",
// logo: apexHospital,
// },
// {
// name: "Agrim Hospital",
// logo: agrimHospital,
// },
// ],
// },

// {
// id: "commercial",
// title: "Commercial",
// icon: Factory,
// clients: [
// {
// name: "Rajendra Toyota",
// logo: rajendraToyota,
// },
// ],
// },
// ];

// export default function Clients() {
// return (
// <section className={styles.section}>
// <div
// className={styles.background}
// aria-hidden="true"

// <span />
// <span />
// <span />
// <span />
// </div>

// <div className={styles.container}>
// <div className={styles.header}>
// <SectionHeader
// eyebrow="07 / Valued clients"
// title="Trusted across essential sectors."
// text="Rainbow serves clients across government, banking, healthcare and commercial environments."

// <div className={styles.trustMark}>
// <div>
// <Users size={18} />
// </div>

// <span>
// CLIENT
// <br />
// NETWORK
// </span>
// </div>
// </div>

// <div className={styles.grid}>
// {clientGroups.map((group, index) => {
// const Icon = group.icon;

// return (
// <article
// key={group.id}
// className={styles.card}

// {/* Card header */}
// <div className={styles.cardTop}>
// <span className={styles.number}>
// {String(index + 1).padStart(2, "0")}
// </span>

// <ArrowUpRight
// size={16}
// className={styles.arrow}

// </div>

// {/* Sector */}
// <div className={styles.sectorHeader}>
// <div className={styles.icon}>
// <Icon size={19} />
// </div>

// <div>
// <span>SECTOR</span>
// <h3>{group.title}</h3>
// </div>
// </div>

// {/* Logos */}
// <div className={styles.clients}>
// {group.clients.map((client) => (
// <div
// key={client.name}
// className={styles.client}

// <div className={styles.logoBox}>
// <img
// src={client.logo}
// alt={`${client.name} logo`}

// </div>

// <div className={styles.clientInfo}>
// <strong>
// {client.name}
// </strong>

// {client.subtitle && (
// <small>
// {client.subtitle}
// </small>
// )}
// </div>
// </div>
// ))}
// </div>

// {/* Footer */}
// <div className={styles.cardFooter}>
// <span>Rainbow client</span>

// <span className={styles.active}>
// <i />
// Served
// </span>
// </div>

// {/* Electrical circuit */}
// <div
// className={styles.circuit}
// aria-hidden="true"

// <span />
// <span />
// <span />
// </div>
// </article>
// );
// })}
// </div>

// <div className={styles.strip}>
// <div className={styles.stripLeft}>
// <div className={styles.stripIcon}>
// <Landmark size={17} />
// </div>

// <div>
// <span>
// GOVERNMENT · BANKING · HEALTHCARE · COMMERCIAL
// </span>

// <strong>
// Electrical solutions for environments where reliability matters.
// </strong>
// </div>
// </div>

// <div className={styles.connection}>
// <span />
// <span />
// <span />
// </div>
// </div>
// </div>
// </section>
// );
// }
