import { style } from "@vanilla-extract/css";
import { base } from "base-styles";

export const button = style([
  base,
  {
    padding: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "white",
    display: "inline-flex",
    alignItems: "center",
    color: "black",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
]);
