import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: React.ReactNode;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
};
