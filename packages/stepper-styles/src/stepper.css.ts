import { base, fullWidth } from "base-styles";
import { globalStyle, style } from "@vanilla-extract/css";
import { button } from "button-styles";
import { icon } from "icons-styles";

export const stepperContainer = style([
  base,
  {
    display: "flex",
    alignItems: "stretch",
    gap: "4px",

    selectors: {
      [`&${fullWidth}`]: {
        width: "100%",
      },
    },
  },
]);

export const stepperInput = style({
  padding: "4px",
  border: "1px solid",
  borderRadius: "4px",
  borderColor: "blue",
});

export const stepperButton = style({
  selectors: {
    [`${stepperContainer} ${button} &`]: {
      padding: "2px",
    },
  },
});

export const leftButtonIcon = style({
  selectors: {
    [`${icon}&`]: {
      transform: "rotate(180deg)",
    },
  },
});

globalStyle(`${stepperButton} ${icon}`, {
  height: "12px",
  width: "12px",
});
