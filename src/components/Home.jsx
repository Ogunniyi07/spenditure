import React from "react";
import '../App.css';

function Home() {
  return (
    <div className="body">
      {/* Home Section */}
      <div className="home">
          <div className="home-txt">
           <div className="txt1">
           A simplified way to take charge and control of your finances
           </div>
            <div className="txt2">
            Create custom budgets, track financial expenditures and discover investment opportunities
            </div>
            <div className="home-btn">
              <button className="home-signup">Sign Up for Spenditure</button>
            </div>
            <div className="download-btn">
              <div className="apple">
              <a href="#"><img src="images/download-apple.svg" /></a>
              </div>
              <div className="android">
              <a href="#"><img src="images/download-google.svg" /></a>
              </div>
            </div>
          </div>
          <div className="home-img">
          <img src="images/couple-pic.svg" />
          </div>
      </div>

      {/* Security Section */}
      <div className="security">
        <div className="security-img">
          <img src="images/shield.png" />
        </div>
        <div className="security-description">
          <h2>Your security is our priority</h2>
          <p>Spenditure uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud. <a href="#">Learn More </a></p>
        </div>
      </div>
      {/* Finance Section */}
      <div className="finance">
      <div className="finance-img">
          <img src="images/finance-img.png" />
        </div>
        <div className="finance-description">
          <h2>Get All Your Finances In one App</h2>
          <p>See how you spend by connecting your finances,expense and income.</p>
          <button>Get Started</button>
        </div>
      </div>
      {/* What We Offer */}
      {/* Finance Section */}
      <div className="offer-section">
        <div className="offer-title">
        <h2>What We Offer</h2>
        </div>
        <div className="offer">
      <div className="offer-img">
          <img src="images/offer-img1.png" />
        </div>
        <div className="offer-description">
          <h2>Spend less than you earn</h2>
          <p>We will tell you when you’ve reached your spending limit. <a href="#">Learn more</a></p>
        </div>
        </div>
      </div>
      {/* Save Section */}
      <div className="offer-section">
        <div className="offer">
        <div className="offer-description">
          <h2>Save with friends</h2>
          <p>Keep some finances away for a specific goal with your friends.</p>
        </div>
      <div className="offer-img">
          <img src="images/offer-img3.png" />
        </div>
        </div>
      </div>
      {/* Budget Section */}
      <div className="offer-section">
        <div className="offer">
      <div className="offer-img">
          <img src="images/offer-img1.png" />
        </div>
        <div className="offer-description">
          <h2>Be up to date with your fees</h2>
          <p>We help you track your bils to keep you track,so you don’t ever be late or pass due date.</p>
        </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">  
      <div className="box">
      <img src="images/chartup.svg" alt=""/>
          <div className="text">
          <h2>Track Your Spending</h2>
          <p>Know where your money is going to and take charge of your expenses.</p>
          </div>
        </div>
        <div className="box">
        <img src="images/piggy.svg" alt=""/>
          <div className="text">
          <h2>Budget Planner</h2>
          <p>Plan your finances wisely, so you’re not caught unaware when the bills come knocking.</p>
          </div>
        </div>
        <div className="box">
        <img src="images/getcoins.svg" alt=""/>
          <div className="text">
          <h2>Get Points</h2>
          <p>Be rewarded for reaching your savings, goals and targets milestone.</p>
          </div>
        </div>
      </div>
      {/* Download Section */}
      <div className="download">
        <h2>Download the free App</h2>
        <p>Spend less and secure the future with Spenditure</p>
          <div className="download-store">
            <div className="apple">
              <a href="#"><img src="images/download-apple.svg" /></a>
            </div>
            <div className="android">
              <a href="#"><img src="images/download-google.svg" /></a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;

