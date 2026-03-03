import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faDownload,
  faUser,
  faClock,
  faTools,
  faMobileAlt,
  faBolt,
  faChartLine,
  faCheckCircle,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";

const SwellCaseStudy = () => {
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <>
      <Navbar openModal={openModal} />
      <main className="min-h-screen bg-black text-white">
        {/* Back link */}
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
          </Link>
        </div>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Swell</h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            A Surf Session Tracking Web App
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Helping surfers quickly log sessions, remember conditions, and see progress over time.
          </p>

          <img
            src="/images/swellhome.png"
            alt="Swell surf session tracker home screen"
            className="mx-auto max-w-sm w-full rounded-2xl shadow-lg"
          />

          <div className="mt-6 text-gray-400 italic text-base">
            UX / Frontend Case Study &nbsp; | &nbsp; Justin Adame
          </div>
        </section>

        {/* Overview cards */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Project Overview
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40">
              <div className="text-4xl mb-3 text-indigo-400">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-indigo-400 mb-2">
                Role
              </div>
              <div className="text-base font-medium text-white">
                UX / UI Designer<br />Frontend Developer
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40">
              <div className="text-4xl mb-3 text-indigo-400">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-indigo-400 mb-2">
                Duration
              </div>
              <div className="text-base font-medium text-white">
                4 weeks
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40">
              <div className="text-4xl mb-3 text-indigo-400">
                <FontAwesomeIcon icon={faTools} />
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-indigo-400 mb-2">
                Tools
              </div>
              <div className="text-base font-medium text-white leading-relaxed">
                Figma<br />React / Vite<br />Recharts
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40">
              <div className="text-4xl mb-3 text-indigo-400">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-indigo-400 mb-2">
                Platform
              </div>
              <div className="text-base font-medium text-white">
                Responsive Web<br />(Mobile‑first)
              </div>
            </div>
          </div>
        </section>

        {/* Slides / links */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <iframe
            title="Swell Google Slides"
            src="https://docs.google.com/presentation/d/YOUR_SWELL_SLIDES_ID_HERE/preview"
            width="100%"
            height="569"
            allowFullScreen
            frameBorder="0"
            className="w-full rounded-xl shadow-lg"
            style={{ minHeight: 400 }}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="https://docs.google.com/presentation/d/YOUR_SWELL_SLIDES_ID_HERE/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
            >
              Open Slides in Google Slides
            </a>
            <a
              href="/files/Justin_Adame_Swell_Case_Study.pdf"
              download
              className="inline-flex items-center gap-2 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Full Case Study (PDF)
            </a>
          </div>
        </section>

        {/* Problem / solution */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">The Problem</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">
                Problem
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Surfers talk about memorable sessions for years, but most still rely on memory or scattered notes to track where they surfed, what the waves were like, and how they performed. After a few weeks it is hard to remember conditions, boards, or small breakthroughs, which makes it difficult to see real progress or know when a spot is actually working for them.
              </p>
            </article>

            <article className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">
                Solution
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Swell is a responsive web app that lets surfers log a full session in under a minute, capture conditions and notes, and then review a history of past surfs with simple charts. Mobile‑first screens make it easy to log from the parking lot, while desktop views help surfers spot patterns in spots, swell, and performance over time.
              </p>
            </article>
          </div>
        </section>

        {/* Design / build process */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Design & Build Process
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 flex flex-col">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">
                Mapping the core flow
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                I started by defining the core job: log a surf right after getting out of the water without it feeling like homework. Low‑fidelity wires focused on a single flow from “Log Session” to saved entry, with just the essentials: spot, board, wave quality, and notes.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 mb-6 list-disc list-inside">
                <li>Optimized the form so it can be completed one‑handed on a phone.</li>
                <li>Kept optional fields secondary so the main log stays fast.</li>
                <li>Designed a simple session list to make recent surfs easy to scan.</li>
              </ul>
              <div className="mt-auto">
                <img
                  src="/images/swelllogin.png"
                  alt="Swell low or mid-fidelity screen"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 flex flex-col">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">
                Visual system & charts
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                From there I built a high‑fidelity UI in Figma and implemented it in React. The visual language uses deep navy and sea‑green accents to feel like a surf forecast, while cards and charts highlight the most recent sessions and progress.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 mb-6 list-disc list-inside">
                <li>Implemented responsive layouts with a mobile‑first approach.</li>
                <li>Used Recharts to visualize session count and wave quality over time.</li>
                <li>Built a simple navigation that switches cleanly between Log, History, and Progress.</li>
              </ul>
              <div className="mt-auto">
                <img
                  src="/images/swellprogress.png"
                  alt="Swell high-fidelity progress charts"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key features */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Key Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40">
              <div className="text-4xl mb-3 text-yellow-400">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3 className="text-base font-semibold mb-2">
                Fast Session Logging
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A stripped‑down form lets surfers record a session in under a minute right after paddling in.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40">
              <div className="text-4xl mb-3 text-blue-400">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="text-base font-semibold mb-2">
                Progress Charts
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Recharts visualize how often users surf and how they rate their waves over time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40">
              <div className="text-4xl mb-3 text-emerald-400">
                <FontAwesomeIcon icon={faWater} />
              </div>
              <h3 className="text-base font-semibold mb-2">
                Session History
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A simple history view makes it easy to remember great days, boards, and spots.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40">
              <div className="text-4xl mb-3 text-green-400">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h3 className="text-base font-semibold mb-2">
                Mobile‑First Experience
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Designed around phone usage in the parking lot, with desktop views for deeper review.
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes / next steps */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Outcomes & Next Steps
          </h2>
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40">
              <h3 className="text-lg font-bold text-indigo-400 mb-3">
                From idea to working app
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Swell moved from research and Figma into a fully functional React app with routing, state management, and basic data visualization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40">
              <h3 className="text-lg font-bold text-indigo-400 mb-3">
                Clear view of surf habits
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                The Progress and History screens make it easy to see how often users surf and which spots or swells feel best.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-8 shadow-lg shadow-blue-400/40">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <span className="text-indigo-400 font-semibold text-sm">1</span>
                </div>
                <p className="text-gray-200 text-base leading-relaxed">
                  Run usability sessions with surfers to validate the logging flow and information architecture.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <span className="text-indigo-400 font-semibold text-sm">2</span>
                </div>
                <p className="text-gray-200 text-base leading-relaxed">
                  Explore integrations with live surf‑forecast APIs so sessions can pre‑fill swell and tide data.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <span className="text-indigo-400 font-semibold text-sm">3</span>
                </div>
                <p className="text-gray-200 text-base leading-relaxed">
                  Add social features to let surfers share favorite sessions or spots with friends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer links */}
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
          </Link>
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ transform: "rotate(90deg)" }}
            />{" "}
            Back to Top
          </button>
        </div>
      </main>

      <Footer openModal={openModal} />
      <Modal
        isOpen={modalType !== null}
        onClose={closeModal}
        modalType={modalType}
      />
    </>
  );
};

export default SwellCaseStudy;
