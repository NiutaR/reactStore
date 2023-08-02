import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './styles/index.css';
import { BrowserRouter } from "react-router-dom";
//import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);

//reportWebVitals();