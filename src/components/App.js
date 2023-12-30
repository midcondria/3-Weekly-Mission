import styles from "./App.module.css";
import Footer from "./Footer";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <Nav />
      <div className={styles.body}>hi</div>
      <Footer />
    </div>
  );
}

export default App;
