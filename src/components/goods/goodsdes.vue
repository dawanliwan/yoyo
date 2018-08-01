<template>
    <div class="">
        <h3>{{goodsdes.title}}</h3>
        <div v-html="goodsdes.content"></div>
    </div>
</template>

<script>
export default {
    data: ()=>({
      goodsdes:[]  
    }),
    created() {
        this.getgoodsdes()
    },
    methods:{
        getgoodsdes(){
            this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(res=>{
                // console.log(res.body)
                if(res.body.status===0){
                    this.goodsdes=res.body.message
                }
            })
        }
    }
}
</script>

<style lang="" scoped>
    h3{
        font-size:20px;
        color:dodgerblue;
        text-align: center;
        padding:10px;
    }
</style>