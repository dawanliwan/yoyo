<template>
    <div>
        <lunbotu :imgmessage="imgmessage" :full="full"></lunbotu>
        <jiugongge></jiugongge>
    </div>
</template>

<script>
//数据请求第一件事情是下载vue-resource
//发送请求之后用数组接收数据
import { Toast } from 'mint-ui'
//导入九宫格组件
import jiu from '../../othercomponent/jiugongge.vue'
import lunbotu from '../../othercomponent/luobotu.vue'
export default {
  data: () => ({
    imgmessage: [],
    full:true
  }),
  created() {
    this.getluoboyu()
  },
  methods: {
    getluoboyu() {
      this.$http.get('http://localhost:5000/api/getlunbo').then(result => {
        // console.log(result.body)
        if (result.body.status === 0) {
          this.imgmessage = result.body.message
        } else {
          Toast({
            message: '数据获取失败',
            position: 'top',
            duration: 3000
          })
        }
      })
    }
  },
  components:{
      'jiugongge':jiu,
       lunbotu
  }
}
</script>
<style lang="less" scoped>

</style>