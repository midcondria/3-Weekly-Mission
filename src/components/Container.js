import classNames from "classnames";
import styles from "./Container.module.css";

function Container({ children, className }) {
  console.log(styles.container);
  return (
    <div className={classNames(className, styles.container)}>{children}</div>
  );
}

export default Container;
