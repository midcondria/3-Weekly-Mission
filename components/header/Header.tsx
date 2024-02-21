import { useEffect, useState } from "react";
import { getUserProfileById } from "@/lib/api";
import UserMenu, { UserProfile } from "./userMenu/UserMenu";
import Container from "@/container/Container";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/PrimaryButton";

const initValue: UserProfile = {
  id: 0,
  created_at: "",
  name: "",
  image_source: "",
  email: "",
};

export default function Header() {
  const [userProfile, setUserProfile] = useState<UserProfile>(initValue);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getUserProfileById(1);

        setUserProfile(userProfile);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link href="/">
          <Image src="/assets/logo.svg" width="133" height="24" alt="홈 버튼" />
        </Link>
        {userProfile ? (
          <UserMenu userProfile={userProfile} />
        ) : (
          <Button>로그인</Button>
        )}
      </Container>
    </div>
  );
}
