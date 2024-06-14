import clsx from "clsx";
import { icon } from "icons-styles";
import { IconProps } from "./types";

export const ChevronRightIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    className={clsx(icon, className)}
  >
    <path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z" />
  </svg>
);
