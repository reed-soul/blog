# 代码lint

## ESlint

* [官方文档](https://eslint.org/)
* [深入理解ESlint](https://zhuanlan.zhihu.com/p/75531199)

### 核心知识点

#### 1. 扩展 extends

扩展就是直接使用别人已经写好的 lint 规则，方便快捷。扩展一般支持三种类型：

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "eslint-config-standard",
  ]
}
```

* eslint: 开头的是 ESLint 官方的扩展，一共有两个：eslint:recommended 、eslint:all。
* plugin: 开头的是扩展是插件类型，也可以直接在 plugins 属性中进行设置，后面一节会详细讲到。
* 最后一种扩展来自 npm 包，官方规定 npm 包的扩展必须以 eslint-config- 开头，使用时可以省略这个头，上面案例中 eslint-config-standard 可以直接简写成 standard。

如果你觉得自己的配置十分满意，也可以将自己的 lint 配置发布到 npm 包，只要将包名命名为 eslint-config-xxx 即可，同时，需要在 package.json 的 peerDependencies 字段中声明你依赖的 ESLint 的版本号。

#### 2. 插件 plugin

使用插件
虽然官方提供了上百种的规则可供选择，但是这还不够，因为官方的规则只能检查标准的 JavaScript 语法，如果你写的是 JSX 或者 Vue 单文件组件，ESLint 的规则就开始束手无策了。

这个时候就需要安装 ESLint 的插件，来定制一些特定的规则进行检查。ESLint 的插件与扩展一样有固定的命名格式，以 eslint-plugin- 开头，使用的时候也可以省略这个头。

```js
npm install --save-dev eslint-plugin-vue eslint-plugin-react
{
  "plugins": [
    "react", // eslint-plugin-react
    "vue",   // eslint-plugin-vue
  ]
}
```

或者是在扩展中引入插件，前面有提到 plugin: 开头的是扩展是进行插件的加载。

```json
{
  "extends": [
    "plugin:react/recommended",
  ]
}
```

通过扩展的方式加载插件的规则如下：

extPlugin = `plugin:${pluginName}/${configName}`
对照上面的案例，插件名(pluginName) 为 react，也就是之前安装 eslint-plugin-react 包，配置名(configName)为 recommended。那么这个配置名又是从哪里来的呢？

可以看到 eslint-plugin-react 的源码。

```js
module.exports = {
  // 自定义的 rule
  rules: allRules,
  // 可用的扩展
  configs: {
    // plugin:react/recommended
    recomended: {
      plugins: [ 'react' ]
      rules: {...}
    },
    // plugin:react/all
    all: {
      plugins: [ 'react' ]
      rules: {...}
    }
  }
}
```

配置名是插件配置的 configs 属性定义的，这里的配置其实就是 ESLint 的扩展，通过这种方式即可以加载插件，又可以加载扩展。

## Stylelint
