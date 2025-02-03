# 手写防抖节流

> 首先，防抖和节流都是用来优化高频触发的事件，比如滚动、输入或者窗口调整，防止这些事件处理函数被频繁调用，影响性能。不过它们的实现方式和应用场景不同，我得先搞清楚两者的区别。防抖（Debounce）的话，我记得是当事件被触发后，一定时间内的多次触发只会执行最后一次，或者只在开始时执行一次。比如搜索框输入，用户停止输入一段时间后才发送请求，避免每次按键都请求。而节流（Throttle）则是每隔一定时间执行一次，不管事件触发有多频繁，比如滚动事件，每隔 200ms 执行一次处理函数。

## 回答步骤

1. 解释防抖和节流的定义和区别。

2. 写出基本的实现代码，并解释每一步的作用。

3. 比较不同实现方式的差异。

4. 举例说明应用场景。

### **1. 防抖（Debounce）**

**定义**：高频事件触发后，在指定时间内只执行最后一次。若在等待期内再次触发，则重新计时。

**应用场景**：搜索框输入联想、窗口大小调整（`resize`）。

**实现思路**：

- 利用定时器，每次触发时重置定时。
- 支持立即执行（首次触发立即执行，后续需等待停止触发）。

**代码示例**：

```javascript
function debounce(func, wait, immediate = false) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
```

**关键点**：

- 使用闭包保存 `timeout`。
- 立即执行逻辑：首次触发且未在等待期内时执行。
- `clearTimeout` 确保每次触发重置计时。

---

### **2. 节流（Throttle）**

**定义**：高频事件触发时，每隔指定时间执行一次，稀释执行频率。

**应用场景**：滚动加载（`scroll`）、高频点击（如抢购按钮）。

**实现思路**：

- **时间戳版**：记录上次执行时间，若间隔超过阈值则执行。
- **定时器版**：延迟执行，执行后重置定时器。
- **结合版**（推荐）：首次立即执行，最后一次触发延迟执行。

**代码示例（结合版）**：

```javascript
function throttle(func, wait) {
  let timeout = null;
  let previous = 0;

  return function (...args) {
    const context = this;
    const now = Date.now();
    const remaining = wait - (now - previous);

    if (remaining <= 0) {
      // 超过间隔时间，立即执行
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout) {
      // 未超过间隔时间，设置定时器延迟执行
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
}
```

**关键点**：

- `remaining` 计算剩余等待时间。
- 首次触发立即执行，最后一次触发在剩余时间后执行。
- 定时器与时间戳结合，确保首尾触发均被执行。

---

### **3. 对比与总结**

| 特性         | 防抖（Debounce）           | 节流（Throttle）   |
| ------------ | -------------------------- | ------------------ |
| **执行时机** | 最后一次触发后等待结束执行 | 固定间隔执行       |
| **应用场景** | 搜索联想、`resize`         | 滚动事件、高频点击 |
| **核心逻辑** | 重置定时器                 | 时间间隔控制       |

---

**回答技巧**：

1. **先解释概念**：明确防抖和节流的定义及区别。
2. **手写代码**：逐步写出代码并解释关键步骤（如闭包、定时器、`this` 绑定）。
3. **举例场景**：结合具体场景说明为何选择防抖或节流。
4. **扩展优化**：提及取消功能（如 `debounced.cancel()`）或参数配置（如 `leading` 和 `trailing`）。

通过清晰的结构和代码示例，展示对性能优化问题的深入理解。
