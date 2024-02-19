import classNames from "classnames";
import styles from "./Button.module.css";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

function Button({ className, children }: ButtonProps) {
  return (
    <button className={classNames(styles.button, className)}>{children}</button>
  );
}

export default Button;
