export function classList(
  classes:
    | string[]
    | {
        [key: string]: boolean;
      }
) {
  if (Array.isArray(classes)) {
    return classes.join(" ");
  }
  return Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(" ");
}
