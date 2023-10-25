import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App.jsx";
import { Provider } from "./components/Context/Context.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);