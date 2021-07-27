<template>
 <div class="recommend">
   <div v-for="item in recommends">
     <a :href="item.link">
       <img :src="item.image" alt="">
       <div>{{item.title}}</div>
     </a>
   </div>
 </div>
</template>

<script>
 export default {
   name: 'RecommendView',
   data () {
     return {

     }
   },
   props: {
     recommends: {
       type: Array,
       default() {
         return []
       }
     }
   },
   components: {

   }
 }
</script>

<style scoped>
  .recommend {
    display: flex;
    justify-content: space-around;
    padding: 10px 0 20px;
    border-bottom: 10px solid rgba(238,238,238,.6);
  }
  .recommend > div {
    flex: 1;
    text-align: center;
  }
  .recommend img {
    width: 90%;
    margin-bottom: 6px;
  }
</style>
