import { atom } from "recoil";

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});

export const todoState = atom<string>({
  key: "todoState",
  default: "",
});
export const todoEditState = atom<string>({
  key: "todoEditState",
  default: "",
});
