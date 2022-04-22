import React from "react";
import { NavLink } from "react-router-dom";
import './buttons.css';

function Sign() {
  return (
    <div className="signup">
      <div class="signup-container">
          <div className="signup-con">
            <div className="signup-head">
              <div className="title">
                {/* <NavLink className="signup-logo" to="/">
                  <img src="/images/nav-logo.svg" alt="" />
                </NavLink> */}
              </div>
              <div className="signin">
                <a href="signup">SignUp</a>
              </div>
            </div>
            <div className="signup-img">
              <img src="/images/rafiki.png" alt="" />
            </div>
            <div className="signup-text">
              <h2>SignIn to your Account</h2>
            </div>
            <div className="signup-details">
              <p>Email/Mobile Number</p>
              <input type="email" placeholder="name@domain.com" required/>
              <p>Password</p>
              <input type="password" placeholder="*************" required/>
              <div className="rem-section">
                <div className="remember">
                  Remember me &nbsp;  
                  <input type="checkbox" />
                </div>
                <div className="forgot">
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
              <button>Login</button>
              <div className="or">
              <p>or</p>
              </div>
              <div className="googlesign">
                <button>
                  <img src="/images/google_g.png" alt="" />
                  <p>SignIn with Google</p>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Sign;