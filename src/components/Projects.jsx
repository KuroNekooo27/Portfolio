import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card overflow-hidden group hover:border-accent/20 transition-all duration-300"
    >
      {/* Header */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold">{project.title}</h3>
              {project.featured && (
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-accent/10 text-accent border border-accent/20">
                  Featured
                </span>
              )}
            </div>
            <p className="text-accent text-sm font-medium">{project.subtitle}</p>
          </div>

          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-textSecondary hover:text-accent transition-colors rounded-lg hover:bg-white/5"
                aria-label={`${project.title} GitHub`}
              >
                <FiGithub className="text-lg" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-textSecondary hover:text-accent transition-colors rounded-lg hover:bg-white/5"
                aria-label={`${project.title} Live Demo`}
              >
                <FiExternalLink className="text-lg" />
              </a>
            )}
          </div>
        </div>

        <p className="text-textSecondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-xs text-textSecondary mb-4">
          <span className="px-2 py-1 rounded-md bg-white/5 font-mono">
            {project.stack}
          </span>
          <span>•</span>
          <span>{project.role}</span>
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((item, i) => (
            <li
              key={i}
              className="text-textSecondary text-sm leading-relaxed flex gap-2"
            >
              <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Impact */}
        <div className="px-4 py-3 rounded-xl bg-accent/5 border border-accent/10 mb-4">
          <p className="text-sm">
            <span className="text-accent font-semibold">Impact: </span>
            <span className="text-textSecondary">{project.impact}</span>
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Real-world applications demonstrating full-stack capability, accessibility
            engineering, and cross-platform mobile development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
