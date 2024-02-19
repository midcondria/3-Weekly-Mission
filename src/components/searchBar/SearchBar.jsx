import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/Search.png";
import { useState } from "react";
import { ReactComponent as CloseSvg } from "../../assets/close.svg";

export default function SearchBar({ onFilter }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleResetClick = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <img className={styles.searchIcon} src={searchIcon} alt="검색창 아이콘" />
      <input
        name="search"
        value={value}
        placeholder="링크를 검색해 보세요."
        onChange={handleChange}
      />
      {value.length > 0 && <ResetButton onClick={handleResetClick} />}
    </form>
  );
}

function ResetButton({ onClick }) {
  return (
    <button type="button" className={styles.resetButton} onClick={onClick}>
      <CloseSvg />
    </button>
  );
}
