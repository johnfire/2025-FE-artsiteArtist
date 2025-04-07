import { useState } from "react";

import React from "react";
import Button from "@mui/material/Button";
// import { red } from "@mui/material/colors";
import { NavLink } from "react-router";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> An Artist Website</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <button onClick={() => console.log("hellow im here")}>
          log something
        </button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Button
          onClick={() => console.log("hellow im here")}
          variant="outlined"
          color="secondary"
        >
          material ui button
        </Button>
        <nav>
          <NavLink to="/displayImages" end>
            go to display images
          </NavLink>
          <p></p>
          <NavLink to="/loadImages" end>
            go to load images
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default App;
