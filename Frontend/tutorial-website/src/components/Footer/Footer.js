import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Legal</h4>
        <ul>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms and Conditions</a>
          </li>
          <li>
            <a href="/cookie">Cookie Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Help</h4>
        <ul>
          <li>
            <a href="/shipping">Shipping and Delivery</a>
          </li>
          <li>
            <a href="/returns">Returns Policy</a>
          </li>
          <li>
            <a href="/security">Security and Payment</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p> CourseHub </p>
        <div className="footer-social">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
