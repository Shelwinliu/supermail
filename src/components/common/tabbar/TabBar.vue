<template>
  <div id="tabbar">
    <slot></slot>
  </div>
  
</template>

<script>
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: "TabBar",
  data() {
    return {};
  },
  components: {
    TabBarItem
  },
};
</script>

<style scoped>
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(207, 203, 203);
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
}
</style>
