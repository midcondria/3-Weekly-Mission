import { calculateTimeDifference, formatDate } from "../utils/dateFormatter";
import Card from "./Card";
import styles from "./LinkItem.module.css";

const DEFAULT_IMAGE =
  "https://i.namu.wiki/i/Bo8E9Iml9tKvX2eMSrCiwRvk1WteT3J7YuhyNrYdrIRRUeXuwm095OsiQb3bp2G2FXp2LPmY4540LbmDnvuOVGwjEcCwNgaxKfIbZFF4umTBL-gmy13c8ok8pLIB666ixWb08pt96BClk54CkNqjZw.webp";
function LinkItem({ linkInfo }) {
  return (
    <Card className={styles.linkItem}>
      <a className={styles.thumb} href="/folder/1" target="_blank">
        <img src={linkInfo.imageSource || DEFAULT_IMAGE} alt="썸네일" />
      </a>
      <div className={styles.content}>
        <p className={styles.timeDifference}>
          {calculateTimeDifference(linkInfo.createdAt)}
        </p>
        <p className={styles.description}>{linkInfo.description}</p>
        <p className={styles.createdAt}>{formatDate(linkInfo.createdAt)}</p>
      </div>
    </Card>
  );
}

export default LinkItem;
