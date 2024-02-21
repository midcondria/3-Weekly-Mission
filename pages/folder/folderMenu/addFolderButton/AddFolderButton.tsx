import { useRouter } from "next/router";
import styles from "./AddFolderButton.module.scss";
import Image from "next/image";
import classNames from "classnames";

function AddFolderButton({ className }: any) {
  const router = useRouter();

  const handleClick = () => {
    const currentPath = router.pathname;
    router.push(`${currentPath}?type=addFolder`);
  };

  return (
    <button
      className={classNames(styles.addFolder, className)}
      onClick={handleClick}
    >
      <Image
        src="/assets/add.png"
        width="16"
        height="16"
        alt="폴더 추가 버튼"
      />
    </button>
  );
}

export default AddFolderButton;
