# VUE 原理与源码深入

## keep-alive 原理

内置组件,用来在多个组件间动态切换时缓存被移除的组件实例
属性 include :缓存的组件名称 支持字符串正则数组 exclude:不缓存的组件 prop 来定制行为
传入 max prop 来限制可被缓存的最大组件实例数
指定 max 后内部执行类 LRU 算法: 如果缓存的实例数量即将超过指定的 max,则最久没有访问的缓存实例被销毁 底层原理 set?
生命周期勾子 onActivated 和 onDeacticated 注册两个状态的生命周期勾子,只有开启了才会增加

## 虚拟 DOM DIFF

key 值 不能去重复
vue2:双端 diff 算法:头和头 尾和尾 头和尾 尾和头
没有给`key`的 diff 算法: for 循环重新渲染元素 替换掉,如果有多的就会新增,如果减少了就会删除,有不必要的更新,没有复用
有`key` 五步走, isSameNodeType 判断是否是同一个类型且 key 相等,先进行前序对比 如果有存在不同的 就跳出循环进行尾序对比,比 vue2 少了 交叉对比,如果有新的节点 就挂在 如果旧节点多旧卸载

> 特殊乱序情况: 1.构建新节点的映射关系 keyToNewIndexMap 2.记录新节点在旧节点中的位置数组 3.如果出现交叉求最长递增子序列(贪心+二分查找) 4.如果当前遍历的节点不在子序列中说明要进行移动


## nextTick 原理
就是对同一个promise进行链式的then来控制它们的执行顺序
在vue2中 是在flushSchedulerQueue中执行的
在vue3中 是在flushJobs中执行的
update 异步更新队列的job在微任务队列
在nextTick中执行 两次then   就是在promise.then中执行.then()
pormise.then() 
pormise.then(fn)
