import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import '../App.css';


const Navigation = () => {
  //When Scroll Nav at top
  window.addEventListener("scroll", function () {
    const navigation = document.querySelector(".navigation")
    navigation.classList.toggle("active",window.scrollY > 100)
  })

  // Toggle Menu
  const [Mobile, setMobile] = useState(false)
  return (

    <div className="navigation">  {/*header*/}
    <div className="navbar-con">  {/*container d_flex*/}
      <div className="navbar-list">    {/*navlink*/}
      <div className="navbar-brand">
            <NavLink className="navbar-logo" to="/">
              <img src="/images/nav-logo.svg" alt="" />
            </NavLink>
      </div>
      <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}> 
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <div className="navbar-btn">
          <button className="navbar-signin">Sign In</button>
          <button className="navbar-signup">Create a Free Account</button>
        </div>
    </ul>
      </div>
    </div>
  <div className='toggle' onClick={() => setMobile(!Mobile)}>
  {Mobile ? <div className="close"><FaTimes /></div> : <div className="open"><FaBars /></div>} 
  </div>
</div>
  );
}

export default Navigation;