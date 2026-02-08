import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ openModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const RESUME_URL = "/JUSTINADAMERESUME.pdf";
  const GITHUB_URL = "https://github.com/jradame";
  const LINKEDIN_URL = "https://www.linkedin.com/in/justin-adame-022b6b97/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuickLinkClick = (type) => {
    if (type === "projects") {
      if (location.pathname === "/") {
        // On home page, scroll to projects
        const el = document.getElementById("projects");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // On other pages, navigate to home with hash
        navigate("/#projects");
      }
    } else if (openModal) {
      openModal(type); // "about" or "contact"
    }
  };

  return (
    <footer className="w-full border-t border-gray-900 bg-gradient-to-b from-black via-[#020617] to-black text-gray-300">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Top 3-column content */}
        <div className="grid gap-10 md:grid-cols-3 mb-8 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <button
              type="button"
              onClick={scrollToTop}
              className="text-lg font-semibold text-indigo-400 hover:text-indigo-300 transition"
              aria-label="Back to top"
            >
              Justin Adame
            </button>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Frontend Developer focused on clean UI, thoughtful UX, and
              modern web experiences.
            </p>
          </div>

          {/* Quick links + external links */}
          <div className="flex flex-col items-center md:items-center">
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-400 mb-3">
              Quick Links
            </h4>

            {/* one-line internal links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button
                type="button"
                onClick={() => handleQuickLinkClick("about")}
                className="hover:text-indigo-400 transition"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleQuickLinkClick("projects")}
                className="hover:text-indigo-400 transition"
              >
                Projects
              </button>
              <button
                type="button"
                onClick={() => handleQuickLinkClick("contact")}
                className="hover:text-indigo-400 transition"
              >
                Contact
              </button>
            </div>

            {/* text external links under Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition"
              >
                Resume
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition"
              >
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-400 mb-3">
              Get In Touch
            </h4>
            <button
              type="button"
              onClick={() => openModal && openModal("contact")}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-indigo-400 transition"
              aria-label="Open contact modal"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>jradame@gmail.com</span>
            </button>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Let&apos;s connect and build something great.
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-800 pt-4 text-xs text-gray-500 flex items-center justify-center gap-1">
          <span>© {currentYear} Justin Adame.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
