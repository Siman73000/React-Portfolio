import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "/adrien-olichon-RCAhiGJsUUE-unsplash.jpg";
import "./App.css";

export default function App() {
  const [projects] = useState([
    {
      title: "Real-Time Particle Fluid Simulation",
      description:
        "A RTPFS Deep Learning algorithm built in C, x86-64 Assembly, and Python. Use 'E' to push particles, and 'SHIFT + E' to pull.",
      link: "https://siman73000.github.io/RTPFS_Website/",
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
        "Using a method by Ramanujan to approximate Pi to a high degree of accuracy in C.",
      link: "https://github.com/Siman73000/Pi_in_C",
    },
    {
      title: "RCS Embedded Systems Engineering",
      description:
        "Developed the RCS firmware for low-atmospheric rocket control systems using Rust.",
      link: "https://github.com/Siman73000/Embedded-Systems-Engineering_RCS",
    },
  ]);

  const [education] = useState([
    {
      title: "Bachelor of Science (B.S.) - Computer Science",
      description: "East Central University",
    },
    {
      title: "(B.S.) Minor - General Mathematics",
      description: "East Central University",
    },
    {
      title: "Independent Computer Science Studies",
      description: "OSUIT",
    },
    {
      title: "Information Technology Certifications",
      description: "Pontotoc Technology Center",
    },
    {
      title: "High-School Education",
      description: "Latta Public High-School",
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
          <a href="#education">Education</a>
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
        {/* Wave Border */}
        <div className="wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgb(209, 209, 209)"
              d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,186.7C672,171,768,149,864,144C960,139,1056,149,1152,170.7C1248,192,1344,224,1392,240L1440,256V320H0Z"
            ></path>
          </svg>
        </div>
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
          for myself, family, and humanity as a whole, and is why I
          chose Software Engineering in the first place. Createing a
          future where life is easier and smoother for our generations to come
          is highly important to me and should drive us too innovate.
           I am helping humanity become the best it possibly can be!
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
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
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
      
      {/* Education Section */}
      <motion.section
        id="education"
        className="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Education</h2>
        <div className="education-timeline">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="education-entry"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <h3>{edu.title}</h3>
              <p>{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>


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
