<template>
    <div class="newinfo">
        <h1 class="title">{{newinfo.title}}</h1>
        <p class="time">
            <span>时间:{{newinfo.add_time}}</span>
            <span>点击数量:{{newinfo.click}}</span>
        </p>
        <hr>
        <div class="content" v-html="newinfo.content">
        </div>
        <markinfo :id="id"></markinfo>        
    </div>
</template>

<script>
import mark1 from './mark.vue'
export default {
     data(){
         return {   
             id:this.$route.params.id,
             newinfo:{}
         }
     },
     created() {
         this.getnewinfo()
     }, 
     methods:{
         getnewinfo(){
             this.$http.get('api/getnew/'+this.id).then(result=>{
                //  console.log(result)
                if(result.body.status===0){
                    this.newinfo=result.body.message
                }
             })
         }
     },
     components:{
         'markinfo':mark1
     }
}
</script>

<style lang="less" scoped>
    .newinfo{
        .title{
            font-size: 16px;
            color:red;
            text-align: center;
            margin:15px 0 15px 0;
        }
        .time{
            font-size: 14px;
            color:#226aff;
            display:flex;
            justify-content: space-between;
            padding:0 4px 0 4px;
        }
    }
</style>