"use strict";(self.webpackChunkjeff_blog=self.webpackChunkjeff_blog||[]).push([["408"],{9694:function(n,e,t){t.r(e),t.d(e,{default:()=>d});var s=t(5893),r=t(65);function i(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",h4:"h4"},(0,r.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"react-基础",children:["React 基础",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#react-基础",children:"#"})]}),"\n",(0,s.jsxs)(e.h2,{id:"认识语法",children:["认识语法",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#认识语法",children:"#"})]}),"\n",(0,s.jsxs)(e.h3,{id:"jsx-语法",children:["JSX 语法",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#jsx-语法",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"JSX 是 JavaScript 的语法扩展，允许在 JavaScript 中编写类似 HTML 的代码"}),"\n",(0,s.jsx)(e.li,{children:"JSX 会被编译为 React.createElement() 调用"}),"\n",(0,s.jsx)(e.li,{children:"JSX 中使用大括号 {} 嵌入 JavaScript 表达式"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"// JSX语法示例\nconst name = 'Jeff';\nconst element = (\n  <div className=\"greeting\">\n    <h1>Hello, {name}!</h1>\n    {/* JSX中的注释 */}\n    {2 + 2} {/* 可以在大括号中进行计算 */}\n  </div>\n);\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"组件基础",children:["组件基础",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#组件基础",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"函数组件：使用函数声明的简单组件"}),"\n",(0,s.jsx)(e.li,{children:"类组件：使用 class 关键字声明，继承自 React.Component"}),"\n",(0,s.jsx)(e.li,{children:"组件名称必须以大写字母开头"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:'// 函数组件\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n// 类组件\nclass Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n\n// 使用组件\n<Welcome name="Jeff" />;\n'})}),"\n",(0,s.jsxs)(e.h3,{id:"props-和-state",children:["Props 和 State",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#props-和-state",children:"#"})]}),"\n",(0,s.jsxs)(e.h4,{id:"props",children:["Props",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#props",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Props 是只读的，用于组件间数据传递"}),"\n",(0,s.jsx)(e.li,{children:"Props 可以传递任意类型的数据，包括函数和 JSX"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:'// Props示例\nfunction UserCard(props) {\n  return (\n    <div className="user-card">\n      <img src={props.avatar} alt="avatar" />\n      <h2>{props.name}</h2>\n      <button onClick={props.onClick}>{props.buttonText}</button>\n    </div>\n  );\n}\n\n// 使用组件并传递props\n<UserCard\n  avatar="/avatar.jpg"\n  name="Jeff"\n  buttonText="查看详情"\n  onClick={() => alert(\'点击了按钮\')}\n/>;\n'})}),"\n",(0,s.jsxs)(e.h4,{id:"state",children:["State",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#state",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"State 用于管理组件内部状态"}),"\n",(0,s.jsx)(e.li,{children:"使用 useState Hook 或 class 组件中的 setState 更新状态"}),"\n",(0,s.jsx)(e.li,{children:"State 更新可能是异步的"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"// 函数组件中的State\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>当前计数: {count}</p>\n      <button onClick={() => setCount(count + 1)}>增加</button>\n    </div>\n  );\n}\n\n// 类组件中的State\nclass Counter extends React.Component {\n  state = { count: 0 };\n\n  increment = () => {\n    this.setState((state) => ({\n      count: state.count + 1\n    }));\n  };\n\n  render() {\n    return (\n      <div>\n        <p>当前计数: {this.state.count}</p>\n        <button onClick={this.increment}>增加</button>\n      </div>\n    );\n  }\n}\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"生命周期",children:["生命周期",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#生命周期",children:"#"})]}),"\n",(0,s.jsxs)(e.h4,{id:"函数组件hooks",children:["函数组件（Hooks）",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#函数组件hooks",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"useEffect：处理副作用"}),"\n",(0,s.jsx)(e.li,{children:"useLayoutEffect：同步执行副作用"}),"\n",(0,s.jsx)(e.li,{children:"自定义 Hooks：复用状态逻辑"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"// useEffect示例\nimport { useState, useEffect } from 'react';\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    // 组件挂载或userId变化时获取用户数据\n    fetch(`/api/users/${userId}`)\n      .then((res) => res.json())\n      .then((data) => setUser(data));\n\n    // 清理函数\n    return () => {\n      // 组件卸载时执行清理\n      console.log('组件卸载');\n    };\n  }, [userId]); // 依赖项数组\n\n  if (!user) return <div>加载中...</div>;\n\n  return <div>{user.name}</div>;\n}\n"})}),"\n",(0,s.jsxs)(e.h4,{id:"类组件",children:["类组件",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#类组件",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"挂载阶段：constructor -> render -> componentDidMount"}),"\n",(0,s.jsx)(e.li,{children:"更新阶段：render -> componentDidUpdate"}),"\n",(0,s.jsx)(e.li,{children:"卸载阶段：componentWillUnmount"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"class LifecycleDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n    console.log('1. constructor');\n  }\n\n  componentDidMount() {\n    console.log('3. componentDidMount');\n  }\n\n  componentDidUpdate(prevProps, prevState) {\n    console.log('4. componentDidUpdate');\n  }\n\n  componentWillUnmount() {\n    console.log('5. componentWillUnmount');\n  }\n\n  render() {\n    console.log('2. render');\n    return <div>{this.state.count}</div>;\n  }\n}\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"事件处理",children:["事件处理",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#事件处理",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"React 事件使用驼峰命名"}),"\n",(0,s.jsx)(e.li,{children:"事件处理器接收合成事件对象（SyntheticEvent）"}),"\n",(0,s.jsx)(e.li,{children:"注意绑定 this 的问题（箭头函数或 bind）"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"class Toggle extends React.Component {\n  state = { isOn: false };\n\n  // 使用箭头函数自动绑定this\n  handleClick = (e) => {\n    // e 是合成事件对象\n    this.setState((state) => ({\n      isOn: !state.isOn\n    }));\n  };\n\n  render() {\n    return (\n      <button onClick={this.handleClick}>\n        {this.state.isOn ? 'ON' : 'OFF'}\n      </button>\n    );\n  }\n}\n\n// 函数组件中的事件处理\nfunction Form() {\n  const handleSubmit = (e) => {\n    e.preventDefault(); // 阻止表单默认提交\n    console.log('表单提交');\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type=\"submit\">提交</button>\n    </form>\n  );\n}\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"条件渲染",children:["条件渲染",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#条件渲染",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"使用 if 语句或三元运算符"}),"\n",(0,s.jsx)(e.li,{children:"使用逻辑运算符 &&"}),"\n",(0,s.jsx)(e.li,{children:"防止组件返回 null 导致的问题"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"function Greeting({ isLoggedIn }) {\n  // if语句条件渲染\n  if (isLoggedIn) {\n    return <h1>欢迎回来！</h1>;\n  }\n  return <h1>请登录。</h1>;\n}\n\nfunction Notification({ message }) {\n  return (\n    <div>\n      {/* 使用&&运算符 */}\n      {message && <p>{message}</p>}\n\n      {/* 使用三元运算符 */}\n      {message ? <p>{message}</p> : <p>暂无消息</p>}\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"列表渲染",children:["列表渲染",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#列表渲染",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"使用 map 方法渲染列表"}),"\n",(0,s.jsx)(e.li,{children:"key 属性的重要性和正确使用"}),"\n",(0,s.jsx)(e.li,{children:"避免使用索引作为 key"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"function TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map((todo) => (\n        // 使用唯一的id作为key\n        <li key={todo.id}>{todo.text}</li>\n      ))}\n    </ul>\n  );\n}\n\n// 使用组件\nconst todos = [\n  { id: 1, text: '学习React' },\n  { id: 2, text: '写代码' },\n  { id: 3, text: '写文档' }\n];\n\n<TodoList todos={todos} />;\n"})})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(i,{...n})}):i(n)}let d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["notes%2Freact%2Freact.md"]={toc:[{text:"认识语法",id:"认识语法",depth:2},{text:"JSX 语法",id:"jsx-语法",depth:3},{text:"组件基础",id:"组件基础",depth:3},{text:"Props 和 State",id:"props-和-state",depth:3},{text:"Props",id:"props",depth:4},{text:"State",id:"state",depth:4},{text:"生命周期",id:"生命周期",depth:3},{text:"函数组件（Hooks）",id:"函数组件hooks",depth:4},{text:"类组件",id:"类组件",depth:4},{text:"事件处理",id:"事件处理",depth:3},{text:"条件渲染",id:"条件渲染",depth:3},{text:"列表渲染",id:"列表渲染",depth:3}],title:"React 基础",headingTitle:"React 基础",frontmatter:{}}}}]);