import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CarContextProvider from "./context/Carcontext";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CarContextProvider>
        <App />
      </CarContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
