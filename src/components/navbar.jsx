import React from "react";
const NavBar = ({ totalCounter }) => {
  return (
    <nav className="nav navbar bg-light">
      <div className="container">
        <a href="index" className="navbar-brand">
          LOGO
          <span className="badge badge-pill badge-dark m-2">{totalCounter}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
