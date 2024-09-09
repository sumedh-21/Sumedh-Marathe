import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Sumedh Marathe"
        ></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div>
        <h1>Hello, I'm</h1>
        <h2>Sumedh Marathe</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/sumedh-marathe-7a767b226/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon"></img>
          </a>
          <a href="https://github.com/sumedh-21" target="_blank">
            <img src={githubIcon} alt="Github Icon"></img>
          </a>
        </span>
        <p className={styles.descrption}>
          Computer Engineering Graduate Student at Rutgers University.
        </p>
        <a href={CV} download>
          <button className="hover"> Resume</button>
        </a>
      </div>
    </section>
  );
}
export default Hero;
