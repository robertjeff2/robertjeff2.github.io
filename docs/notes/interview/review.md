# 面试问题复盘

### 项目中遇到的最大挑战是什么,后来如何解决的

高分回答要点:

- 真实性：选择真实、有技术深度的案例，避免虚构。
- 结构化：用 STAR 法则清晰表达，避免冗长。
- 技术细节：提及工具（Webpack/Lighthouse）、方法（代码分割/缓存策略），展示专业度。
- 软技能：体现沟通、领导力（如协调团队）和复盘能力。
- 数据化结果：用百分比、时间等量化指标增强说服力。
  示例: 在开发某电商平台时，我负责解决首屏加载过慢的问题（5 秒+）。通过 Lighthouse 分析，发现图片体积和接口响应是瓶颈。我主导将图片转换为 WebP 格式并接入 CDN，推动后端为商品接口添加 Redis 缓存，同时用虚拟滚动优化长列表渲染。最终首屏时间降至 1.3 秒，跳出率降低 25%。这次经历让我学会用数据驱动跨团队协作，并在后续项目中提前设定性能预算以避免类似问题。
  > 要避免的陷阱包括：不要抱怨之前的团队或同事，不要选择因为自己疏忽导致的错误作为挑战（比如因为自己代码写错导致的 bug），而应该选外部因素或技术难点。同时，要展示积极的态度和解决问题的能力。
  > 比如，好的例子可能是处理高并发下的系统崩溃，通过水平扩展和负载均衡解决；或者在前端项目中实现复杂的交互需求，通过研究新技术或第三方库来解决。
  > 再检查一下是否有遗漏的要点，比如是否展示了分析问题、解决问题、团队合作、学习能力等。可能还需要量化结果，比如性能提升了多少百分比，用户满意度提高，或者项目按时交付等数据，这样更有说服力。

### token 放在 cookie 还是 localStorage

在前端开发中，将 Token 存储在 **Cookie** 还是 **LocalStorage** 是一个常见的安全与设计权衡问题。以下是两者的核心对比及最佳实践建议：

**一、核心对比**

| **特性**       | **Cookie**                                 | **LocalStorage**                            |
| -------------- | ------------------------------------------ | ------------------------------------------- |
| **安全性**     | ✅ 支持 `HttpOnly` 防止 XSS 读取           | ❌ JavaScript 可直接访问，易受 XSS 攻击     |
| **自动携带**   | ✅ 请求自动携带在 `Cookie` 头中            | ❌ 需手动添加到请求头（如 `Authorization`） |
| **存储容量**   | 4KB 左右                                   | 5MB+                                        |
| **跨域支持**   | 需配置 `SameSite` 和 CORS                  | 无限制，但需手动处理跨域请求头              |
| **CSRF 风险**  | ❌ 需额外防护（如 CSRF Token、SameSite）   | ✅ 无自动携带，CSRF 风险低                  |
| **服务端控制** | ✅ 可设置过期时间、Secure、HttpOnly 等属性 | ❌ 完全由前端控制                           |

**二、安全性深度分析**

**1. Cookie 的防护机制**

- **`HttpOnly`**：禁止 JavaScript 读取 Cookie，有效防御 XSS 窃取 Token。
- **`Secure`**：仅通过 HTTPS 传输，防止中间人攻击。
- **`SameSite=Strict/Lax`**：阻止跨站请求伪造（CSRF），现代浏览器默认 `Lax`。
- **示例配置（服务端）**：
  ```http
  Set-Cookie: token=<value>; Path=/; HttpOnly; Secure; SameSite=Lax
  ```
  **2. LocalStorage 的风险**
- **XSS 攻击**：一旦存在 XSS 漏洞，Token 会被直接窃取。
- **无自动过期**：需手动清理或依赖前端逻辑，易长期滞留。
  **三、适用场景建议**
  **1. 优先选择 Cookie 的场景**
- **需要防御 XSS 窃取 Token**：通过 `HttpOnly` 和 `Secure` 提升安全性。
- **依赖自动携带 Token**：简化前端代码，无需手动管理请求头。
- **需要服务端控制会话**：如设置过期时间、强制注销等。
  **2. 选择 LocalStorage 的场景**
- **需存储较大数据**：如复杂的用户配置信息。
- **跨域分离的前后端架构**：如 JWT 需手动添加到 `Authorization` 头。
- **对 CSRF 有独立防护**：如已使用 CSRF Token 或加密请求参数。

**四、最佳实践**

1.  **使用 Cookie 的推荐方案**：

    - 服务端设置 Cookie 时启用 `HttpOnly`、`Secure` 和 `SameSite=Lax`。
    - 配合 CSRF Token（双重提交验证）或加密的请求参数。
    - 示例流程：

```javascript
// 服务端返回 Cookie，前端无需处理 Token
fetch('/login', { method: 'POST', body: credentials }).then((response) => {
  // Cookie 自动存储，后续请求自动携带
});
```

