# Vue in One Page

### Vue 实例属性和方法

- `$data`: 获取数据对象
- `$props`: 获取传入的 props
- `$el`: 获取根 DOM 元素
- `$refs`: 获取注册过 ref 的所有 DOM 元素或组件实例
- `$watch`: 观察数据变化

## 生命周期

### Vue2 生命周期钩子

1. **创建阶段**

   - `beforeCreate`: 实例初始化之后，数据观测和事件配置之前调用
   - `created`: 实例创建完成后调用，此时可以访问数据

2. **挂载阶段**

   - `beforeMount`: 挂载开始之前调用
   - `mounted`: 挂载完成后调用，可以访问 DOM

3. **更新阶段**

   - `beforeUpdate`: 数据更新时调用，发生在虚拟 DOM 打补丁之前
   - `updated`: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用

4. **销毁阶段**
   - `beforeDestroy`: 实例销毁之前调用
   - `destroyed`: 实例销毁后调用

### Vue3 生命周期钩子

1. **创建阶段**

   - `setup`: 开始创建组件之前执行，在 beforeCreate 和 created 之前执行

2. **挂载阶段**

   - `onBeforeMount`: 挂载开始之前调用
   - `onMounted`: 挂载完成后调用

3. **更新阶段**

   - `onBeforeUpdate`: 数据更新时调用，发生在虚拟 DOM 打补丁之前
   - `onUpdated`: 数据更新后调用

4. **销毁阶段**
   - `onBeforeUnmount`: 实例销毁之前调用（替代 beforeDestroy）
   - `onUnmounted`: 实例销毁后调用（替代 destroyed）

### 生命周期图示

```
创建 → beforeCreate → created → beforeMount → mounted
      ↓                                       ↓
      数据更新 → beforeUpdate → updated        |
      ↓                                       ↓
      beforeDestroy → destroyed
```

## 模板语法

### 插值

- 文本插值：`{{ message }}`
- HTML：`v-html="rawHtml"`
- 属性：`v-bind:id="dynamicId"` 或简写 `:id="dynamicId"`

### 指令

1. **条件渲染**

   ```html
   <div v-if="seen">现在你看到我了</div>
   <div v-else-if="type === 'B'">B</div>
   <div v-else>否则显示我</div>
   ```

2. **列表渲染**

   ```html
   <ul>
     <li v-for="item in items" :key="item.id">{{ item.text }}</li>
   </ul>
   ```

3. **事件处理**

   ```html
   <button v-on:click="doSomething">点击我</button>
   <!-- 简写 -->
   <button @click="doSomething">点击我</button>
   ```

4. **表单输入绑定**
   ```html
   <input v-model="message" />
   ```

## 计算属性与侦听器

### 计算属性

```js
computed: {
  fullName: {
    get() {
      return this.firstName + ' ' + this.lastName
    },
    set(newValue) {
      const names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

### 侦听器

```js
watch: {
  question: {
    handler(newQuestion, oldQuestion) {
      this.answer = '等待输入停止...'
      this.debouncedGetAnswer()
    },
    immediate: true, // 立即执行
    deep: true // 深度监听
  }
}
```

## Class 与 Style 绑定

### Class 绑定

```html
<!-- 对象语法 -->
<div :class="{ active: isActive, 'text-danger': hasError }"></div>

<!-- 数组语法 -->
<div :class="[activeClass, errorClass]"></div>
```

### Style 绑定

```html
<!-- 对象语法 -->
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

<!-- 数组语法 -->
<div :style="[baseStyles, overridingStyles]"></div>
```

## 组件系统

### 组件注册与使用

```js
// 全局注册
Vue.component('my-component', {
  template: '<div>组件内容</div>'
});

// 局部注册
const Child = {
  template: '<div>子组件</div>'
};

