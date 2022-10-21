import React from "react";
import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

import UserContext from "./context";
import Router from "./router";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContext>
    <Router />
  </UserContext>
);

// reportWebVitals(console.log);
