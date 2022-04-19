import React from "react";
import {FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div className="contact-hero">
          <div className="contact-text">
            <div className="description">
            <h2>Contact Us</h2>
            <p>We might be a bank in an app but we don't leave our customers hanging. Everything about us is on the app, but if you ever need help (or you just want to chat), we’ve got you.</p>
            <div className="link">
            <a href="+2349024420929">Tel: 09024420929</a>
            <a href="ogunniyi.julius12@gmail.com">Email: Spenditure@gmail.com</a>
            <div className="icon">
                <a href="#"><FaInstagram /></a> &nbsp;
                <a href="#"><FaLinkedinIn /></a> &nbsp;
                <a href="#"><FaTwitter /></a> &nbsp;
              </div>
            </div>
            </div>
          </div>
          <div className="contact-img">
            <img src="/images/aboutus2.png" alt="" />
          </div>
        </div>
        <div className="slide">
          <div className="slide-img"></div>
        </div>
          </div>
    </div>
  );
}

export default Contact;
