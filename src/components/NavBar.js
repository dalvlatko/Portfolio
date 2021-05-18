import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-600">
      <div className="flex justify-center">
        <nav>
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 hover:text-black-500 font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 hover:text-black-500 font-bold"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 hover:text-black-500 font-bold"
          >
            About Me
          </NavLink>
        </nav>
        <div>
          <SocialIcon url="instagram.com/dalvlatko" className="" />
          <SocialIcon url="twitter.com/dalvlatko" className="" />
          <SocialIcon url="github.com/dalvlatko" className="" />
        </div>
      </div>
    </header>
  );
}