import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          exact
          activeClassName="text-white"
          className="inline-flex items-center py-6 px-3 mr-4 hover:text-yellow-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="text-white"
          className="inline-flex items-center py-6 px-3 mr-4 hover:text-yellow-300"
        >
          About
        </NavLink>
        <NavLink
          to="/project"
          activeClassName="text-white"
          className="inline-flex items-center py-6 px-3 mr-4 hover:text-yellow-300"
        >
          Projects
        </NavLink>
        <NavLink
          to="/post"
          activeClassName="text-white"
          className="inline-flex items-center py-6 px-3 mr-4 hover:text-yellow-300"
        >
          Blog
        </NavLink>
      </nav>
    </header>
  );
}
