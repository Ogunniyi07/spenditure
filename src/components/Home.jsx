import React, { useState } from "react";
import {FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import '../App.css';


const Home = () =>{

     //When Arrow Scroll at Bottom
  window.addEventListener("scroll", function () {
    const testimonial = document.querySelector(".testimonial")
    testimonial.classList.arrow("active",window.scrollX > 100)
  })
        // Toggle Menu
const [Slide, setSlide] = useState(false)
  return (
    <div className="body">
      {/* Home Section */}
      <div className="home" id="#home">
          <div className="home-txt">
           <div className="txt1">
           A simplified way to take charge and control of your finances
           </div>
            <div className="txt2">
            Create custom budgets, track financial expenditures and discover investment opportunities
            </div>
            <div className="home-btn">
              <a href="signup"><button className="home-signup">Sign Up for Spenditure</button></a>
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
          <a href="signup"><button>Get Started</button></a>
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
      {/* Testimonial Section */}
      <div className="testimonial">
        <h2>Testimonials</h2>
        <div className="test-grid">
        <div className="test-box">
          <div className="test-icons">
          <i className="fa-star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
          </div>
          <div className="test-text">
            <p>This is the best budgeting app i've ever used, it helps me plan all my spendings.</p>
          </div>
          <div className="test-img">
            <div className="img-circle">
              <img src="/images/Ellipse.png" alt=""/>
            </div>
            <p>Charlie Puth</p>
          </div>
        </div>
        <div className="test-box">
          <div className="test-icons">
          <i className="fa-star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
          </div>
          <div className="test-text">
            <p>A great application, deserves a 5-star</p>
          </div>
          <div className="test-img">
            <div className="img-circle">
              <img src="/images/Ellipse (1).png" alt="" />
            </div>
            <p>Praise Muyiwa</p>
          </div>
        </div>
        <div className="test-box">
          <div className="test-icons">
          <i className="fa-star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
          </div>
          <div className="test-text">
          <p>Since i started using this app, i've been able to save and allocate money better.</p>
          </div>
          <div className="test-img">
            <div className="img-circle">
              <img src="/images/Ellipse (2).png" alt="" />
            </div>
            <p>Ada Victor</p>
          </div>
        </div>
        <div className="test-box">
          <div className="test-icons">
          <i className="fa-star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
          </div>
          <div className="test-text">
          <p>Since i started using this app, i've been able to save and allocate money better.</p>
          </div>
          <div className="test-img">
            <div className="img-circle">
              <img src="/images/Ellipse (3).png" alt="" />
            </div>
            <p>Segun Obafemi</p>
          </div>
        </div>
        </div>
        {/* <div className="arrow"  onClick={() => setSlide(!Slide)}>
        <i className="Left-arrow"><FaArrowLeft /></i> : <i className="Right-arrow"><FaArrowRight /></i>
        </div> */}
      </div>
      {/* Download Section */}
      <div className="download">
        <h2>Download the free App</h2>
        <p>Spend less and secure the future with Spenditure</p>
          <div className="download-store">
            <div className="apple">
              <a href="#"><img src="images/download-apple.svg" alt=""/></a>
            </div>
            <div className="android">
              <a href="#"><img src="images/download-google.svg" alt=""/></a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;

