<template>
  <div id="app">
    <!-- 这是mint中的组件 -->
    <mt-header fixed title="长沙黑马" class="hearone"></mt-header>
    <div class="back" @click="back"><返回</div>
    <!-- 渲染路由页面 -->
    <transition>
      <router-view></router-view>
    </transition>
    
    <!-- 底部组件 -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "./components/tabbar/TabBar.vue"
export default {
  name: 'App',
  components:{
    tabbar
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
  
}
</script>

<style scoped>
  #app{
   padding-top: 40px;
   overflow-x: hidden;
   padding-bottom:60px;
  }
  .back{
    position: fixed;
    top: 10px;
    left:10px;
    color:#fff;
    z-index: 99
  }
  .hearone{
    z-index: 99
  }
  .v-enter{
    opacity: 0;
    transform:translateX(100%) 
  }
  .v-leave-to{
    opacity: 0; 
    transform:translateX(-100%); 
    position:absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease
  }
</style>
