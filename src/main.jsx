import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./Components/Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
