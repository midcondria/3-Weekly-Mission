import { useState } from "react";
import styles from "./PasswordInput.module.scss";
import Input from "../Input";
import Image from "next/image";

type PasswordInputProps = {
  label?: string;
  onClick?: () => void;
  eyeOpen?: boolean;
};

export default function PasswordInput({
  label,
  onClick,
  eyeOpen,
}: PasswordInputProps) {
  const [error, setError] = useState<Boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.inputLabel}>{label}</div>
      <div className={styles.input}>
        <Input type={eyeOpen ? "text" : "password"} />
        <Image
          className={styles.eyeButton}
          src={eyeOpen ? "/assets/eye-on.svg" : "/assets/eye-off.svg"}
          width={16}
          height={16}
          alt="로고 버튼"
          onClick={onClick}
        />
      </div>
      {error && <span className={styles.errorMsg}></span>}
    </div>
  );
}
