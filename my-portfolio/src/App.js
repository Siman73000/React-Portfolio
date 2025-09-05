import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  const [projects] = useState([
    {
      title: "Project One",
      description: "A short description of the project and the technologies used.",
      link: "#",
    },
    {
      title: "Project Two",
      description: "A short description of the project and the technologies used.",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A short description of the project and the technologies used.",
      link: "#",
    },
  ]);

  // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Simon Hamilton</h1>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.header
        className="hero"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m Simon 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Software Engineer | Integrating systems that blend creativity and logic
        </motion.p>
        <motion.button
          onClick={() => document.getElementById("projects").scrollIntoView()}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          View My Work
        </motion.button>
      </motion.header>

      {/* About Section */}
      <motion.section
        id="about"
        className="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          Hi, I’m Simon! I’m passionate about designing and developing software
          that solves real-world problems. I enjoy working across the stack,
          with a focus on performance, usability, and clean design.
        </p>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project →</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Contact</h2>
        <p>Let’s connect! Reach out via:</p>
        <p>
          <a href="mailto:your.email@example.com">Email</a> |{" "}
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 Simon Hamilton
      </footer>
    </div>
  );
}
