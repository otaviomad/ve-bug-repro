import { style } from "@vanilla-extract/css";
import { button } from "button-styles";

export const menuButton = style([
  button,
  {
    flexDirection: "column",
    padding: "6px",
  },
]);
