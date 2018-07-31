// 路由分出来的页面
import Vue from 'vue'
import Router from 'vue-router'
//导入分开的路由页面
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import newlist from '../components/meun/newlist.vue'
import newinfo from '../components/meun/newinfo.vue'
import photolist from '../components/meun/photolist.vue'
import photoinfo from '../components/meun/photoinfo.vue'
import goodslist from '../components/goods/goodslist.vue'
import goodsinfo from '../components/goods/goodsinfo.vue'


Vue.use(Router)


export default new Router({
  //路由规则
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/search',component:SearchContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/home/newlist',component:newlist},
    {path:'/home/newinfo/:id',component:newinfo},
    {path:'/home/photolist',component:photolist},
    {path:'/home/imglist/:id',component:photoinfo},
    {path:'/home/goodslist',component:goodslist},
    {path:'/home/goodsinfo/:id',component:goodsinfo,name:'goodsinfo'},
  ],
  linkActiveClass:'mui-active'
})
