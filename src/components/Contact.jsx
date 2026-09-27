import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kovkp3k",
        "template_6sj6gcl",
        form.current,
        "y-qtdIBQfeCbvUbPi"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

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
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          name="from_name"
          placeholder="> Your Name"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="> Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="> Your Message"
          required
        ></textarea>

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