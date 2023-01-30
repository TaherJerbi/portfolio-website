"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function useScrollIntoView() {
  const pathname = usePathname();
  useEffect(() => {
    const element =
      window.location.hash && document.querySelector(window.location.hash);

    if (!element) return;

    element.scrollIntoView();
  }, [pathname]);
}

export function ScrollIntoViewClientComponent() {
  useScrollIntoView();
  return null;
}
