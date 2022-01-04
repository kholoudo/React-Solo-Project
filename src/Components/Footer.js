import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-about">
         
          <p>
            Lorem ipsum dolor sit ame consect etur pisicing elit sed do eiusmod
            tempor incididunt ut labore.
          </p>
          <Link to="/Register">
            <button className="footer-signup-btn">Join Us</button>
          </Link>
        </div>
        <div className="contactus-footer">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-phone-alt" />
            +962798452630
          </p>
          <p>
            <i className="fas fa-envelope" />kholoudmahmoud.kh@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt" />
            Jordan, Amman
          </p>
        </div>
       
      </div>
      <div className="footer-bottom">
        <div className="social-footer">
          <ul>
            <Link to="//www.facebook.com" target="_blank">
              <i className="social fa-brands fa-facebook"></i>
            </Link>
            <Link to="//www.instagram.com/" target="_blank">
              <i className="social fa-brands fa-instagram"></i>
            </Link>
            <Link to="//twitter.com/" target="_blank">
              <i className="social fa-brands fa-twitter"></i>
            </Link>
          </ul>
        </div>
        <div className="copyright-footer">
          <p>&copy; 2022 BAN DOUGHNUTS . All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
