import React from "react";
import Socials from "../components/Socials";
import logo from "../images/logo-nobg.png";

export default function Footer() {
  return (
    <footer
      id="Contact"
      className="flex flex-col justify-center items-center min-h-[5rem] py-5 bg-bittersweet border-solid border-b-[6px] border-crayola"
    >
      <div className="flex flex-wrap items-center justify-center p-2 font-bold font-sans text-mintcream">
        <div className="flex flex-col items-center p-5">
          <a href="https://www.vlatko.org">
            <img
              src={logo}
              alt="VLAD logo"
              className="max-w-[100px] max-h-[100px]"
            ></img>
            <h2 className="text-xl text-center p-1">vlatko.org</h2>
          </a>
        </div>
        <div className="flex flex-col">
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
      </div>
      <div className="">
        <Socials />
      </div>
    </footer>
  );
}
