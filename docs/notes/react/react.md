# React 基础

## 基础

### jsx 语法

必须存在根元素 用（）包裹

不能插入 Object

变量使用{}

class 在 jsx 中使用 className 防止 class 关键字冲突

style 使用 style={{color:'red',fontSize:'12px'}} 把样式写成对象方式,不支持-连接

### react 组件

数据构造 constructor this.state={}

绑定方法 method=method.bind(this)

分为函数组件和类组件

类组件 class App extends React.component {}

事件绑定：方法小驼峰命名，通过{}传入方法

更新数据： this.setState({变量名:变量值})

setState 可能是同步也可能是异步的

组件间数据传递 props 在组件中 使用 this.props.xx 读取

传值: stuInfo={xxx} content="asdd" num={112}

props.children 获取\<button>新建\<button />的内容

使用 default 设置 props 的默认值

Hello.defalutProps={}&#x20;

react 的状态提升 相当于父组件给子组件传递一个方法,在这个方法中改变父组件的值,相当于 vue 中的 emit

早期类组件才能设置状态(现在有 hooks)

&#x20;&#x20;

受控组件&#x20;

原生: 获取 DOM 组件 拿到 value 值

react value 绑定到 state onChange 绑定输入方法&#x20;

表单控件完全受控于 state&#x20;

非受控组件:不绑定在 state&#x20;

在 react 中使用 React.createRef() //创建一个 ref 绑定到组件上,可以通过 ref 获取到组件

表单数据用 ref 去 DOM 节点获取

生命周期

诞生到销毁经历了一系列过程就叫做生命周期

render componentDidMount 调用接口

componentDidupdate &#x20;

&#x20;componentDidUnmount 销毁计时器

### hook

常用的有 useState useEffect

在没有编写 state 的情况下使用 state

useEffect &#x20;

- 纯函数:一个确切的参数在函数中运行后一定能得到一个确切的值
- 如果一个函数存在副作用 则称该函数不是一个纯函数,副作用的结果就是不可控不可预期
- 例子:发送请求,监听注册,取消注册,以前是使用生命周期勾子,现在使用 uesEffect
- 是 React 中的一个 Hook，用于在函数组件中执行副作用操作。副作用操作包括数据获取、订阅、手动更改 DOM，以及在组件生命周期的特定阶段执行代码。

使用场景

- 数据获取 ：在组件挂载时获取数据。
- 订阅 ：在组件挂载时订阅事件，并在卸载时取消订阅。
- 手动 DOM 操作 ：在组件更新时手动操作 DOM。

useEffect 是 React 函数组件中处理副作用的主要工具，类似于类组件中的生命周期方法 componentDidMount 、 componentDidUpdate 和 componentWillUnmount 。

// 可选的清理函数

return()=>{

// 清理逻辑

console.log('Cleaning up...');

}; 在下一次执行 effect 函数之前执行

依赖数组:

- 无依赖数组 ：如果不提供依赖数组，effect 函数将在每次组件渲染后执行。
- 空依赖数组 ：如果提供一个空数组，effect 函数只会在组件挂载和卸载时执行一次。
- 依赖数组 ：如果提供了依赖数组，effect 函数将在组件挂载、卸载以及依赖项发生变化时执行。

自定义 hook

用 use 开头 并在内部调用原生 hooks

### react-router

包裹根组件 BrowserRouter HashRouter 分别启动哈希模式和 history 模式

Router 主要是提供一个上下文环境

Route 在里面书写对应的路由 path 路由 element 匹配的组件

Navigate 导航到某个组件 调用后返回一个函数

useLocation()拿到跳转给的参数 location.state

NavLink a 标签

useParams 获取动态参数

useRouter 类似 vue 配置路由

Outlet 父组件里面嵌套子路由使用

在 useRoutes 配置 children 属性

### redux 状态管理

组件与组件之间统一的共享状态抽离到 redux 管理

props.store.getStore 获取仓库数据

redux 直接绑定到 app 组件
