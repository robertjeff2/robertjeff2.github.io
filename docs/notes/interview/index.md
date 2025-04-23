# 前端面试准备

### **一、技术基础强化（核心必考）**

#### **1. JavaScript 底层原理**

- **闭包/作用域链**：手写闭包场景，解释内存泄漏风险。
- **原型链与继承**：实现寄生组合继承，对比 ES6 `class` 差异。
- **Event Loop**：结合宏任务/微任务分析代码执行顺序，解释 `Promise`、`async/await` 的底层逻辑。
- **手写高频 API**：实现 `Promise.all`、`深拷贝`、`防抖/节流`、`柯里化函数` 等。

#### **2. 框架核心原理**

- **React**：
  - 虚拟 DOM Diff 算法优化逻辑。
  - Hooks 原理（如 `useState` 如何绑定到 Fiber 节点）。
  - 性能优化手段（React.memo、useMemo 使用场景）。
- **Vue**：
  - 响应式原理（Vue2 的 Object.defineProperty 与 Vue3 的 Proxy 对比）。
  - 模板编译流程（AST 转换到 render 函数）。
  - 手写简易版 Vue 响应式系统。

#### **3. 浏览器与网络**

- **渲染机制**：从输入 URL 到页面渲染的完整流程，关键优化点（如 CRP 优化）。
- **缓存策略**：强缓存与协商缓存的 Header 字段，Service Worker 应用场景。
- **跨域解决方案**：CORS 预检请求细节，JSONP 安全性问题。

#### **4. 前端工程化**

- **Webpack**：
  - 打包流程（Loader 与 Plugin 的区别）。
  - 优化配置（Tree Shaking 原理、Code Splitting 策略）。
- **性能监控**：
  - 使用 Lighthouse 分析性能指标（FCP、LCP、CLS）。
  - 实现前端错误监控（SourceMap 还原线上错误）。

---

### **二、项目经验深挖（高频追问点）**

#### **1. 项目难点与解决方案**

- **典型问题**：
  - “介绍一个你主导的复杂项目，如何设计技术方案？”
  - “遇到过哪些性能瓶颈？如何定位并解决？”
- **回答策略**：
  - 使用 **STAR 法则**（背景、任务、行动、结果）。
  - **量化成果**：如“首屏加载时间从 3s 优化至 1.2s”。

#### **2. 技术选型与权衡**

- 准备问题：
  - “为什么选择 React 而不是 Vue？”
  - “微前端方案（如 qiankun）的落地挑战是什么？”
- 加分回答：
  - 结合业务场景（如团队协作成本、生态支持度）分析。

#### **3. 协作与流程优化**

- 举例说明：
  - 如何推动团队落地代码规范（ESLint + Git Hooks）。
  - 设计前端埋点系统或 CI/CD 自动化流程。

---

### **三、算法与数据结构（大厂必考）**

#### **1. 刷题重点**

- **高频题型**：数组/字符串操作、链表、二叉树、DFS/BFS、动态规划。
- **前端相关题**：DOM 树遍历（递归/迭代）、模板解析（栈结构应用）。

#### **2. 刷题策略**

- **LeetCode 精选**：优先刷 Hot 100 和前端厂题库（如字节、阿里）。
- **手写代码规范**：注重边界条件处理，代码可读性（命名、注释）。

---

### **四、系统设计能力（高阶岗位重点）**

#### **1. 前端架构设计**

- **场景题**：
  - “设计一个高并发场景下的前端缓存方案。”
  - “如何实现跨团队组件库的灰度发布？”
- **考察点**：模块拆分、状态管理、异常兜底方案。

#### **2. 全栈能力验证**

- 准备方向：
  - 实现一个 SSR（服务端渲染）方案。
  - 设计一个短链生成系统的前后端架构。

---

### **五、行为面试与软技能**

#### **1. 常见问题**

- “为什么离开上一家公司？”
- “如何推动技术方案在团队中落地？”
- “与产品经理发生分歧时如何处理？”

#### **2. 回答技巧**

- **避坑指南**：避免抱怨前公司，聚焦个人成长诉求。
- **展示潜力**：强调自主学习（如“通过研究 WebAssembly 优化项目性能”）。

---

### **六、简历优化与面试模拟**

#### **1. 简历打磨**

- **突出亮点**：使用关键词如“性能优化 40%”“主导组件库重构”。
- **数据支撑**：如“日均 PV 1000 万+的系统稳定性保障”。

#### **2. 模拟面试**

- **技术模拟**：找同行模拟框架原理追问（如“React Fiber 如何中断/恢复任务”）。
- **压力测试**：练习在白板上手写代码并解释思路。

---

### **七、资源推荐**

