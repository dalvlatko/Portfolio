import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Splash() {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-blue-100">
      <div className="text-right">
        <h1 className="p-2 text-5xl text-black font-bold home-name">
          Hello, I'm Vladimir Icovski
        </h1>
        <h2 className="p-2 text-2xl">Web Developer</h2>
        <h2 className="p-2 text-2xl">Chemist</h2>
      </div>
      <div className="">
        <SocialIcon
          url="https://instagram.com/dalvlatko"
          className="m-3"
          target="_blank"
        />
        <SocialIcon
          url="https://github.com/dalvlatko"
          className="m-3"
          target="_blank"
        />
        <SocialIcon
          url="https://linkedin.com/in/vladimir-icovski"
          className="m-3"
          target="_blank"
        />
        <SocialIcon
          url="mailto:vladimir.icovski@gmail.com"
          className="m-3"
          target="_blank"
        />
      </div>
    </section>
  );
}
