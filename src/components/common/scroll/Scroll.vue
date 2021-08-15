<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// import PullUp from '@better-scroll/pull-up'
// import PullDown from '@better-scroll/pull-down'

// BScroll.use(PullUp)
// BScroll.use(PullDown)

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
  },
  components: {},
  mounted() {
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3, // 滑动类型
      click: true,  // 是否可以点击
      // pullUpLoad: {
      //   threshold: 50
      // },
      pullUpLoad: this.pullUpLoad, // 是否支持上拉
      observeDOM: true,
      observeImage: true,
      mouseWheel: true,
    });
    // 监听滚动位置
    if(this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
      // console.log(position);
      // console.log(this.scroll.y);
      this.$emit("scroll", position);
    });
    }
    // 监听上拉事件
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      // 发送网络请求，请求更多页数据
      this.$emit("pullingUp");
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 1000);
      // this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      // 若this.scroll存在才能执行
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 1000);
    },
    refresh() {
      console.log('---');
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll? this.scroll.y : 0
    }
  },
};
</script>

<style scoped>
</style>
