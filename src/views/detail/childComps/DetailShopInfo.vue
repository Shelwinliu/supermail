<template>
  <section>
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>

    <div class="shop-middle">
      <div class="shop-middle-left">
        <section>
          <div class="sells-count">{{ shop.sells | sellCountFilter }}</div>
          <div class="selles-text">总销量</div>
        </section>
        <section>
          <div class="goods-count">{{ shop.goodsCount }}</div>
          <div class="goods-text">全部宝贝</div>
        </section>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td :class="{ 'score-better': item.isBetter }">{{ item.score }}</td>
            <td :class="{ 'better-more': item.isBetter }" align="center">
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  filters: {
    sellCountFilter(sells) {
      if (sells < 10000) return sells;
      return (sells / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style lang="less" scoped>
.shop-top {
  height: 50px;
  line-height: 50px;
  > img {
    width: 10%;
    border: 1px solid pink;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 8px;
  }
}

.shop-middle {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  text-align: center;
  margin: 10px 0 20px 0;
  .shop-middle-left {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    color: #333;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    .sells-count,
    .goods-count {
      height: 30px;
      font-size: 18px;
    }
  }
  .shop-middle-right td {
    height: 22px;
    padding: 0 3px;
    font-size: 13px;
  }
  .score-better {
    color: #f13e3a;
  }
  .better-more {
    background-color: #5ea732;
    color: #fff;
  }
}

.shop-bottom {
  display: flex;
  justify-content: center;
  font-size: 14px;
  > div {
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
}
</style>
