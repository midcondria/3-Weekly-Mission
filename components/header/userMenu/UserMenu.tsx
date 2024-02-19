import Image from "next/image";
import styles from "./UserMenu.module.css";

export type UserProfile = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
};

function UserMenu({ userProfile }: { userProfile: UserProfile }) {
  const { image_source, email } = userProfile;
  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton}>
        <Image src={image_source} width="28" height="28" alt="유저 메뉴" />
      </button>
      <div>{email}</div>
    </div>
  );
}

export default UserMenu;
