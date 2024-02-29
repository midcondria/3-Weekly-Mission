import { useState } from "react";
import styles from "./EmailInput.module.scss";
import Input from "../Input";

type EmailInputProps = {
  label?: string;
};

export default function EmailInput({ label }: EmailInputProps) {
  const [error, setError] = useState<Boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.inputLabel}>{label}</div>
      <div className={styles.input}>
        <Input placeholder="example@test.com" />
      </div>
      {error && <span className={styles.errorMsg}></span>}
    </div>
  );
}
