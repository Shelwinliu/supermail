<template>
  <div>
    <div style="width: 100%;height:500px"></div>
    <tab-control class="home-tab-control" :titles="['流行','新款','精选']"></tab-control>
    <div style="width: 100%;height:1500px"></div>
  </div>
</template>

<script>
import TabControl from "../../components/content/tabControl/TabControl.vue";
export default {
  name: "Catergory",
  data() {
    return {};
  },
  components: {
    TabControl,
  },
};
</script>

<style scoped>
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
