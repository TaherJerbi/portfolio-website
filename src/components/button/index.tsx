import { classList } from "@/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant: "blue" | "beige";
  fontSize?: string;
  fontStyles?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant,
  fontSize = "text-2xl",
  fontStyles = "font-bold",
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
        [fontStyles]: true,
        [fontSize]: true,
        "px-4 py-4 shadow-brand-md hover:shadow-brand-lg transition 0.2s ease-in-out active:shadow-brand-md":
          true,
      })}
    >
      {children}
    </button>
  );
}
