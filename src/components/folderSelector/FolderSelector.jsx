import { useEffect, useState } from "react";
import { getFolders } from "../../api/api";
import classNames from "classnames";
import style from "./FolderSelector.module.css";

const URL_FOLDERS = "users/1/folders";

function Folder({ folderInfo, onClick }) {
  const handleClick = () => onClick(folderInfo.id);
  return (
    <li key={folderInfo.id} onClick={handleClick}>
      {folderInfo.name}
    </li>
  );
}

function FolderSelector({ className, onClick }) {
  const [folders, setFolders] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = await getFolders(URL_FOLDERS);

        if (!folders?.data) return;
        setFolders([...folders.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul className={classNames(style.selectMenus, className)}>
      <li onClick={() => onClick("")}>전체</li>
      {folders &&
        folders.map((folder) => (
          <Folder folderInfo={folder} onClick={onClick} />
        ))}
    </ul>
  );
}

export default FolderSelector;
