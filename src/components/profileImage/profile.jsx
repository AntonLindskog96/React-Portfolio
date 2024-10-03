import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Anton Lindskog</h1>
        <p className={styles.description}>Junior Developer</p>
        <a href="mailto:lindskog96@live.se" className={styles.contactButton}>
          Contact me
        </a>
      </div>
      <img
        className={styles.ProfileImage}
        src={getImageUrl("profile/profileImage.png")}
        alt="Profile image of me"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Profile;
