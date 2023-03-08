## Map

### Map.prototype.clear()

清空 Map对象的所有元素

### Map.prototype.delete(key)

删除 Map对象中指定的元素

### Map.prototype.entries()

```js
const map = new Map();

map.set("foo", "bar");
map.set("baz", "qux");

for (const [key, value] of map.entries())
  console.log(key, value);
// foo bar
// baz qux
```

### WeakMap 和 Map 的区别

WeakMap 的 key 只能是对象，而 Map 的 key 可以是任意值

因为 WeakMap 的 key 是弱引用（不算到 GC 的引用计数中），所以 WeakMap 的 key 是不可枚举的。
