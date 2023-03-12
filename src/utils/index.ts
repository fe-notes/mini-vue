export function isObject(value: unknown): value is Object {
  return value !== null && typeof value === "object";
}

export function isArray(value: unknown): value is Array<any> {
  return Array.isArray(value);
}

export function isReactive(target: object) {
  return target && (target as any).__isReactive;
}

export function hasChanged(oldValue: unknown, value: unknown) {
  return oldValue !== value && !(Number.isNaN(oldValue) && Number.isNaN(value));
}
