import React from "react";
import { SocialIcon } from "react-social-icons";
import NavBar from "../components/NavBar";

export default function Splash() {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-red-400 border-solid border-t-4 border-yellow-300">
      <NavBar />
      <div className="mx-5 mt-auto text-right">
        <div className="p-2 text-5xl font-bold home-name">
          <h1 className="inline-block text-white">Hello, I'm</h1>
          <h1 className="inline-block ml-3 text-yellow-300">
            Vladimir Icovski
          </h1>
        </div>
        <h2 className="p-2 text-2xl text-white">Web Developer</h2>
        <h2 className="p-2 text-2xl text-white">Chemist</h2>
      </div>
      <div className="mt-auto mb-10">
        <SocialIcon
          url="https://instagram.com/dalvlatko"
          className="m-3"
          target="_blank"
          fgColor="white"
        />
        <SocialIcon
          url="https://github.com/dalvlatko"
          className="m-3"
          target="_blank"
          fgColor="white"
        />
        <SocialIcon
          url="https://linkedin.com/in/vladimir-icovski"
          className="m-3"
          target="_blank"
          fgColor="white"
        />
        <SocialIcon
          url="mailto:vladimir.icovski@gmail.com"
          className="m-3"
          target="_blank"
          fgColor="white"
        />
      </div>
    </section>
  );
}
