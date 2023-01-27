import { classList } from "@/utils";

export function Tooltip({
  children,
  text,
  className,
}: {
  children: React.ReactNode;
  text: string;
  className?: string;
}) {
  return (
    <div className="relative group">
      <div
        className={classList([
          "absolute top-0 left-0 -mt-12 -ml-12 p-2 rounded-xl shadow-brand-xs group-hover:opacity-100 opacity-0 transition-opacity 0.2 ease-in-out",
          className ?? "",
        ])}
      >
        {text}
      </div>
      {children}
    </div>
  );
}
