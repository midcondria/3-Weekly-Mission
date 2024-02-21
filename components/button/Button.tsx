import classNames from "classnames";
import styles from "./Button.module.css";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
