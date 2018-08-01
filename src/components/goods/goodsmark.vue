<template>
    <div class="">
        <mark3 :id="id"></mark3>
    </div>
</template>

<script>
import mark3 from '../meun/mark.vue'
export default {
    data(){
         return {   
             id:this.$route.params.id,
         }
     },
    components:{
        mark3
    }
}
</script>

<style lang="" scoped>
    
</style>