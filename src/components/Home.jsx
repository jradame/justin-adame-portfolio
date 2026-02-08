import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Modal from "./Modal";
import Footer from "./Footer";

const Home = () => {
  const [modalType, setModalType] = useState(null);
  const location = useLocation();

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Navbar openModal={openModal} />
      <Hero />
      <Projects />
      <Footer openModal={openModal} />

      <Modal
        isOpen={modalType !== null}
        modalType={modalType}
        onClose={closeModal}
      />
    </>
  );
};

export default Home;
