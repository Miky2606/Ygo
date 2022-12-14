import React from "react";
import ReactDOM from "react-dom/client";
import App from "./View/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./View/PageNotFound";
import NavBarWeb from "./View/navBar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/homePage.css";

import CardSetView from "./View/SetCard";
import SetCardsShow from "./View/CardsSetShow";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBarWeb />

      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<CardSetView />} path="/cardset" />
        <Route element={<SetCardsShow />} path="/cardset/:id" />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
