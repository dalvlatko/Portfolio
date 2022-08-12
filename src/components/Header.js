import React from "react";
import NavBar from "../components/NavBar";
import BackgroundText from "./BackgroundText";
import logo from "../images/logo-nobg.png";
import Post from "./Post";

export default function Header() {
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
            <h2 className="text-xl text-center p-1">vlatko.org</h2>
          </a>
        </div>
        <div className="text-white text-5xl font-sans mt-12">Blog</div>
      </div>

      <Post />

      <BackgroundText
        text={"ЗДРАВО ВЛАТКО "}
        reps={1000}
        bgTextColor={"text-bittersweet-light"}
        position={"top-14 sm:text-5xl"}
      />
    </header>
  );
}
