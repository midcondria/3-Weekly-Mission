import { useEffect, useState } from "react";
import { getFolders } from "../../api/api";
import classNames from "classnames";
import style from "./FolderSelector.module.css";

const URL_ENTIRE = "users/1/links";
const URL_FOLDERS = "users/1/folders";

function FolderSelector({ className }) {
  const [folders, setFolders] = useState(null);
  console.log(folders);

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
      <li>전체</li>
      {folders &&
        folders.map((folder) => <li key={folder.id}>{folder.name}</li>)}
    </ul>
  );
}

export default FolderSelector;
