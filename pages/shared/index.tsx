import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getLinksByUserIdAndFolderId } from "@/lib/api";
import SearchBar from "@/components/searchBar/SearchBar";
import LinkItem from "@/components/linkItem/LinkItem";
import Header from "@/components/header/Header";
import OwnerInfo from "./ownerInfo/OwnerInfo";
import Container from "@/container/Container";
import Footer from "@/components/footer/Footer";
import styles from "@/styles/shared.module.scss";

type Link = {
  created_at: string;
  description: string | null;
  folder_id: number | null;
  id: number | null;
  image_source: string | null;
  title: string | null;
  updated_at: string | null;
  url: string | null;
};

export default function Shared() {
  const [links, setLinks] = useState<Link[]>([]);
  const router = useRouter();

  const { user: userId, folder: folderId } = router.query;

  const handleFilter = (keyword: string) => {
    console.log(keyword);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getLinksByUserIdAndFolderId(
          Number(userId),
          folderId as string
        );
        if (!data) return;
        setLinks(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId, folderId]);

  return (
    <>
      <Header />
      <div className={styles.bg}>
        <OwnerInfo />
      </div>
      <Container className={styles.container}>
        <SearchBar onFilter={handleFilter} />
        <div className={styles.linkList}>
          {links &&
            links.map((linkInfo) => (
              <LinkItem key={linkInfo.id} linkInfo={linkInfo} isShared={true} />
            ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
