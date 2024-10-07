import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./profile.module.css";
import About from "../About/About";
import Projects from "../Projects/projects";

const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Anton Lindskog</h1>
        <p className={styles.description}>Junior Developer</p>

        <nav>
          <a href="#about" className={styles.navTitle}>
            Om mig
          </a>
          <a href="#experience" className={styles.navTitle}>
            Erfarenheter
          </a>
          <a href="#projects" className={styles.navTitle}>
            Projekt
          </a>
        </nav>
        <img
          src={getImageUrl("nav/linkedin.png")}
          alt="LinkedIn"
          className={styles.icon}
        ></img>
        <img
          src={getImageUrl("nav/github.png")}
          alt="LinkedIn"
          className={styles.icon}
        ></img>
      </div>
      <section id="about" className={styles.rightSection}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          natus, molestiae totam numquam quo, quod enim quasi nostrum libero,
          dolore reiciendis dolorum dignissimos animi molestias voluptatum
          nihil? Rerum, similique ullam.
        </p>
        <About />
        <Projects />
      </section>
    </section>
  );
};

export default Profile;
