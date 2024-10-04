import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./profile.module.css";
import About from "../About/About";

const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Anton Lindskog</h1>
        <p className={styles.description}>Junior Developer</p>
        <div className={styles.navWrapper}>
          <div className={styles.navItem}>
            <span className={styles.navLine}></span>
            <p className={styles.navTitle}>Om mig</p>
          </div>
          <div className={styles.navItem}>
            <span className={styles.navLine}></span>
            <p className={styles.navTitle}>Erfarenheter</p>
          </div>
          <div className={styles.navItem}>
            <span className={styles.navLine}></span>
            <p className={styles.navTitle}>Projekt</p>
          </div>
        </div>
      </div>
      <section className={styles.rightSection}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          natus, molestiae totam numquam quo, quod enim quasi nostrum libero,
          dolore reiciendis dolorum dignissimos animi molestias voluptatum
          nihil? Rerum, similique ullam.
        </p>
        <About />
      </section>
    </section>
  );
};

export default Profile;
