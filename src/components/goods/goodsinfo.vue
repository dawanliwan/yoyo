<template>
    <div class="">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <lunbotu :imgmessage="lunbotu"></lunbotu>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
    </div>
</template>

<script>
import lunbotu from '../../othercomponent/luobotu.vue'
export default {
  data: () => ({
      id:'',
      lunbotu:[]
  }),
  created() {
      this.id=100+this.$route.params.id;
      this.getluobotu()
  },
  methods:{
      getluobotu(){
          this.$http.get('api/getthumimages/'+this.id).then(res=>{
              if(res.body.status ===0){
                  res.body.message.forEach(item=>{
                      //添加一个img属性
                      item.img = item.src
                      this.lunbotu = res.body.message
                  })

              }
          })
      }
  },
  components:{
      lunbotu
  }
}
</script>

<style lang="" scoped>
</style>