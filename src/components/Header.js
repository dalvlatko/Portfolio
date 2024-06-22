import React from "react";
import NavBar from "../components/NavBar";
import logo from "../images/logo-nobg.png";
import { useLocation } from "react-router-dom";

export default function Header() {
  let title = "Vlatko";
  if (useLocation().pathname === "/blog") {
    title = "Blog";
  }
  if (useLocation().pathname === "/projects") {
    title = "Projects";
  }
  console.log(useLocation().pathname);
  return (
    <header className="flex flex-col items-center bg-bittersweet border-solid border-t-[6px] border-crayola overflow-hidden relative">
      <NavBar />
      <div className="flex flex-wrap">
        <div className="flex flex-col items-center p-5">
          <a href="https://www.vlatko.org">
            <img
              src={logo}
              alt="VLAD logo"
              className="max-w-[100px] max-h-[100px]"
            ></img>
            <h2 className="text-xl text-mintcream text-center p-1">
              vlatko.org
            </h2>
          </a>
        </div>
        <div className="text-white text-5xl font-sans mt-12">{title}</div>
      </div>
    </header>
  );
}
