// Client only

import React from "react";

export default function ClientOnly({
  children,
  ...delegated
}: React.PropsWithChildren<{}>) {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
