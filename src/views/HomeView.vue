<template>
  <div class="home">
    <!-- 组件1 顶部导航栏 -->
    <nav-bar0/>
    <!-- 组件2 轮播图 -->
    <swipe-container/>
    <!-- 组件3 疫情信息卡片 -->
    <cov-info/>
    <!-- 组4 底部导航栏 -->
    <tab-bar/>

    <!-- <domestic-info :covData="covData" /> -->
  </div>
  
</template>

<script>
import api from '../api/index'
import CovInfo from './CovInfo/CovInfo.vue'
import SwipeContainer from './SwipeContainer/SwipeContainer.vue'
import NavBar0 from './NavBar/NavBar0.vue'
import TabBar from './TabBar/TabBar.vue'

export default {
  name: 'HomeView',
  
  data() {
    return {
      covData: {}, //全国数据统计
    };
  },

  components: {
    NavBar0,
    SwipeContainer,
    CovInfo,
    TabBar,
    // DomesticInfo
  },
  created(){
    //请求病毒接口
    //等价于axios.get(base.host+base.covInfo)
    api.getCovInfo().then((res) => {
      console.log(res.data.newslist[0]);
      let data = res.data.newslist[0].desc;
       //全国疫情的数据统计信息---
      this.covData = {
        currentConfirmedCount: data.currentConfirmedCount,
        confirmedCount: data.confirmedCount,
        suspectedCount: data.suspectedCount,
        curedCount: data.curedCount,
        deadCount: data.deadCount,
        seriousCount: data.seriousCount,
        suspectedIncr: data.suspectedIncr,
        currentConfirmedIncr: data.currentConfirmedIncr,
        confirmedIncr: data.confirmedIncr,
        curedIncr: data.curedIncr,
        deadIncr: data.deadIncr,
        seriousIncr: data.seriousIncr,
        modifyTime: data.modifyTime,
      };

    })
      
  }
}
</script>
<style  scoped>
.home{
  background: rgba(112, 185, 245, 0.6);
}



</style>
