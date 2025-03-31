"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import History from "./components/History";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <History />
      <Contact />
      <Footer />
    </>
  );
}
