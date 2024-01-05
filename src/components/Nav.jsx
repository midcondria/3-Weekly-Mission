import Container from "./Container";
import styles from "./Nav.module.css";
import logoImg from "../assets/logo.svg";
import UserMenu from "./UserMenu";
import { useEffect, useState } from "react";
import { getUserProfile } from "../api/api";

function Nav() {
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getUserProfile();

        if (!userProfile) return;
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
        <div>
          <a href="/">
            <img src={logoImg} alt="홈 버튼" />
          </a>
        </div>
        {userProfile ? (
          <UserMenu userProfile={userProfile} />
        ) : (
          <div className={styles.button}>로그인</div>
        )}
      </Container>
    </div>
  );
}

export default Nav;
