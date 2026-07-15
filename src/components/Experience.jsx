import { motion } from "framer-motion";

export default function Experience() {

  const experiences = [

    {
      role: "Frontend Developer",
      company: "Self Learning & Personal Projects",
      duration: "2024 - Present",
      desc: "Building responsive and interactive web applications using React, JavaScript and modern frontend technologies while continuously improving UI/UX and development skills.",
    },

    {
      role: "Marketing Member",
      company: "Smart Trainers",
      duration: "2025 - Present",
      desc: "Contributed to marketing campaigns, social media engagement and promotional activities while collaborating with the team to improve brand visibility and audience reach.",
    },

     {
      role: "Video Editor",
      company: "Creavix Solutions",
      duration: "2026 - Present",
      desc: "Edited engaging video content for social media and digital platforms while enhancing visual storytelling, transitions, motion graphics and overall content quality to improve audience engagement.",
    },

  ];

  return (

    <section id="experience" className="experience-section">

      {/* TITLE */}

      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {"< Experience />"}
      </motion.h2>

      {/* TIMELINE */}

      <div className="timeline">

        {experiences.map((item, index) => (

          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2
            }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-duration">
                {item.duration}
              </span>

              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <p>{item.desc}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}