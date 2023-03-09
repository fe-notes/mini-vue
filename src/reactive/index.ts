import { isObject } from "@mini-vue/utils";

export function reactive(target: object) {
  if (!isObject(target))
    throw new Error("target is not an object");

  const proxy = new Proxy(target, {
    get(target: object, key: string | symbol) {
      return Reflect.get(target, key);
    },
    set(target: object, key: string | symbol, value: unknown) {
      Reflect.set(target, key, value);
      return true;
    },
  });
}
