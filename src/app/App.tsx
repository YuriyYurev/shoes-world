import "./styles/index.scss";
import { NavLink } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/ClassNames/classNames";
import { AppRouter } from "app/providers/router";
export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <NavLink to={"/"}>Главная</NavLink>
      <NavLink to={"/about"}>О компании</NavLink>
      <AppRouter />
    </div>
  );
}
