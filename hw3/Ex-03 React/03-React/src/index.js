// import { StrictMode } from "react";
// reference https://www.w3schools.com/react/react_jsx.asp
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./App";
import "./App.css";

// if (process.env.NODE_ENV !== "production") {
//   const axe = require("@axe-core/react");
//   axe(React, ReactDOM, 1000);
// }
const root = ReactDOM.createRoot(document.getElementById("root"));

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
root.render(
  // ReactDOM.render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </StrictMode>
);
