/* eslint-disable no-console */

import React, { useState } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import BodyComp from "./bodycomps/bodycomp";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1> An artist website management tool</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
      <BodyComp />
      <Footer />
    </>
  );
}

export default App;
