import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const webProjects = [
  {
    title: "SkinStric Skin Care Platform",
    description: "Professional dermatology web app with patient portal, image upload/processing for skin analysis, and API integrations.",
    liveUrl: "https://skinstricapp-fresh.vercel.app/",
    tech: ["React", "Tailwind", "REST APIs"],
    imageUrl: "/images/skinstriccopy.png",
    imagePosition: "object-center",
  },
  {
    title: "CineScope",
    description: "Movie and TV browser using the OMDb API with modals, skeleton loaders, and smooth UI interactions.",
    liveUrl: "https://cinescope-project.vercel.app",
    tech: ["HTML5", "CSS3", "JavaScript", "OMDb API"],
    imageUrl: "/images/cinescope-preview.png",
    imagePosition: "object-center",
  },
  {
    title: "Library Project",
    description: "Online library UI where users can browse, filter, and sort books by price or rating.",
    liveUrl: "https://libraryproject-beryl.vercel.app",
    tech: ["React", "CSS3", "JavaScript"],
    imageUrl: "/images/library-screenshot.png",
    imagePosition: "object-center",
  },
  {
    title: "Ultraverse NFT Marketplace",
    description: "NFT marketplace with dark/light themes, smooth navigation, and a clean React front end.",
    liveUrl: "https://ultraverse-nft-project.vercel.app/",
    tech: ["React", "CSS3", "React Router"],
    imageUrl: "/images/ultraverse-screenshot.png",
    imagePosition: "object-center",
  },
];

const uxProjects = [
  {
    title: "TipTrack – UX Case Study",
    description: "Mobile app UX case study for bartenders and servers, focused on fast logging, clear earnings, and clean visual design.",
    liveUrl: "/projects/tiptrack",
    tech: ["UX Research", "Figma", "Prototyping"],
    imageUrl: "/images/tiptrack-preview.png",
    imagePosition: "object-[50%_40%]",
  },
  {
    title: "EarlyDrop – UX Case Study",
    description: "Music pre‑order app UX project with usability testing, user flows, and high‑fidelity mobile prototypes.",
    liveUrl: "/projects/earlydrop",
    tech: ["UX Research", "Figma", "Usability Testing"],
    imageUrl: "/images/earlydrop.png",
    imagePosition: "object-center",
  },
];

const personalProjects = [
  {
    title: "Band Website",
    description: "Promo site for a local band with show dates, embedded music, and bold visual branding.",
    liveUrl: "https://rios-band.vercel.app",
    tech: ["React", "CSS3", "Responsive Layout"],
    imageUrl: "/images/riosband1.png",
    imagePosition: "object-[50%_20%]",
  },
  {
    title: "Photography Portfolio",
    description: "Minimal gallery site for a photographer with image grids, category filters, and simple contact flow.",
    liveUrl: "https://clouse.vercel.app",
    tech: ["React", "CSS3", "Image Optimization"],
    imageUrl: "/images/venice2016.jpg",
    imagePosition: "object-[50%_30%]",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full px-4 py-16 bg-black text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-gray-300 mb-8">
          Real‑world builds and UX case studies you can click into.
        </p>

        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-400 mb-4">
          Web Development
        </h3>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {webProjects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col bg-[#020617] border border-gray-800 rounded-xl overflow-hidden shadow-lg shadow-blue-400/25 hover:shadow-xl hover:shadow-blue-400/60 transition-shadow"
            >
              <div className="w-full h-48 bg-[#020617] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className={`w-full h-full object-cover ${project.imagePosition}`}
                />
              </div>

              <div className="flex flex-col p-4 flex-1">
                <h4 className="text-base font-semibold mb-2 h-10 line-clamp-2">{project.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-3 h-20 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3 min-h-[28px]">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-100 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-gray-800">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400 hover:text-indigo-300"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    View live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-400 mb-4">
          UX / UI Case Studies
        </h3>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {uxProjects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col bg-[#020617] border border-gray-800 rounded-xl overflow-hidden shadow-lg shadow-blue-400/25 hover:shadow-xl hover:shadow-blue-400/60 transition-shadow"
            >
              <div className="w-full h-80 bg-[#020617] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  className={`w-full h-full object-cover ${project.imagePosition}`}
                />
              </div>

              <div className="flex flex-col p-4 flex-1">
                <h4 className="text-base font-semibold mb-2 h-10 line-clamp-2">{project.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-3 h-20 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3 min-h-[28px]">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-100 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-gray-800">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400 hover:text-indigo-300"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    View case study
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-400 mb-4 mt-12">
          Personal Projects
        </h3>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {personalProjects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col bg-[#020617] border border-gray-800 rounded-xl overflow-hidden shadow-lg shadow-blue-400/25 hover:shadow-xl hover:shadow-blue-400/60 transition-shadow"
            >
              <div className="w-full h-80 bg-[#020617] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className={`w-full h-full object-cover ${project.imagePosition}`}
                />
              </div>

              <div className="flex flex-col p-4 flex-1">
                <h4 className="text-base font-semibold mb-2 h-10 line-clamp-2">{project.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-3 h-20 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3 min-h-[28px]">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-100 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-gray-800">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400 hover:text-indigo-300"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    View site
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
