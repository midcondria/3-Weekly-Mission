import FolderListPage from "../pages/folderListPage/FolderListPage";
import styles from "./App.module.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";

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
