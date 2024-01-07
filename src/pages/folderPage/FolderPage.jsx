import { useEffect, useState } from "react";
import { getFolders } from "../../api/api";
import searchBarStyles from "../../components/searchBar/SearchBar.module.css";
import ListPage from "../../components/listPage/ListPage";
import LinkItem from "../../components/linkItem/LinkItem";
import searchIcon from "../../assets/Search.png";
import styles from "./FolderPage.module.css";

function FolderPage() {
  const [folders, setFolders] = useState(null);
  const folderInfo = folders;
  console.log(folderInfo);

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
        <div className={styles.linkList}>
          {folderInfo &&
            folderInfo?.map((linkInfo) => (
              <LinkItem key={linkInfo.id} linkInfo={linkInfo}></LinkItem>
            ))}
        </div>
      </ListPage>
    </div>
  );
}

export default FolderPage;
