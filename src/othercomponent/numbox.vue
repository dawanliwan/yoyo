<template>
    <div class="">
        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
//在这个组件引入自己需要的js文件好初始化mui这个功能
import mui from '../lib/dist/js/mui.min.js'
export default {
  data: () => ({

  }),
  mounted() {
       mui(".mui-numbox").numbox()
  },
}
</script>

<style lang="" scoped>
</style>