import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "rgb(75, 61, 16)",
        height: "10vh",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      <h3>Art Page Header</h3>
      <nav>
        <NavLink to="/displayImages" end>
          Link to display all images
        </NavLink>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <NavLink to="/loadImages" end>
          Link to load new images
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
