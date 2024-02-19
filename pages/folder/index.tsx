import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import PageContainer from "@/container/PageContainer";
import SearchBar from "@/components/searchBar/SearchBar";
import styles from "@/styles/folder.module.scss";

export default function folder() {
  return (
    <>
      <Header />
      <PageContainer className={styles.content}>
        <SearchBar />
      </PageContainer>
      <Footer />
    </>
  );
}
