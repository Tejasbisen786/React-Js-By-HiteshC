import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createContext } from "react";
const context = createContext();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <context.Provider value={"Tejas"}>
      <App />
    </context.Provider>
  </React.StrictMode>
);
