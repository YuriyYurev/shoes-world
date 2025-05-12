import React, { useContext, useState } from "react";
import "./styles/index.scss";
import { Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
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
