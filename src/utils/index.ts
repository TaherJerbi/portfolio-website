export function classList(
  ...args: (
    | string
    | string[]
    | {
        [key: string]: boolean;
      }
  )[]
): string {
  const classes = args
    .map((arg) => {
      if (Array.isArray(arg)) return arg;
      if (typeof arg === "string") return arg;

      return Object.keys(arg).filter((key) => arg[key]);
    })
    .flat(1);
  return classes.join(" ");
}
