"use client";

import { useEffect, useState } from "react";

export default function ClientOnly({
  children,
  ...delegated
}: React.PropsWithChildren<{}>) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(typeof window !== "undefined");
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
