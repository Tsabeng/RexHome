import React from "react";
import "./Footer.scss";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="sous-conteneur-footer">
      <div className="top">
        <FaFacebookSquare className="social-icon" /> 
        <FaLinkedin className="social-icon" />
        <FaSquareXTwitter className="social-icon" />
        <FaYoutube className="social-icon" />
      </div>
      <div className="bottom">© 2025 rexhome.com - Designed by Delphan T.</div>
    </div>
  );
};

export default Footer;