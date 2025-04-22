# 3.7 面试

- 1.事件循环,宏任务微任务
- 2.vue router
- 3.pinia vuex
- 4.内存快照
- 5.组件间传值 父子兄弟传值方式
- 6.promise 原理
- 7.权限控制,分角色
- 8.keep-alive 原理属性
  > keep-alive 是一个内置组件,用来在多个组件间动态切换时缓存被移除的组件实例
  > 定制行为 include exclude prop 来定制行为
  > 传入 max prop 来限制可被缓存的最大组件实例数
  > 指定 max 后内部执行类 LRU 算法: 如果缓存的实例数量即将超过指定的 max,则最久没有访问的缓存实例被销毁 底层原理 set?
  > 生命周期勾子 onActivated 和 onDeacticated 注册两个状态的生命周期勾子
