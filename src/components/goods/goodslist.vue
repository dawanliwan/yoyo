<template>
    <div class="goos-list">
        <div class="goods-item" v-for="item in goodlist" :key="item.id" @click="goodsdal(item.id)">
            <img :src="item.img_url">
            <h3 class="title">{{item.title}}</h3>
            <div class="info">
                <p class="price">
                    <span class="newspice">{{item.sell_price}}</span>
                    <span class="oldspice">{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>{{item.stock_quantity}}</span>
                </p>
            </div>
        </div>
         <mt-button type="danger" size="large"  @click="getmore">{{pageindex>max?"没有更多的数据了":"加载更多"}}</mt-button>
    </div>
</template>

<script>
export default {
  data: () => ({
      goodlist:[],
      pageindex:1,
      max:3
  }),
  created() {
      this.getgoodslist()
  },
  methods:{
      getgoodslist(){
          this.$http.get('api/getgoods?pageindex='+this.pageindex).then(res=>{
              if(res.body.status===0){
                  console.log(res.body)
                  this.goodlist= this.goodlist.concat(res.body.message)
              }
          })
      },
      getmore(){
          this.pageindex++
          if(this.pageindex>this.max)return
          this.getgoodslist()
      },
      goodsdal(id){
          this.$router.push({name:'goodsinfo',params:{id}})
          console.log(id)
      }
  }
}
</script>

<style lang="less" scoped>
.goos-list{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:7px;
    .goods-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin:4px 0;
        padding:2px;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        min-height:293px;
        img{
            width:100%;
        }
        .title{
            font-size:14px;
        }
        .info{
            background-color: #eee;
            p{
                margin:0;
                padding:5px;
            }
            .price{
                .newspice{
                    color:red;
                    font-weight: bold;
                    font-size:16px;
                }
                .oldspice{
                    // color:res;
                    text-decoration: line-through;
                    margin-left: 10px;
                    font-size:12px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size:13px;
            }
        }
    }
}
</style>