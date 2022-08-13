import React from "react";
import Splash from "./Splash";
import About from "./About";
import Project from "./Project";
import Footer from "./Footer";

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
