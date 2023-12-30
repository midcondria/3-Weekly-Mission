import styles from "./Card.module.css";

function Card({ children }) {
  return (
    <div className={styles.card}>
      Card <br />
      {children}
    </div>
  );
}

export default Card;
