import { atom } from "recoil";


export const onSnapshotState = atom<boolean>({
    key: "onSnapshotState",
    default: false,
  });
  