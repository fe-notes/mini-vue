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

<img src="./images/Map.png" />

当运行 `a = null` 时，那块内存地址并不会被回收，因为 map 里面还引用了，如果时 WeakMap，那么这块内存地址就会被回收，因为 WeakMap 里的 key 是弱引用。
