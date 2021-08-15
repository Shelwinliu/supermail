<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
    </ul>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
import PullDown from '@better-scroll/pull-down'

BScroll.use(PullUp)
BScroll.use(PullDown)

export default {
  name: "Catergory",
  data() {
    return {
      scroll: null
    };
  },
  components: {

  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      pullUpLoad: {
        threshold: 50
      }
    });
    this.scroll.on('scroll', position => {
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log('上拉加载更多');
      // 发送网络请求，请求更多页数据

      setTimeout(() => {
        this.scroll.finishPullUp()
      }, 1000)
    })
  }
};
</script>

<style scoped>
.wrapper {
  background-color: red;
  height: 150px;
  /* overflow: auto; */
}
</style>
