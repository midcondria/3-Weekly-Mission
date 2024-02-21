import classNames from "classnames";
import styles from "./PrimaryButton.module.css";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: (e?: any) => void;
  type?: "button" | "submit";
};

function Button({
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
