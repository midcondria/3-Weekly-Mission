import styles from "./IconButton.module.css";
import classNames from "classnames";

function IconButton({ children, className, onClick = "" }) {
  const handleClick = () => {
    console.log("share");
    onClick();
  };
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default IconButton;
