import { useEffect, useState } from "react";

import FolderListPage from "../pages/FolderListPage";
import styles from "./App.module.css";
import Footer from "./Footer";
import { getFolders } from "../api/api";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <FolderListPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
