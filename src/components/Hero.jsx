import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* LEFT SIDE */}
      <motion.div
        className="hero-left"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4 className="intro-text">Hi, I'm</h4>

        <h1 className="main-name">
          Payal <span>Kessrani</span>
        </h1>

        <h2 className="role">
          <span>Computer Science Student</span>
          <br />
          Web Developer
        </h2>

        <div className="hero-buttons">
          <a href="#contact" className="btn-contact">
            Contact Me →
          </a>

           <a
    href="/Payal_Kessrani_Resume.pdf"
    download
    className="btn-resume"
  >
    Download Resume
  </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}

      { <motion.div
        className="hero-right"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={profileImg}
          alt="developer workspace"
          className="hero-img"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div> }
    </section>
  );
}
