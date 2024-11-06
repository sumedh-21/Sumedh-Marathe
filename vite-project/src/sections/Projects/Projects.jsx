import styles from "./ProjectsStyles.module.css";

function Projects() {
  const projects = [
    {
      name: "ClearBill: AI-Driven Healthcare Billing Optimization System",
      link: "https://github.com/joelkny97/ruhealth2024-team7",
    },
    {
      name: "SlangScribe: Transcribe, Translate and Genzify Your Lectures",
      link: "https://github.com/sumedh-21/SlangScribe-Translate-Transcribe-and-Genzify-your-Lectures",
    },
    {
      name: "Incremental Shortest Path Algorithm for Dynamic Network Optimization",
      link: "https://github.com/sumedh-21/ECE-573-DSA-finalproject",
    },
    {
      name: "Pruning a LeNet-5 Convolutional Neural Network on MNIST Dataset",
      link: "https://github.com/sumedh-21/Pruning-a-LeNet-5-Convolutional-Neural-Network-on-MNIST-Dataset-",
    },
    {
      name: "Comparative Analysis of Methods To Alleviate CPU-GPU Data Transfer Overhead",
      link: "https://github.com/sumedh-21/cuda-memoryops",
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h2 className="sectionTitle">Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
