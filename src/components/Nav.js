import Container from "./Container";
import styles from "./Nav.module.css";
function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>Nav</Container>
    </div>
  );
}

export default Nav;
