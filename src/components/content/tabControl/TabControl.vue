<template>
 <div class="tab-control">
   <div v-for="(item,index) in titles" class="tab-contrl-item" @click="tabItemClick(index)">
     <span :class="{active: index === currentIndex}">{{item}}</span>
   </div>
 </div>
</template>

<script>
 export default {
   name: 'TabControl',
   data () {
     return {
       currentIndex: 0
     }
   },
   props: {
     titles: {
       type: Array,
       default() {
         return []
       }
     }
   },
   methods: {
     tabItemClick(index) {
       this.currentIndex = index
       // 将所点击的 index 传给整个 home 页面（子传父）进行商品的切换
       this.$emit('tabClick', index)
     }
   },
   components: {

   }
 }
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control .tab-contrl-item {
  flex: 1;
}
.tab-contrl-item span {
  padding: 6px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 3px solid rgb(251, 157, 173);
}
 
</style>
