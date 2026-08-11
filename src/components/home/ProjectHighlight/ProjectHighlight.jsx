import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  TrainFront,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

import { projects } from "../../../data.js";

import SectionHeader from "../../common/SectionHeader";

import styles from "./ProjectHighlight.module.css";

export default function ProjectHighlight() {
  const project = projects?.[0];

  if (!project) {
    return null;
  }

  const scope = project.scope?.slice(0, 8) || [];

  return (
    <section className={styles.section}>
      <div
        className={styles.background}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>

      <div className={styles.container}>
        <SectionHeader
          eyebrow="06 / Major project"
          title="Electrical work at scale."
          text="Rainbow is currently executing comprehensive electrical works across 17 North Eastern Railway stations."
        />

        <article className={styles.project}>
          {/* PROJECT VISUAL */}

          <div className={styles.visual}>
            <div className={styles.visualTop}>
              <span className={styles.projectNo}>
                PROJECT / 01
              </span>

              <span className={styles.live}>
                <i />
                CURRENT PROJECT
              </span>
            </div>

            <div className={styles.railwayGraphic}>
              <div className={styles.track}>
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className={styles.train}>
                <TrainFront size={30} />
              </div>

              <div className={styles.powerNode}>
                <Zap size={16} />
              </div>
            </div>

            <div className={styles.stationCount}>
              <strong>17</strong>

              <div>
                <span>North Eastern Railway</span>
                <b>Stations</b>
              </div>
            </div>

            <div className={styles.visualFooter}>
              <MapPin size={13} />

              <span>
                North Eastern Railway
              </span>
            </div>
          </div>

          {/* PROJECT CONTENT */}

          <div className={styles.content}>
            <div className={styles.projectType}>
              {project.type}
            </div>

            <h3>{project.client}</h3>

            <p className={styles.description}>
              {project.description}
            </p>

            <div className={styles.divider} />

            <div className={styles.scopeHeader}>
              <span>Project scope</span>

              <small>
                {scope.length} key activities
              </small>
            </div>

            <div className={styles.scope}>
              {scope.map((item) => (
                <div
                  className={styles.scopeItem}
                  key={item}
                >
                  <CheckCircle2 size={14} />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className={styles.contentFooter}>
              <Link
                to="/projects"
                className={styles.primaryButton}
              >
                <span>View complete project</span>

                <ArrowRight size={15} />
              </Link>

              <Link
                to="/contact"
                className={styles.secondaryButton}
              >
                Discuss a project
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
