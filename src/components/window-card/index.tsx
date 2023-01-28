import { classList } from "@/utils";
import { X } from "react-feather";

type WindowCardProps = {
  drag?: boolean;
  children: React.ReactNode;
  title: string;
  onClose?: () => void;
  variant?: "default" | "dark";
};

export default function WindowCard({
  drag,
  children,
  title,
  variant = "default",
  onClose,
}: WindowCardProps) {
  return (
    <div
      className={classList(
        "flex flex-col col-span-1 h-full w-full border-brand-blue-dark border-4 shadow-brand-lg rounded-xl overflow-hidden",
        {
          "cursor-grab": !!drag,
          "bg-brand-blue-dark": variant === "dark",
          "bg-brand-beige-light": variant === "default",
        }
      )}
    >
      <div className={classList("px-2 py-1 flex justify-between items-center")}>
        <div className="flex space-x-2">
          {!onClose ? (
            <div
              className={classList(
                "rounded-full w-5 h-5 border-4 ",
                variant === "dark"
                  ? "border-brand-beige-light"
                  : "border-brand-blue-dark"
              )}
            ></div>
          ) : (
            <div
              onClick={onClose}
              className={classList(
                "rounded-full flex justify-center items-center w-5 h-5 border-4 bg-brand-red cursor-pointer",
                variant === "dark"
                  ? "border-brand-beige-light"
                  : "border-brand-blue-dark"
              )}
            >
              <X className="w-2 h-2 stroke-brand-beige-light stroke-[4px]" />
            </div>
          )}
          {variant === "default" && (
            <div className="rounded-full w-5 h-5 border-4 border-brand-blue-dark"></div>
          )}
        </div>
        <div>
          <p
            className={classList("text-xl font-bold", {
              "text-brand-beige-light": variant === "dark",
            })}
          >
            {title}
          </p>
        </div>
        <div></div>
      </div>
      <hr className="border-2 border-brand-blue-dark" />
      <div className="flex-grow bg-brand-beige-light">{children}</div>
    </div>
  );
}
