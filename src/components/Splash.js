import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Splash() {
  return (
    <section className="flex-column pt-12 pb-12 px-8 w-screen h-screen bg-blue-100">
      <div className="flex-column text-right pb-80">
        <h1 className="text-5xl text-black font-bold leading-none lg:leading-snug home-name">
          Hello, I'm Vladimir Icovski
        </h1>
        <h2 className="text-2xl">Web Developer</h2>
        <h2 className="text-2xl">Chemist</h2>
      </div>
      <div className="self-end">
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
