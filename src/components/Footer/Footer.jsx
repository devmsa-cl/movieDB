import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="brand-container">
            <img src="/logo.svg" alt="" style={{ width: "80px" }} />
            <Link to="/">vimHD</Link>
          </div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <p className="copyright">copyright @ 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
