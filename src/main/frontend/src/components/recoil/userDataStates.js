import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfo",
  default: {},
});

export const courseListState = atom({
  key: "courseList",
  default: [],
});

export const userPrevRegisterState = atom({
  key: "userPrevRegister",
  default: [],
});

export const userRegisterState = atom({
  key: "userRegister",
  default: [],
});
