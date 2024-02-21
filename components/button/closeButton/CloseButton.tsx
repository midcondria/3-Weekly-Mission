import classNames from "classnames";
import styles from "./CloseButton.module.scss";
import Image from "next/image";
import Button from "../Button";

type buttonProps = {
  className: string;
  onClick: () => void;
};

function CloseButton({ className, onClick }: buttonProps) {
  return (
    <Button className={classNames(styles.button, className)} onClick={onClick}>
      <Image src="/assets/close.svg" alt="닫기 버튼" fill />
    </Button>
  );
}

export default CloseButton;
