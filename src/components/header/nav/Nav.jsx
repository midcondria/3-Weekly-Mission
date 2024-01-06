import { useEffect, useState } from "react";
import { getUserProfile } from "../../../api/api";
import Container from "../../container/Container";
import styles from "./Nav.module.css";
import logoImg from "../../../assets/logo.svg";
import UserMenu from "../../userMenu/UserMenu";
import Button from "../../button/Button";

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
          <Button>로그인</Button>
        )}
      </Container>
    </div>
  );
}

export default Nav;
