import { useEffect, useState } from "react";

import FolderListPage from "../pages/FolderListPage";
import styles from "./App.module.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { getFolders, getUserProfile } from "../api/api";

function App() {
  const [folders, setFolders] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = await getFolders();
        const userProfile = await getUserProfile();

        if (!folders) return;
        setFolders(folders);
        setUserProfile(userProfile);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Nav userProfile={userProfile} />
      <div className={styles.a}>hi</div>
      <FolderListPage folders={folders} />
      <div className={styles.a}>bye</div>
      <Footer />
    </div>
  );
}

export default App;
