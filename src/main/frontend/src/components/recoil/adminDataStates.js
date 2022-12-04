import { atom } from "recoil";

export const currentAdminPageState = atom({
  key: "currentPage",
  default: "",
});

export const userDataState = atom({
  key: "userData",
  default: [],
});

export const subjectDataState = atom({
  key: "subjectData",
  default: [],
});

export const registerDataState = atom({
  key: "registerData",
  default: [],
});
