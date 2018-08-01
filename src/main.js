// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入vue包
import Vue from 'vue'
//把App主组件导入
import App from './App'
//导入抽离出去的路由模块
import router from './router'
//导入minUi组件,是从npm中下载的
import MintUI from 'mint-ui'
//导入mintUi中的css样式
import 'mint-ui/lib/style.css'
//注册mintui
Vue.use(MintUI)
//导入mui,外来的包都放在lib文件下
import "./lib/dist/css/mui.css"
//导入字体图片包.fonts文件中要多放一个扩展字体文件tff
import "./lib/dist/css/icons-extra.css"
// import './lib/dist/js/mui.min.js'
// Vue.prototype.mui = mui

//导入moment的包
import moment from "moment"
Vue.config.productionTip = false
//导入ajax包
import resource from '../node_modules/vue-resource/dist/vue-resource.js'
//注册
Vue.use(resource)
//设置根路径
Vue.http.options.root = 'http://localhost:5000/'
Vue.http.options.emulateJSON=true
//设置全局过滤
Vue.filter("datastra",function(datastr,pare="YYYY:MM:DD"){
  return moment(datastr).format(pare)
})
//导入缩略图
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
