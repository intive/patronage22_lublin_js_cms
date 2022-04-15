import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material/styles";
import { AuthContextProvider } from "./store/auth-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <StyledEngineProvider>
        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root"),
);
