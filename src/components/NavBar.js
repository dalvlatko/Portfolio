import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-blue-100">
      <div className="container">
        <nav className="flex justify-center">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="title inline-flex items-center py-6 px-3 mr-4 hover:text-black-500 font-bold"
          >
            Vlatko
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
      </div>
    </header>
  );
}
