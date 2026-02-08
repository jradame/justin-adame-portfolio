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
  faCalculator,
  faChartLine,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";

const TipTrackCaseStudy = () => {
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
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
          </Link>
        </div>

        <section className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TipTrack</h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">A Mobile Tip Tracking App</h2>
          <p className="text-lg text-gray-400 mb-8">Helping bartenders track tips and take control of their finances</p>

          <img src="/images/tiptrack-preview.png" alt="TipTrack app feature mockups" className="mx-auto max-w-sm w-full rounded-2xl shadow-lg" />

          <div className="mt-6 text-gray-400 italic text-base">UX Case Study &nbsp; | &nbsp; Justin Adame</div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Project Overview</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-indigo-400">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-indigo-400 mb-2">Role</div>
              <div className="text-base font-medium text-white">UX Designer</div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-indigo-400">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-indigo-400 mb-2">Duration</div>
              <div className="text-base font-medium text-white">4 weeks</div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-indigo-400">
                <FontAwesomeIcon icon={faTools} />
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-indigo-400 mb-2">Tools</div>
              <div className="text-base font-medium text-white leading-relaxed">
                Figma<br />Slides<br />Interviews
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-indigo-400">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-indigo-400 mb-2">Platform</div>
              <div className="text-base font-medium text-white">Mobile<br />(iOS/Android)</div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <iframe
            title="TipTrack Google Slides"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQd-ZfLpCwJV7qyzEYfg1ZD21oCEjS9pKQQ6vRQ_Z7Kd9rpnkw862vFQABlJrlehbXaVYB5_gDZSJMO/embed?start=false&loop=false&delayms=3000"
            width="100%"
            height="569"
            allowFullScreen
            frameBorder="0"
            className="w-full rounded-xl shadow-lg"
            style={{ minHeight: 400 }}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="https://docs.google.com/presentation/d/1YrqSt84y2GthTqC1OnSmYxiybb9julY2ArU-g-CGgHM/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
            >
              Open Slides in Google Slides
            </a>
            <a
              href="/files/Justin_Adame_TipTrack_Case_Study.pdf"
              download
              className="inline-flex items-center gap-2 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Full Case Study (PDF)
            </a>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">The Problem</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">Problem</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Bartenders earn inconsistent income from cash tips, credit tips, and mandatory tip-outs, but most still track earnings with memory, notes apps, or pen and paper. Without a clear view of real take-home pay, it's hard to budget, plan, or see whether shifts are truly worth it.
              </p>
            </article>

            <article className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                TipTrack is a mobile-first app that lets bartenders log a full shift in under 30 seconds, automatically calculate tip-outs, and instantly see true take-home pay. Clear weekly and monthly views help them spot patterns, choose better shifts, and feel in control of their money.
              </p>
            </article>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Design Process</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300 flex flex-col">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">Low-Fidelity Wireframes</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Started with quick sketches and low-fidelity wireframes to map the core flow: logging a shift, viewing weekly earnings, and comparing venues. This made it easy to test navigation, field order, and screen hierarchy with bartenders before investing in visual design.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 mb-6 list-disc list-inside">
                <li>Focused on a 30-second shift logging flow from first tap to saved entry.</li>
                <li>Explored home layouts to surface weekly earnings and trends.</li>
                <li>Compared tab vs. bottom navigation for faster access to key screens.</li>
              </ul>
              <div className="mt-auto">
                <img src="/images/lofitipframe.png" alt="TipTrack low-fidelity wireframes" className="w-full rounded-lg shadow-md" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300 flex flex-col">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">High-Fidelity Mockups</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Refined the wireframes into a clean, production-ready UI using TipTrack branding, clear typography, and a green palette that reinforces financial growth. Screens highlight at-a-glance earnings, fast shift entry, and simple analytics.
              </p>
              <ul className="text-gray-300 text-sm space-y-2 mb-6 list-disc list-inside">
                <li>Clarified visual hierarchy for earnings vs. secondary stats.</li>
                <li>Aligned colors and iconography with the "money clarity" concept.</li>
                <li>Polished interaction details for buttons, cards, and graphs.</li>
              </ul>
              <div className="mt-auto">
                <img src="/images/tiptrack-preview.png" alt="TipTrack high-fidelity mockups" className="w-full rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-yellow-400">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3 className="text-base font-semibold mb-2">30-Second Logging</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Pre-filled fields and smart defaults reduce entry time from 3+ minutes to under 30 seconds.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-emerald-400">
                <FontAwesomeIcon icon={faCalculator} />
              </div>
              <h3 className="text-base font-semibold mb-2">Automatic Calculations</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Instant tip-out calculations show real take-home pay, eliminating manual math errors.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-blue-400">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="text-base font-semibold mb-2">Visual Analytics</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Identify your best earning days and most profitable venues at a glance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-green-400">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h3 className="text-base font-semibold mb-2">Financial Control</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Reliable income tracking enables effective budgeting and savings planning.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Key Outcomes</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/60 transition-all duration-300">
              <h3 className="text-lg font-bold text-indigo-400 mb-3">3+ minutes → 30 seconds</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Shift logging time reduced by 90% with smart defaults and pre-filled fields.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/60 transition-all duration-300">
              <h3 className="text-lg font-bold text-indigo-400 mb-3">Clear financial visibility</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Bartenders can instantly see real take-home pay after tip-outs, eliminating guesswork.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/60 transition-all duration-300">
              <h3 className="text-lg font-bold text-indigo-400 mb-3">Better budgeting</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Weekly and monthly earnings views help users identify profitable shifts and plan finances.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/60 transition-all duration-300">
              <h3 className="text-lg font-bold text-indigo-400 mb-3">Reduced errors</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Automatic calculations eliminate manual math mistakes in tip-out tracking.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Next Steps</h2>
          <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-8 shadow-lg shadow-blue-400/40">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <span className="text-indigo-400 font-semibold text-sm">1</span>
                </div>
                <div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Conduct usability testing with 5–8 bartenders to validate the design.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <span className="text-indigo-400 font-semibold text-sm">2</span>
                </div>
                <div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Iterate on the prototype based on real user feedback and pain points.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <span className="text-indigo-400 font-semibold text-sm">3</span>
                </div>
                <div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Build an iOS/Android MVP with core features: shift logging, tip-outs, and analytics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <span className="text-indigo-400 font-semibold text-sm">4</span>
                </div>
                <div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Partner with restaurant management platforms for seamless integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{ transform: "rotate(90deg)" }} /> Back to Top
          </button>
        </div>
      </main>
      <Footer openModal={openModal} />

      <Modal isOpen={modalType !== null} onClose={closeModal} modalType={modalType} />
    </>
  );
};

export default TipTrackCaseStudy;
