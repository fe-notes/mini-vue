import { hasChanged, isObject, isReactive } from "@mini-vue/utils";
import { track, trigger } from "./effect";

const proxyMap = new WeakMap();

export function reactive(target: object): object | undefined {
  if (!isObject(target))
    throw new Error("target is not an object");

  // 处理 reactive 嵌套的情况 -> reactive(reactive({}))
  if (isReactive(target)) return;

  // 处理重复代理的情况 -> a = reactive(obj); b = reactive(obj);
  if (proxyMap.has(target)) return proxyMap.get(target);

  const proxy = new Proxy(target, {
    get(target: object, key: string | symbol, receiver: any) {
      if (key === "__isReactive") return true;
      track(target, key);
      const res = Reflect.get(target, key, receiver);
      return isObject(res) ? reactive(res) : res;
    },
    set(target: object, key: string | symbol, value: unknown, receiver: any) {
      const oldValue = Reflect.get(target, key, receiver);

      Reflect.set(target, key, value, receiver);

      // 值改变才去触发副作用函数
      if (hasChanged(oldValue, value))
        trigger(target, key);

      return true;
    },
  });

  proxyMap.set(target, proxy);

  return proxy;
}
