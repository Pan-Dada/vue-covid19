<template>
  <div class="NewsInfo">
    <!-- 组件1 顶部栏 -->
    <nav-bar-1/>
    <!-- 组件2 新闻轮播图 -->
    <news-swipe/>
    <!-- 组件3 新闻榜列表 -->
    <div class="news">
      <!-- 标题 -->
      <div class="title"><h3>热点新闻榜</h3> </div>
    <!-- 组件4 底部栏 -->
      <news-list/>
    </div>
    <tab-bar/>

  </div>

</template>

<script>
import NavBar1 from '../NavBar/NavBar1.vue'
import NewsSwipe from '../SwipeContainer/NewsSwipe.vue'
import TabBar from '../TabBar/TabBar.vue'
import NewsList from './NewsList.vue'

export default {
  components: { NavBar1, NewsSwipe, NewsList,TabBar },

}
</script>

<style lang="less" scoped>
.news{
  background: white;
}
.title{
        padding: 0.2rem;
        display: flex;
        border-left: 0.15rem  solid rgb(4, 75, 167);
        padding-left: 0.1rem;
        font-size: 0.36rem;
        margin-bottom: 16 px;
        
}
</style>