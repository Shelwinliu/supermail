<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/images/common/back.svg" alt="" />
      </div>
      <div class="title" slot="center">
        <span
          v-for="(item, index) in titles"
          @click="titleClick(index)"
          :class="{ 'active': index === currentIndex }"
          >{{ item }}</span
        >
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import { getDetail } from "@/network/detail";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {NavBar},

  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.back img {
  vertical-align: middle;
}
.title {
  display: flex;
  justify-content: space-evenly;
}
.active {
  color: var(--color-high-text);
}
</style>
