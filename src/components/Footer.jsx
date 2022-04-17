import React from "react";
import {FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

function Footer() {
  return (
    <div className="foot">
      <div className="footer">
      <div className="footer-box">
        <ul>
          <h5>Company</h5>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Goals</a></li>
          <li><a href="#">Our Terms</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div className="footer-box">
        <ul>
          <h5>Features</h5>
          <li><a href="#">Budgeting</a></li>
          <li><a href="#">Save with Friends</a></li>
          <li><a href="#">Mobile App</a></li>
          <li><a href="#">Credit Score</a></li>
          <li><a href="#">Tracker</a></li>
        </ul>
      </div>
      <div className="footer-box">
        <ul>
          <h5>Spenditure Help</h5>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Account Management</a></li>
          <li><a href="#">Accounts & Transactions</a></li>
        </ul>
      </div>
      <div className="footer-box">
        <ul>
          <h5>Contact Us</h5>
          <li><a href="#">spenditure@gmail.com</a></li>
          <li><a href="+2349024420929">+2349024420929</a></li>
          <li><div className="icon">
                <a href="#"><FaInstagram /></a> &nbsp;
                <a href="#"><FaLinkedinIn /></a>&nbsp;
                <a href="#"><FaTwitter /></a>&nbsp;
              </div>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <ul>
          <h5>Stay up to date</h5>
          <li><a href="#">Subscribe To Our Newsletter</a></li>
          <li><input type="text" placeholder="Email" /></li>
        </ul>
      </div>
    </div>
    <div className="company">
       <p>Copyright © 2022 Spenditure | Credits</p>
       <p>Powered by Julius</p>
    </div>
    </div>
  );
}

export default Footer;


















