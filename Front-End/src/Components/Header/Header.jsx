import React, { useState } from "react";
import "../Header/Header.css";
import "../../index.css";
import Menuicon from "../../assets/MenuIcon.svg";
import cross from "../../assets/Vector.png";

const Header = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <header id="header">
      <div className="wrapper">
        <div className="nav">
          <a href="#header">
            <h4>
              Sound<span>Dsign</span>
            </h4>
          </a>
          <ul className="learnbox">
            <li>
              <a href="#learnpage">About</a>
              <a href="#studentvideo">Course Details</a>
              <a href="#posts">Blog</a>
              <a href="#profile">Testimonials</a>
            </li>
          </ul>
          <div className="menuicon">
            <img src={Menuicon} alt="" onClick={() => setisActive(!isActive)} />
          </div>
        </div>

        <div className={`flotnav ${isActive ? "active" : ""} `}>
          <img src={cross} onClick={() => setisActive(false)} alt="" />
          <ul>
            <li>
              <a href="#learnpage">About</a>
              <a href="#studentvideo">Course Details</a>
              <a href="#posts">Blog</a>
              <a href="#profile">Testimonials</a>
            </li>
          </ul>
        </div>

        <div className="lbox">
          <h4>Sound Design Masterclass</h4>
          <h1>Learn the Art of Sound Design </h1>
          <button className="demo-btn">Demo Lesson</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
