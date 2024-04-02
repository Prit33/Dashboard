import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Admin from "./layouts/Admin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* add routes with layouts */}
        <Route path="/" element={ <Admin />} />
        {/* <Redirect from="*" to="/" /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
