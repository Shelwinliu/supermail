<template>
  <div class="bottom-bar">
    <check-button
      class="check-area"
      :isChecked="isSelectAll"
      @click.native="checkClick"
    ></check-button>
    <span class="select">全选</span>
    <span class="total">合计{{ totalPrice }}</span>
    <button class="calc" @click="calcClick">去计算({{ calcNum }})</button>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CarBottomBar",
  data() {
    return {};
  },
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList", "cartLength"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    calcNum() {
      return this.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      return this.cartList.length
        ? this.cartList.every((item) => {
            return item.checked;
          })
        : false;
    },
  },
  methods: {
    ...mapMutations(["itemChecked"]),
    checkClick() {
      let tOrF = this.isSelectAll;
      // this.cartList.forEach((element) => {
      //   element.checked = !tOrF;
      // });
      // this.$store.commit('itemChecked', tOrF)
      this.itemChecked(tOrF);
    },
    calcClick() {
      if (!this.cartLength) {
        this.$toast.show("请选择要购买的商品");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.bottom-bar {
  display: flex;
  align-items: center;
  height: 40px;
  position: absolute;
  width: 100vw;
  bottom: 52px;
  background-color: #eee;
  .check-area {
    background-color: #eee;
    border: 2px solid rgb(173, 171, 171);
    margin-left: 10px;
  }
  .checked {
    border: 1px solid red;
    background-color: red;
  }
  .select {
    flex: 1;
    font-size: 14px;
    color: rgb(126, 124, 124);
  }
  .total {
    flex: 1;
    color: black;
    font-size: 17px;
  }
  .calc {
    flex: 1;
    height: 100%;
    background-color: red;
    border-width: 0;
    color: #fff;
  }
}
</style>
