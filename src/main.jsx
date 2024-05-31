import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <h1 className="text-3xl font-poppins font-bold underline">
        Hello world!
      </h1>

      <ToastContainer />
    </HelmetProvider>
  </React.StrictMode>
);
