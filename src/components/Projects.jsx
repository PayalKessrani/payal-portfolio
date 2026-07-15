import { motion } from "framer-motion";
import portfolioImg from "../assets/portfolio.png";
import netflixImg from "../assets/netflix.png";
import aeglecoveImg from "../assets/aeglecove.png";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Portfolio Website",
      image: portfolioImg,
      desc: "A modern responsive portfolio built using React, Vite and Framer Motion showcasing my skills, projects and professional experience with smooth animations and premium UI.",
      tech: ["React", "CSS", "Framer Motion", "Vite"],
      demo: "https://payal-portfolio-seven.vercel.app",
      github: "https://github.com/PayalKessrani/payal-portfolio",
    },

    {
      number: "02",
      title: "Netflix React Clone",
      image: netflixImg,
      desc: "A Netflix-style movie browsing application featuring movie search, trailer previews, favorites system and a fully responsive interface powered by the TMDB API.",
      tech: ["React", "Tailwind", "TMDB API", "Vite"],
      demo: "https://netflix-react-clone-blush.vercel.app/",
      github: "https://github.com/PayalKessrani/netflix-react-clone",
    },

    {
      number: "03",
      title: "AegleCove Community Platform",
      image: aeglecoveImg,
      desc: "A collaborative platform designed to connect developers, designers and AI enthusiasts for innovative projects and startup opportunities.",
      tech: ["React", "UI/UX", "Community"],
      demo: "https://aegle-cove-project.vercel.app/",
      github: "https://github.com/PayalKessrani/AegleCove-project",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {"< Featured Projects />"}
      </motion.h2>

      <motion.p
        className="projects-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        A selection of projects that showcase my passion for modern web
        development, UI design and interactive user experiences.
      </motion.p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}