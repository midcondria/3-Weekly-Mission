import Card from "./Card";
import styles from "./LinkItem.module.css";

const DEFAULT_IMAGE =
  "https://i.namu.wiki/i/1KSjLQJ6kGnGlCaxPjhO1EzAiwCaIOSCkZsK6qd3T_bJARHiqd1XsHtZT3bKvEP_zjn6uZklJ6MsNT67pYSr4V3sQ_HRXSvTVvOu7T1ZBltd-nk7SU9RgFtIx0Yr9yOcZ4EgxCnYdoBs3oqnLALpCA.webp";

function calculateTimeDifference(input) {
  const targetDate = new Date(input);
  const currentDate = new Date();
  const timeDifference = currentDate - targetDate;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 31);

  //   console.log(
  //     "sec: " + seconds,
  //     "mins: " + minutes,
  //     "hours: " + hours,
  //     "days: " + days,
  //     "months: " + months
  //   );
  return `${days}일 전`;
}

function formatDate(input) {
  const date = new Date(input);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function LinkItem({ linkInfo }) {
  return (
    <Card>
      <div className={styles.thumb}>
        <img
          width="320px"
          height="220px"
          src={linkInfo.imageSource || DEFAULT_IMAGE}
        />
      </div>
      <div className={styles.content}>
        <p>{calculateTimeDifference(linkInfo.createdAt)}</p>
        <p>{linkInfo.description}</p>
        <p>{formatDate(linkInfo.createdAt)}</p>
      </div>
    </Card>
  );
}

export default LinkItem;
