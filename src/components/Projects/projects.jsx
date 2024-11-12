import React from "react";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div id="experience" className={styles.aboutItemText}>
              <h3>
                <a
                  href="https://github.com/AntonLindskog96/exarbete-aa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Orderpage for food
                </a>
              </h3>
              <p className={styles.aboutDescription}>
                Frontend och backend utveckling med Next.js, inklusive React,
                TypeScript, SCSS och Framer Motion
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>
                <a
                  href="https://github.com/AntonLindskog96/springboot-ordersystem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Management System
                </a>
              </h3>
              <p className={styles.aboutDescription}>
                RESTful API för orderhantering, byggt med Java och Spring Boot,
                som använder PostgreSQL för CRUD-funktioner, MongoDB för
                loggning av orderhistorik och JMS/ActiveMQ för
                meddelandehantering.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}></li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
