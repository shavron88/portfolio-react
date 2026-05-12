import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2>Get In Touch</h2>
          <p>Have a project in mind or just want to say hello? I'd love to hear from you.</p>
          <div className="contact-underline" />
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="contact-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <motion.div
            className="contact-input-group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <input type="text" placeholder="Your Name" required />
          </motion.div>

          <motion.div
            className="contact-input-group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <input type="email" placeholder="Your Email" required />
          </motion.div>

          <motion.div
            className="contact-input-group contact-textarea-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <textarea placeholder="Your Message" rows={5} required />
          </motion.div>

          <motion.button
            type="submit"
            className="contact-btn"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="btn-text">Send Message</span>
            <span className="btn-glow" />
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="contact-social"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-divider">
            <span>or connect with me</span>
          </div>

          <div className="social-links">
            <motion.a
              href="https://www.linkedin.com/in/faryal-umar-423458376/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 119, 181, 0.4)" }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </motion.a>

<motion.a
               href="https://github.com/shavron88"
               target="_blank"
               rel="noopener noreferrer"
               className="social-btn github"
               whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)" }}
               whileTap={{ y: 0 }}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 1.0 }}
               viewport={{ once: true }}
             >
               <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                 <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.004 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
               </svg>
               <span>GitHub</span>
             </motion.a>

             <motion.a
               href="mailto:faryalumar44@gmail.com"
               className="social-btn gmail"
               whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(234, 67, 53, 0.4)" }}
               whileTap={{ y: 0 }}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 1.1 }}
               viewport={{ once: true }}
             >
               <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                 <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
               </svg>
               <span>Gmail</span>
             </motion.a>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;