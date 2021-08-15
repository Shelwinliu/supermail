<template>
  <div v-if="Object.keys(commentInfo).length" class="comment-info">
    <header>
      <span>用户评价</span>
      <span>更多</span>
    </header>
    <div class="main">
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
          <span class="date">{{ commentInfo.created | showDate }}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils"

export default {
  name: "DetailCommentInfo",
  data() {
    return {};
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss")
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.comment-info {
  padding: 15px;
  header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
  .main {
    border-top: 1px solid pink;
    padding: 15px 0;
    .info-user {
      display: flex;
      line-height: 40px;
      padding: 0 0 10px 0;
      img {
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
      span {
        display: inline-block;
        vertical-align: middle;
      }
    }
    .info-other {
      font-size: 12px;
      color: #999;
      padding: 10px 0;
      .date {
        margin-right: 10px;
      }
    }
  }
}
</style>
