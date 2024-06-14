import clsx from "clsx";
import { button } from "button-styles";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => (
  <button className={clsx(className, button)} onClick={onClick}>
    {children}
  </button>
);
