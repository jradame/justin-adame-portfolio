import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowLeft, 
  faUser, 
  faClock, 
  faTools, 
  faMobileAlt,
  faMusic,
  faShoppingCart,
  faStar,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";

const EarlyDropCaseStudy = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">EarlyDrop</h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Music Pre-Order & Discovery App</h2>
          <p className="text-lg text-gray-400 mb-8">Stream and pre-order new music before it officially drops</p>

          <img src="/images/earlydrop.png" alt="EarlyDrop app feature mockups" className="mx-auto max-w-sm w-full rounded-2xl shadow-lg" />

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
              <div className="text-base font-medium text-white">UX Researcher & Designer</div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-indigo-400">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-indigo-400 mb-2">Duration</div>
              <div className="text-base font-medium text-white">3 weeks</div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-indigo-400">
                <FontAwesomeIcon icon={faTools} />
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-indigo-400 mb-2">Tools</div>
              <div className="text-base font-medium text-white leading-relaxed">Figma<br />Usability Testing</div>
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
          <h2 className="text-2xl font-semibold mb-6 text-center">The Challenge</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">Problem</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Music fans miss out on limited releases and can't discover new music before it hits mainstream platforms. There's no unified way to stream early, pre-order physical copies, and earn rewards—forcing users to juggle multiple apps and websites while risking sold‑out albums.
              </p>
            </article>

            <article className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                EarlyDrop gives fans exclusive early streaming access combined with seamless pre‑ordering for vinyl, CDs, and digital downloads. A built‑in rewards system encourages discovery and repeat purchases, while curated drops help users find new artists before anyone else.
              </p>
            </article>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">User Research</h2>
          <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-8 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Research Methodology</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Conducted interviews and usability studies with 5 music enthusiasts (ages 18–35) who actively purchase physical albums and attend live shows regularly. Research focused on understanding how fans discover new music, their album purchasing habits, and pain points with existing pre-order platforms.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-black/30 rounded-lg p-4 border border-gray-800">
                <p className="text-indigo-400 text-md font-semibold uppercase tracking-wider mb-1">Method</p>
                <p className="text-gray-200 text-base">User interviews & usability testing (remote)</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4 border border-gray-800">
                <p className="text-indigo-400 text-md font-semibold uppercase tracking-wider mb-1">Participants</p>
                <p className="text-gray-200 text-base">5 active music collectors and concert-goers</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4 border border-gray-800">
                <p className="text-indigo-400 text-md font-semibold uppercase tracking-wider mb-1">Duration</p>
                <p className="text-gray-200 text-base">30-minute interviews + 15-minute usability tests</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4 border border-gray-800">
                <p className="text-indigo-400 text-md font-semibold uppercase tracking-wider mb-1">Key Focus Areas</p>
                <p className="text-gray-200 text-base">Music discovery, pre-ordering, early streaming access</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Design Process</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300 flex flex-col">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">Login & Onboarding (Lo‑Fi)</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Simple login and account creation flow to get users into the app quickly. Minimal friction to start browsing new releases immediately.
              </p>
              <div className="mt-auto">
                <img src="/images/lofisketch.png" alt="EarlyDrop low-fidelity wireframes" className="w-full rounded-lg shadow-md" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300 flex flex-col">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">Featured Pre-Orders (Hi‑Fi)</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Curated homepage showcasing new releases with album art, artist info, and prominent reward points display. One‑tap access to pre‑order or stream.
              </p>
              <div className="mt-auto">
                <img src="/images/earlydrop.png" alt="EarlyDrop high-fidelity mockups" className="w-full rounded-lg shadow-md" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300 flex flex-col">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">Search & Discovery (Hi‑Fi)</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Fast search with clear album cards, descriptions, and quick access to pre‑order. Easy navigation back to browsing.
              </p>
              <div className="mt-auto">
                <img src="/images/search.png" alt="EarlyDrop search screen" className="w-full rounded-lg shadow-md" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300 flex flex-col">
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">Order Confirmation (Hi‑Fi)</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Clean checkout with order summary, total, and reward points earned. Streamlined flow reduces abandonment and confirms purchase instantly.
              </p>
              <div className="mt-auto">
                <img src="/images/confirm.png" alt="EarlyDrop order confirmation" className="w-full rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-purple-400">
                <FontAwesomeIcon icon={faMusic} />
              </div>
              <h3 className="text-base font-semibold mb-2">Early Streaming</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Listen to new albums before public release, giving fans exclusive first access.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-emerald-400">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              <h3 className="text-base font-semibold mb-2">One‑Tap Pre‑Order</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Seamless ordering for vinyl, CD, and digital formats with minimal clicks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h3 className="text-base font-semibold mb-2">Reward Points</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Earn points for every purchase, redeemable for discounts and exclusive merch.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 text-center shadow-lg shadow-blue-400/40 hover:shadow-blue-400/70 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3 text-blue-400">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h3 className="text-base font-semibold mb-2">Curated Discovery</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Personalized recommendations and featured drops help users find new artists.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Usability Study Findings</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/60 transition-all duration-300">
              <h3 className="text-lg font-bold text-indigo-400 mb-3">Simplified checkout</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Participants completed orders in under 2 minutes with minimal errors.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/60 transition-all duration-300">
              <h3 className="text-lg font-bold text-indigo-400 mb-3">Clear navigation</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Users easily browsed, searched, and added items to cart without confusion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/60 transition-all duration-300">
              <h3 className="text-lg font-bold text-indigo-400 mb-3">Reward visibility</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Prominent reward points display increased engagement and repeat intent.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-blue-400/40 hover:shadow-blue-400/60 transition-all duration-300">
              <h3 className="text-lg font-bold text-indigo-400 mb-3">High satisfaction</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Most participants rated the app as easy and enjoyable to use.
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
                    Refine UI based on updated design trends and accessibility standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <span className="text-indigo-400 font-semibold text-sm">2</span>
                </div>
                <div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Add social sharing features so users can share new discoveries with friends.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <span className="text-indigo-400 font-semibold text-sm">3</span>
                </div>
                <div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Integrate artist profiles and exclusive content such as interviews and behind‑the‑scenes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <span className="text-indigo-400 font-semibold text-sm">4</span>
                </div>
                <div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Build partnerships with indie labels for exclusive early drops.
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

export default EarlyDropCaseStudy;
