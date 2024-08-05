import React from "react";
import Bookmark from "../Bookmark/Bookmark";
import { Link } from "react-router-dom";

import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav>
        <div className="container navbar">
          <Link to="/" className="brand-name">
            <img src="/logo.svg" alt="" style={{ width: "40px" }} />
          </Link>
          <ul className="nav">
            <li>
              <a href="/about">about</a>
            </li>
          </ul>

          <Bookmark />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
