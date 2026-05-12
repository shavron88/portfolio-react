import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="navbar">
      <motion.a
        href="/"
        className="nav-brand"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="signature">Faryal Umar</span>
      </motion.a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;