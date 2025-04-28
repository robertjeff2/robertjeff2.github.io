# 3.24 面试

#### Echarts 性能调优,举例说明

#### 首屏加载速度

按需引入 ECharts
懒加载图表组件
预加载关键资源
数据分片加载:先加载核心数据,在加载完整数据

#### 3.权限系统:后端菜单怎么转前端路由: 前端写死 和动态加载

组件懒加载 ：使用 () => import() 语法实现组件懒加载
动态路由 ：通过 router.addRoute 动态添加路由
路径处理 ：确保前后端路径格式一致
权限控制 ：在路由守卫中完成菜单获取和路由添加
这种方案可以实现前后端权限的统一管理，后端只需要维护菜单结构，前端负责动态生成路由和菜单

#### 4.浏览器事件循环

为什么需要事件循环,
同步代码 > 微任务 > 渲染 > 宏任务

#### 5.回流跟重绘

回流(Reflow) ：当元素的尺寸、位置或内容发生变化，导致浏览器需要重新计算元素几何属性并重新构建渲染树的过程。
重绘(Repaint) ：当元素的外观样式改变（如颜色、背景色等），但不影响布局时，浏览器只需要重新绘制受影响区域的过程。

- 回流代价更高 ：回流必定引起重绘，但重绘不一定引起回流
- 现代浏览器优化 ：浏览器会批量处理回流操作（队列机制）
- CSS 属性影响 ：不同 CSS 属性触发的渲染阶段不同
- 最佳实践 ：
- 避免频繁读取会触发回流的属性（如 offsetWidth）
- 使用 requestAnimationFrame 安排动画
- 对复杂动画使用 position: absolute/fixed 脱离文档流
- 使用 CSS3 硬件加速（transform/opacity 等）

#### 6.一次性在页面上加载很多元素

虚拟滚动技术 (核心方案)
分块加载 (时间切片)
使用文档片段批量插入

1. 优先使用虚拟滚动 ：适合列表/表格等线性布局
2. 复杂布局使用分块加载 ：配合 requestIdleCallback
3. 减少 DOM 复杂度 ：简化节点结构和样式
4. 避免同步布局抖动 ：不要在循环中读取布局属性
5. 使用 CSS containment ：限制重绘范围
6. 大数据处理在 Worker 中完成 ：保持主线程流畅
   这些方法可以单独或组合使用，根据具体场景选择最适合的方案。虚拟滚动是处理超长列表最有效的解决方案。

#### 7.JS 判断是一个对象是空对象

```JavaScript
functionisEmptyObject(obj) {
  // 处理null和undefined
  if(obj==null)returnfalse;
  // 处理非对象类型
  if(typeof obj!=='object')returnfalse;
  // 处理数组
  if(Array.isArray(obj))returnobj.length===0;
  // 处理普通对象
  returnObject.keys(obj).length===0;
}
```

#### 8.一个数组,需要依次用里面的 id 去调用接口获得用户信息,返回一个用户信息数组,编写代码

```JavaScript
async function fetchUsersByIds(userIds) {
  const userInfos = [];
  for (const id of userIds) {
    try {
      const response = await fetch(`/api/users/${id}`);
      const userData = await response.json();
      userInfos.push(userData);
    } catch (error) {
      console.error(`获取用户 ${id} 信息失败:`, error);
      userInfos.push(null); // 失败时放入null保持数组顺序
    }
  }
  return userInfos;
}
```

```JavaScript
async function fetchUsersByIds(userIds, maxConcurrent = 3) {
  const userInfos = Array(userIds.length).fill(null);
  let index = 0;
  async function fetchBatch() {
    while (index < userIds.length) {
      const currentIndex = index++;
      const id = userIds[currentIndex];
      try {
        const response = await fetch(`/api/users/${id}`);
        const userData = await response.json();
        userInfos[currentIndex] = userData;
      } catch (error) {
        console.error(`获取用户 ${id} 信息失败:`, error);
      }
    }
  }
  // 创建并发请求
  const promises = Array(Math.min(maxConcurrent, userIds.length))
    .fill()
    .map(fetchBatch);

  await Promise.all(promises);
  return userInfos;
}
```

#### 9.forEach 跳出循环

使用 for...of 代替
使用异常跳出

#### 10.精度问题

toFixed(2) 四舍五入不准确
第三方数据库
BigInt
原理

#### 11.diff 算法

vue2/vue3

#### 12.uniapp 跟原生小程序的区别


#### 13.事件冒泡和捕获是什么有什么区别
事件冒泡和事件捕获是浏览器事件流的两个阶段。
事件捕获（Event Capturing） ：事件从最外层（window 或 document）开始，逐级向目标元素传递，直到触发目标元素。即“由外到内”。
事件冒泡（Event Bubbling） ： 事件从目标元素开始，逐级向外层父元素传递，直到最外层（document 或 window）。即“由内到外”。

区别：

- 顺序不同：捕获是外到内，冒泡是内到外。
- 默认行为：大多数浏览器事件默认采用冒泡阶段（如 click）。
- 事件监听参数：addEventListener 的第三个参数（或 options.capture）可以指定监听捕获阶段还是冒泡阶段，true 表示捕获，false（默认）表示冒泡。
- 实际开发中，事件冒泡用得更多，比如事件委托。

要“停止冒泡”，即阻止事件继续向上传递，可以在事件处理函数中调用 event.stopPropagation()