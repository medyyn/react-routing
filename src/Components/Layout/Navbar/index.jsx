import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = [
    { id: 0, href: "/", title: "Home" },
    { id: 1, href: "/about", title: "About" },
    { id: 2, href: "/users", title: "Users" }
  ];
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MyWebsite
      </Link>
      <ul className="nav-links">
        {links.map(({id, href, title}) => {
          return <li> <NavLink key={id} to={href}>{title}</NavLink> </li>
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
