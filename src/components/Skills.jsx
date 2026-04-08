import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { FiSmartphone, FiCode, FiServer, FiTool, FiLayers } from "react-icons/fi";

const iconMap = {
  stack: FiLayers,
  mobile: FiSmartphone,
  code: FiCode,
  server: FiServer,
  tools: FiTool,
};

const MernBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="glass-card p-8 mb-12"
  >
    <div className="text-center mb-6">
      <h3 className="text-lg font-bold mb-1">Core Stack</h3>
      <p className="text-textSecondary text-sm">
        My primary technology stack for building full-stack applications
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
        { icon: SiExpress, name: "Express.js", color: "#FFFFFF" },
        { icon: SiReact, name: "React.js", color: "#61DAFB" },
        { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      ].map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
          className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors"
        >
          <tech.icon className="text-4xl" style={{ color: tech.color }} />
          <span className="text-sm font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SkillBar = ({ name, level, delay }) => (
  <div className="mb-3">
    <div className="flex justify-between text-sm mb-1.5">
      <span className="text-textSecondary">{name}</span>
      <span className="text-accent font-mono text-xs">{level}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-accent to-cyan-300 rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* MERN Badge */}
        <MernBadge />

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories
            .filter((cat) => cat.name !== "Core Stack")
            .map((category, catIndex) => {
              const Icon = iconMap[category.icon] || FiCode;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon className="text-accent" />
                    </div>
                    <h3 className="font-bold">{category.name}</h3>
                  </div>

                  {category.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={0.2 + skillIndex * 0.1}
                    />
                  ))}
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
