import styles from "./ListPage.module.css";

function ListPage({ userInfo, children }) {
  console.log(userInfo);
  return (
    <div style={{ textAlign: "center" }}>
      ListPage
      <div>{children}</div>
    </div>
  );
}

export default ListPage;
