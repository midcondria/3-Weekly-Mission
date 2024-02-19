import { getLinksByUserIdAndFolderId } from "../../api/api";
import { useEffect, useState } from "react";
import ListPage from "../../components/listPage/ListPage";
import LinkItem from "../../components/linkItem/LinkItem";
import styles from "./SharedPage.module.css";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";

function SharedPage() {
  const [folder, setFolder] = useState(null);
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("user");
  const folderId = searchParams.get("folder");

  const handleFilter = (keyword) => {
    console.log(keyword);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getLinksByUserIdAndFolderId(userId, folderId);
        if (!data) return;
        setFolder(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId, folderId]);

  return (
    <div>
      <ListPage isFavorite={true}>
        <SearchBar onFilter={handleFilter} />
        <div className={styles.linkList}>
          {folder &&
            folder.map((linkInfo) => (
              <LinkItem key={linkInfo.id} linkInfo={linkInfo} isShared={true} />
            ))}
        </div>
      </ListPage>
    </div>
  );
}

export default SharedPage;
