<template>
  <div class="check-button" :class="{checked: isChecked}">
    <img src="../../../assets/images/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  data() {
    return {};
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
    },
  },
  components: {},
};
</script>

<style scoped>
.check-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid #aaa;
}
.checked {
  border: 1px solid red;
  background-color: red;
}
</style>
