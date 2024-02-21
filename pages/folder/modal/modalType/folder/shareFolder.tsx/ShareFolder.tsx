import CloseButton from "@/components/button/closeButton/CloseButton";
import { useModal } from "../../../Modal";
import styles from "./ShareFolder.module.scss";
import ImageButton from "@/components/button/imageButton/ImageButton";
import { useRouter } from "next/router";

export default function ShareFolder() {
  const { handleClose } = useModal();

  const router = useRouter();
  const { folderId } = router.query;

  const shareUrl = `http://localhost:3000/shared?user=1&folder=${folderId}`;

  return (
    <div className={styles.modal}>
      <CloseButton className={styles.closeButton} onClick={handleClose} />
      <h2 className={styles.title}>폴더 공유</h2>
      <h3 className={styles.folderName}>폴더명</h3>
      <div className={styles.shareButton}>
        {/* <KakaoButton /> */}
        <FacebookButton shareUrl={shareUrl} />
        <CopyLinkButton shareUrl={shareUrl} />
      </div>
    </div>
  );
}

function KakaoButton({ shareUrl }: any) {
  console.log(typeof window);
  //   const { Kakao } = typeof window ?? window;

  //   const shareToKakao = () => {
  //     Kakao.Share.sendDefault({
  //       objectType: "feed",
  //       content: {
  //         title: "폴더 이름",
  //         imageUrl:
  //           "https://i.namu.wiki/i/8AS4OSvzlQ_Tw8Jvy4g7gQb0w0JTQRf4lhvsqUYUqOcTTmeMFVBHCL72kO6PR2NDilN2i2wuZidniZgvLs0w3o8r8Xt8RgOgh-L7x1HoPju69RSHFg9LAOuyScKgcTasezzJm8g9JYUp-Vy5WHpI_Q.webp",
  //         link: {
  //           webUrl: SHARE_URL,
  //         },
  //       },
  //       buttons: [
  //         {
  //           title: "웹으로 이동",
  //           link: {
  //             webUrl: SHARE_URL,
  //           },
  //         },
  //       ],
  //     });
  //   };

  //   return (
  //     <ImageButton
  //       src="/assets/kakaoShare.png"
  //       width={42}
  //       height={42}
  //       onClick={shareToKakao}
  //       alt="카카오톡 공유"
  //     >
  //       카카오톡
  //     </ImageButton>
  //   );
}

function FacebookButton({ shareUrl }: any) {
  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent(shareUrl);
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  return (
    <ImageButton
      src="/assets/facebookShare.png"
      width={42}
      height={42}
      onClick={shareToFacebook}
      alt="페이스북 공유"
    ></ImageButton>
  );
}

function CopyLinkButton({ shareUrl }: any) {
  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImageButton
      src="/assets/link.svg"
      width={20}
      height={20}
      onClick={copyToClipBoard}
      alt="링크 복사"
    >
      <h3>링크 복사</h3>
    </ImageButton>
  );
}
