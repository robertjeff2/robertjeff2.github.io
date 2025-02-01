# React 基础

## 认识语法

### JSX 语法

- JSX 是 JavaScript 的语法扩展，允许在 JavaScript 中编写类似 HTML 的代码
- JSX 会被编译为 React.createElement() 调用
- JSX 中使用大括号 {} 嵌入 JavaScript 表达式

```jsx
// JSX语法示例
const name = 'Jeff';
const element = (
  <div className="greeting">
    <h1>Hello, {name}!</h1>
    {/* JSX中的注释 */}
    {2 + 2} {/* 可以在大括号中进行计算 */}
  </div>
);
```

### 组件基础

- 函数组件：使用函数声明的简单组件
- 类组件：使用 class 关键字声明，继承自 React.Component
- 组件名称必须以大写字母开头

```jsx
// 函数组件
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 类组件
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 使用组件
<Welcome name="Jeff" />;
```

### Props 和 State

#### Props

- Props 是只读的，用于组件间数据传递
- Props 可以传递任意类型的数据，包括函数和 JSX

```jsx
// Props示例
function UserCard(props) {
  return (
    <div className="user-card">
      <img src={props.avatar} alt="avatar" />
      <h2>{props.name}</h2>
      <button onClick={props.onClick}>{props.buttonText}</button>
    </div>
  );
}

// 使用组件并传递props
<UserCard
  avatar="/avatar.jpg"
  name="Jeff"
  buttonText="查看详情"
  onClick={() => alert('点击了按钮')}
/>;
```

#### State

- State 用于管理组件内部状态
- 使用 useState Hook 或 class 组件中的 setState 更新状态
- State 更新可能是异步的

```jsx
// 函数组件中的State
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>当前计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}

// 类组件中的State
class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1
    }));
  };

  render() {
    return (
      <div>
        <p>当前计数: {this.state.count}</p>
        <button onClick={this.increment}>增加</button>
      </div>
    );
  }
}
```

### 生命周期

#### 函数组件（Hooks）

- useEffect：处理副作用
- useLayoutEffect：同步执行副作用
- 自定义 Hooks：复用状态逻辑

```jsx
// useEffect示例
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 组件挂载或userId变化时获取用户数据
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));

    // 清理函数
    return () => {
      // 组件卸载时执行清理
      console.log('组件卸载');
    };
  }, [userId]); // 依赖项数组

  if (!user) return <div>加载中...</div>;

  return <div>{user.name}</div>;
}
```

#### 类组件

- 挂载阶段：constructor -> render -> componentDidMount
- 更新阶段：render -> componentDidUpdate
- 卸载阶段：componentWillUnmount

```jsx
class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. constructor');
  }

  componentDidMount() {
    console.log('3. componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('4. componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('5. componentWillUnmount');
  }

  render() {
    console.log('2. render');
    return <div>{this.state.count}</div>;
  }
}
```

### 事件处理

- React 事件使用驼峰命名
- 事件处理器接收合成事件对象（SyntheticEvent）
- 注意绑定 this 的问题（箭头函数或 bind）

```jsx
class Toggle extends React.Component {
  state = { isOn: false };

  // 使用箭头函数自动绑定this
  handleClick = (e) => {
    // e 是合成事件对象
    this.setState((state) => ({
      isOn: !state.isOn
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// 函数组件中的事件处理
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表单默认提交
    console.log('表单提交');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">提交</button>
    </form>
  );
}
```

### 条件渲染

- 使用 if 语句或三元运算符
- 使用逻辑运算符 &&
- 防止组件返回 null 导致的问题

```jsx
function Greeting({ isLoggedIn }) {
  // if语句条件渲染
  if (isLoggedIn) {
    return <h1>欢迎回来！</h1>;
  }
  return <h1>请登录。</h1>;
}

function Notification({ message }) {
  return (
    <div>
      {/* 使用&&运算符 */}
      {message && <p>{message}</p>}

      {/* 使用三元运算符 */}
      {message ? <p>{message}</p> : <p>暂无消息</p>}
    </div>
  );
}
```

### 列表渲染

- 使用 map 方法渲染列表
- key 属性的重要性和正确使用
- 避免使用索引作为 key

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        // 使用唯一的id作为key
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// 使用组件
const todos = [
  { id: 1, text: '学习React' },
  { id: 2, text: '写代码' },
  { id: 3, text: '写文档' }
];

<TodoList todos={todos} />;
```
