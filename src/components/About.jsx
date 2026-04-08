import { motion } from "framer-motion";
import { aboutMe, personalInfo } from "../data/portfolioData";
import { FiMapPin, FiMail } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">{personalInfo.brandStatement}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="glass-card p-8 h-full">
              <div className="space-y-4">
                {aboutMe.summary.map((paragraph, index) => (
                  <p key={index} className="text-textSecondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-6 text-sm text-textSecondary">
                {personalInfo.location && (
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="text-accent" />
                    {personalInfo.location}
                  </span>
                )}
                {personalInfo.email && (
                  <span className="flex items-center gap-1.5">
                    <FiMail className="text-accent" />
                    {personalInfo.email}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {aboutMe.highlights.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 flex flex-col items-center justify-center text-center"
                >
                  <span className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </span>
                  <span className="text-xs text-textSecondary mt-1 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
