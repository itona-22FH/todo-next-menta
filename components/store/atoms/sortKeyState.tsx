import { atom } from "recoil";


export const sortKeyState = atom<string>({
    key: "sortKeyState",
    default: "all",
  });
  