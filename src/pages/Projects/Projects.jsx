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

export default function Projects() {
  const project = projects?.[0];

  return (
    <div className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        {/* ===================================================
            BACKGROUND
        =================================================== */}

        <div className={styles.heroBackground}>
          <div className={styles.grid} />

          <div className={styles.glow} />

          <div className={styles.nodes}>
            <span className={styles.node1} />
            <span className={styles.node2} />
            <span className={styles.node3} />
            <span className={styles.node4} />
          </div>

          {/* =================================================
              RAILWAY SCENE
          ================================================= */}

          <div className={styles.railwayScene}>
  

            <div className={styles.track}>
              <div className={styles.sleepers}>
                {Array.from({ length: 90 }, (_, index) => (
                  <span key={index} />
                ))}
              </div>

              <span
                className={`${styles.rail} ${styles.railTop}`}
              />

              <span
                className={`${styles.rail} ${styles.railBottom}`}
              />
            </div>

            {/* ===============================================
                TRAIN
            =============================================== */}

            <div className={styles.trainViewport}>
              <div className={styles.train}>
                {/* Train front */}
                <div className={styles.trainFront}>
                  <div className={styles.trainWindow}>
                    <TrainFront size={17} />
                  </div>

                  <span className={styles.headlight} />
                </div>

                {/* Train body */}
                <div className={styles.trainBody}>
                  <div className={styles.trainWindows}>
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className={styles.trainStripe} />

                  <span className={styles.trainPower}>
                    <Zap size={11} />
                  </span>
                </div>

                {/* Wheels */}
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

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <i />
            PROJECTS & CLIENTS
          </span>

          <h1>
            Electrical work
            <br />
            <strong>where uptime</strong>
            <br />
            <strong>matters.</strong>
          </h1>

          <p>
            Rainbow delivers electrical infrastructure, power systems
            and engineering services across government, banking,
            healthcare, industrial and commercial environments.
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

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statIcon}>
                <TrainFront size={15} />
              </span>

              <div>
                <strong>17</strong>
                <small>Railway stations</small>
              </div>
            </div>

            <div className={styles.stat}>
              <span className={styles.statIcon}>
                <Zap size={15} />
              </span>

              <div>
                <strong>5+</strong>
                <small>Electrical sectors</small>
              </div>
            </div>

            <div className={styles.stat}>
              <span className={styles.statIcon}>
                <CheckCircle2 size={15} />
              </span>

              <div>
                <strong>Direct</strong>
                <small>Engineering support</small>
              </div>
            </div>
          </div>
        </div>

      
      </section>

      {/* =====================================================
          MAJOR PROJECT
      ===================================================== */}

      <section className={styles.projectSection}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="01 / Major project"
            title="Indian Railways — North Eastern Railway"
            text="Rainbow is currently executing comprehensive electrical works across 17 North Eastern Railway stations."
          />

          <article className={styles.projectCard}>
            <div className={styles.projectVisual}>
              <div className={styles.projectIcon}>
                <TrainFront size={28} />
              </div>

              <span>ACTIVE PROJECT</span>

              <strong>17</strong>

              <small>RAILWAY STATIONS</small>
            </div>

            <div className={styles.projectBody}>
              <small className={styles.projectType}>
                {project?.type || "Electrical Infrastructure"}
              </small>

              <h2>
                {project?.client || "North Eastern Railway"}
              </h2>

              <p>
                {project?.description ||
                  "Comprehensive electrical works across North Eastern Railway stations including electrical installation, lighting, cabling, panels, appliances and commissioning."}
              </p>

              <h3>Scope of work</h3>

              <div className={styles.scope}>
                {project?.scope?.map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={15} />
                    {item}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className={styles.projectAction}
              >
                Discuss this project
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          CLIENTS
      ===================================================== */}

      <section className={styles.clientsSection}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="02 / Our valued clients"
            title="Trusted across sectors."
            text="Rainbow serves government, banking, healthcare and commercial organizations through electrical supply, installation and engineering support."
          />

          <div className={styles.clientsGrid}>
            {Object.entries(clients).map(([sector, names]) => (
              <article
                className={styles.clientCard}
                key={sector}
              >
                <div className={styles.clientHeader}>
                  <span>SECTOR</span>
                  <strong>{sector}</strong>
                </div>

                <div className={styles.clientList}>
                  {names.map((name) => (
                    <div key={name}>
                      <CheckCircle2 size={15} />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <div>
              <span>Your next project</span>

              <h2>
                Let's discuss the electrical scope.
              </h2>

              <p>
                Share your application, site requirement or project
                scope with Rainbow's engineering team.
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