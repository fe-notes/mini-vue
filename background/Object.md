## Object

### 改变基本数据类型的 constructor

```js
let val = null;
val.constructor = 1; // TypeError: val is null

val = "abc";
val.constructor = Number; // val.constructor === String

val.foo = "bar";
val.foo === undefined; // <- true
```

给 `null` 和 `undefined` 赋值 `constructor` 属性会报错, 但是给基本数据类型赋值 constructor 属性不会报错, 但是不会生效（即不会保存你的修改）。就是说，每当把这样的基本类型当成对象使用时，其对应的构造函数的实例就会在语句执行后立即被创建和丢弃。

### 通过 `Object.create` 创建对象

```js
const person = {
  isHuman: false,
  printIntroduction() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

Object.getPrototypeOf(me) === person; // <- true
```
