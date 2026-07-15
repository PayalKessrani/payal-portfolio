import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      number: "4+",
      title: "Projects Completed",
    },
    {
      number: "2+",
      title: "Professional Experience",
    },
    {
      number: "8+",
      title: "Technologies",
    },
    {
      number: "100%",
      title: "Responsive Designs",
    },
  ];

  return (
    <section id="stats" className="stats-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {"< My Journey />"}
      </motion.h2>

      <motion.p
        className="stats-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Building modern web applications with creativity, passion and continuous learning.
      </motion.p>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stats-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            viewport={{ once: true }}
          >
            <h1>{item.number}</h1>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}