import React from "react";
import Splash from "../components/Splash";
import About from "../components/About";
import Project from "../components/Project";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Splash />
      <About />
      <Project />
      <Footer />
    </div>
  );
}
