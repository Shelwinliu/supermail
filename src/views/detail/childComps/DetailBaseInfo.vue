<template>
  <div class="base-info" v-if="Object.keys(goods).length != 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span v-for="item in goods.columns">{{item}}</span>
    </div>
    <!-- <div class="info-service"></div> -->

    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img v-lazy="goods.services[index].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
};
</script>

<style scoped>
/* .base-info {
  margin-top: 10px;
  padding: 5px;
} */

.info-title {
  color: #222;
}

.info-price {
  margin: 10px 0 15px 0;
}
.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price {
  text-decoration: line-through;
  margin: 0 5px;
}
.info-price .discount {
  font-size: 12px;
  position: relative;
  top: -8px;
  padding: 2px 5px;
  text-align: center;
  border-radius: 40%;
  color: #fff;
  background-color:var(--color-high-text);
}

.info-other {
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  height: 30px;
  font-size: 13px;
}
.info-service .info-service-item img {
  width: 12px;
  margin-right: 5px;
}
</style>
