import searchBarStyles from "../components/SearchBar.module.css";
import ListPage from "../components/ListPage";
import LinkItem from "../components/LinkItem";

function FolderListPage({ folders }) {
  console.log(folders?.folder);
  const favoriteFolder = folders?.folder;
  return (
    <ListPage userInfo="">
      <div style={{ textAlign: "center" }}>FolderListPage</div>
      <form className={searchBarStyles.form}>
        <input name="search" placeholder="링크를 검색해 보세요." />
      </form>
      <div>
        {favoriteFolder &&
          favoriteFolder.links.map((linkInfo) => (
            <LinkItem linkInfo={linkInfo}></LinkItem>
          ))}
      </div>
    </ListPage>
  );
}

export default FolderListPage;
