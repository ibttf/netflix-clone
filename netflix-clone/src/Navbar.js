import React, { useState, useEffect } from "react";
import "./App.css";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
      console.log(window.scrollY);
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
          ></img>
          <li className="navbar-button">Home</li>
          <li className="navbar-button">TV Shows</li>
          <li className="navbar-button">Movies</li>
          <li className="navbar-button">New & Popular</li>
          <li className="navbar-button">My List</li>
        </ul>
        <ul className="navbar navbar-right">
          <li className="navbar-button">Search</li>
          <li className="navbar-button">Notifications</li>
          <li className="navbar-button">User</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
