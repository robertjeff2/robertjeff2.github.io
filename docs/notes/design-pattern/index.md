# 设计模式

设计模式是软件开发中常见问题的典型解决方案。每个模式都像一个蓝图，可以通过自定义来解决代码中的特定设计问题。在前端开发中，设计模式帮助我们编写更加可维护、可扩展的代码。

## 设计模式的重要性

在前端面试中，设计模式是一个重要的考察点，主要关注以下几个方面：

1. **代码复用性和可维护性**：通过合适的设计模式，可以提高代码的复用性，降低维护成本
2. **解耦和扩展性**：好的设计模式可以实现模块间的解耦，使系统更容易扩展
3. **团队协作**：设计模式提供了一种通用的解决方案，有助于团队成员之间的沟通
4. **性能优化**：某些设计模式（如单例、享元模式）可以帮助优化应用性能

## 选择设计模式的原则

在实际开发中，选择合适的设计模式需要考虑以下因素：

1. **场景适用性**：不同的设计模式适用于不同的问题场景
2. **复杂度权衡**：避免过度设计，在简单性和扩展性之间找到平衡
3. **团队水平**：考虑团队对设计模式的理解和接受程度
4. **维护成本**：评估采用某种设计模式后的长期维护成本

## 设计模式分类

### 创建型模式

创建型模式关注对象的创建过程，在前端开发中常用于组件和服务的实例化。

- **工厂方法模式**：用于创建不同类型的组件或服务

  ```javascript
  // React组件工厂
  class ComponentFactory {
    createComponent(type) {
      switch (type) {
        case 'button':
          return <Button />;
        case 'input':
          return <Input />;
        default:
          throw new Error('Unknown component type');
      }
    }
  }
  ```

- **单例模式**：确保一个类只有一个实例，常用于全局状态管理

  ```javascript
  // Vue3状态管理示例
  export const store = reactive({
    state: 0,
    increment() {
      this.state++;
    }
  });
  ```

- **建造者模式**：用于分步骤创建复杂对象
- **原型模式**：通过克隆创建对象

### 结构型模式

结构型模式关注类和对象的组合，在前端开发中用于优化组件结构和提高代码复用性。

- **适配器模式**：用于兼容不同接口，常用于处理 API 响应

  ```javascript
  // API响应适配器
  class ApiAdapter {
    adapt(response) {
      return {
        id: response.data.id,
        name: response.data.userName
        // 转换数据结构
      };
    }
  }
  ```

- **装饰器模式**：动态地给对象添加功能，如 React 高阶组件

  ```javascript
  // React高阶组件示例
  const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
      if (isLoading) return <div>Loading...</div>;
      return <WrappedComponent {...props} />;
    };
  };
  ```

- **代理模式**：控制对对象的访问，如 Vue3 的响应式系统
- **组合模式**：将对象组合成树形结构
- **外观模式**：为子系统提供统一的接口

### 行为型模式

行为型模式关注对象之间的通信，在前端开发中用于处理组件通信和状态管理。

- **观察者模式**：定义对象间的一对多依赖关系，常用于事件处理

  ```javascript
  // 事件总线实现
  class EventBus {
    constructor() {
      this.events = {};
    }

    on(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }

    emit(event, data) {
      if (this.events[event]) {
        this.events[event].forEach((callback) => callback(data));
      }
    }
  }
  ```

- **策略模式**：定义一系列算法，使它们可以互相替换，如表单验证

  ```javascript
  // 表单验证策略
  const validationStrategies = {
    required: (value) => (value.length > 0 ? '' : '此项必填'),
    email: (value) =>
      /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)
        ? ''
        : '请输入有效的邮箱',
    phone: (value) => (/^1\d{10}$/.test(value) ? '' : '请输入有效的手机号')
  };
  ```

- **状态模式**：允许对象在内部状态改变时改变它的行为
- **命令模式**：将请求封装成对象
- **中介者模式**：用于组件间的解耦

### 创建型模式

创建型模式关注对象的创建过程，在前端开发中常用于组件和服务的实例化。

- **工厂方法模式**：用于创建不同类型的组件或服务

  ```javascript
  // React组件工厂
  class ComponentFactory {
    createComponent(type) {
      switch (type) {
        case 'button':
          return <Button />;
        case 'input':
          return <Input />;
        default:
          throw new Error('Unknown component type');
      }
    }
  }
  ```

- **单例模式**：确保一个类只有一个实例，常用于全局状态管理

  ```javascript
  // Vue3状态管理示例
  export const store = reactive({
    state: 0,
    increment() {
      this.state++;
    }
  });
  ```

- **建造者模式**：用于分步骤创建复杂对象
- **原型模式**：通过克隆创建对象

### 结构型模式

结构型模式关注类和对象的组合，在前端开发中用于优化组件结构和提高代码复用性。

- **适配器模式**：用于兼容不同接口，常用于处理 API 响应

  ```javascript
  // API响应适配器
  class ApiAdapter {
    adapt(response) {
      return {
        id: response.data.id,
        name: response.data.userName
        // 转换数据结构
      };
    }
  }
  ```

- **装饰器模式**：动态地给对象添加功能，如 React 高阶组件

  ```javascript
  // React高阶组件示例
  const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
      if (isLoading) return <div>Loading...</div>;
      return <WrappedComponent {...props} />;
    };
  };
  ```

- **代理模式**：控制对对象的访问，如 Vue3 的响应式系统
- **组合模式**：将对象组合成树形结构
- **外观模式**：为子系统提供统一的接口

### 行为型模式

行为型模式关注对象之间的通信，在前端开发中用于处理组件通信和状态管理。

- **观察者模式**：定义对象间的一对多依赖关系，常用于事件处理

  ```javascript
  // 事件总线实现
  class EventBus {
    constructor() {
      this.events = {};
    }

    on(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }

    emit(event, data) {
      if (this.events[event]) {
        this.events[event].forEach((callback) => callback(data));
      }
    }
  }
  ```

- **策略模式**：定义一系列算法，使它们可以互相替换，如表单验证

  ```javascript
  // 表单验证策略
  const validationStrategies = {
    required: (value) => (value.length > 0 ? '' : '此项必填'),
    email: (value) =>
      /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)
        ? ''
        : '请输入有效的邮箱',
    phone: (value) => (/^1\d{10}$/.test(value) ? '' : '请输入有效的手机号')
  };
  ```

- **状态模式**：允许对象在内部状态改变时改变它的行为
- **命令模式**：将请求封装成对象
- **中介者模式**：用于组件间的解耦

## 前端开发中的最佳实践

1. **组件设计**

   - 使用工厂模式创建可配置的组件
   - 使用装饰器模式增强组件功能
   - 使用组合模式构建组件树

2. **状态管理**

   - 使用单例模式实现全局状态
   - 使用观察者模式处理状态变化
   - 使用代理模式实现响应式

3. **数据处理**
   - 使用适配器模式处理 API 数据
   - 使用策略模式处理表单验证
   - 使用命令模式处理用户操作
