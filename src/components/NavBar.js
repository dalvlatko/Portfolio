import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        activeClassName="text-mintcream"
        className="font-extrabold inline-flex items-center py-6 px-3 xl:px-20 text-gunmetal hover:text-crayola"
      >
        Home
      </NavLink>
      <a
        href="#About"
        className="font-extrabold inline-flex items-center py-6 px-3 xl:px-20 text-gunmetal hover:text-crayola"
      >
        About
      </a>
      <NavLink
        to="/projects"
        activeClassName="text-mintcream"
        className="font-extrabold inline-flex items-center py-6 px-3 xl:px-20 text-gunmetal hover:text-crayola"
      >
        Projects
      </NavLink>
      <NavLink
        to="/blog"
        activeClassName="text-mintcream"
        className="font-extrabold inline-flex items-center py-6 px-3 xl:px-20 text-gunmetal hover:text-crayola"
      >
        Blog
      </NavLink>
    </nav>
  );
}
