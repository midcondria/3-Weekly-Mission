import Container from "./Container";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.container}>Footer</Container>
    </div>
  );
}

export default Footer;
