import React from "react";
import ReactDOM from "react-dom/client";
// React-Router package has underwent changes from version 5 to 6 refer to documentation
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./components/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Route path="/*" component={App} />
    </Router>
  </React.StrictMode>
);
