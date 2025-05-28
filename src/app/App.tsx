import React, { useContext, useState } from "react";
import "./styles/index.scss";
import { Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/ClassNames/classNames";
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
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
