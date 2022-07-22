import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Splash() {
  return (
    <section className="pt-12 pb-12 px-8 w-screen h-screen bg-blue-100">
      <h1 className="flex justify-center text-5xl text-black font-bold leading-none lg:leading-snug home-name">
        Hello, I'm Vladimir Icovski
      </h1>
      <div className="flex justify-center">
        <SocialIcon
          url="https://instagram.com/dalvlatko"
          className="m-3"
          target="_blank"
        />
        <SocialIcon
          url="https://twitter.com/dalvlatko"
          className="m-3"
          target="_blank"
        />
        <SocialIcon
          url="https://github.com/dalvlatko"
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
