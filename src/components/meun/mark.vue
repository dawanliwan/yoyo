<template>
    <div class="cmt-container">
        <hr>
        <h3>发表评论</h3>
        <textarea placeholder="200字" maxlength="200" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="addmark">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,i) in comment">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | datastra}}
                </div>
                <div class="cmt-body">
                    {{item.content === "undefined" ? "没有评论":item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large"  @click="getmark">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data: () => ({
    comment: [],
    pageindex: 1,
    msg: ''
  }),
  created() {
    this.getmarklist()
  },
  methods: {
    getmarklist() {
      this.$http
        .get('api/getcomments/' + this.id + '?pageindex=' + this.pageindex)
        .then(res => {
          console.log(res.body)
          if (res.body.status === 0) {
            // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
            this.comment = this.comment.concat(res.body.message)
          }
        })
    },
    getmark() {
      this.pageindex++
      this.getmarklist()
    },
    addmark() {
      //检查评论输入是否为空
      if (this.msg.trim().length === 0) {
        return Toast('评论内容不能为空！')
      }
      //把评论添加到comment数组里面,不会把前面的评论给冲掉

      this.$http.post('api/postcomment/' + this.id, {
          content: this.msg.trim()
        })
        .then(res => {
          if (res.body.status === 0) {
            var newmark = {
              add_time: Date.now(),
              content: this.msg.trim(),
              user_name: '匿名用户'
            }
            this.comment.unshift(newmark)
            this.msg = ''
            // this.getmarklist()
          }
        })
    }
  },
  props: ['id']
}
</script>

<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
  
}
</style>