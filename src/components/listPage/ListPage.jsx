import Button from "../button/Button";
import Container from "../container/Container";
import styles from "./ListPage.module.css";
import linkInputStyles from "../linkInput/LinkInput.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserProfileById } from "../../api/api";

function ListPage({ children, onModalClick, isFavorite = false }) {
  return (
    <>
      <div className={styles.bg}>
        {isFavorite ? (
          <SharedPageHeader />
        ) : (
          <FolderPageHeader onModalClick={onModalClick} />
        )}
      </div>
      <Container className={styles.container}>{children}</Container>
    </>
  );
}

function SharedPageHeader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userProfile, setUserProfile] = useState({});
  const userId = searchParams.get("user");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserProfileById(userId);
        if (!data.length > 0) return;
        console.log(data[0]);
        setUserProfile(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <>
      <img
        className={styles.icon}
        src={userProfile?.image_source}
        alt="폴더 주인 아이콘"
      />
      <div className={styles.texts}>
        <p className={styles.owner}>{userProfile?.email}</p>
        <h1 className={styles.folderName}>{userProfile?.name}</h1>
      </div>
    </>
  );
}

function FolderPageHeader({ onModalClick }) {
  return (
    <form className={linkInputStyles.form}>
      <svg
        className={linkInputStyles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.6461 2.79223C11.5891 1.88144 12.8521 1.37747 14.1631 1.38886C15.4741 1.40025 16.7281 1.9261 17.6552 2.85314C18.5822 3.78018 19.108 5.03424 19.1194 6.34523C19.1308 7.65621 18.6269 8.91922 17.7161 9.86223L17.7059 9.87256L15.206 12.3725C14.6991 12.8795 14.0891 13.2717 13.4174 13.5222C12.7456 13.7728 12.0278 13.876 11.3127 13.8248C10.5975 13.7736 9.90176 13.5692 9.27257 13.2254C8.64338 12.8816 8.09547 12.4066 7.66602 11.8325C7.39035 11.4639 7.46563 10.9417 7.83417 10.666C8.20272 10.3903 8.72495 10.4656 9.00063 10.8342C9.28693 11.2169 9.6522 11.5336 10.0717 11.7628C10.4911 11.992 10.955 12.1282 11.4317 12.1624C11.9085 12.1965 12.387 12.1277 12.8349 11.9607C13.2827 11.7936 13.6894 11.5322 14.0273 11.1942L14.0274 11.1941L16.522 8.69945C17.1262 8.07131 17.4604 7.23142 17.4528 6.35971C17.4452 5.48572 17.0947 4.64968 16.4766 4.03165C15.8586 3.41362 15.0226 3.06306 14.1486 3.05546C13.2765 3.04789 12.4363 3.38239 11.808 3.98709L10.3792 5.40761C10.0528 5.7321 9.52517 5.73056 9.20068 5.40417C8.8762 5.07779 8.87774 4.55015 9.20412 4.22567L10.6375 2.80067L10.6461 2.79223Z"
          fill="#6D6AFE"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.58263 7.47744C7.25439 7.22685 7.97218 7.12367 8.68732 7.17488C9.40247 7.2261 10.0982 7.43052 10.7274 7.77428C11.3566 8.11803 11.9045 8.59309 12.334 9.16722C12.6096 9.53576 12.5344 10.058 12.1658 10.3337C11.7973 10.6093 11.275 10.5341 10.9994 10.1655C10.7131 9.78276 10.3478 9.46606 9.92833 9.23689C9.50887 9.00772 9.04503 8.87144 8.56827 8.83729C8.0915 8.80315 7.61298 8.87194 7.16514 9.03899C6.7173 9.20605 6.31062 9.46747 5.9727 9.80551L3.478 12.3002C2.8738 12.9284 2.53959 13.7683 2.54716 14.64C2.55476 15.514 2.90532 16.35 3.52335 16.968C4.14138 17.5861 4.97742 17.9366 5.85141 17.9442C6.72311 17.9518 7.563 17.6176 8.19114 17.0134L9.61075 15.5938C9.93618 15.2683 10.4638 15.2683 10.7893 15.5938C11.1147 15.9192 11.1147 16.4469 10.7893 16.7723L9.36426 18.1973L9.35393 18.2074C8.41092 19.1182 7.14791 19.6222 5.83692 19.6108C4.52594 19.5994 3.27188 19.0736 2.34484 18.1465C1.4178 17.2195 0.891952 15.9654 0.88056 14.6544C0.869168 13.3435 1.37314 12.0805 2.28393 11.1374L2.29408 11.1271L4.79397 8.62722C4.79394 8.62725 4.79401 8.62718 4.79397 8.62722C5.30084 8.1202 5.91092 7.728 6.58263 7.47744Z"
          fill="#6D6AFE"
        />
      </svg>
      <input name="link" placeholder="링크를 추가해 보세요" />
      <Button
        className={linkInputStyles.button}
        value="ADD_LINK"
        onModalClick={onModalClick}
      >
        추가하기
      </Button>
    </form>
  );
}

export default ListPage;
