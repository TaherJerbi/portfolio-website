import { classList } from "@/utils";
import { X } from "react-feather";

type WindowCardProps = {
  drag?: boolean;
  children: React.ReactNode;
  title: string;
  onClose?: () => void;
};

export default function WindowCard({
  drag,
  children,
  title,
  onClose,
}: WindowCardProps) {
  return (
    <div
      className={classList({
        "flex flex-col col-span-1 bg-brand-beige-light h-full w-full border-brand-blue-dark border-4 shadow-brand-lg rounded-xl overflow-hidden":
          true,
        "cursor-grab": !!drag,
      })}
    >
      <div className="px-2 py-1 flex justify-between items-center">
        <div className="flex space-x-2">
          {!onClose ? (
            <div className="rounded-full w-5 h-5 border-4 border-brand-blue-dark"></div>
          ) : (
            <div
              onClick={onClose}
              className="rounded-full flex justify-center items-center w-5 h-5 border-4 border-brand-blue-dark bg-brand-red cursor-pointer"
            >
              <X className="w-2 h-2 stroke-brand-beige-light stroke-[4px]" />
            </div>
          )}
          <div className="rounded-full w-5 h-5 border-4 border-brand-blue-dark"></div>
        </div>
        <div className="">
          <p className="text-xl font-bold">{title}</p>
        </div>
        <div></div>
      </div>
      <hr className="border-2 border-brand-blue-dark" />
      <div className="flex-grow">{children}</div>
    </div>
  );
}
