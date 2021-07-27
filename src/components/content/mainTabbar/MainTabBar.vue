<template>
 <div>
   <tab-bar>
     <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="@/assets/images/tabbar/home.svg" alt="" srcset="" />
      <img slot="item-icon-active" src="@/assets/images/tabbar/home_active.svg" alt="" srcset="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/catergory">
      <img slot="item-icon" src="@/assets/images/tabbar/category.svg" alt="" srcset="" />
      <img slot="item-icon-active" src="@/assets/images/tabbar/category_active.svg" alt="" srcset="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/images/tabbar/shopcart.svg" alt="" srcset="" />
      <img slot="item-icon-active" src="@/assets/images/tabbar/shopcart_active.svg" alt="" srcset="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/images/tabbar/profile.svg" alt="" srcset="" />
      <img slot="item-icon-active" src="@/assets/images/tabbar/profile_active.svg" alt="" srcset="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
   </tab-bar>
 </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

 export default {
   name: '',
   data () {
     return {

     }
   },
   components: {
     TabBar,
     TabBarItem
   }
 }
</script>

<style scoped>

 
</style>
