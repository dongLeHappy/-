# vuex使用总结
## vuex(状态库) 
#### 状态库里面的使用场景
####  存储方式（1）
```js
// 首先定义state
state：{
  // 这里存储页面所需要的数据，比如：
  // 加入这个值是比较通用于各个页面的，父子之间穿又麻烦的话就直接存到状态库
  listArr:[], 
  // 注：其实能尽量在组件间传值，那我们就尽量不要存状态库，毕竟会有重量，有害性能
},
// 再就是mutations
mutations: {
  SET_OPENLOTTERYCODE: (state, data) => { // openapi彩种
    // action里面commit过来的值在这里接收，并且赋值到state里面的变量里，这样每个组件就都能公用这个值了
      state.openLotteryCode = data
  },
},
// 其次就是actions
actions:{
  // 顾名思义就是在这里做操作的意思
  // 我们可以在这里对接口函数进行操作
  // 使用commit的方式commit出去
  // 比如：
  getOpenLotteryCode({ commit }, data) { //接口函数为 getOpenLotteryCode，data为接口回参
      // 我们把接口返回参数commit出去，commit的对象名为'SET_OPENLOTTERYCODE'
      // 而'SET_OPENLOTTERYCODE'就在mutations里面
      commit('SET_OPENLOTTERYCODE', data)
  },
}
```
####  存储方式（2）
--- 直接拿到状态库的state里面的某个变量进行赋值
```js
// 拿到状态库里面state下的名为homeData下的myVar赋值为myVal
this.$store.state.homeData.myVar = 'myVal'; 
```
--- 通过vuex在mapState里面拿到
```js
// 首先引入vux
import { mapState } from 'vuex';
// 然后在computed里面
...mapState({
    // firstRuleList为自定义要使用的变量名
    // state => state.homeData.thisFirstRule, 表示数据已经从状态库取出来赋值给firstRuleList
    firstRuleList: state => state.homeData.thisFirstRule,
    // 注：用的时候要用this,比如：this.firstRuleList
})
```
####  存储方式（3）
```js
  // 比如在页面里有一个接口函数
  methods:{
    getlist(){
        // 存储到store里面的变量myVar的值为5
      this.$store.commit('myVar',5)
      // 或者可以存分对象或者数组
      this.$store.commit('myVar',{one:2,twe:3})
    }
  }
```


## 项目总结
#### v-model的使用
```html
<input v-model="modelMount">
```
```js
// 比如有一个函数;
methods:{
  getMount(){
    this.modelMount = 20;
    // 那么我们就把20赋值到input框里面了
  }
}
```
#### 三目运算符
```html
<input v-model="modelMount == '' ? '10' : modelMount"> 
<!-- 假如modelMount等于空那么modelMount = 10，否则就是modelMount -->
```
#### filter的使用(非常好用)
```html
<span>{{num | changeNum}}</span>
<!-- num表示的当前的值，changeNum表示filter函数，参数就是当前的这个num，然后我们在filter里面写操作 -->
```
```js
filter:{
  changeNum(num){
      // 这个函数就是在html李阿敏定义的，参数num就是html的值
    if(num == 1){
      return '已成功'
      // 表示如果num是1的话，就返回'已成功'，上面的num就变成了'已成功'
    }
  }
}
```