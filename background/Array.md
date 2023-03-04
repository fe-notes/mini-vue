## Array

### Array.from()

用这个创建一个数组

```js
Array.from("foo"); // <- ["f", "o", "o"]

Array.from([1, 2, 3], x => x + x); // <- [2, 4, 6]

// Set
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set); // <- ["foo", "bar", "baz"]

// Map
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map); // <- [[1, 2], [2, 4], [4, 8]]

// v is the value(undefined), i is the index
Array.from({ length: 5 }, (v, i) => i); // <- [0, 1, 2, 3, 4]
```

### Array.prototype.reduce()

第一个参数是 callback，第二个参数是初始值


### Array.prototype.slice()

第一个参数是开始位置，第二个参数是结束位置（支持负数）


### Array.prototype.splice()

第一个参数是开始位置，第二个参数是删除的个数，第三个参数是插入的元素

第一个参数必须存在，第二个参数为可选，如果第二个参数不存在，则删除从第一个参数开始到数组末尾的所有元素，如果存在，则删除从第一个参数开始第二个参数值的元素

第三个参数存在，就从 第一个参数 位置开始添加
