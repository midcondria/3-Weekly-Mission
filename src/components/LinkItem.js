import Card from "./Card";
import styles from "./LinkItem.module.css";

const DEFAULT_IMAGE =
  "https://i.namu.wiki/i/1KSjLQJ6kGnGlCaxPjhO1EzAiwCaIOSCkZsK6qd3T_bJARHiqd1XsHtZT3bKvEP_zjn6uZklJ6MsNT67pYSr4V3sQ_HRXSvTVvOu7T1ZBltd-nk7SU9RgFtIx0Yr9yOcZ4EgxCnYdoBs3oqnLALpCA.webp";

function calculateTimeDifference(input) {
  const targetDate = new Date(input);
  const currentDate = new Date();
  const timeDifference = currentDate - targetDate;

  const minutes = Math.floor(timeDifference / (60 * 1000));
  const hours = Math.floor(timeDifference / (60 * 60 * 1000));
  const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  const months = Math.floor(timeDifference / (31 * 24 * 60 * 60 * 1000));
  const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));

  if (years) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }
  if (months) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }
  if (days) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }
  if (hours) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }
  return minutes >= 1 ? `${minutes} minutes ago` : "1 minute ago";
}

function formatDate(input) {
  const date = new Date(input);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

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
