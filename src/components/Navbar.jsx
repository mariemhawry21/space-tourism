import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import logo from "../assets/shared/logo.svg";
import Ham from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="nav-item" to="/">
            <b>00</b> Home
          </Link>
          <Link className="nav-item" to="/components/Destination">
            <b>01</b> Destination
          </Link>
          <Link className="nav-item" to="/components/crew">
            <b>02</b> Crew
          </Link>
          <Link className="nav-item" to="/components/Technology">
            <b>03</b> Technology
          </Link>
        </div>
      </nav>
      <nav className="nav-mob">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div
          className="menu-icon"
          id="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "" : <img src={Ham} alt="ham" />}
        </div>
        {isOpen ? (
          <div className="mob-menu">
            <div className="close-icon">
              <img src={close} alt="close" onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className="nav-list" id="nav-list">
              <Link className="nav-item" to="/">
                <b>00</b> Home
              </Link>
              <Link className="nav-item" to="/components/Destination">
                <b>01</b> Destination
              </Link>
              <Link className="nav-item" to="/components/crew">
                <b>02</b> Crew
              </Link>
              <Link className="nav-item" to="/components/Technology">
                <b>03</b> Technology
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Navbar;
