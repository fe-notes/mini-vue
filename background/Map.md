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