new Vue({
  components: {
    'child-component': Child
  }
});
```

### Props 与 Events

```js
// Props 定义
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '默认标题'
    }
  },
  methods: {
    // 触发事件
    handleClick() {
      this.$emit('custom-event', { data: 'eventData' });
    }
  }
};
```

## 响应式原理

### Vue2 响应式原理

- 使用 `Object.defineProperty` 实现数据劫持
  ```js
  // 简化版响应式实现
  function defineReactive(obj, key, val) {
    const dep = new Dep(); // 依赖收集器
    Object.defineProperty(obj, key, {
      get() {
        if (Dep.target) {
          dep.depend(); // 收集依赖
        }
        return val;
      },
      set(newVal) {
        if (newVal === val) return;
        val = newVal;
        dep.notify(); // 通知更新
      }
    });
  }
  ```
- 主要特点：
  - 对象属性必须提前声明
  - 不能检测数组长度变化
  - 不能检测对象属性的添加和删除
  - 需要遍历对象所有属性
- 解决方案：
  - 使用 `Vue.set()` 或 `this.$set()` 添加响应式属性
  - 使用 `Vue.delete()` 或 `this.$delete()` 删除属性
  - 使用数组方法：push、pop、shift、unshift、splice、sort、reverse
- 源码实现关键点：
  - Observer：将数据对象的所有属性转换为 getter/setter
  - Dep：依赖收集器，存储所有依赖（Watcher）
  - Watcher：订阅者，负责触发视图更新

### Vue3 响应式原理

- 使用 `Proxy` 实现响应式系统
  ```js
  // 简化版响应式实现
  function reactive(target) {
    return new Proxy(target, {
      get(target, key, receiver) {
        track(target, key); // 依赖收集
        const res = Reflect.get(target, key, receiver);
        return typeof res === 'object' ? reactive(res) : res;
      },
      set(target, key, value, receiver) {
        const oldValue = target[key];
        const result = Reflect.set(target, key, value, receiver);
        if (oldValue !== value) {
          trigger(target, key); // 触发更新
        }
        return result;
      }
    });
  }
  ```
- 主要特点：
  - 可以监听动态添加的属性
  - 可以监听数组的索引和长度变化
  - 可以监听删除的属性
  - 不需要遍历对象所有属性
  - 支持 Map、Set、WeakMap、WeakSet
- 性能优势：
  - 初始化性能更好，不需要递归遍历
  - 内存占用更少
  - 可以懒处理嵌套对象
- 响应式 API：
  - reactive：深层响应式代理
  - ref：处理基本类型的响应式
  - readonly：创建只读代理
  - shallowReactive：浅层响应式
  - shallowRef：浅层 ref

### 常见面试题解答

1. **Vue2 和 Vue3 响应式的区别？**

   - 实现原理不同：Vue2 使用 Object.defineProperty，Vue3 使用 Proxy
   - 性能差异：Vue3 初始化更快，内存占用更少
   - 功能限制：Vue2 无法监听属性添加/删除，Vue3 可以
   - 数组处理：Vue2 需要特殊处理数组方法，Vue3 可以直接监听

2. **为什么 Vue2 不能检测数组长度变化？**

   - Object.defineProperty 不能监听数组长度的变化
   - Vue2 通过重写数组方法来实现响应式
   - 直接通过索引修改数组不会触发更新

3. **Vue3 为什么使用 Proxy？**

   - 可以直接监听对象而非属性
   - 可以监听动态添加的属性
   - 可以监听数组的变化
   - 可以监听对象的删除操作

4. **Vue.set 的实现原理？**

   ```js
   function set(target, key, val) {
     if (Array.isArray(target)) {
       target.splice(key, 1, val);
       return val;
     }
     if (key in target && !(key in Object.prototype)) {
       target[key] = val;
       return val;
     }
     const ob = target.__ob__;
     if (!ob) {
       target[key] = val;
       return val;
     }
     defineReactive(ob.value, key, val);
     ob.dep.notify();
     return val;
   }
   ```

5. **Vue3 ref 和 reactive 的区别？**
   - ref 用于基本类型，reactive 用于对象
   - ref 需要.value 访问，reactive 直接访问
   - ref 可以用于模板，不需要.value
   - reactive 不能用于基本类型

## 高频面试题

### 组件通信

1. **父子组件通信**

   - Props / $emit
   - $refs / $parent
   - v-model / .sync (Vue2)
   - provide / inject

2. **兄弟组件通信**

   - EventBus
   - Vuex / Pinia
   - 通过共同的父组件

3. **跨层级组件通信**
   - Vuex / Pinia
   - provide / inject
   - EventBus

### 组件复用

1. **Vue2 复用方式**

   ```js
   // Mixin
   const myMixin = {
     data() {
       return { count: 0 };
     },
     methods: {
       increment() {
         this.count++;
       }
     }
   };

   // HOC
   function withLog(WrappedComponent) {
     return {
       mounted() {
         console.log('组件已挂载');
       },
       props: WrappedComponent.props,
       render(h) {
         return h(WrappedComponent, {
           props: this.$props
         });
       }
     };
   }
   ```

2. **Vue3 复用方式**

   ```js
   // Composition API
   function useCounter() {
     const count = ref(0);
     function increment() {
       count.value++;
     }
     return { count, increment };
   }

   // 在组件中使用
   export default {
     setup() {
       const { count, increment } = useCounter();
       return { count, increment };
     }
   };
   ```

### 核心概念对比

1. **选项式 API vs 组合式 API**

   - 选项式 API：
     - 按 options 组织代码
     - 适合简单组件
     - 学习成本低
   - 组合式 API：
     - 按功能组织代码
     - 更好的代码复用
     - TypeScript 支持更好

2. **响应式系统**
   - Vue2：Object.defineProperty
     - 需要遍历对象属性
     - 不能监听数组长度变化
     - 不能监听对象属性添加/删除
   - Vue3：Proxy
     - 可以监听整个对象
     - 可以监听数组变化
     - 可以监听属性添加/删除

### 性能优化建议

1. **Vue2 优化**

   - 使用 Object.freeze() 冻结不需要响应式的数据
   - 使用 v-show 代替频繁切换的 v-if
   - 合理使用 computed 缓存
   - 避免深度监听大数据
   - 使用函数式组件
   - 路由懒加载
   - 第三方库按需引入

2. **Vue3 优化**
   - 使用 shallowRef 和 shallowReactive 处理大数据
   - 使用 markRaw 标记不需要响应式的数据
   - 合理使用 computed 和 watchEffect
   - 使用 v-memo 缓存模板
   - 使用 Suspense 和异步组件
   - 动态导入组件
   - Tree-shaking 优化

### 虚拟 DOM

- 虚拟 DOM 树的构建

  - 用 JavaScript 对象描述 DOM 结构
  - 通过 render 函数生成虚拟 DOM 树
  - 数据变化时生成新的虚拟 DOM 树

- Diff 算法实现

  1. **Vue2 双端比较算法**

     - 同时从新旧节点的两端开始比较
     - 四个指针：新头、新尾、旧头、旧尾
     - 比较策略：
       ```js
       // 四种比较方式
       oldStart vs newStart
       oldEnd vs newEnd
       oldStart vs newEnd
       oldEnd vs newStart
       ```
     - 如果四种比较都未命中，则按 key 比较

  2. **Vue3 快速 Diff 算法**
     - 借鉴了 ivi 和 inferno 的算法
     - 相同的前置和后置节点的预处理
     - 最长递增子序列算法优化节点移动
     ```js
     // 前置节点预处理
     while (i <= e1 && i <= e2) {
       const n1 = c1[i];
       const n2 = c2[i];
       if (isSameVNodeType(n1, n2)) {
         patch(n1, n2);
       } else {
         break;
       }
       i++;
     }
     ```

- 性能优化策略

  - 使用唯一 key 进行节点复用
  - 避免无谓的节点更新
  - 采用异步更新

### 虚拟 DOM

- 虚拟 DOM 树的构建

  - 用 JavaScript 对象描述 DOM 结构
  - 通过 render 函数生成虚拟 DOM 树
  - 数据变化时生成新的虚拟 DOM 树

- Diff 算法实现

  1. **Vue2 双端比较算法**

     - 同时从新旧节点的两端开始比较
     - 四个指针：新头、新尾、旧头、旧尾
     - 比较策略：
       ```js
       // 四种比较方式
       oldStart vs newStart
       oldEnd vs newEnd
       oldStart vs newEnd
       oldEnd vs newStart
       ```
     - 如果四种比较都未命中，则按 key 比较

  2. **Vue3 快速 Diff 算法**
     - 借鉴了 ivi 和 inferno 的算法
     - 相同的前置和后置节点的预处理
     - 最长递增子序列算法优化节点移动
     ```js
     // 前置节点预处理
     while (i <= e1 && i <= e2) {
       const n1 = c1[i];
       const n2 = c2[i];
       if (isSameVNodeType(n1, n2)) {
         patch(n1, n2);
       } else {
         break;
       }
       i++;
     }
     ```

- 性能优化策略

  - 使用唯一 key 进行节点复用
  - 避免无谓的节点更新
  - 采用异步更新
