import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  small?: boolean;
  outline?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  outline,
  small,
  icon,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={` w-full transition rounded-lg hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed realtive 
  ${outline ? "bg-white" : "bg-rose-500"}
  ${outline ? "border-black" : "border-rose-500"}
  ${outline ? "text-black" : "text-white"}
  ${small ? "py-1" : "py-3"}
  ${small ? "text-sm" : "text-md"}
  ${small ? "font-light" : "font-semibold"}
  ${small ? "border-[1px]" : "border-2"}

    `}
    >
      {label}
    </button>
  );
};

export default Button;