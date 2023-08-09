import { atom } from "recoil";
export const modalState = atom({
  key: "modalState",
  default: false,
});

// const textState = atom({
//   key: 'textState', // unique ID (with respect to other atoms/selectors)
//   default: '', // default value (aka initial value)
// });
