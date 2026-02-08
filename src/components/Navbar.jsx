import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ openModal }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#projects");
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={handleLogoClick} className="flex items-center gap-3 focus:outline-none">
          <img
            src="/images/justin3.png"
            alt="Justin Adame"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-lg font-bold tracking-wide">Justin Adame</span>
        </button>

        <nav className="space-x-6 text-sm font-medium">
          <button onClick={() => openModal("about")} className="hover:text-indigo-400 transition">
            About
          </button>
          <button onClick={handleProjectsClick} className="hover:text-indigo-400 transition">
            Projects
          </button>
          <button onClick={() => openModal("contact")} className="hover:text-indigo-400 transition">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