- **书籍**：《JavaScript 高级程序设计》《前端架构设计》
- **学习平台**：极客时间（前端进阶课）、Frontend Masters
- **工具**：CodeSandbox 在线编码练习、Chrome DevTools 性能分析实战

---

### **八、面试后复盘**

- **记录问题**：整理被问倒的技术点，针对性补漏。
- **横向对比**：分析不同公司对“3 年经验前端”的能力侧重（如大厂重算法，创业公司重落地速度）。

### JS 基础(一)

### 基础类型

原始类型

boolean null undefined number string symbol

`typeof null`会输出`object` 属于 js 遗留 bug

对象类型

对象类型存储的是地址 原始类型存储的是值

Object function array 等

> typeof 是否能正确判断类型？instanceof 能正确判断对象的原理是什么？

`typeof`对于原始类型来说，除了`null`都可以显示正确的类型

```javascript title="type示例"
typeof 1; // 'number'
typeof '1'; // 'string'
typeof undefined; // 'undefined'
typeof true; // 'boolean'
typeof Symbol(); // 'symbol'
```

对于对象来说 除了 function 都是 Object 所以不准确

instanceof 是用来判断对象的类型 内部机制是通过原型链来判断的

instanceof 支持自定义 , Symbol.hasInstance

### this

```javascript
function foo() {
  console.log(this.a);
}
var a = 1;
foo();
const obj = { a: 2, foo: foo };
obj.foo();
const c = new foo();
```

- 对于直接调用`foo`来说，不管`foo`函数被放在了什么地方，`this`一定是`window`
- 对于`obj.foo()`来说，我们只需要记住，谁调用了函数，谁就是`this`，所以在这个场景下`foo`函数中的`this`就是`obj`对象
- 对于`new`的方式来说，`this`被永远绑定在了`c`上面，不会被任何方式改变`this`

箭头函数中的 this 取决的是外层作用域的 this 如果没有,就往上层作用域查找 this

`new`的方式优先级最高，接下来是`bind`这些函数，然后是`obj.foo()`这种调用方式，最后是`foo`这种调用方式，同时，箭头函数的`this`一旦被绑定，就不会再被任何方式所改变。

### JS 基础(二)

> \== 和 === 有什么区别？

`==`来说，如果对比双方的类型**不一样**的话，就会进行**类型转换**，这也就用到了我们上一章节讲的内容。

`===` 是值和类型都相等

#### 闭包

涉及面试题：什么是闭包？

闭包的定义其实很简单：函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。

> 循环中使用闭包解决 `var` 定义函数的问题

```javascript
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
//输出一堆6 因为当timer执行的时候 for循环已经执行完毕
```

可以使用闭包解决

```javascript
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

在上述代码中，我们首先使用了立即执行函数将`i`传入函数内部，这个时候值就被固定在了参数`j`上面不会改变，当下次执行`timer`这个闭包的时候，就可以使用外部函数的变量`j`，从而达到目的。

#### 深浅拷贝

#### 浅拷贝

1.浅拷贝通过`Object.assign` 实现, `Object.assign`只会拷贝所有的属性值到新的对象中，如果属性值是对象的话，拷贝的是地址，所以并不是深拷贝。

2.通过展开运算符实现`...`

浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话,就需要用深拷贝实现

#### 深拷贝

1. `JSON.parse(JSON.stringify(object))`

局限性:

- 会忽略`undefined`
- 会忽略`symbol`
- 不能序列化函数
- 不能解决循环引用的对象

1. 不包含函数的 可以使用 `MessageChannel`
2. 自己实现深拷贝

通过判断类型,递归实现

```javascript title="简易版深拷贝"
function deepClone(obj) {
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null;
  }

  if (!isObject(obj)) {
    throw new Error('非对象');
  }

  let isArray = Array.isArray(obj);
  let newObj = isArray ? [...obj] : { ...obj };
  Reflect.ownKeys(newObj).forEach((key) => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
  });

  return newObj;
}

