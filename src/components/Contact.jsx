import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // NOTE: Replace these with your actual EmailJS credentials
      // Sign up at https://www.emailjs.com/ (free tier: 200 emails/month)
      // Service ID, Template ID, and Public Key are found in your EmailJS dashboard
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",     // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",    // Replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY"      // Replace with your EmailJS public key
      );
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please email me directly at " +
          personalInfo.email,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading">
            I'm currently open to new opportunities. Whether you have a project
            in mind or just want to connect, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="font-bold mb-4">Let's Connect</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <FiMail className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-textSecondary/60 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm">{personalInfo.email}</p>
                  </div>
                </a>

                {personalInfo.location && (
                  <div className="flex items-center gap-3 text-textSecondary">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <FiMapPin className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-textSecondary/60 uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-sm">{personalInfo.location}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-3 mt-6 pt-6 border-t border-white/5">
                {personalInfo.social.github && (
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-textSecondary hover:text-accent hover:bg-accent/10 transition-all"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </a>
                )}
                {personalInfo.social.linkedin && (
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-textSecondary hover:text-accent hover:bg-accent/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-textSecondary mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-textPrimary placeholder-textSecondary/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-textSecondary mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-textPrimary placeholder-textSecondary/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-textSecondary mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-textPrimary placeholder-textSecondary/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all text-sm resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {status.message && (
                <div
                  className={`px-4 py-3 rounded-xl text-sm ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
