<template>
 <div>
   <div class="back-top">
     <img src="@/assets/images/common/top.png" alt="" srcset="">
   </div>
 </div>
</template>

<script>
 export default {
   name: 'BackTop',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 80px;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>
