import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          exact
          activeClassName="text-mintcream"
          className="inline-flex items-center py-6 px-3 mr-4 text-gunmetal hover:text-crayola"
        >
          Home
        </NavLink>
        <a
          href="#About"
          className="inline-flex items-center py-6 px-3 mr-4 text-gunmetal hover:text-crayola"
        >
          About
        </a>
        <a
          href="#Projects"
          className="inline-flex items-center py-6 px-3 mr-4 text-gunmetal hover:text-crayola"
        >
          Projects
        </a>
        <NavLink
          to="/post"
          activeClassName="text-mintcream"
          className="inline-flex items-center py-6 px-3 mr-4 text-gunmetal hover:text-crayola"
        >
          Blog
        </NavLink>
      </nav>
    </header>
  );
}
