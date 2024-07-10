import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <h3>Get Support</h3>
          <ul>
            <li>
              <a href="/">Become a Partner</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Products</h3>
          <ul>
            <li>
              <a href="/">Finance</a>
            </li>
            <li>
              <a href="/">Sales</a>
            </li>
            <li>
              <a href="/">Websites</a>
            </li>
            <li>
              <a href="/">Inventory & MRP</a>
            </li>
            <li>
              <a href="/">HR</a>
            </li>
            <li>
              <a href="/">Marketing</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Get Started</h3>
          <ul>
            <li>
              <a href="/">What is CloudERP?</a>
            </li>
            <li>
              <a href="/">Solutions</a>
            </li>
            <li>
              <a href="/">Customer Stories</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>FAQs</h3>
          <ul>
            <li>
              <a href="/">Offers</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Help and Support</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <ul>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright &copy;Next cloudERP 2022. All rights reserved.</p>
        <div class="social-icons">
          <a href="/" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="/" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="/" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="/" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
