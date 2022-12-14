import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import dotenv from 'dotenv';
import axios from 'axios';
import App from "../src/routes/App";
import store from "./app/store";

axios.defaults.baseURL = import.meta.BACKEND_URL || "http://localhost:3000";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
