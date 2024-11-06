import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h2 className="sectionTitle">Skills</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="MATLAB" />
        <SkillList src={checkMarkIcon} skill="CUDA" />
        <SkillList src={checkMarkIcon} skill="REST API" />
        <SkillList src={checkMarkIcon} skill="NLP" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Flask" />
        <SkillList src={checkMarkIcon} skill="Next.js" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Git/GitHub" />
        <SkillList src={checkMarkIcon} skill="VmWare" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="Hadoop" />
        <SkillList src={checkMarkIcon} skill="OpenMP" />
        <SkillList src={checkMarkIcon} skill="MPI" />
        <SkillList src={checkMarkIcon} skill="AVX Intrinsics" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="PyTorch" />
        <SkillList src={checkMarkIcon} skill="TensorFlow" />
        <SkillList src={checkMarkIcon} skill="Hugging Face" />
        <SkillList src={checkMarkIcon} skill="Sci-kit Learn" />
        <SkillList src={checkMarkIcon} skill="NumPy" />
        <SkillList src={checkMarkIcon} skill="Pandas" />
        <SkillList src={checkMarkIcon} skill="Matplotlib" />
        <SkillList src={checkMarkIcon} skill="Whisper" />
        <SkillList src={checkMarkIcon} skill="Generative AI" />
        <SkillList src={checkMarkIcon} skill="CNN" />
      </div>
    </section>
  );
}

export default Skills;
