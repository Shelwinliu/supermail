<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button
        :isChecked="itemInfo.checked"
        @click.native="checkClick"
      ></check-button>
    </div>

    <img v-lazy="itemInfo.image" alt="商品图片" />

    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">{{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ itemInfo.price }}</div>
        <div class="item-count right">×{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "CartListItem",
  data() {
    return {};
  },
  props: {
    itemInfo: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    CheckButton,
  },
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked;
    },
  },
};
</script>

<style lang="less" scoped>
#shop-item {
  display: flex;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 24%;
  border-radius: 6%;
  margin-right: 10px;
}
.item-info {
  font-size: 17px;
  color: #333;
  position: relative;
  width: 100%;
  overflow: hidden; //溢出隐藏
  text-overflow: ellipsis;
  white-space: nowrap; //强制不换行
  margin-left: 10px;
  .item-title,
  .item-desc {
    width: 100%;
    overflow: hidden; //溢出隐藏
    text-overflow: ellipsis;
    white-space: nowrap; //强制不换行
  }
  .item-title {
    margin-bottom: 15px;
  }
  .item-desc {
    font-size: 14px;
  }
  .info-bottom {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 10px;
    .item-price {
      color: orangered;
      font-weight: bold;
    }
  }
}
</style>
