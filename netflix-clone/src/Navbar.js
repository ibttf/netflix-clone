import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div id="Navbar">
        <ul className="navbar navbar-left">
          <img
            className="logo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="Netflix Logo"
          ></img>
          <NavLink exact to="/" className="navbar-button">Home</NavLink>
          <li className="navbar-button">TV Shows</li>
          <li className="navbar-button">Movies</li>
          <li className="navbar-button">New & Popular</li>
          <NavLink exact to="/mylist" className="navbar-button">My List</NavLink>
        </ul>
        <ul className="navbar navbar-right">
          <NavLink exact to="/search" className="navbar-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-icon" />
          </NavLink>
          <li className="navbar-button">
            <FontAwesomeIcon icon={faBell} className="navbar-icon" />
          </li>
          <li className="navbar-button">
            <FontAwesomeIcon icon={faUser} className="navbar-icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
