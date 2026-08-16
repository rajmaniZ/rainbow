import {
  ArrowRight,
  CheckCircle2,
  TrainFront,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import { clients, projects } from "../../data.js";
import SectionHeader from "../../components/common/SectionHeader";

import styles from "./Projects.module.css";

/* DATA HELPERS */

/*
 * Safely converts any value into an array.
 * Supports:
 * - arrays
 * - strings
 * - numbers
 * - objects
 * - null / undefined
 * This prevents errors such as:
 * "names.map is not a function"
 */
const toArray = (value) => {
  if (Array.isArray(value)) {
    return value;
  }

  if (value === null || value === undefined) {
    return [];
  }

  if (
    typeof value === "string" ||
    typeof value === "number"
  ) {
    return [value];
  }

  if (typeof value === "object") {
    return Object.values(value);
  }

  return [];
};

/*
 * Convert the current clients data structure into
 * sector-based groups.
 * Current structure:
 * clients = [
 *   {
 *     id: "...",
 *     name: "...",
 *     category: "Government"
 *   },
 * ]
 * Older structure:
 * clients = {
 *   Government: ["Client A", "Client B"],
 *   Banking: ["Client C"]
 * }
 * This helper supports both structures so the component
 * remains backwards compatible.
 */
const groupClientsBySector = (clientData) => {
  if (Array.isArray(clientData)) {
    const groups = new Map();

    clientData.forEach((client) => {
      if (!client) {
        return;
      }

      /* Current client object structure. */
      if (
        typeof client === "object" &&
        !Array.isArray(client)
      ) {
        const sector =
          client.category ||
          client.sector ||
          client.categoryName ||
          "Other";

        const name =
          client.name ||
          client.client ||
          client.title;

        if (!name) {
          return;
        }

        if (!groups.has(sector)) {
          groups.set(sector, []);
        }

        groups.get(sector).push({
          id:
            client.id ||
            `${sector}-${name}`,
          name: String(name),
        });

        return;
      }

      /*
 * If an unexpected primitive value exists inside
 * the clients array, keep it safe.
 */
      if (
        typeof client === "string" ||
        typeof client === "number"
      ) {
        const sector = "Other";

        if (!groups.has(sector)) {
          groups.set(sector, []);
        }

        groups.get(sector).push({
          id: `${sector}-${client}`,
          name: String(client),
        });
      }
    });

    return Array.from(groups.entries()).map(
      ([sector, names]) => ({
        sector,
        names,
      }),
    );
  }

  /*
 * Backwards compatibility for the previous object
 * structure:
 * {
 *   Government: [...],
 *   Banking: [...],
 * }
 */
  if (
    clientData &&
    typeof clientData === "object"
  ) {
    return Object.entries(clientData).map(
      ([sector, value]) => ({
        sector,
        names: toArray(value)
          .map((item, index) => {
            if (
              item &&
              typeof item === "object"
            ) {
              return {
                id:
                  item.id ||
                  `${sector}-${index}`,
                name:
                  item.name ||
                  item.client ||
                  item.title ||
                  `Client ${index + 1}`,
              };
            }

            return {
              id: `${sector}-${index}`,
              name: String(item),
            };
          })
          .filter((item) => item.name),
      }),
    );
  }

  return [];
};

/*
 * Safely convert project scope into a displayable
 * array.
 */
const getProjectScope = (project) => {
  if (!project) {
    return [];
  }

  const scope = project.scope;

  if (Array.isArray(scope)) {
    return scope.filter(Boolean);
  }

  if (
    typeof scope === "string" ||
    typeof scope === "number"
  ) {
    return [scope];
  }

  if (
    scope &&
    typeof scope === "object"
  ) {
    return Object.entries(scope).map(
      ([key, value]) => {
        if (
          value === null ||
          value === undefined ||
          value === ""
        ) {
          return key;
        }

        if (
          typeof value === "object"
        ) {
          return `${key}: ${JSON.stringify(value)}`;
        }

        return `${key}: ${value}`;
      },
    );
  }

  return [];
};

/* COMPONENT */

export default function Projects() {
  /* Protect against malformed data exports. */
  const projectList = Array.isArray(projects)
    ? projects
    : [];

  const project = projectList[0] || null;

  /* Normalize clients before rendering. */
  const clientSectors =
    groupClientsBySector(clients);

  /* Normalize project scope before rendering. */
  const projectScope =
    getProjectScope(project);

  return (
    <div className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        {/* BACKGROUND */}

        <div className={styles.heroBackground}>
          <div className={styles.grid} />

          <div className={styles.glow} />

          <div className={styles.nodes}>
            <span className={styles.node1} />
            <span className={styles.node2} />
            <span className={styles.node3} />
            <span className={styles.node4} />
          </div>

          {/* RAILWAY SCENE */}

          <div className={styles.railwayScene}>
            <div className={styles.track}>
              <div className={styles.sleepers}>
                {Array.from(
                  { length: 90 },
                  (_, index) => (
                    <span key={index} />
                  ),
                )}
              </div>

              <span
                className={`${styles.rail} ${styles.railTop}`}
              />

              <span
                className={`${styles.rail} ${styles.railBottom}`}
              />
            </div>

            {/* TRAIN */}

            <div className={styles.trainViewport}>
              <div className={styles.train}>
                {/* TRAIN FRONT */}

                <div className={styles.trainFront}>
                  <div
                    className={
                      styles.trainWindow
                    }
                  >
                    <TrainFront size={17} />
                  </div>

                  <span
                    className={styles.headlight}
                  />
                </div>

                {/* TRAIN BODY */}

                <div className={styles.trainBody}>
                  <div
                    className={
                      styles.trainWindows
                    }
                  >
                    <span />
                    <span />
                    <span />
                  </div>

                  <span
                    className={
                      styles.trainStripe
                    }
                  />

                  <span
                    className={
                      styles.trainPower
                    }
                  >
                    <Zap size={11} />
                  </span>
                </div>

                {/* WHEELS */}

                <span
                  className={`${styles.wheel} ${styles.wheelOne}`}
                />

                <span
                  className={`${styles.wheel} ${styles.wheelTwo}`}
                />

                <span
                  className={`${styles.wheel} ${styles.wheelThree}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* HERO CONTENT */}

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <i />
            PROJECTS &amp; CLIENTS
          </span>

          <h1>
            Electrical work
            <br />
            <strong>where uptime</strong>
            <br />
            <strong>matters.</strong>
          </h1>

          <p>
            Rainbow delivers electrical
            infrastructure, power systems and
            engineering services across
            government, banking, healthcare,
            industrial and commercial environments.
          </p>

          <div className={styles.actions}>
            <Link
              to="/contact"
              className={styles.primaryButton}
            >
              Discuss your project
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/services"
              className={styles.secondaryButton}
            >
              Explore services
            </Link>
          </div>

          {/* STATS */}

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span
                className={styles.statIcon}
              >
                <TrainFront size={15} />
              </span>

              <div>
                <strong>17</strong>
                <small>Railway stations</small>
              </div>
            </div>

            <div className={styles.stat}>
              <span
                className={styles.statIcon}
              >
                <Zap size={15} />
              </span>

              <div>
                <strong>5+</strong>
                <small>Electrical sectors</small>
              </div>
            </div>

            <div className={styles.stat}>
              <span
                className={styles.statIcon}
              >
                <CheckCircle2 size={15} />
              </span>

              <div>
                <strong>Direct</strong>
                <small>
                  Engineering support
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAJOR PROJECT */}

      <section className={styles.projectSection}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="01 / Major project"
            title="Indian Railways — North Eastern Railway"
            text="Rainbow is currently executing comprehensive electrical works across 17 North Eastern Railway stations."
          />

          <article className={styles.projectCard}>
            {/* PROJECT VISUAL */}

            <div className={styles.projectVisual}>
              <div className={styles.projectIcon}>
                <TrainFront size={28} />
              </div>

              <span>ACTIVE PROJECT</span>

              <strong>17</strong>

              <small>
                RAILWAY STATIONS
              </small>
            </div>

            {/* PROJECT BODY */}

            <div className={styles.projectBody}>
              <small
                className={
                  styles.projectType
                }
              >
                {project?.type ||
                  "Electrical Infrastructure"}
              </small>

              <h2>
                {project?.client ||
                  "North Eastern Railway"}
              </h2>

              <p>
                {project?.description ||
                  "Comprehensive electrical works across North Eastern Railway stations including electrical installation, lighting, cabling, panels, appliances and commissioning."}
              </p>

              <h3>Scope of work</h3>

              {projectScope.length > 0 ? (
                <div className={styles.scope}>
                  {projectScope.map(
                    (item, index) => (
                      <span
                        key={`scope-${index}`}
                      >
                        <CheckCircle2
                          size={15}
                        />

                        {String(item)}
                      </span>
                    ),
                  )}
                </div>
              ) : (
                <div className={styles.scope}>
                  <span>
                    <CheckCircle2
                      size={15}
                    />
                    Electrical installation
                  </span>

                  <span>
                    <CheckCircle2
                      size={15}
                    />
                    Lighting systems
                  </span>

                  <span>
                    <CheckCircle2
                      size={15}
                    />
                    Power distribution
                  </span>

                  <span>
                    <CheckCircle2
                      size={15}
                    />
                    Cabling and commissioning
                  </span>
                </div>
              )}

              <Link
                to="/contact"
                className={
                  styles.projectAction
                }
              >
                Discuss this project
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* CLIENTS */}

      <section className={styles.clientsSection}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="02 / Our valued clients"
            title="Trusted across sectors."
            text="Rainbow serves government, banking, healthcare and commercial organizations through electrical supply, installation and engineering support."
          />

          <div className={styles.clientsGrid}>
            {clientSectors.length > 0 ? (
              clientSectors.map(
                ({ sector, names }) => (
                  <article
                    className={
                      styles.clientCard
                    }
                    key={sector}
                  >
                    <div
                      className={
                        styles.clientHeader
                      }
                    >
                      <span>SECTOR</span>

                      <strong>
                        {sector}
                      </strong>
                    </div>

                    <div
                      className={
                        styles.clientList
                      }
                    >
                      {Array.isArray(
                        names,
                      ) &&
                        names.map(
                          (client) => (
                            <div
                              key={
                                client.id ||
                                client.name
                              }
                            >
                              <CheckCircle2
                                size={15}
                              />

                              <span>
                                {client.name}
                              </span>
                            </div>
                          ),
                        )}
                    </div>
                  </article>
                ),
              )
            ) : (
              <article
                className={
                  styles.clientCard
                }
              >
                <div
                  className={
                    styles.clientHeader
                  }
                >
                  <span>CLIENT NETWORK</span>

                  <strong>
                    Rainbow
                  </strong>
                </div>

                <div
                  className={
                    styles.clientList
                  }
                >
                  <div>
                    <CheckCircle2
                      size={15}
                    />

                    <span>
                      Client information
                      available on request
                    </span>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <div>
              <span>
                Your next project
              </span>

              <h2>
                Let's discuss the
                electrical scope.
              </h2>

              <p>
                Share your application,
                site requirement or project
                scope with Rainbow's
                engineering team.
              </p>
            </div>

            <Link to="/contact">
              Contact Rainbow
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
