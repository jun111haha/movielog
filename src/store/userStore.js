import { action, makeObservable, observable, runInAction } from "mobx";
import axios from "axios";

export default class UserListStore {
  userList = [];

  constructor() {
    makeObservable(this, {
      userList: observable,

      getUserData: action,
    });
  }

  getUserData = async (appToken) => {
    if (!appToken) return;
    await axios
      .get("/api/auth/details", {
        headers: {
          Authorization: "Bearer " + appToken,
        },
      })
      .then((res) => {
        this.userList = res.data;
      })
      .catch((err) => {
        console.log("유저정보 받아오기 실패", err);
      });
  };
}
