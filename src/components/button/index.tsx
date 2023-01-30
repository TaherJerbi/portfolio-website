"use client";

import { classList } from "@/utils";
import { Loader } from "react-feather";

type PaddingX = `px-${number}`;
type PaddingY = `py-${number}`;
type FontSize = `text-${string}`;
type ButtonBackground = "blue" | "beige" | "beige-ecru" | "blue-dark" | "red";
type ButtonProps = {
  children: React.ReactNode;
  border?: boolean;
  borderWidth?: "2" | "4" | "8";
  flat?: boolean;
  shadow?: "1" | "xs" | "sm" | "md" | "lg";
  hoverShadow?: boolean;
  bg?: ButtonBackground;
  onClick?: () => void;
  bold?: boolean;
  fontSize?: FontSize;
  px?: PaddingX;
  py?: PaddingY;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "button";
  loading?: boolean;
};

export default function Button({
  children,
  shadow,
  flat = false,
  hoverShadow = true,
  bg = "blue",
  border = false,
  borderWidth = "2",
  fontSize = "text-2xl",
  px = "px-4",
  py = "py-4",
  bold = true,
  onClick,
  className,
  disabled = false,
  type,
  loading = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classList(
        {
          "bg-brand-blue": bg === "blue",
          "bg-brand-beige-light": bg === "beige",
          "bg-brand-beige-ecru": bg === "beige-ecru",
          "bg-brand-blue-dark": bg === "blue-dark",
          "bg-brand-red": bg === "red",
          "text-brand-beige-light":
            bg === "blue" || bg === "blue-dark" || bg === "red",
          "text-brand-marron-dark": bg === "beige" || bg === "beige-ecru",
          "shadow-brand-1": !flat && shadow === "1",
          "shadow-brand-xs": !flat && shadow === "xs",
          "shadow-brand-sm": !flat && shadow === "sm",
          "shadow-brand-md": !flat && shadow === "md",
          "shadow-brand-lg": !flat && shadow === "lg",
          "hover:shadow-brand-xs active:shadow-brand-1":
            hoverShadow && shadow === "1",
          "hover:shadow-brand-sm active:shadow-brand-xs":
            hoverShadow && shadow === "xs",
          "hover:shadow-brand-md active:shadow-brand-sm":
            hoverShadow && shadow === "sm",
          "hover:shadow-brand-lg active:shadow-brand-md":
            hoverShadow && shadow === "md",
          "hover:shadow-brand-xl active:shadow-brand-lg":
            hoverShadow && shadow === "lg",
          "border-brand-blue-dark": border,
          "border-2": border && borderWidth === "2",
          "border-4": border && borderWidth === "4",
          "border-8": border && borderWidth === "8",
          "font-bold": bold,
        },
        `${fontSize} ${px} ${py} transition 0.2s ease-in-out relative`,
        className ?? ""
      )}
    >
      {loading && <ButtonLoader bg={bg} />}
      {children}
    </button>
  );
}

function ButtonLoader({ bg }: { bg: ButtonBackground }) {
  return (
    <div
      className={classList(
        "w-full h-full absolute left-0 top-0 flex justify-center items-center",
        {
          "bg-brand-blue": bg === "blue",
          "bg-brand-beige-light": bg === "beige",
          "bg-brand-beige-ecru": bg === "beige-ecru",
          "bg-brand-blue-dark": bg === "blue-dark",
          "bg-brand-red": bg === "red",
        }
      )}
    >
      <Loader className="animate-spin" size={20} />
    </div>
  );
}
