import React from "react";
// import image from "../images/cartagena.jpg";
import About from "./About";
import Post from "./Post";
import Project from "./Project";

export default function Home() {
  return (
    <main>
      {/* <img
        src={image}
        alt="Cartagena, Colombia"
        className="absolute object-cover w-full h-full"
      /> */}
      <About />
      <Post />
      <Project />
    </main>
  );
}
