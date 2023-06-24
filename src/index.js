import React from "react";
import ReactDOM from "react-dom/client";

import MasterProvider from "./store/MasterProvider";

import App from "./app/App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MasterProvider>
    <App />
  </MasterProvider>
);
