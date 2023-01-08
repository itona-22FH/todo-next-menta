import { atom } from "recoil";

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});

export const todoState = atom<string>({
  key: "todoState",
  default: "",
});
