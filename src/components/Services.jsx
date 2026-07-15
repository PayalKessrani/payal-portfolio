import { motion } from "framer-motion";
import { FaCode, FaPalette, FaVideo } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Developer",
      desc: "Building responsive, fast and interactive websites using React, JavaScript, HTML, CSS and modern frontend technologies.",
    },
    {
      icon: <FaPalette />,
      title: "UI / UX Design",
      desc: "Designing clean, modern and user-friendly interfaces with a focus on accessibility, responsiveness and seamless user experience.",
    },
    {
      icon: <FaVideo />,
      title: "Video Editing",
      desc: "Creating engaging documentary-style, storytelling and promotional videos with smooth transitions, motion graphics and cinematic editing.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {"< Services />"}
      </motion.h2>

      <motion.p
        className="services-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        I create modern digital experiences by combining development,
        design and creative storytelling.
      </motion.p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -12,
              scale: 1.04,
            }}
            viewport={{ once: true }}
          >
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}