import { motion } from "framer-motion";
import myimg from "../assets/myimg.png";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Animated background orbs */}
      <div className="hero-bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="container hero-grid">
        {/* LEFT: Text Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Faryal Umar
          </motion.h1>

          <motion.div
            className="hero-role-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <h3>
              Website Developer &{" "}
              <span className="highlight">Cybersecurity Analyst</span>
            </h3>
            <div className="hero-underline" />
          </motion.div>

          <motion.p
            className="desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            I design modern, secure, and high-performance web experiences
            with a passion for clean code and user-centric design.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <a href="#projects">
              <motion.button
                className="primary"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="btn-text">View Work</span>
              </motion.button>
            </a>
            <a href="#contact">
              <motion.button
                className="secondary"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="btn-text">Contact Me</span>
              </motion.button>
            </a>
          </motion.div>

          
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="circle-bg" />
          <div className="circle-bg circle-bg-2" />

          <motion.img
            src={myimg}
            alt="Profile"
            className="profile-img"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating tech badges */}
          <motion.div
            className="floating-badge badge-1"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>⚛️ React</span>
          </motion.div>

          <motion.div
            className="floating-badge badge-2"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span>🔒 Cybersecurity</span>
          </motion.div>

          <motion.div
            className="floating-badge badge-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span>⚡ JavaScript</span>
          </motion.div>

          <div className="status-card">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ● Available for work
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;