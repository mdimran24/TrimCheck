import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppointmentContext } from "./context/AppointmentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppointmentContext>
      <App />
    </AppointmentContext>
  </React.StrictMode>
);
