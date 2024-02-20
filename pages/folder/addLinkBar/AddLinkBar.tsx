import Button from "@/components/button/Button";
import styles from "./AddLinkBar.module.scss";
import Image from "next/image";

export default function AddLinkBar() {
  return (
    <form className={styles.form}>
      <Image
        className={styles.icon}
        src="/assets/link.svg"
        alt="링크 아이콘"
        width="20"
        height="20"
      />
      <input name="link" placeholder="링크를 추가해 보세요" />
      <Button className={styles.button}>추가하기</Button>
    </form>
  );
}
