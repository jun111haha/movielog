import axios from "axios";

export const GetUserData = async (appToken) => {
  let userData = [];

  if (!appToken) return;
  await axios
    .get("/api/auth/details", {
      headers: {
        Authorization: "Bearer " + appToken,
      },
    })
    .then((res) => {
      userData = res.data;
      localStorage.setItem("nickname", res.data.nickname);
      localStorage.setItem("id", res.data.kakao_id);
    })
    .catch((err) => {
      console.log("유저정보 받아오기 실패", err);
    });

  return userData;
};
