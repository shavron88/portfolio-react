import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Walid – AI Powered Chatbot",
    description:
      "An intelligent AI-powered chatbot web application built with modern web technologies. Features real-time conversation, natural language understanding, and a sleek dark-mode UI.",
    fullDescription:
      "Walid is a next-generation AI chatbot designed to provide intelligent, context-aware conversations. The application leverages the OpenAI API for natural language understanding and response generation. The frontend is built with React and styled with Tailwind CSS, featuring a sleek dark-mode interface with smooth animations. The backend is powered by Node.js and Express, handling API requests and session management. Key features include real-time streaming responses, conversation history, and a responsive design that works seamlessly across all devices.",
    image: "https://via.placeholder.com/800x400/1e1b4b/8b5cf6?text=Walid+AI",
    liveUrl: "https://walid-chatbot.vercel.app",
    repoUrl: "https://github.com/yourusername/walid-chatbot",
    tags: ["React", "Node.js", "OpenAI", "Tailwind"],
    techDetails: [
      "React 18 with Vite",
      "Node.js & Express backend",
      "OpenAI GPT-4 API integration",
      "MongoDB for conversation storage",
      "JWT Authentication",
      "Responsive Design",
    ],
  },
  {
    id: 2,
    title: "KFrame – Creative Portfolio Framework",
    description:
      "A lightweight, customizable portfolio framework for creative professionals. Includes animated hero sections, project showcases, and a built-in dark/light theme toggle.",
    fullDescription:
      "KFrame is a modern portfolio framework designed for creative professionals who want to showcase their work beautifully. It features a highly customizable layout with animated hero sections, smooth page transitions powered by Framer Motion, and a built-in dark/light theme toggle. The framework is built with performance in mind, utilizing lazy loading, optimized assets, and clean semantic HTML. Developers can easily customize colors, fonts, and layouts through a simple configuration file without touching the core code.",
    image: "https://via.placeholder.com/800x400/1e1b4b/6366f1?text=KFrame",
    liveUrl: "https://kframe-portfolio.netlify.app",
    repoUrl: "https://github.com/yourusername/kframe",
    tags: ["React", "Framer Motion", "CSS3", "Vite"],
    techDetails: [
      "React with TypeScript",
      "Vite build tool",
      "Framer Motion animations",
      "CSS Modules & Tailwind",
      "SEO Optimized",
      "Lightweight (< 50KB bundle)",
    ],
  },
  {
    id: 3,
    title: "CyberShield – Security Dashboard",
    description:
      "A cybersecurity monitoring dashboard that visualizes network threats in real time. Includes vulnerability scanning, incident logging, and alert notifications.",
    fullDescription:
      "CyberShield is a comprehensive cybersecurity monitoring dashboard designed to help security teams visualize and respond to network threats in real time. The platform integrates with multiple security APIs to aggregate threat data, display it through interactive D3.js visualizations, and provide actionable insights. Features include automated vulnerability scanning, incident logging with severity levels, real-time alert notifications, and a role-based access control system. The dashboard is optimized for large datasets with efficient rendering and filtering capabilities.",
    image: "https://via.placeholder.com/800x400/1e1b4b/a78bfa?text=CyberShield",
    liveUrl: "https://cybershield-demo.vercel.app",
    repoUrl: "https://github.com/yourusername/cybershield",
    tags: ["React", "D3.js", "Express", "MongoDB"],
    techDetails: [
      "React with Chart.js & D3",
      "Express.js REST API",
      "MongoDB with Mongoose",
      "Socket.io real-time updates",
      "Role-based Access Control",
      "Docker deployment",
    ],
  },
  {
    id: 4,
    title: "TaskFlow – Productivity App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality, due date reminders, and progress analytics.",
    fullDescription:
      "TaskFlow is a productivity-focused task management application that uses the Kanban methodology to help teams organize and prioritize work. The app features intuitive drag-and-drop functionality for moving tasks between columns, smart due date reminders with email notifications, and detailed progress analytics with visual charts. Built with Next.js for server-side rendering and optimal SEO, it uses PostgreSQL for reliable data storage and Prisma as the ORM. The real-time collaboration feature allows team members to see updates instantly.",
    image: "https://via.placeholder.com/800x400/1e1b4b/0f172a?text=TaskFlow",
    liveUrl: "https://taskflow-prod.vercel.app",
    repoUrl: "https://github.com/yourusername/taskflow",
    tags: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
    techDetails: [
      "Next.js 14 with App Router",
      "TypeScript strict mode",
      "Prisma ORM with PostgreSQL",
      "NextAuth.js authentication",
      "Drag & Drop with dnd-kit",
      "Real-time with Pusher",
    ],
  },
];

/* Home page — shows only cards grid */
export function Projects() {
  const navigate = useNavigate();

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <div className="projects-underline" />
          <p className="projects-subtitle">
            Here are some of my recent works that showcase my skills and passion.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(139, 92, 246, 0.2)" }}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card-overlay">
                  <span className="overlay-text">View Project →</span>
                </div>
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link repo-link">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.004 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Individual project detail page */
export function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <motion.button
          className="back-btn"
          onClick={() => navigate("/")}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Projects
        </motion.button>

        <motion.div
          className="project-detail-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {project.title}
          </motion.h1>
          <motion.div
            className="project-detail-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="project-tags-header"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag-lg">{tag}</span>
          ))}
        </motion.div>

        <motion.div
          className="project-detail-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={project.image} alt={project.title} className="project-detail-image" />
          <div className="project-detail-glow" />
        </motion.div>

        <motion.div
          className="project-detail-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>Overview</h2>
          <p>{project.fullDescription}</p>

          <h2>Tech Stack</h2>
          <div className="tech-stack-grid">
            {project.techDetails.map((tech, i) => (
              <motion.div
                key={i}
                className="tech-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>

          <div className="project-actions">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.96 }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </motion.a>
            <motion.a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn secondary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.96 }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.004 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Repository
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;