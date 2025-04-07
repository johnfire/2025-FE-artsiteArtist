import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import DisplayImages from "./pages/allImages.jsx";
import LoadImages from "./pages/loadImages.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/displayiImages" element={<DisplayImages />} />
        <Route path="/uploadImages" element={<LoadImages />} />
        {/* <App /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
