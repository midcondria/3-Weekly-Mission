import { useEffect, useState } from "react";

import FolderListPage from "../pages/FolderListPage";
import styles from "./App.module.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { getFolders } from "../api/api";

function App() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFolders();
        if (!result) return;
        setFolders(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <div className={styles.a}>hi</div>
      <FolderListPage folders={folders} />
      <div className={styles.a}>bye</div>
      <Footer />
    </div>
  );
}

export default App;