let obj = {
  a: [1, 2, 3],
  b: {
    c: 2,
    d: 3
  }
};
let newObj = deepClone(obj);
newObj.b.c = 1;
console.log(obj.b.c); // 2
```

#### 原型

> 面试题: 如何理解原型？如何理解原型链？

每一个对象上的内置属性 prototype

对象原型`__proto`\_\_

函数原型`prototype`

直接读取存在兼容性问题 Object.getPrototypeOf 方法获取(生产环境)

原型之间相互引用形成了链条,即一个指向一个最顶层为`null`

> 补充：new 操作符做的事情

> 1.创建一个新对象

> 2.将函数的 this 绑定到这个对象上

> 3.将函数的 prottyp 复制给新对象的\[prototype]属性

> 4.默认返回这个新对象

总结:

- `Object`是所有对象的爸爸，所有对象都可以通过`__proto__`找到它
- `Function`是所有函数的爸爸，所有函数都可以通过`__proto__`找到它
- 函数的`prototype`是一个对象
- 对象的`__proto__`属性指向原型，`__proto__`将对象和原型连接起来组成了原型链

### ES6

#### var let const

> 涉及面试题：什么是提升？什么是暂时性死区？var、let 及 const 区别？

var : 使用`var`声明的变量会被提升到作用域的顶部

`let`、`const`因为暂时性死区的原因，不能在声明前使用

`var`在全局作用域下声明变量会导致变量挂载在`window`上，其他两者不会

#### class 继承

在 js 中并不存在类, class 是语法糖本质还是函数

原型继承

```javascript
function Parent(value) {
  this.val = value;
}
Parent.prototype.getValue = function () {
  console.log(this.val);
};
function Child(value) {
  Parent.call(this, value);
}
Child.prototypy = new Parent();
const child = new Child(1);

child.getValue(); //1
chile instanceof Parent; //true
```

通过`Parent.call(this)`继承父类的属性，然后改变子类的原型为`new Parent()`来继承父类的函数

继承方式优点在于构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数，但是也存在一个缺点就是在继承父类函数的时候调用了父类构造函数，导致子类的原型上多了不需要的父类属性，存在内存上的浪费。

class 继承

```javascript
class Parent {
  constructor(value) {
    this.val = value;
  }
  getValue() {
    console.log(this.val);
  }
}
class Chile extends Parent {
  constructor(value) {
    super(value);
    this.val = value;
  }
}
let child = new Child(1);
child.getValue(); //1
chile instanceof Parent; ///true
```

`class`实现继承的核心在于使用`extends`表明继承自哪个父类，并且在子类构造函数中必须调用`super`，因为这段代码可以看成`Parent.call(this, value)`

#### 模块化

> 面试题：为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？

commonJs

在 Webpack 中经常可以见到 ,在打包后的 js 文件里

支持动态导入,使用`require()`

Es module

原生实现的模块化方案

```javascript title="Es module"
// 引入模块 API
import XXX from './a.js';
import { XXX } from './a.js';
// 导出模块 API
export function a() {}
export default function () {}
```

- CommonJS 支持动态导入，也就是`require(${path}/xx.js)`，后者目前不支持，但是已有提案
- CommonJS 是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响
- CommonJS 在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是 ES Module 采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化
- ES Module 会编译成`require/exports`来执行的

#### Proxy

vue3 的响应式实现原理

```javascript
let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property);
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      setBind(value, property);
      return Reflect.set(target, property, value);
    }
  };
  return new Proxy(obj, handler);
};

