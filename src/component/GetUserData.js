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
      console.log(userData);
      localStorage.setItem("nickname", res.data.nickname);
    })
    .catch((err) => {
      console.log("유저정보 받아오기 실패", err);
    });

  return userData;
};
