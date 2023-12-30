import Card from "./Card";
import styles from "./LinkItem.module.css";

function LinkItem({ linkInfo }) {
  return <Card>info : {linkInfo.id}</Card>;
}

export default LinkItem;
