import styles from "./ProjectsStyles.module.css";

function Projects() {
  const projects = [
    {
      name: "SlangScribe: Transcribe,Translate and Genzify Your Lectures",
      description: `SlangScribe is a web application designed to transcribe audio files, 
      summarize the transcriptions, translate them into multiple languages, and even "Genzify" 
      the content into Gen-Z slang for added fun! It uses OpenAI's GPT-4 for high-quality text generation and summarization, 
      Whisper for transcription, and Hugging Face pipelines for translation.`,
      link: "https://github.com/sumedh-21/SlangScribe-Translate-Transcribe-and-Genzify-your-Lectures",
    },
    {
      name: "Incremental Shortest Path Algorithm for Dynamic Network Optimization",
      description: `Developed an Incremental Shortest Path Algorithm that adapts to dynamic network changes, offering up to 50x faster performance compared to traditional methods.`,
      link: "https://github.com/sumedh-21/ECE-573-DSA-finalproject",
    },
    {
      name: "Pruning a LeNet-5 Convolutional Neural Network on MNIST Dataset",
      description: `Reduced the size of a LeNet-5 model by 51% using L1 Unstructured Pruning while maintaining high accuracy.`,
      link: "https://github.com/sumedh-21/Pruning-a-LeNet-5-Convolutional-Neural-Network-on-MNIST-Dataset-",
    },
    {
      name: "Comparative Analysis of Methods To Alleviate CPU-GPU Data Transfer Overhead",
      description: `Enhanced CPU-GPU data transfer in CUDA using Unified Memory and Thread Hierarchy, improving performance and energy efficiency.`,
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
            <p className={styles.description}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
