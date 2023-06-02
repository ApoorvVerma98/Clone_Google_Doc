import { atom } from "recoil";

export const documentName = atom({
  key: "documentName",
  default: "Untitled document",
});