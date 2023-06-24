import React from "react";
import ReactDOM from "react-dom/client";

import MasterProvider from "./Store/MasterProvider";

import App from "./app/App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MasterProvider>
    <App />
  </MasterProvider>
);
