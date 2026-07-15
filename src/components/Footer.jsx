import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <motion.h2
        className="footer-logo"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >
        Payal <span>Kessrani</span>
      </motion.h2>

      <motion.p
        className="footer-role"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .2 }}
      >
        Frontend Developer • React Developer • Video Editor
      </motion.p>

      <motion.p
        className="footer-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .4 }}
      >
        Passionate about building modern web applications,
        intuitive user experiences and creative digital solutions.
      </motion.p>

      <div className="footer-icons">

        <a
          href="https://github.com/PayalKessrani"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/payal-kessrani-033857265?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="payalkessrani@gmail.com"
        >
          <FaEnvelope />
        </a>

      </div>

      <div className="footer-line"></div>

      <p className="copyright">
        © 2026 Payal Kessrani • Made with <FaHeart className="heart" /> using React
      </p>

    </footer>
  );
}