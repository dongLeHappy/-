## 搭建vue框架
#### 首先安装Vue cli
``
    npm install -g vue-cli 
``
vue cli是vue的脚手架工具。
#### 然后初始化
``
vue init webpack
``
初始化项目项目下面会出现一个package.json文件
##### 后面会有很多选项，具体你需要安装什么，看你的项目需求，之后就开始安装了
####安装成功后就会提示你
``
npm run dev
``
##### 分享一个大佬的解说
``
https://www.cnblogs.com/ang-/p/7082202.html
``
## 状态库
```js
const homeData = {
    state:{},
    mutations:{},
    actions:{}
} // 先定义好一个存放的变量

export default homeData  // 然后导出

// 然后就把之前的引进来，注册进store里面
import homeData from './home/homePage' 
const store = new Vuex.Store({
    modules: {
        homeData, 
    },
})

//  再到main.js里面引入，之策到vue里面
import store from './store' // 状态库
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
```
## 路由
```js
import Vue from 'vue'
import Router from 'vue-router'

// 按需加载，这样写不会有性能浪费，他只会加载需要跳转的路由
const login = r => require.ensure([], () => r(require('@/views/login/index')), 'login');
// 个人中心
const memberCenter = r => require.ensure([], () => r(require('@/views/personalCenter/center')), 'memberCenter');
// 历史开奖
const lotteryResults = r => require.ensure([], () => r(require('@/views/personalCenter/lotteryResults')), 'lotteryResults');
// 投注记录
const betsRecord = r => require.ensure([], () => r(require('@/views/personalCenter/betsRecord')), 'betsRecord');
// 结算详情
const billDetail = r => require.ensure([], () => r(require('@/views/personalCenter/billDetail')), 'billDetail');
// 盘口信息
const pankouInfo = r => require.ensure([], () => r(require('@/views/personalCenter/pankouInfo')), 'pankouInfo');
// 游戏规则
const gameRule = r => require.ensure([], () => r(require('@/views/personalCenter/gameRule')), 'gameRule');
//  彩种通用入口
const lotteryEnter = r => require.ensure([], () => r(require('@/views/rulePageGroup/lotteryEnter')), 'lotteryEnter');
//  暂无数据页面
const noneRecord = r => require.ensure([], () => r(require('@/views/personalCenter/recordGroup/noneRecord')), 'noneRecord');


Vue.use(Router)
export const constantRouterMap = [
    {path: '/login', name: 'login', component: login},
    {path: '/memberCenter', name: 'memberCenter', component: memberCenter},
    {path: '/lotteryResults', name: 'lotteryResults', component: lotteryResults},
    {path: '/betsRecord', name: 'betsRecord', component: betsRecord},
    {path: '/billDetail', name: 'billDetail', component: billDetail},
    {path: '/pankouInfo', name: 'pankouInfo', component: pankouInfo},
    {path: '/gameRule', name: 'gameRule', component: gameRule},
    {path: '/lotteryEnter', name: 'lotteryEnter', component: lotteryEnter},
    {path: '/noneRecord', name: 'noneRecord', component: noneRecord},
]

export default new Router({
    scrollBehavior: function scrollBehavior() {
        return { y: 0 };
    },
    routes: constantRouterMap
});
```
## 使用Promise
#### Promise对象是一个构造函数，用来生成Promise实例。
#### resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
#### Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
```js

const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

// 项目实例
actions: {
    getAgUserData({commit}, data) { // 获取权限列表数据
        return new Promise((resolve,reject) => {
            findAgentUserPage(data).then(response => {
                // debugger
                const data = response.data.content
                commit('SET_USER_DATA',data)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    }
  }
```
## map方法
##### map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
```js
// 就直接改变了数组的值
// 例如
var arr = [10,20,30]
  var result = arr.map(function (item,index,array) {
    console.log(array[index])
    return item+10
  })
  console.log(result)
  
// 再例如
// 在数组中加入一个为isShow的键，值为false
let par = res.data.content;
    par.map(item => {
        item.playRuleList.map(it => {
            it.betTypeList.map(element => {
                Object.values(element).map(ele => {
                    ele.isShow = false;
                    
                })
            })
        })
    })
```
