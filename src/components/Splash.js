import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Socials from "../components/Socials";
import BackgroundText from "./BackgroundText";

export default function Splash() {
  const [intro, setIntro] = useState("Hello, I am");
  const [name, setName] = useState("Vladimir Icovski");
  const [dev, setDev] = useState("Web Developer");
  const [chemist, setChemist] = useState("Chemist");

  const bgtext = "ЗДРАВО ВЛАТКО";

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-bittersweet border-solid border-t-[6px] border-crayola">
      <NavBar />
      <div className="mx-5 mt-auto text-right">
        <div className="p-2 text-6xl font-bold font-sans">
          <h1
            className="inline-block text-mintcream"
            onMouseEnter={() => setIntro("Здраво, jас cум")}
            onMouseLeave={() => setIntro("Hello, I am")}
          >
            {intro}
          </h1>
          <h1
            className="inline-block ml-3 font-sans text-crayola"
            onMouseEnter={() => setName("Владимир Ицовски")}
            onMouseLeave={() => setName("Vladimir Icovski")}
          >
            {name}
          </h1>
        </div>
        <h2
          className="p-2 text-2xl text-mintcream font-light"
          onMouseEnter={() => setDev("Веб Развивач")}
          onMouseLeave={() => setDev("Web Developer")}
        >
          {dev}
        </h2>
        <h2
          className="p-2 text-2xl text-mintcream font-light"
          onMouseEnter={() => setChemist("Хемичар")}
          onMouseLeave={() => setChemist("Chemist")}
        >
          {chemist}
        </h2>
      </div>
      <div className="mt-auto mb-10">
        <Socials />
      </div>
      <BackgroundText text={bgtext} />
    </section>
  );
}
