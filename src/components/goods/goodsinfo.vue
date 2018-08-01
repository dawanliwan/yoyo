<template>
    <div class="">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="isball" ref="ball"></div>
        </transition>
        <div class="mui-card">
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
                        购买数量
                        <numbox @getselector = 'getselector'></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small"> 立即购买</mt-button>
                        <mt-button type="danger" size="small"  @click="isball = !isball"> 加入购物车</mt-button>
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
import numbox from '../../othercomponent/num.vue'
export default {
  data: () => ({
    id: '',
    imgmessage: [],
    full: false,
    goodinfo: [],
    idinfo: [],
    isball: false
  }),
  created() {
    // 要注意是字符串拼接的问题
    this.id = 100 + parseInt(this.$route.params.id) + ''
    this.idinfo = this.$route.params.id
    this.getluobotu(), this.getgoodsinfo()
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
    getgoodsinfo() {
      this.$http.get('api/goods/getinfo/' + this.idinfo).then(res => {
        if (res.body.status === 0) {
          this.goodinfo = res.body.message
        }
      })
    },
    product(id) {
      //路由编程
      this.$router.push({ name: 'goodsdes', params: { id } })
    },
    mark(id) {
      this.$router.push({ name: 'goodsmark', params: { id } })
    },
    beforeEnter(el){
        el.style.transform = "translate(0,0)"
    },
    enter(el,done){
        //获取小球在页面上的位置 this.$refs.ball
        const smallball = this.$refs.ball.getBoundingClientRect();
        const barcar = document.getElementById('huibiao').getBoundingClientRect();
        //算小球要移动的差值距离
        const xDist = barcar.left - smallball.left;
        const yDist = barcar.top - smallball.top;
        el.offsetWidth
        el.style.transition = 'all 0.5s ease'
        el.style.transform = `translate(${xDist}px,${yDist}px)`
        done()
    },
    afterEnter(el){
        this.isball = !this.isball
    },
    getselector(data){
        console.log(data)
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
.ball {
  width: 15px;
  height: 15px;
  background-color: red;
  top: 410px;
  left: 79px;
  position: absolute;
  border-radius: 50%;
  z-index: 99;
}
</style>