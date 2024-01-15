import styles from "./IconButton.module.css";
import classNames from "classnames";

function IconButton({ children, className }) {
  return (
    <button className={classNames(styles.button, className)}>{children}</button>
  );
}

export default IconButton;
