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

export const waitingRegisterState = atom({
  key: "waitingRegister",
  default: [],
});

export const courseListFilteringState = atom({
  key: "courseListFiltering",
  default: [],
});
export const prevRegisterFilteringState = atom({
  key: "prevRegisterFiltering",
  default: [],
});
export const registerFilteringState = atom({
  key: "registerFiltering",
  default: [],
});
