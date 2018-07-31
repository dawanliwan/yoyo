<template>
    <div class="">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
                    <router-link :to="'/home/newinfo/'+item.id">
                    <!-- <router-link to="/home/newlist/newinfo"> -->
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3>{{item.title}}</h3>
							<p class="mui-ellipsis">
                                <span>时间:{{item.add_time | datastra}}</span>
                                <span>点击次数:{{item.click}}</span>
                            </p>
						</div>
                    </router-link>
				</li>
			</ul>

    </div>
</template>

<script>
export default {
    data: ()=>({
        newlist:[]
    }),
    created() {
        this.getnewlist()
    },
    methods:{
        getnewlist(){
            this.$http.get("api/getnewslist").then(res=>{
                this.newlist= res.body.message
                console.log(res.body)
            })
        }
    }
}
</script>

<style lang="less" scoped>
.mui-table-view{
    h3{
        font-size:14px; 
    }
    .mui-ellipsis{
        color:blue;
        font-size:12px;
        display:flex;
        justify-content: space-between
    }
}
    
</style>