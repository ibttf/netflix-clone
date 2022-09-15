import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBell,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleNavBarClick(e) {
    for (const child of e.target.parentElement.childNodes) {
      child.classList.remove("active");
    }
    e.target.classList.add("active");
    console.log(e.target);
  }

  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div id="Navbar">
        <div className="navbar navbar-left" onClick={handleNavBarClick}>
          <img
            className="logo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="Netflix Logo"
          ></img>
          <NavLink exact to="/" className="navbar-button">
            Home
          </NavLink>
          <div className="navbar-button">TV Shows</div>
          <div className="navbar-button">Movies</div>
          <div className="navbar-button">New & Popular</div>
          <NavLink exact to="/mylist" className="navbar-button">
            My List
          </NavLink>
        </div>
        <div className="navbar navbar-right">
          <NavLink exact to="/search" className="navbar-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-icon" />
          </NavLink>
          <div className="navbar-button">
            <FontAwesomeIcon icon={faBell} className="navbar-icon" />
          </div>
          <div className="navbar-button">
            <FontAwesomeIcon icon={faUser} className="navbar-icon" />
          </div>
          <div className="navbar-button profile">
            <FontAwesomeIcon
              icon={faAngleDown}
              className="navbar-icon more-info"
            />
            <div className="options">
              <span className="dropdown">Settings</span>
              <span className="dropdown">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
