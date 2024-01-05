import { useEffect, useState } from "react";

import FolderListPage from "../pages/FolderListPage";
import styles from "./App.module.css";
import Footer from "./Footer";
import { getFolders } from "../api/api";
import Header from "./Header";

function App() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = await getFolders();

        if (!folders) return;
        setFolders(folders);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.body}>
        <FolderListPage folders={folders} />
      </div>
      <Footer />
    </>
  );
}

export default App;
