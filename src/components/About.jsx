import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about-section">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {"//About"}
      </motion.h2>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>
          I am a passionate <span>Frontend Developer</span> and 
          Computer Science student who enjoys building 
          modern, scalable, and user-focused web applications.
        </p>

        <p>
          My expertise lies in crafting responsive interfaces,
          writing clean & maintainable code, and creating
          smooth user experiences using modern technologies.
        </p>

        <p>
          I continuously explore new tools and frameworks
          to enhance performance, design quality,
          and overall digital experience.
        </p>
      </motion.div>

    </section>
  );
}