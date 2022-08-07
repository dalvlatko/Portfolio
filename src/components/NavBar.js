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
        <a
          href="#About"
          className="inline-flex items-center py-6 px-3 mr-4 hover:text-yellow-300"
        >
          About
        </a>
        <a
          href="#Projects"
          className="inline-flex items-center py-6 px-3 mr-4 hover:text-yellow-300"
        >
          Projects
        </a>
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
