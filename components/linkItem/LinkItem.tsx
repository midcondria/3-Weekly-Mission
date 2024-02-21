import { calculateTimeDifference, formatDate } from "@/lib/dateFormatter";
import Image from "next/image";
import Card from "@/components/card/Card";
import styles from "./LinkItem.module.scss";
// import LinkMenu from "./linkMenu/LinkMenu";
import Link from "next/link";

export default function LinkItem({ linkInfo }: any) {
  const { image_source, created_at } = linkInfo;

  const handleModalClick = () => console.log("modal");

  return (
    <Card className={styles.linkItem}>
      <div className={styles.thumb}>
        <Link href="/folder/1" target="_blank">
          <Image src={image_source ?? "/assets/mika.webp"} alt="썸네일" fill />
        </Link>
        <AddFavoriteButton />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.timeDifference}>
            {calculateTimeDifference(created_at)}
          </p>
          {/* <LinkMenu onModalClick={handleModalClick} /> */}
        </div>
        <p className={styles.description}>{linkInfo.description}</p>
        <p className={styles.createdAt}>{formatDate(created_at)}</p>
      </div>
    </Card>
  );
}

function AddFavoriteButton() {
  return (
    <button className={styles.favorite}>
      <Image src="/assets/star.png" width="32" height="32" alt="추가 버튼" />
    </button>
  );
}
