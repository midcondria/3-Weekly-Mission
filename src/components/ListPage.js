import Container from "./Container";
import styles from "./ListPage.module.css";

function ListPage({ userInfo, children }) {
  console.log(userInfo);
  return (
    <>
      <div style={{ textAlign: "center" }}>ListPage</div>
      <Container className={styles.container}>{children}</Container>
    </>
  );
}

export default ListPage;
