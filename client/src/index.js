import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="forums.us.auth0.com"
      clientId="xArDgvt1ecvTuYBHF0d8BAHa0ut04Uy5"
      redirectUri={window.location.origin}
      audience="https://forums.us.auth0.com/api/v2/"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