2.  **使用 LocalStorage 的防护措施**：

    - 避免存储敏感信息，仅存 Token。
    - 所有接口请求手动添加 Token 到 `Authorization` 头。
    - 严格过滤输入输出，防御 XSS。
    - 示例代码：

```javascript
// 登录后存储 Token
localStorage.setItem('token', 'Bearer xxx');

// 请求时手动添加
fetch('/api/data', {
  headers: {
    Authorization: localStorage.getItem('token')
  }
});
```

**五、面试回答模板**

**“项目中如何选择 Token 存储方式？”**

> 我们优先选择 Cookie 存储 Token，并配置 `HttpOnly`、`Secure` 和 `SameSite=Lax` 防御 XSS 和 CSRF。对于需要更高灵活性的场景（如跨域分离架构），则用 LocalStorage 手动管理 Token，但会严格防御 XSS，如输入过滤、CSP 策略。同时，无论哪种方式，都会确保 HTTPS 加密传输，并设置合理的 Token 过期时间。”

通过结合安全需求和架构特点选择存储方式，并明确防御措施，可体现对安全与工程实践的深入理解。

### 浏览器从输入 URL 到页面展示的整个过程

浏览器从输入 URL 到页面渲染的整个过程可以分为以下几个关键步骤：

1. **URL 解析与输入处理**

   - 浏览器解析用户输入，判断是 URL 还是搜索内容。如果是搜索词，使用默认搜索引擎进行搜索；否则，处理 URL。

2. **DNS 解析**

   - 将域名转换为 IP 地址：
     1. 检查浏览器缓存 → 操作系统缓存 → 本地 Hosts 文件 → 递归查询 DNS 服务器（如未命中缓存）。

3. **建立 TCP 连接**

   - 通过三次握手与服务器建立 TCP 连接：  
     `SYN → SYN-ACK → ACK`。
   - 若为 HTTPS，还需 TLS 握手（交换证书、协商加密算法、生成会话密钥）。

4. **发送 HTTP 请求**

   - 浏览器发送 HTTP 请求，包含请求方法（如 GET）、请求头（User-Agent、Accept 等）。
   - 若存在重定向（如 301/302），重新开始流程。

5. **服务器处理请求并返回响应**

   - 服务器处理请求，返回 HTTP 响应（状态码、响应头、HTML 等资源）。

6. **浏览器解析与渲染**

   - **构建 DOM 树**：解析 HTML 生成 DOM 树，遇到`<script>`时可能阻塞（除非标记为`async/defer`）。
   - **构建 CSSOM 树**：解析 CSS 生成 CSSOM，CSS 会阻塞渲染（避免 FOUC）。
   - **合并渲染树（Render Tree）**：结合 DOM 和 CSSOM，排除不可见元素（如`<meta>`）。
   - **布局（Layout）**：计算每个节点的尺寸和位置（重排）。
   - **绘制（Paint）**：将渲染树转换为屏幕上的像素（重绘）。
   - **合成（Composite）**：分层绘制，优化渲染性能（如 GPU 加速）。

7. **加载子资源与优化**

   - **预加载扫描器（Preload Scanner）**：提前发现资源（如图片、CSS）并并行下载。
   - **处理 JavaScript**：执行可能修改 DOM/CSSOM 的脚本，触发重新渲染。
   - **事件触发**：`DOMContentLoaded`（DOM 就绪）→ `load`（所有资源加载完成）。

8. **连接管理与优化**
   - HTTP/1.1 使用持久连接，HTTP/2 支持多路复用减少延迟。
   - 缓存策略（强缓存/协商缓存）减少重复请求。

**关键细节与优化**：

- **缓存机制**：强缓存（Cache-Control/Expires）与协商缓存（ETag/Last-Modified）。
- **渲染阻塞**：CSSOM 构建阻塞渲染，JS 默认阻塞 DOM 解析。
- **现代渲染策略**：渐进式渲染、懒加载、异步脚本。
- **安全机制**：CORS 预检、Same-Origin 策略、HTTPS 加密。

**流程图示例**：

```
输入URL → DNS解析 → TCP/TLS握手 → 发送请求
→接收响应 → 解析HTML → 构建DOM/CSSOM → 渲染树
→ 布局 → 绘制 → 合成 → 页面展示
```

此过程涉及网络协议、浏览器引擎协作及性能优化策略，理解各阶段有助于诊断页面加载性能问题。

### 3.7 某医科技面试

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

### promise 状态吸收

> 当.then()返回一个已解决的 Promise 时，浏览器会强制插入两次微任务（PromiseResolveThenableJob），导致后续回调被延迟。

### 3.31 面试复盘

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

12.uniapp 跟原生小程序的区别

### 4.16 面试复盘

1.bigInt 2.倒计时 setInterval 准确么 不准确用什么实现
3.websocket 跟 http keep-alive 有什么区别
