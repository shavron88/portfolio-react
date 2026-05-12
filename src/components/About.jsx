import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="about-underline" />
        </motion.div>

        {/* Main Content */}
        <div className="about-grid">
          {/* Left: Text */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3>I craft experiences users love.</h3>
            <p>
              I'm a passionate web developer and cybersecurity analyst with a
              knack for building modern, secure, and user-centric digital
              experiences. From responsive front-end interfaces to robust
              security frameworks, I bring ideas to life with clean, efficient
              code.
            </p>
            <p>
              With a strong foundation in full-stack development and a deep
              understanding of cybersecurity principles.
            </p>

            {/* Download CV button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="#" download>
                <motion.button
                  className="primary"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="btn-text">Download CV</span>
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Stats Cards */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="about-stat-card"
              whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(139, 92, 246, 0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">📅</div>
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </motion.div>

            <motion.div
              className="about-stat-card"
              whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(139, 92, 246, 0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">💼</div>
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </motion.div>

            <motion.div
              className="about-stat-card"
              whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(139, 92, 246, 0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">😊</div>
              <span className="stat-number">15+</span>
              <span className="stat-label">Happy Clients</span>
            </motion.div>

            <motion.div
              className="about-stat-card"
              whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(139, 92, 246, 0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">🏆</div>
              <span className="stat-number">5</span>
              <span className="stat-label">Awards Won</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="about-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <h4>Tech Stack</h4>
          <div className="skills-list">
            {["React", "JavaScript", "HTML", "CSS", "Cybersecurity", "Python", "STRAPI"].map((skill, i) => (
              <motion.span
                key={skill}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;