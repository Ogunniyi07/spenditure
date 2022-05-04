import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "src\components\buttons.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Contact,
  Blog,
  Services,
  Sign,
  Signup,
  HomePage,
} from "./components";

ReactDOM.render(
  
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/HomePage" element={<HomePage />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();