let obj = { a: 1 };
let p = onWatch(
  obj,
  (v, property) => {
    console.log(`监听到属性${property}改变为${v}`);
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`);
  }
);
p.a = 2; // 监听到属性a改变
p.a; // 'a' = 2
```

需要我们在`get`中收集依赖，在`set`派发更新，之所以 Vue3.0 要使用`Proxy`替换原本的 API 原因在于`Proxy`无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是`Proxy`可以完美监听到任何方式的数据改变，缺陷可能就是浏览器的兼容性不好了。

#### 数组方法 map,filter,reduce

`map`作用是生成一个新数组，遍历原数组，将每个元素拿出来做一些变换然后放入到新的数组中。

```javascript
[1, 2, 3].map((v) => v + 1); // -> [2, 3, 4]
```

另外`map`的回调函数接受三个参数，分别是当前索引元素，索引，原数组

> 经典 map 代码题

```javascript
['1', '2', '3'].map(parseInt); //[1,NaN,NaN]
```

- 第一轮遍历 parseInt('1', 0) -> 1
- 第二轮遍历 parseInt('2', 1) -> NaN
- 第三轮遍历 parseInt('3', 2) -> NaN

`filter`的作用也是生成一个新数组，在遍历数组的时候将返回值为`true`的元素放入新数组，我们可以利用这个函数删除一些不需要的元素

`reduce`可以将数组中的元素通过回调函数最终转换为一个值。

```javascript title="reduce"
const arr = [1, 2, 3];
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total); //6
//转换为
const arr = [1, 2, 3];
const sum = arr.reduce((acc, current) => acc + current, 0);
```

### JS 异步编程题

#### Promise

三个状态

Pending Fulfilled Rejected

在构造`Promise`的时候，构造函数内部的代码是立即执行的

```javascript
new Promise((resolve, reject) => {
  console.log('new Promise');
  resolve('success');
});
console.log('finifsh');
// new Promise -> finifsh
```

`Promise`实现了链式调用，也就是说每次调用`then`之后返回的都是一个`Promise`，并且是一个全新的`Promise`，原因也是因为状态不可变。如果你在`then`中 使用了`return`，那么`return`的值会被`Promise.resolve()`包装

主要解决了回调地狱的问题

Promise/A+ 规范 手写

### 面试专项题

#### 1.AJAX fetch axios

ajax 是一个技术统称 asynchronous javascript and xml

fetch 是一个浏览器原生 API, 支持 promise

axios 是第三方库 发起网络请求 内部 XMLHttpRequest 和 fetch 来实现

#### 2.防抖节流什么区别

1.两者区别,2.使用场景 ?

防抖: 防止抖动,等不抖了 在执行下一步.

输入框一直输入等输入停止后再去搜索,按钮多次点击

```javascript title="手写防抖函数"
function debounce(fn, delay = 200) {
  let timer = null;
  return function () {
    //如果存在定时器就重新计时
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}
```

#### 3.px % em rem vw/vh 区别

px 基本单位(绝对单位)

% 相对于父元素的比例

em 相对于当前元素

rem 相对于根节点

vw 屏幕宽度 1% vh 屏幕高度 1% vmin 最小值 vmax 最大值

#### 4.什么时候不能使用箭头函数

箭头函数有什么缺点? 没有 arguments 获取不到

不适合原型方法 构造方法

vue 组件本质上是一个 JS 对象 react (非 hooks)本质上是 es6class

#### 5.TCP 三次握手和四次挥手

建立 TCP 连接 ⇒ 在传输内容

连接是 TCP 协议 传输内容是 http 协议

1.客户端发送 syn

2.服务端 syn+1 ack

3.客户端回 ack+1

表示建立了连接

1.客户端发送 FIN 说要断开了

2.服务端回复 ACK 知道要要断开了(还有没有传输完成的数据继续传输)

3.服务端发送 FIN 数据传输完毕可以关闭

4.客户端回应 ACK 断开连接

#### 6.for..in 和 for ..of

使用于不同的数据类型

for of 不能遍历对象 可以遍历 MAP SET 构造器

主要是去访问可迭代对象 symbol.iterator next()

for in 用来访问可枚举数据 enmumerable:true 表示支持枚举 比如对象,数组等

#### 7.for await of 异步迭代循环

for await (let res of list ){

代替 promise.all 在循环中拿到结果

}

允许以同步的方式编写异步代码，极大地简化了异步编程。它消除了手动处理 Promise 和回调函数的需要，使得代码更加简洁和易于理解。此外，它还提供了错误处理机制：如果在迭代过程中发生错误，循环会立即终止，并将错误抛出，你可以使用`try...catch`语句来捕获和处理这些错误。

#### 8.虚拟列表实现

● 定高的实现方式

1. 根据元素个数 \* 高度定义一个外部容器
2. 根据视口高度 / 元素高度得到当前能展示的元素个数，并在此基础上加上前方和后方用来做缓冲的虚拟区域元素个数
3. 监听 scroll 事件，获取当前 scrollTop 值，根据 scrollTop 值 / 元素高度获得展示的第一个元素的索引值，根据这个索引值，计算需要渲染的第一个元素和最后一个元素，即加上虚拟区和展示区的元素
4. 此时每一个元素都是绝对定位的，高度为每一个元素的高度 \* 之前元素的个数

● 不定高的实现方式

1. 难点：首先外部容器的总长不确定，其次无法通过 scrollTop / 元素高度获得初识索引值
2. 针对难点 1，可以初始假定一个足够元素长度，因为精确地计算出容器总高度的意义不是很大，之后在每次滚动时，累加计算已经滚动过的元素高度，加上剩余元素的假定高度，实时更新容器的最终高度，但是 pc 端会出现拖拽滑轮滚动比不一致情况
3. 针对难点 2，根据视口高度累加展示的元素高度和，如果滑动到的高度高于已经累加过的元素高度和，则再进行累加，直到满足高度。但是需要一个 map 用来存储已经滑动过的元素高度信息，包括元素自身的高度和它之前的总高度 => 双链表+哈希

#### flex:1 代表什么

flex:1 等价于 flex-grow:1; flex-shrink:1; flex-basis:0%;

- 其中，flex-grow:1 表示该元素可以按比例分配父容器剩余空间；
- flex-shrink:1 表示当空间不足时可以缩小；
- flex-basis:0% 表示初始主轴空间为 0，所有空间都由 flex-grow 分配。
  flex:1 让元素在弹性布局中“自适应填充剩余空间”，常用于响应式布局
  如果有多个都是 flex:1 的元素，它们会按照它们的 flex-grow 属性值的比例来分配剩余空间。
