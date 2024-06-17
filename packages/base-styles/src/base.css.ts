import { style } from "@vanilla-extract/css";

export const fontFamilyBase = style({
  fontFamily: "Helvetica, sans-serif",
});

export const base = style([
  fontFamilyBase,
  {
    fontSize: "16px",
    lineHeight: "1.5",
  },
]);

export const fullWidth = style({});
