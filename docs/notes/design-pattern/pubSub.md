# 发布订阅模式

## 简介

发布-订阅模式（Pub-Sub）是一种设计模式，用于在对象之间实现松耦合的通信。它允许一个对象（发布者）向多个对象（订阅者）发送消息，而发布者和订阅者之间不需要直接知道对方的存在。订阅者可以订阅感兴趣的事件，发布者可以在事件发生时通知所有订阅者。

## 适用场景

这种模式在前端开发中非常常见，比如：

事件驱动编程：DOM 事件（如 click、input）就是典型的发布-订阅模式。

状态管理：在 Vue 或 React 中，全局状态管理工具（如 Vuex、Redux）的核心思想就是基于发布-订阅模式。

组件通信：父子组件、兄弟组件之间的通信可以通过自定义事件（如 Vue 的 $emit 和 $on）实现。

异步任务管理：比如消息队列、WebSocket 消息推送等。

## 手写代码实现

```javascript
class PubSub {
  constructor() {
    this.events = {}; // 用于存储事件和对应的回调函数
  }

  // 订阅事件
  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = []; // 如果事件不存在，初始化一个空数组
    }
    this.events[event].push(callback); // 将回调函数添加到事件列表中
  }

  // 发布事件
  publish(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => {
        callback(...args); // 执行所有订阅该事件的回调函数
      });
    }
  }

  // 取消订阅
  unsubscribe(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((cb) => cb !== callback); // 过滤掉指定的回调函数
    }
  }
}
```

- events 对象：用于存储事件名称和对应的回调函数列表。
- subscribe 方法：允许订阅者订阅某个事件，并将回调函数添加到事件列表中。
- publish 方法：当事件被触发时，遍历并执行所有订阅该事件的回调函数。
- unsubscribe 方法：允许订阅者取消订阅，移除指定的回调函数。

## 举例说明

可以用它来实现一个简单的消息通知系统

```javascript
const pubsub = new PubSub();

// 订阅事件
const logMessage = (message) => {
  console.log('Received message:', message);
};
pubsub.subscribe('message', logMessage);

// 发布事件
pubsub.publish('message', 'Hello, World!'); // 输出: Received message: Hello, World!

// 取消订阅
pubsub.unsubscribe('message', logMessage);
pubsub.publish('message', 'This will not be logged'); // 无输出
```

## 扩展点

- 性能优化：如果事件列表很大，如何优化回调函数的执行效率？
  > 可以通过限制回调函数的数量、使用异步执行（如 setTimeout 或 Promise）来避免阻塞主线程。
- 一次性订阅：如何实现只触发一次的事件订阅？
  > 可以在 subscribe 方法中添加一个标志位，执行一次后自动取消订阅。
- 错误处理：如何处理回调函数中的错误？
  > 可以在 publish 方法中添加 try-catch，确保一个回调函数的错误不会影响其他回调函数的执行。

## 总结

发布-订阅模式的优点是实现了对象之间的解耦，让代码更易于维护和扩展，特别适合处理复杂的异步通信场景。
