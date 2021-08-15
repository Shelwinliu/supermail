<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>

    <cart-list></cart-list>

    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import CartList from "@/views/cart/childComps/CartList";
import CartBottomBar from '@/views/cart/childComps/CartBottomBar'

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
};
</script>

<style lang="less" coped>
.cart { 
  height: 100vh;
  color: #fff;
  .nav-bar {
    position: relative;
    background-color: var(--color-tint);
    z-index: 2;
  }
}
</style>
