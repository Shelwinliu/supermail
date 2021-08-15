<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  computed: {
    showImage() {
      if(this.$route.path.includes('home'))
      return this.goodsItem.show.img;
      return this.goodsItem.image
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      // this.$router.push('/detail/' + this.goodsItem.iid)
  
      this.$router.push({
        name: 'detail',
        params: {
          iid: this.goodsItem.iid
        }
      })
      // this.$router.push({
      //   path: '/detail',
      //   name: 'detail',
      //   query: {
      //     id: this.goodsItem.iid
      //   }
      // })
    }
  },
};
</script>

<style scoped>
.goods-item {
  width: 48%;
  margin-bottom: 20px;
}
.goods-item img {
  width: 100%;
  height: 90%;
  border-radius: 5px;
}
.goods-info {
  /* display: flex; */
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
}

.goods-info .collect::before {
  content: "";
  display: inline-block;
  margin: 0 2px 0 6px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/images/common/collect.svg") 0/14px;
}
</style>
