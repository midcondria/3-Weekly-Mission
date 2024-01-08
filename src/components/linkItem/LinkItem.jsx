import { calculateTimeDifference, formatDate } from "../../utils/dateFormatter";
import Card from "../card/Card";
import styles from "./LinkItem.module.css";

const DEFAULT_IMAGE =
  "https://i.namu.wiki/i/Bo8E9Iml9tKvX2eMSrCiwRvk1WteT3J7YuhyNrYdrIRRUeXuwm095OsiQb3bp2G2FXp2LPmY4540LbmDnvuOVGwjEcCwNgaxKfIbZFF4umTBL-gmy13c8ok8pLIB666ixWb08pt96BClk54CkNqjZw.webp";
function LinkItem({ linkInfo }) {
  return (
    <Card className={styles.linkItem}>
      <a className={styles.thumb} href="/folder/1" target="_blank">
        <img
          src={
            linkInfo.imageSource || linkInfo["image_source"] || DEFAULT_IMAGE
          }
          alt="썸네일"
        />
      </a>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.timeDifference}>
            {calculateTimeDifference(
              linkInfo.createdAt || linkInfo["created_at"]
            )}
          </p>
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3.5" cy="8.5" r="1.5" fill="#333236" />
            <circle cx="10.5" cy="8.5" r="1.5" fill="#333236" />
            <circle cx="17.5" cy="8.5" r="1.5" fill="#333236" />
          </svg>
        </div>
        <p className={styles.description}>{linkInfo.description}</p>
        <p className={styles.createdAt}>
          {formatDate(linkInfo.createdAt || linkInfo["created_at"])}
        </p>
      </div>
    </Card>
  );
}

export default LinkItem;
