"use client";

import { classList } from "@/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant: "blue" | "beige";
  fontSize?: string;
  fontStyles?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant,
  className = "text-2xl font-bold px-4 py-4",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classList({
        "bg-brand-blue": variant === "blue",
        "bg-brand-beige-ecru": variant === "beige",
        "text-brand-beige-light": variant === "blue",
        "text-brand-marron-dark": variant === "beige",
        "shadow-brand-md hover:shadow-brand-lg transition 0.2s ease-in-out active:shadow-brand-md":
          true,
        [className]: true,
      })}
    >
      {children}
    </button>
  );
}
