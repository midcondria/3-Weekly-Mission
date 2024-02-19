import classNames from "classnames";
import styles from "./pageContainer.module.scss";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames(className, styles.container)}>{children}</div>
  );
}
