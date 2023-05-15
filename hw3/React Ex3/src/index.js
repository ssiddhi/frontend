// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./App";

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
