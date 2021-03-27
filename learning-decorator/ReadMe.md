# 装饰器

装饰器（Decorator）是一种与类（class）相关的语法，用来注释或修改类和类方法。

它可以装饰类、类的方法、类的属性

不能用于函数，因为存在变量提升

## 配置
1. 安装：
```js
"devDependencies": {
    // 一个内置的 CLI 命令行工具，可通过命令行编译文件
    "@babel/cli": "^7.13.10", 
    "@babel/core": "^7.13.13",
    "@babel/node": "^7.13.13",
    // 装饰类的属性，转换插件
    "@babel/plugin-proposal-class-properties": "^7.13.0",
    // 装饰类和类的方法转换插件
    "@babel/plugin-proposal-decorators": "^7.13.5",
    // babel插件的组合
    "@babel/preset-env": "^7.13.12"
}
```
2. 配置 `scripts`
```json
{
  "scripts": {
    "start": "nodemon --exec babel-node src/app.js",
    "build": "babel src --out-dir lib"
  },
}
```
2. 配置 `babel.config.json`
```json
{
  "plugins": [
    ["@babel/plugin-proposal-decorators",{"legacy": true}],
    ["@babel/plugin-proposal-class-properties",{"loose":true}]
  ],
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```
3. 运行
> npm run start
4. 构建
> npm run build


## 插件
[`@babel/plugin-proposal-decorators` 和 `@babel/plugin-proposal-class-properties` 的配置方式](https://babeljs.io/docs/en/babel-plugin-proposal-decorators#class-decorator)


## 参考
[core-decorator.js](https://github.com/jayphelps/core-decorators.js)