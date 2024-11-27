// translate

import { Dictionary } from "@/app/[lang]/dictionaries";

export const translate = (path: any, trans: Dictionary) => {
  const value = getNestedValue(trans, path);
  return value === undefined ? path : value;
};

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
          : `${K}`
        : never;
    }[keyof T]
  : never;

export function getNestedValue<T, P extends NestedKeyOf<T>>(
  obj: T,
  path: P | string
): any {
  if (!obj || !path) return undefined;

  const keys = typeof path === "string" ? path.split(".") : [];
  const result = keys.reduce((current: any, key: string) => {
    return current && typeof current === "object" ? current[key] : undefined;
  }, obj);

  // If the result is an object (like loan_types_list), return a string indicating it's not directly renderable
  if (result && typeof result === "object" && !Array.isArray(result)) {
    return "[Object - Cannot be rendered directly]";
  }

  return result;
}
