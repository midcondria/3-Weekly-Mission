import { useRouter } from "next/router";
import classNames from "classnames";
import styles from "./FloatingActionButton.module.scss";
import Image from "next/image";

function FloatingActionButton({ className }: any) {
  const router = useRouter();

  const handleClick = () => {
    const currentPath = router.pathname;
    router.push(`${currentPath}?type=addFolder`);
  };

  return (
    <button className={classNames(styles.fab, className)} onClick={handleClick}>
      <p className={styles.text}>폴더 추가</p>
      <Image
        src="/assets/add.png"
        width="16"
        height="16"
        alt="폴더 추가 버튼"
      />
    </button>
  );
}

export default FloatingActionButton;
