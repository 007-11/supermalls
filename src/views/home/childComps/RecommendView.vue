<template>
  <div class='recommend'>
    <div v-for='(item,index) in recommends' :key="index" class='recommendItem'>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
name:'RecommendView',
props:{
  recommends:{
    type:Array,
    default(){
      return[]
    }
  }
}
}
</script>

<style>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0  15px;
  font-size: 12px;
  border-bottom: 10px solid #eee;
}
.recommendItem{
  flex: 1;
}
.recommendItem img{
  height: 65px;
  width: 65px;
  margin-bottom: 10px;
}
</style>