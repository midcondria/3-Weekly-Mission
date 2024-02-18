import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/Search.png";
import { useState } from "react";
import closeSvg from "../../assets/close.svg";

export default function SearchBar({ onFilter }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name="search"
        value={value}
        placeholder="링크를 검색해 보세요."
        onChange={handleChange}
      />
      <img className={styles.searchIcon} src={searchIcon} alt="검색창 아이콘" />
    </form>
  );
}
