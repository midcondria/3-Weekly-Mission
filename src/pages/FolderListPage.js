import searchBarStyles from "../components/SearchBar.module.css";
import ListPage from "../components/ListPage";
import LinkItem from "../components/LinkItem";
import searchIcon from "../assets/Search.png";

function FolderListPage({ folders }) {
  console.log(folders?.folder);
  const favoriteFolder = folders?.folder;
  return (
    <div style={{ textAlign: "center" }}>
      FolderListPage
      <ListPage userInfo="">
        <form className={searchBarStyles.form}>
          <input name="search" placeholder="링크를 검색해 보세요."></input>
          <img
            className={searchBarStyles.searchIcon}
            src={searchIcon}
            alt="검색창 아이콘"
          />
        </form>
        <div>
          {favoriteFolder &&
            favoriteFolder.links.map((linkInfo) => (
              <LinkItem linkInfo={linkInfo}></LinkItem>
            ))}
        </div>
      </ListPage>
    </div>
  );
}

export default FolderListPage;
