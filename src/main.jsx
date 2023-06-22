import React from "react";
import ReactDOM from "react-dom/client";
// React-Router package has underwent changes from version 5 to 6 refer to documentation
import { StoreProvider } from "easy-peasy";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App.jsx";
import "./index.css";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
