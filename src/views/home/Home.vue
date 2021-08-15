<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    ></tab-control>

    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper 
      :banners="banners" @swiperImageLoad="swiperImageLoad">
      </home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "@/network/home";

import NavBar from "@/components/common/navbar/NavBar";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/backTop.vue";

import { debounce } from "@/common/utils.js";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      isTabFixed: false,
      tabOffsetTop: 0,
      saveY: 0
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    this.getHomeGoods(this.currentType);
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // this.getHomeGoods('new')
  },
  mounted() {
    // 监听 item 中的图片是否加载完成
    const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    })
  },
  activated() {
    this.$refs.scroll.refresh();
    console.log(this.saveY);
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    console.log(this.saveY);
  },
  computed: {
    // 展示商品数据
    showGoods() {
      // console.log(this.goods[this.currentType].list);
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 请求网络数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res.data);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res.data);
        this.goods[type].list.push(...res.data.list);
        // console.log(this.goods[type].list);
        this.goods[type].page++;
        // console.log(this.goods.sell.page);
      });
    },
    // 事件监听相关方法
    tabClick(index) {
      // console.log(index);
      // console.log(Object.keys(this.goods));
      console.log(Object.keys(this.goods));
      this.currentType = Object.keys(this.goods)[index];

      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      // this.getHomeGoods(this.currentType)
      // switch (index) {
      //   case 0:
      //     this.currentType = 'pop';
      //     break;
      //   case 1:
      //     this.currentType = 'new';
      //     break;
      //   case 2:
      //     this.currentType = 'sell';
      //     break;
      // }

      // 点击请求不同的商品数据，但每点击一次就请求一次，对速度会有影响
    },
    // 监听滚动
    backClick() {
      // console.log(111);
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 监听滚动
    contentScroll(position) {
      this.isShowBackTop = position.y < -1000;
      this.isTabFixed = -position.y > this.tabOffsetTop
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
      // this.$refs.scroll.refresh()
    },

    // 图片加载完成后获取当前对象到其上级层顶部的距离offsetTop
    swiperImageLoad() {
      this.$refs.scroll.refresh()
      console.log(this.$refs.tabControl2.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  /* padding-bottom: 100px; */
}
.home-nav {
  /* position: sticky;
  top: 0;
  z-index: 1; */
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: relative;
  top: -0.5px;
  z-index: 1;
}

.wrapper {
  /* height: 500px; */
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
  overflow: hidden;
  /* touch-action: none; */
}
</style>
