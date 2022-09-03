import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'tw-elements';
// import router
import { Route, Routes, BrowserRouter } from "react-router-dom";

import App from "./App";
import Team from "./components/Team/Team";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
