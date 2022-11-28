import { atom } from "recoil";

export const currentPageState = atom({
  key: "currentPage",
  default: "",
});

export const registerSwitchState = atom({
  key: "registerSwitch",
  default: true,
});

export const myRegisterSwitchState = atom({
  key: "myRegisterSwitch",
  default: true,
});

export const serverTimeState = atom({
  key: "serverTime",
  default: "",
});

export const currentErrorState = atom({
  key: "currentError",
  default: ["", false],
});
