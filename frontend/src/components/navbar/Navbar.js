import React from "react";
import "./navbar.css";
import { FaBars, FaSearch, FaSms, FaShoppingCart } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
      {/* logo start */}
      <div className="logo">
        <picture>
          <img src="./images/logo.png" loading="lazy" />
        </picture>
      </div>
      {/* menu items start */}
      <div className="menuItem">
        <div className="mainMenu">
          {/* main menu */}
          <ul>
            <li>
              <FaBars />
            </li>
            <li>Careers</li>
            <li>Store</li>
            <li>FAQ</li>
            <li>
              <BiDotsHorizontalRounded />
            </li>
          </ul>
        </div>
        {/* search */}
        <div className="search">
          <input placeholder="Search here ...." />
          <FaSearch className="searchIcon" />
        </div>
        {/* exp */}
        <div className="exp">
          <div className="expText">
            <p>Next</p>
            <p>35 EXP</p>
          </div>
          <div className="outterline">
            <div className="innerline" style={{ width: "80px" }}></div>
          </div>
        </div>
        {/* lastMenu */}
        <div className="lasticons">
          <div className="icons">
            <div className="cart">
              <FaShoppingCart />
              <span>5</span>
            </div>
            <FaSms />
            <div className="dotHolder">
              <MdNotifications />
              <div className="dot"></div>
            </div>
          </div>
          <div className="setting">
            <BsTools />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
