import React from "react";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div id="experience" className={styles.aboutItemText}>
              <h3>Orderpage for food</h3>
              <p>Fullstack website</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Backend website</h3>
              <p>API, Springboot, Java</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Backend </h3>
              <p></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
