import { useRouter } from "next/router";
import SigninHeader from "./header/SigninHeader";
import Container from "@/container/Container";
import styles from "@/styles/signin.module.scss";

export default function Signin() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };
  return (
    <div className={styles.bg}>
      <Container className={styles.container}>
        <SigninHeader onClick={goToHome} />
      </Container>
    </div>
  );
}
