const effectStack: Function[] = [];
let activeEffect: Function | undefined;

export function effect(fn: Function) {
  const effectFn = () => {
    try {
      activeEffect = effectFn;
      effectStack.push(activeEffect);
      return fn();
    }
    finally {
      effectStack.pop();
      activeEffect = effectStack[effectStack.length - 1];
    }
  };
  // 定义的时候就执行一次，这时候就会经过代理，
  // 将 activeEffect 设置为 effectFn, 并保存到 dep 中
  effectFn();
  return effectFn;
}

/**
 * target: Map[key, Set]
 */

const targetMap = new WeakMap();
export function track(target: object, key: string | symbol) {
  if (!activeEffect) return;

  let depsMap = targetMap.get(target);
  if (!depsMap)
    targetMap.set(target, (depsMap = new Map()));

  let dep = depsMap.get(key);
  if (!dep)
    depsMap.set(key, (dep = new Set()));

  dep.add(activeEffect);
}

export function trigger(target: object, key: string | symbol) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;

  const dep = depsMap.get(key);
  if (!dep) return;

  dep.forEach((effect: Function) => effect());
}
