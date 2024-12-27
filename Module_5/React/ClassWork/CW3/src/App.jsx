import React from "react";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <MainSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
