import React from "react";
import {FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div className="about-img">
          <img src="/images/aboutus1.png" alt=""/>
        </div>
        <div className="about-section">
          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>To help you keep track of your finances through smart budgeting wise investments and savings as well as to help you reach your goals faster through consistent tracking.</p>
          </div>
          <div className="about-mission">
            <h2>About Us</h2>
            <p>Spenditure is a finance app built by a team of intellectuals to help its users perform periodic financial activities without constrictions or complications. Research has it that Nigeria has over 200 million people and over 40% of the population are poor. Spenditure aims to make at least 50% of the populace financially independent. Spenditure helps users set short and long term financial goals, track budget(s) efficiently and also encourage users by giving rewards after meeting targeted goals. Spenditure affords you the opportunity to save conveniently. It deducts 10% of your income and divert it to your savings.
            “Save and invest more, spend less and secure the future”</p>
          </div>
        </div>
        <div className="goal">
          <div className="belief">
            <h2>Our Belief</h2>
            <div className="belief-box">
              <p>Our belief is that spenditure will make many people financially free due to the budgeting feature embedded in our app; it will make people to control how they spend theirmoney and direct their finances to a fertile soil where the money can grow into sustainable wealth.</p>
            </div>
          </div>
          <div className="belief">
            <h2>Our Goal</h2>
            <div className="belief-box">
              <p>Research has it that Nigeria has over 200 million people and over 40% of the population are poor. Spenditure aims to make at least 50% of the populace financially independent.</p>
            </div>
          </div>
          <div className="belief">
            <h2>Our Vision</h2>
            <div className="belief-box">
              <p>To be the ultimate and financial app that will help 1 million people to be financially free</p>
            </div>
          </div>
        </div>
        <div className="form">
          <div className="img">
            <img src="/images/aboutus2.png" alt="" />
          </div>
          <div className="img">
            <div className="formpg">
              <h2>Contact Us</h2>
              <a href="ogunniyi.julius12@gmail.com">Email: Spenditure@gmail.com</a>
              <div className="tel"><a href="+2349024420929">Tel: 09024420929</a></div>
              <div className="icon">
                <a href="#"><FaInstagram /></a> &nbsp;
                <a href="#"><FaLinkedinIn /></a> &nbsp;
                <a href="#"><FaTwitter /></a> &nbsp;
              </div>
            </div>
          </div>
        </div>
        <div className="fill">
          <div className="news">
            <h2>Want our Latest Updates?</h2>
            <p>Subscribe to our newsletter</p>
            <div className="sub">
              <input type="email" placeholder="Email" />
              <input type="submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
