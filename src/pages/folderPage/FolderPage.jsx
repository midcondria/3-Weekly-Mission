import { useEffect, useState } from "react";
import { getLinksByUserIdAndFolderId } from "../../api/api";
import searchBarStyles from "../../components/searchBar/SearchBar.module.css";
import ListPage from "../../components/listPage/ListPage";
import LinkItem from "../../components/linkItem/LinkItem";
import searchIcon from "../../assets/Search.png";
import styles from "./FolderPage.module.css";
import FolderMenu from "../../components/folderMenu/FolderMenu";

function FolderPage() {
  const [folders, setFolders] = useState(null);

  const handleFetchClick = async (folder) => {
    try {
      const folders = await getLinksByUserIdAndFolderId(1, folder.id);

      if (!folders?.data) return;
      setFolders([...folders.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = await getLinksByUserIdAndFolderId(1);

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
        <FolderMenu onClick={handleFetchClick} />
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
