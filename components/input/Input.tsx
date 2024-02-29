import classNames from "classnames";
import styles from "./Input.module.scss";

type InputProps = {
  className?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: () => void;
};

export default function Input({
  className,
  name,
  placeholder,
  value,
  type,
  onChange,
}: InputProps) {
  return (
    <input
      className={classNames(styles.input, className)}
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
}
