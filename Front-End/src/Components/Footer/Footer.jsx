import React from "react";
import facebooklogo from "../../assets/Facebook Logo.svg";
import instalogo from "../../assets/Instagram Logo.svg";
import Tweeterlogo from "../../assets/Twitter Logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="wrapper">
        <div className="mainperent">
          <div className="treeperent">
            <h5 className="sounds">
              Sound <span>DZign</span>
            </h5>
            <div className="firstperent">
              <img src={facebooklogo} alt="" />
              <img src={Tweeterlogo} alt="" />
              <img src={instalogo} alt="" />
            </div>
          </div>

          <div className="treeperent">
            <h5>Quick Links</h5>
            <a href="">Blog</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="treeperent">
            <h5>Contact Us</h5>
            <a href="">contact@email.com</a>
            <a href="">+1 999 9999 999</a>
          </div>
        </div>
        <h5>This website is designed by GTCoding Ⓒ 2022</h5>
      </div>
    </section>
  );
};

export default Footer;
