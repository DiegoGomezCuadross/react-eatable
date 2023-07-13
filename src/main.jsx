import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./app";
import { Global } from "@emotion/react";
import { global, reset } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
