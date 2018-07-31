<template>
    <div class="contanier">
        <h3>{{titleimg.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{titleimg.add_time}}</span>
            <span>点击:{{titleimg.click}}次</span>
        </p>
        <hr>
        <!-- 缩略区域 -->
        <div class="imgearn">
            <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.id">
        </div>

        <!-- 图片内容展示区域 -->
        <div class="content" v-html="titleimg.content"></div>
        <mark2 :id="id"></mark2>
    </div>
</template>

<script>
import mark2 from './mark.vue'
export default {
  // data: ()=>({
  //     //获取当前的url的id好传输给后台
  //     id:this.$route.params.id
  // }),
  data() {
    return {
      id: this.$route.params.id,
      titleimg: [],
      list:[]
    }
  },
  created() {
    this.getphototitle(),
    this.getphotolist()
  },
  methods: {
    getphototitle() {
      this.$http.get('api/getimageInfo/' + this.id).then(res => {
        if (res.body.status === 0) {
          this.titleimg = res.body.message
          console.log(this.titleimg)
        }
      })
    },
    getphotolist(){
        this.$http.get('api/getthumimages/'+this.id).then(res=>{
            console.log(res.body)
            if(res.body.status===0){
                //循环一下数组设置高宽
                res.body.message.forEach(item=>{
                    item.w=600;
                    item.h=400;
                })
                this.list =res.body.message
                console.log(this.list)
            }
        })
    }
  },
  components: {
    mark2
  }
}
</script>

<style lang="less" scoped>
.contanier {
  padding: 5px;
  .imgearn{
    img{
      margin-right:6px;
    }
  }
}
h3 {
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
}
.subtitle {
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}
.content {
  font-size: 13px;
  line-height: 30px;
}
</style>