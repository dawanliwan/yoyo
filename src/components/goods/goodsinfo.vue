<template>
    <div class="">
        <div class="mui-card lun">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <lunbotu :imgmessage="imgmessage" :full="full"></lunbotu>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        <span class="old">市场价:{{goodinfo.market_price}}</span>
                        <span class="new">销售价:{{goodinfo.sell_price}}</span>
                    </p>
                    <p>
                        <span>购买数量</span>
                        <numbox></numbox>

                    </p>
                    <p>
                        <mt-button type="primary" size="small"> 立即购买</mt-button>
                        <mt-button type="danger" size="small"> 加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{goodinfo.goods_no}}</p>
                    <p>库存情况:{{goodinfo.stock_quantity}}</p>
                    <p>上架时间:{{goodinfo.add_time | datastra}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain class="tuwen" @click="product(idinfo)"> 图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="mark(idinfo)"> 商品评价</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import lunbotu from '../../othercomponent/luobotu.vue'
import numbox from '../../othercomponent/numbox.vue'
export default {
  data: () => ({
    id: '',
    imgmessage: [],
    full: false,
    goodinfo:[],
    idinfo:[]
  }),
  created() {
    // 要注意是字符串拼接的问题
    this.id = (100 + parseInt(this.$route.params.id)) + ''
    this.idinfo=this.$route.params.id
    this.getluobotu(),
    this.getgoodsinfo()
  },
  methods: {
    getluobotu() {
      this.$http.get('api/getthumimages/' + this.id).then(res => {
        // console.log(res)
        if (res.body.status === 0) {
          res.body.message.forEach(item => {
            //添加一个img属性
            item.img = item.src
            this.imgmessage = res.body.message
            // console.log(this.id)
          })
        } else {
          console.log('获取数据失败')
        }
      })
    },
    getgoodsinfo(){
        this.$http.get('api/goods/getinfo/'+this.idinfo).then(res=>{           
            if(res.body.status===0){
                this.goodinfo = res.body.message
            }
        })
    },
    product(id){
       //路由编程
       this.$router.push({name:'goodsdes',params:{id}})
    },
    mark(id){
        this.$router.push({name:'goodsmark',params:{id}})
    }
  },
  components: {
    lunbotu,
    numbox
  }
}
</script>

<style lang="less" scoped>
.mui-card-footer {
  display: block;
  .tuwen {
    margin-bottom: 10px;
  }
}
</style>