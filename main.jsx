import { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <div className="bg-slate-900 text-slate-100 font-sans">
      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Simon Hamilton
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-slate-400 mt-4"
        >
          Software Engineer | Building tools that blend creativity and logic
        </motion.p>
        <a
          href="#projects"
          className="mt-8 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-cyan-300 transition"
        >
          View My Work
        </a>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">About Me</h2>
        <p className="text-lg text-slate-300 max-w-3xl">
          Hi, I’m Simon! I’m passionate about designing and developing software
          that solves real-world problems. I enjoy working across the stack,
          with a focus on performance, usability, and clean design.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-cyan-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contact</h2>
        <p className="text-lg text-slate-300 mb-6">
          Let’s connect! Reach out via:
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:your.email@example.com"
            className="text-cyan-400 hover:underline"
          >
            Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-slate-800 text-slate-400">
        <p>&copy; 2025 Simon Hamilton</p>
      </footer>
    </div>
  );
}
