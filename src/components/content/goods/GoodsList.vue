<template>
 <div class="goods">
   <goods-list-item v-for="item in goods" :goodsItem="item" :key="item.id"></goods-list-item>
 </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

 export default {
   name: 'GoodsList',
   data () {
     return {

     }
   },
   props: {
     goods: {
       type: Array,
       defualt() {
         return []
       }
     }
   },
   components: {
      GoodsListItem

   }
 }
</script>

<style scoped>
.goods {
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: var(--color-background);
  
}
/* .goods-list-item {
  flex: 1
} */
 
</style>
