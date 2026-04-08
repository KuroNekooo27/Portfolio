import { personalInfo } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-textSecondary text-sm flex items-center gap-1">
            Built with <FiHeart className="text-accent text-xs" /> using React &
            Tailwind CSS
          </div>

          <div className="text-textSecondary text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex gap-3">
            {personalInfo.social.github && (
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-accent transition-colors"
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
                className="text-textSecondary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
