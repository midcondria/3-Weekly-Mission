import classNames from "classnames";
import styles from "./Button.module.css";

function Button({ className, children, onModalClick, value }) {
  const handleClick = (e) => {
    const modalType = e.currentTarget.value;
    onModalClick(modalType);
  };
  return (
    <div
      className={classNames(styles.button, className)}
      value={value}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export default Button;
