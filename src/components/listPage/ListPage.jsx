import Container from "../container/Container";
import styles from "./ListPage.module.css";

function ListPage({ folderInfo, children }) {
  return (
    <>
      <div className={styles.bg}>
        <img
          className={styles.icon}
          src={folderInfo?.owner.profileImageSource}
          alt="폴더 주인 아이콘"
        />
        <div className={styles.texts}>
          <p className={styles.owner}>{folderInfo?.owner.name}</p>
          <h1 className={styles.folderName}>{folderInfo?.name}</h1>
        </div>
      </div>
      <Container className={styles.container}>{children}</Container>
    </>
  );
}

export default ListPage;
