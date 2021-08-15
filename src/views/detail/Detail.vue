<template>
  <div>
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>

    <!-- <ul style="overflow:hidden">
      <li v-for="item in $store.state.cartList">{{item}}</li>
    </ul> -->

    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :swiperImages="topImages"></detail-swiper>

      <detail-base-info
        :goods="goods"
        class="detail-base-info"
      ></detail-base-info>

      <detail-shop-info
        :shop="shop"
        class="detail-shop-info"
      ></detail-shop-info>

      <detail-goods-info :detail-info="detailInfo" @imageLoad="imgLoad">
      </detail-goods-info>

      <detail-param-info
        :param-info="paramInfo"
        ref="params"
      ></detail-param-info>

      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>

      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>

    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

    <!-- <toast :message="message" :isShow="isShow"></toast> -->
  </div>
</template>

<script>
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "@/network/detail";

import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import Scroll from "@/components/common/scroll/Scroll";
// import BackTop from "@/components/content/backTop/backTop.vue";
import Toast from '@/components/common/toast/Toast'

import { debounce } from "@/common/utils.js";
import { backTopMixin } from "@/common/mixin.js";

import GoodsList from "@/components/content/goods/GoodsList.vue";

import {mapActions} from 'vuex'

export default {
  name: "Detail",
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      refresh: null,
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      message: '',
      isShow: false
      // isShowBackTop: false
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    // BackTop
    Toast
  },
  created() {
    // 1.保存首页传入的id
    this.iid = this.$route.params.iid;

    // 2.根据id请求数据
    getDetail(this.iid).then((res) => {
      console.log(res.result);
      const data = res.result;
      // 2.1 获取轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 2.2 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 2.3 创建商店信息
      this.shop = new Shop(data.shopInfo);
      // 2.4 保存商品详情数据
      this.detailInfo = data.detailInfo;
      // 2.5 获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 2.6 取出评论信息
      if (data.rate.cRate) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 3.请求推荐数据
    getRecommend().then((res) => {
      console.log(res.data);
      this.recommends = res.data.list;
    });

    // 4. 取每部分距离浏览器边界的偏移量，并做防抖处理
    this.getThemeTopY = debounce(() => {
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);

      console.log(this.themeTopYs);
    }, 100);
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh);
  },
  methods: {
    ...mapActions(['addCart']),
    imgLoad() {
      this.refresh();
      this.getThemeTopY();
    },
    // 点击navbar选项并跳转到相应部分
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 200);
    },

    contentScroll(position) {
      this.isShowBackTop = position.y < -1000;
      // 获取Y值
      const positionY = -position.y;
      const length = this.themeTopYs.length;
      // console.log(position.y);
      for (let i = 0; i < this.themeTopYs.length - 1; i++)
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
          // console.log(i, positionY);
        }
    },

    addToCart() {
      // 1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2.将商品加入购物车
      // this.$store.commit('addCart', product)
      this.addCart(product).then((res) => {
        // this.isShow = true;
        // this.message = res
        // console.log(res);
        
        // setTimeout(() => {
        //   this.isShow = false
        //   this.message = ''
        // }, 1000);
        this.$toast.show(res)
      });
    },

    // backClick() {
    //   this.$refs.scroll.scrollTo(0, 0, 500);
    // },
  },
};
</script>

<style scoped>
.content {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}

.detail-base-info {
  margin: 10px 0;
  padding: 5px;
}

.detail-shop-info {
  padding: 30px 10px;
  border-top: 5px solid #f2f5f8;
  border-bottom: 5px solid #f2f5f8;
}
</style>
