import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom"

import "./App.css";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  function handleSearchClick () {
    setIsSearching(!isSearching);
  }

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
          />
          <NavLink to="/" className="navbar-button">Home</NavLink>
          <li className="navbar-button">TV Shows</li>
          <li className="navbar-button">Movies</li>
          <li className="navbar-button">New & Popular</li>
          <NavLink to="/mylist" className="navbar-button">My List</NavLink>
        </ul>
        <ul className={isSearching ? "navbar-search" : "navbar-search-hidden"}>
          <input />
        </ul>
        <ul className="navbar navbar-right">
          <NavLink to="/search" className="navbar-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-icon" onClick={handleSearchClick} />
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
