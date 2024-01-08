const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getFolders(endpoint) {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error("데이터 로딩에 실패했습니다.");
  }
  return await response.json();
}

export async function getUserProfile(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  if (!response.ok) {
    throw new Error("데이터 로딩에 실패했습니다.");
  }
  return await response.json();
}
