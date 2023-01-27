// Client only

import React from "react";

export default function ClientOnly({
  children,
  ...delegated
}: React.PropsWithChildren<{}>) {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(typeof window !== "undefined");
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
