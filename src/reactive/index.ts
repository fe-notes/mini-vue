import { isObject } from "../../utils";

export function reactive(target: object) {
  if (!isObject(target))
    throw new Error("target is not an object");

  const proxy = new Proxy(target, {
    get(target: object, key: string | symbol) {
      return (target as any)[key];
    },
    set(target: object, key: string | symbol, value: unknown) {
      (target as any)[key] = value;
      return true;
    },
  });
}
