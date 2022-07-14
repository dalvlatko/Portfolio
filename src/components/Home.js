import React from "react";
import Splash from "./Splash";
import About from "./About";
import Post from "./Post";
import Project from "./Project";

export default function Home() {
  return (
    <main>
      <Splash />
      <About />
      <Post />
      <Project />
    </main>
  );
}
