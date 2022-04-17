import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Contact,
  Blog,
  Services,
} from "./components";

ReactDOM.render(
  
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact" element={<Services />} />
      <Route path="/blog" element={<Blog />}>
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();