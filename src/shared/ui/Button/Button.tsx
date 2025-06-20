import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, theme, ...otherProps } = props;
  return (
    <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>{children}</button>
  );
};
