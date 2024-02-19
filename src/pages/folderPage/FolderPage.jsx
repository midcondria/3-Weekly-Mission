import { useEffect, useState } from "react";
import { getLinksByUserIdAndFolderId } from "../../api/api";
import ListPage from "../../components/listPage/ListPage";
import LinkItem from "../../components/linkItem/LinkItem";
import styles from "./FolderPage.module.css";
import FolderMenu from "../../components/folderMenu/FolderMenu";
import ModalContainer from "../../components/modal/ModalContainer";
import SearchBar from "../../components/searchBar/SearchBar";
import { filterdFolders } from "../../utils/searchFilter";

function FolderPage() {
  const [folders, setFolders] = useState(null);
  const [folderId, setFolderId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleModalClick = (modalType) => {
    setIsModalOpen(true);
    setModalType(modalType);
  };

  const handleFetchClick = (folder) => {
    setFolderId(folder.id);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleFilter = (keyword) => {
    setKeyword(keyword);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getLinksByUserIdAndFolderId(1, folderId);
        if (!data) return;
        const filteredFolders = filterdFolders(data, keyword);
        setFolders(filteredFolders);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [folderId, keyword]);

  return (
    <div>
      {isModalOpen && (
        <ModalContainer modalType={modalType} onModalCloseClick={closeModal} />
      )}
      <ListPage onModalClick={handleModalClick}>
        <SearchBar onFilter={handleFilter} />
        <FolderMenu
          onClick={handleFetchClick}
          onModalClick={handleModalClick}
        />
        {folders?.length === 0 ? (
          <h2 className={styles.emptyList}>저장된 링크가 없습니다</h2>
        ) : (
          <div className={styles.linkList}>
            {folders?.map((linkInfo) => (
              <LinkItem
                key={linkInfo.id}
                linkInfo={linkInfo}
                onModalClick={handleModalClick}
              />
            ))}
          </div>
        )}
      </ListPage>
    </div>
  );
}

export default FolderPage;
