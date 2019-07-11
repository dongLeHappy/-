# 学习webpack
### 爬坑————————学习
##### 首先--全局安装webpack
```js
  npm init
```
##### 第二步--全局安装webpack
```js
  npm i webpack webpack-dev-server webpack-cli --save-dev // 安装webpack依赖（webpack依赖于webpack-cli）
  npm i vue --save  // 安装vue
```
##### 第三步--配置webpack.config.js
```js
  // 根目录下新建webpack的配置文件webpack.config.js。
  // 配置 入口、出口路径、打包后文件名和devServer的相关配置项
  var path = require('path');
  var webpack = require('webpack');

  module.exports = {
    //项目入口文件
    entry: './src/main.js',
    output: {
      //打包出口路径
      path: path.resolve(__dirname, './dist'),
      //通过devServer访问路径
      publicPath: '/dist/',
      //打包后的文件名
      filename: 'main.js'
    },
    mode:'development',
    devServer: {
      historyApiFallback: true,
      overlay: true
    }
  };
```
##### 第四步--根目录下新建index.html
```html
 <!-- 新建index.html作为项目的主体页面，留出入口文件，入口文件的路径为webpack打包后输出的路径。 -->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>webpack-vue</title>
<meta name="description" content="">
<meta name="keywords" content="">
</head>
<body>
    <script src="/dist/main.js"></script>
</body>
</html>
```
##### 第五步--新建入口文件 
`` 新建在src目录用来存放各种组件和静态文件，在src目录下新建入口文件main.js ``
##### 第六步--自定义npm命令
```js
// package.json 增加 scripts：
"scripts": {
  "dev": "webpack-dev-server --hot --open",
  "build": "webpack --mode production --progress --hide-modules"
  // 这一步的目的是简化在命令行中输入复杂指令的操作，如需执行上述两命令只需要在命令行执行：
  npm run dev
  npm run build
},
// webpack-dev-server --hot --open目的是开启一个本地服务，--hot为热加载，可实视查看页面状态，--open直接从浏览器打开
// webpack --mode production --progress --hide-modules是打包整个项目的指令，--mode production是以生产模式打包，
// 这样会得到体积更小的文件，有兴趣的同学可以试试不加这个指令，看看差距到底有多大。--progress打印出编译进度的百分比值，
// hide-modules隐藏关于模块的信息

```
##### 第七步--配置webpack解析（resolve）
```js
// webpack.config.js中增加
resolve: {
  //路径别名
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@':path.resolve(__dirname, './src'),
  },
  //路径别名自动解析确定的扩展
  tensions: ['.js', '.vue', '.json']
},
// resolve是webpack关于解析的配置项，alias允许你在项目中使用路径别名代替复杂的路径。
// extensions会让webpack自动查找特定后缀的文件，在项目中引入文件时将不必再书写文件后缀。
```