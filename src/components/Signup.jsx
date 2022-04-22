import React from "react";
import { NavLink } from "react-router-dom";
import './buttons.css';

function Signup() {
  return (
    <div className="signup" id="#signup">
      <div class="signup-container">
          <div className="signup-con">
            <div className="signup-head">
              <div className="title">
                {/* <NavLink className="signup-logo" to="/">
                  <img src="/images/nav-logo.svg" alt="" />
                </NavLink> */}
              </div>
              <div className="signin">
                <a href="sign">SignIn</a>
              </div>
            </div>
            <div className="signup-img">
              <img src="/images/rafiki.png" alt="" />
            </div>
            <div className="signup-text">
              <h2>SignUp to SPENDITURE</h2>
              <p>Keep your financial data store to our server so that you can access from anywhere you want</p>
            </div>
            <div className="signup-details">
              <p>Full Name</p>
              <input type="text" placeholder="Full Name" required/>
              <p>Email</p>
              <input type="email" placeholder="name@domain.com" required/>
              <p>Mobile Number</p>
              <input type="number" placeholder="+234 0000 0000" required/>
              <p>Password</p>
              <input type="password" placeholder="*************" required/>
              <button>Get code</button>
              <div className="or">
              <p>or</p>
              </div>
              <div className="googlesign">
                <button>
                  <img src="/images/google_g.png" alt="" />
                  <p>SignUp with Google</p>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Signup;
