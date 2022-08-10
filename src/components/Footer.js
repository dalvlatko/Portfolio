import React from "react";
import Socials from "../components/Socials";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center min-h-[5rem] bg-bittersweet border-solid border-b-[6px] border-crayola">
      <div className="mx-5 mt-auto text-right">
        <div className="p-2 text-6xl font-bold font-sans">
          <h1 className="inline-block text-mintcream">vlatko.org</h1>
        </div>
      </div>
      <div className="mt-auto mb-10">
        <Socials />
      </div>
    </footer>
  );
}
