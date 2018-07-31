<template>
    <div class="">
        <!-- 顶部滑动 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" ref="wrapper" class="list-wrapper mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',{'mui-active': index === defal}]" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="(item,index) in imginfo" :key="item.id" @click.prevent="getimg(index)">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>
        <!-- 图片懒加载 -->
        <ul class="list-ul">
            <router-link v-for="item in imglist" :key="item.id" :to="'/home/imglist/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="infotitle">{{item.title}}</h1>
                    <div class="infocontent">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data: () => ({
    options: {
      scrollX: true
    },
    defal: 0,
    imginfo: [],
    //获取图片地址的数组
    imglist: []
  }),
  created() {
    this.getimginfo()
    this.getimg(0)
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, this.options)
  },
  methods: {
    //获得图片列表
    getimginfo() {
      this.$http.get('api/getimgcategory').then(res => {
        console.log(res.body)
        this.imginfo = res.body.message
      })
    },
    // getimglist(index) {
    //   //   alert('哈哈哈')
    //   this.defal = index
    // },
    getimg(index) {
      this.defal = index
      this.$http.get('api/getimages/' + index).then(res => {
        // console.log(res.body)
        if (res.body.status === 0) {
          this.imglist = res.body.message
          console.log(this.imglist)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.list-ul {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img[lazy='loading'] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    img {
      width: 100%;
      vertical-align: middle;
    }
    .info {
      width: 100%;
      position: absolute;
      bottom: 0;
      color: white;
      background-color: rgba(0, 0, 0, 0.4);
      .infotitle {
        font-size: 14px;
      }
      .infocontent {
        font-size: 13px;
      }
    }
  }
}
</style>