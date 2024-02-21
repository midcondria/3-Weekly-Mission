import { useState } from "react";
import styles from "./FolderMenu.module.scss";
import FolderSelector from "./folderSelector/FolderSelector";
import AddFolderButton from "./addFolderButton/AddFolderButton";
import FloatingActionButton from "./addFolderButton/FloatingActionButton";
import FolderEditor from "./folderEditor/FolderEditor";

function FolderMenu() {
  const [currentFolderName, setCurrentFolderName] = useState("전체");
  const isEditable = currentFolderName !== "전체";
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 767;

  const handleFolderClick = (folderName: string) => {
    setCurrentFolderName(folderName);
  };

  return (
    <>
      <div className={styles.upperMenu}>
        <FolderSelector
          className={styles.folderSelector}
          onClick={handleFolderClick}
        />
        {isMobile ? (
          <FloatingActionButton className={styles.addFolderFAB} />
        ) : (
          <AddFolderButton className={styles.addFolder} />
        )}
      </div>
      <div className={styles.folderOption}>
        <h2 className={styles.title}>{currentFolderName}</h2>
        {isEditable && <FolderEditor />}
      </div>
    </>
  );
}

export default FolderMenu;
