import React from "react";
import NavBar from "../components/NavBar";
import Socials from "../components/Socials";

export default function Splash() {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-red-400 border-solid border-t-4 border-yellow-300">
      <NavBar />
      <div className="mx-5 mt-auto text-right">
        <div className="p-2 text-6xl font-bold title">
          <h1 className="inline-block text-white">Hello, I'm</h1>
          <h1 className="inline-block ml-3 title text-yellow-300">
            Vladimir Icovski
          </h1>
        </div>
        <h2 className="p-2 text-2xl text-white">Web Developer</h2>
        <h2 className="p-2 text-2xl text-white">Chemist</h2>
      </div>
      <div className="mt-auto mb-10">
        <Socials />
      </div>
    </section>
  );
}
