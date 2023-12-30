import styles from "./ListPage.module.css";

function ListPage({ children }) {
  return (
    <div style={{ textAlign: "center" }}>
      ListPage
      <div>{children}</div>
    </div>
  );
}

export default ListPage;
