import { atom } from "recoil";

export const todoEditState = atom<string>({
    key: "todoEditState",
    default: "",
  });
  