import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/button/Button";
import ImageButton from "@/components/button/imageButton/ImageButton";
import Container from "@/container/Container";
import styles from "@/styles/signup.module.scss";
import PasswordInput from "@/components/input/passwordInput/PasswordInput";
import EmailInput from "@/components/input/emailInput/EmailInput";
import SignupHeader from "./header/SignupHeader";

export default function Signup() {
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);

  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  const toggleEncryptPassword = () => {
    setEyeOpen(!eyeOpen);
  };

  const handleSumbit = () => {
    console.log("회원가입");
  };

  return (
    <div className={styles.bg}>
      <Container className={styles.container}>
        <SignupHeader onClick={goToHome} />
        <div className={styles.signupForm}>
          <EmailInput label="이메일" />
          <PasswordInput
            label="비밀번호"
            eyeOpen={eyeOpen}
            onClick={toggleEncryptPassword}
          />
          <PasswordInput
            label="비밀번호 확인"
            eyeOpen={eyeOpen}
            onClick={toggleEncryptPassword}
          />
        </div>
        <Button className={styles.signupButton} onClick={handleSumbit}>
          회원가입
        </Button>
        <div className={styles.socialLogin}>
          다른 방식으로 가입하기
          <div className={styles.snsButtons}>
            <GoogleButton />
            <KakaoButton />
          </div>
        </div>
      </Container>
    </div>
  );
}

function GoogleButton() {
  const handleClick = () => {
    console.log("구글 로그인");
  };

  return (
    <ImageButton
      src="/assets/google.svg"
      width={42}
      height={42}
      onClick={handleClick}
      alt="구글 로그인 버튼"
    />
  );
}

function KakaoButton() {
  const handleClick = () => {
    console.log("카카오 로그인");
  };

  return (
    <ImageButton
      src="/assets/kakao.png"
      width={42}
      height={42}
      onClick={handleClick}
      alt="카카오 로그인 버튼"
    />
  );
}
