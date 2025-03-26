import React from "react";
import "./index.scss";
import { Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

export default function App() {
  return (
    <div className="app">
      <NavLink to={"/"}>Главная</NavLink>
      <NavLink to={"/about"}>О компании</NavLink>
      <Suspense fallback={<div>Згрузка</div>}>
        <Routes>
          <Route index element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
