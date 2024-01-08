import { useEffect, useState } from "react";
import { getFolders } from "../../api/api";
import searchBarStyles from "../../components/searchBar/SearchBar.module.css";
import ListPage from "../../components/listPage/ListPage";
import LinkItem from "../../components/linkItem/LinkItem";
import searchIcon from "../../assets/Search.png";
import styles from "./FolderPage.module.css";
import FolderSelector from "../../components/folderSelector/FolderSelector";

function FolderPage() {
  const [folders, setFolders] = useState(null);
  console.log(folders);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = await getFolders("users/1/links?folderId=16");

        if (!folders?.data) return;
        setFolders([...folders.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ListPage>
        <form className={searchBarStyles.form}>
          <input name="search" placeholder="링크를 검색해 보세요."></input>
          <img
            className={searchBarStyles.searchIcon}
            src={searchIcon}
            alt="검색창 아이콘"
          />
        </form>
        <div className={styles.folderMenu}>
          <div className={styles.upperMenu}>
            <FolderSelector className={styles.folderSelector} />
            <svg
              className={styles.addFolder}
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.52151 2.46603C8.52151 2.17148 8.28272 1.9327 7.98817 1.9327C7.69362 1.9327 7.45484 2.17148 7.45484 2.46603L7.45484 7.96668L1.95425 7.96668C1.6597 7.96668 1.42092 8.20546 1.42092 8.50001C1.42092 8.79456 1.6597 9.03335 1.95425 9.03335L7.45484 9.03335L7.45484 14.534C7.45484 14.8285 7.69362 15.0673 7.98817 15.0673C8.28273 15.0673 8.52151 14.8285 8.52151 14.534L8.52151 9.03335L14.0222 9.03335C14.3168 9.03335 14.5555 8.79457 14.5555 8.50002C14.5555 8.20546 14.3167 7.96668 14.0222 7.96668L8.52151 7.96668L8.52151 2.46603Z"
                fill="#6D6AFE"
              />
            </svg>
          </div>
          <div className={styles.folderOption}>
            <h2 className={styles.title}>유용한 글</h2>
            <p className={styles.editor}>option</p>
          </div>
        </div>
        {folders?.length === 0 ? (
          <h2 className={styles.emptyList}>저장된 링크가 없습니다</h2>
        ) : (
          <div className={styles.linkList}>
            {folders?.map((linkInfo) => (
              <LinkItem key={linkInfo.id} linkInfo={linkInfo}></LinkItem>
            ))}
          </div>
        )}
      </ListPage>
    </div>
  );
}

export default FolderPage;
