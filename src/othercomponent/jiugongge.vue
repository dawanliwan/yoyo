<template>
    <div class="">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newlist">
                    <img src="../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div> 
                </router-link>        
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link> 
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../images/menu3.png" alt="" >
                    <div class="mui-media-body">商品购买</div>
                </router-link> 
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data: () => ({})
}
</script>

<style lang="less" scoped>
.mui-grid-view.mui-grid-9{
    border:none;
    background-color:#fff;
    img{
        width:60px;
        height:60px
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}

</style>