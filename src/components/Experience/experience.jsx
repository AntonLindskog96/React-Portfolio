import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div id="experience" className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Jag är en frontend-utvecklare med erfarenhet av att bygga
                responsiva och optimerade webbplatser.
              </p>
              <button className={styles.aboutButton}>Typescript</button>
              <button className={styles.aboutButton}>Javascript</button>
              <button className={styles.aboutButton}>React</button>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Jag har erfarenhet av att utveckla snabba och optimerade
                backend-system och API.
              </p>
              <button className={styles.aboutButton}>Springboot</button>
              <button className={styles.aboutButton}>Java</button>
              <button className={styles.aboutButton}>C#</button>
              <button className={styles.aboutButton}>Docker</button>
              <button className={styles.aboutButton}>Kubernetes</button>
              <button className={styles.aboutButton}>CI/CD</button>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Databashantering</h3>
              <p>
                Jag har erfarenhet av att designa, optimera och underhålla
                databaser för att säkerställa effektiv lagring och snabb åtkomst
                av data.
              </p>
              <button className={styles.aboutButton}>PostgreSQL</button>
              <button className={styles.aboutButton}>MongoDB</button>
              <button className={styles.aboutButton}>MySQL</button>
              <button className={styles.aboutButton}>SQLite</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
