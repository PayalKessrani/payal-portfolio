import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {"//Contact"}
      </motion.h2>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <input type="text" placeholder="> Your_Name" />
        <input type="email" placeholder="> Your_Email" />
        <textarea placeholder="> Your_Message"></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {"> Send_Message"}
        </motion.button>
      </motion.form>
    </section>
  );
}