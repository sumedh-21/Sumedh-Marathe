import styles from "./ContactStyles.module.css";
import email from "../../assets/email.png";
import linkedin from "../../assets/linkedin.png";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <p className={styles.text}>Get in Touch</p>
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.infoUpperContainer}>
        <a
          href="mailto: sumedhmarathe5@gmail.com"
          className={styles.contactLink}
        >
          {" "}
          <img src={email} alt="Email icon" className={styles.icon} />
          sumedhmarathe5@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/sumedh-marathe-7a767b226/"
          className={styles.contactLink}
        >
          {" "}
          <img src={linkedin} alt="LinkedIn icon" className={styles.icon} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
