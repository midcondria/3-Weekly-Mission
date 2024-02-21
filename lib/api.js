import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getLinksByUserIdAndFolderId(userId, folderId = "") {
  const { data } = await axios.get(
    `${BASE_URL}/users/${userId}/links?folderId=${folderId}`
  );
  if (!data) {
    throw new Error("폴더별 링크 정보 로딩에 실패했습니다.");
  }
  return data;
}

export async function getFoldersByUserId(userId) {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}/folders`);
  if (!data) {
    throw new Error("나의 폴더 정보 로딩에 실패했습니다.");
  }
  return data;
}

export async function getUserProfileById(userId) {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
  if (!data.data) {
    throw new Error("유저 정보 로딩에 실패했습니다.");
  }
  return data.data[0];
}

export async function getFolderInfoByFolderId(folderId) {
  const { data } = await axios.get(`${BASE_URL}/folders/${folderId}`);
  if (!data.data) {
    throw new Error("폴더 정보 로딩에 실패했습니다.");
  }
  return data.data[0];
}
