import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./profile.module.css";
import Projects from "../Projects/projects";
import Experience from "../Experience/experience";
import Footer from "../Footer/footer";

const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Anton Lindskog</h1>
        <p className={styles.description}>Junior Developer</p>
        <nav className={styles.navWrapper}>
          <a href="#about" className={styles.navTitle}>
            Om mig
          </a>
          <a href="#experience" className={styles.navTitle}>
            Erfarenheter
          </a>
          <a href="#projects" className={styles.navTitle}>
            Projekt
          </a>
          <div className={styles.resume}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }} // Styles to inherit color and remove underline
            >
              <h1>Mitt Cv</h1>
            </a>
            {/* If you still want to use PDFViewer for any reason, you can keep it here */}
            {/* <PDFViewer /> */}
          </div>
        </nav>
        <a
          href="https://linkedin.com/in/anton-lindskog-3894b524a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={getImageUrl("nav/linkedin.png")}
            alt="Github"
            className={styles.icon}
          />
        </a>
        <a
          href="https://github.com/Antonlindskog96"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={getImageUrl("nav/github.png")}
            alt="Github"
            className={styles.icon}
          />
        </a>
      </div>
      <section id="about" className={styles.rightSection}>
        <p className={styles.aboutText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          natus, molestiae totam numquam quo, quod enim quasi nostrum libero,
          dolore reiciendis dolorum dignissimos animi molestias voluptatum
          nihil? Rerum, similique ullam.
        </p>
        <Experience />
        <Projects />
        <Footer />
      </section>
    </section>
  );
};

export default Profile;
