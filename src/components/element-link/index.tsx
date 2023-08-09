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
    const element = document.querySelector(`#${id}`);
    console.log(element);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
