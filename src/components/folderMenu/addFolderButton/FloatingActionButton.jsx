import classNames from "classnames";
import styles from "./FloatingActionButton.module.css";

function FloatingActionButton({ className, onModalClick }) {
  const handleClick = (e) => {
    const modalType = e.currentTarget.value;
    onModalClick(modalType);
  };

  return (
    <button
      className={classNames(styles.fab, className)}
      value={"ADD_FOLDER"}
      onClick={handleClick}
    >
      <p className={styles.text}>폴더 추가</p>
      <svg
        className={styles.icon}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.52175 1.96603C8.52175 1.67148 8.28297 1.4327 7.98841 1.4327C7.69386 1.4327 7.45508 1.67148 7.45508 1.96603L7.45508 7.46668L1.9545 7.46668C1.65994 7.46668 1.42116 7.70546 1.42116 8.00001C1.42116 8.29456 1.65994 8.53335 1.9545 8.53335L7.45508 8.53335L7.45508 14.034C7.45508 14.3285 7.69387 14.5673 7.98842 14.5673C8.28297 14.5673 8.52175 14.3285 8.52175 14.034L8.52175 8.53335L14.0224 8.53335C14.317 8.53335 14.5558 8.29457 14.5558 8.00002C14.5558 7.70546 14.317 7.46668 14.0224 7.46668L8.52175 7.46668L8.52175 1.96603Z"
          fill="#E7EFFB"
        />
      </svg>
    </button>
  );
}

export default FloatingActionButton;
