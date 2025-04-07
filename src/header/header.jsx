import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <>
      <div style={{
          backgroundColor: "red",  
          height: "10vh", 
          width: "100%",
          position: "fixed",
          top: "0",
          left: "0", 
        }}>
        <p>Art Page Header</p>
        <nav>
          <NavLink to="/displayImages" end>
            go to display images
          </NavLink>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <NavLink to="/loadImages" end>
            go to load images
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
