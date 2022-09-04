import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CLIENT_ID, REDIRECT_URI } from "../config/Oatuh";
import axios from "axios";
import useStores from "../store/useStores";

const KaKaoLogin = () => {
  const history = useHistory();
  const { userListStore } = useStores();

  // 로그인 jwt토큰 쿠키에 저장
  // const [cookies, setCookie, removeCookie] = useCookies(["appToken"]);

  // 인가코드
  const code = new URL(window.location.href).searchParams.get("code");

  // 토큰 받기
  useEffect(() => {
    (async () => {
      await axios
        .post("https://kauth.kakao.com/oauth/token", [], {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
          params: {
            grant_type: "authorization_code",
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URI,
            code: code,
          },
        })
        .then((res) => {
          console.log("카카오 토큰 받기 성공", res.data);
          const access_token = res.data["access_token"]; // 카카오 토큰
          getJWTtoken(access_token);
        })
        .catch((err) => {
          console.log("카카오 토큰 받기 실패", err);
        });
    })();
  }, []);

  // jwt토큰 받기
  const getJWTtoken = (accessToken) => {
    axios
      .post(
        "/api/auth/kakao",
        {
          accessToken: accessToken,
        },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
      .then((res) => {
        console.log("jwt토큰 받기 성공", res);
        // setCookie("appToken", res.data.appToken, { path: "/" });
        window.localStorage.setItem("token", res.data.appToken);
        if (localStorage.getItem("token")) {
          userListStore.getUserData(localStorage.getItem("token"));
        }
        history.replace("/movie");
      })
      .catch((err) => {
        console.log("🧨jwt토큰 받기 실패", err);
      });
  };
  return <></>;
};

export default KaKaoLogin;
