import React from "react";
import Socials from "../components/Socials";

export default function Footer() {
  return (
    <footer
      id="Contact"
      className="flex flex-col justify-center items-center min-h-[5rem] py-5 bg-bittersweet border-solid border-b-[6px] border-crayola"
    >
      <div className="p-2 font-bold font-sans text-mintcream">
        <h1 className="text-6xl p-2">vlatko.org</h1>
        <h2 className="text-xl p-2">Vladimir Icovski</h2>
        <h2 className="text-xl p-2">Columbus, Ohio</h2>
        <div className="flex text-xl p-2">
          <h2 className="pr-2">Email:</h2>
          <h2 className="text-crayola tracking-wider">
            <a href="mailto:vladimir.icovski@gmail.com">
              vladimir.icovski@gmail.com
            </a>
          </h2>
        </div>
      </div>
      <div className="">
        <Socials />
      </div>
    </footer>
  );
}
