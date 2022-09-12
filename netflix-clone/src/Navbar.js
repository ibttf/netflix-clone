import React from "react";
import "./App.css";
const Navbar = () => {
  return (
    <div id="Navbar">
      <ul className="navbar-left">
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
      <ul className="navbar-right">
        <li className="navbar-button">Search</li>
        <li className="navbar-button">Notifications</li>
        <li className="navbar-button">User</li>
      </ul>
    </div>
  );
};

export default Navbar;
