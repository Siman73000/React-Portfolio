import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "/adrien-olichon-RCAhiGJsUUE-unsplash.jpg";
import "./App.css";

export default function App() {
  const [projects] = useState([
    {
      title: "Real-Time Particle Fluid Simulation",
      description:
        "A RTPFS Deep Learning algorithm built in C, x86-64 Assembly, and Python.",
      link: "https://github.com/Siman73000/Real-Time-Hydrodynamics-PFS",
    },
    {
      title: "Othello Operation System",
      description:
        "A real-time OS with a fully custom kernel, bootloader, and shell. It is built in C, Rust, and x86-64 Assembly.",
      link: "https://github.com/Siman73000/Othello",
    },
    {
      title: "The Iago Programming Language",
      description:
        "Low-level systems programming language designed for memory safety and performance.",
      link: "https://github.com/Siman73000/Iago_Programming_Language",
    },
    {
      title: "Encryption Algorithm",
      description:
        "Custom encryption algorithm built in Python for obscuring plain text data.",
      link: "https://github.com/Siman73000/Encryption_Algorithm",
    },
    {
      title: "Approximation of Pi",
      description:
        "Using the Ramanujan method to approximate Pi to a high degree of accuracy in C.",
      link: "https://github.com/Siman73000/Pi_in_C",
    },
    {
      title: "RCS Embedded Systems Engineering",
      description:
        "Developed the RCS firmware for low-atmospheric rocket control systems using Rust.",
      link: "https://github.com/Siman73000/Embedded-Systems-Engineering_RCS",
    },
  ]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay" />
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
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Software Engineer | Integrating creativity and logic
        </motion.p>
        <motion.button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
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
          Alan Kay once said, “The best way to predict the future is to invent
          it.” This inspires me to push forwards toward creating a better world
          for myself, family, and humanity as a whole. This is why I am going
          to work for NASA in the future as a Software Engineer. This is
          important to me because I'm not just helping my community, my nation,
          or my family. I am helping humanity become the best it possibly can be!
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
              transition={{ delay: idx * 0, duration: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
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
        <p className="text-black">Let’s connect! Reach out via:</p>
        <p>
          <a href="mailto:si.p.h@outlook.com">Email</a> |{" "}
          <a
            href="https://github.com/Siman73000"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/simon-hamilton-881767290/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </motion.section>

      {/* Footer */}
      <footer className="footer">&copy; 2025 Simon Hamilton</footer>
    </div>
  );
}
