<template>
  <div class="cart-list">
    <scroll class="wrapper" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :item-info="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

import CartListItem from "@/views/cart/childComps/CartListItem";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  data() {
    return {};
  },
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
   activated() {
     this.$refs.scroll.refresh()
   }
};
</script>

<style lang="less" scoped>
.cart-list {
  color: #000;
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 86px;
    left: 0;
    right: 0;
    // overflow: hidden;
  }
}
</style>
