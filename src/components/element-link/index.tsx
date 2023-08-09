"use client";

export function ElementLink({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {

  const onClick = () => {
    window.history.replaceState(null, "", `#${id}`);
    const element = document.querySelector(`#${id}`);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
