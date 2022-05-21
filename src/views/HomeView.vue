<template>
  <div class="home">
    <!-- 组件1 navbar导航栏 -->
    <nav-bar0/>

    <!--组件2 轮播图 -->
    <swipe-container/>
    
    <!--组件3 疫情信息卡片 -->
    <cov-info/>
    
    <tab-bar/>

  </div>
  
</template>

<script>
import CovInfo from './CovInfo/CovInfo.vue'
import SwipeContainer from './SwipeContainer/SwipeContainer.vue'
import NavBar0 from './NavBar/NavBar0.vue'

// @ is an alias to /src
import api from '../api/index'
import TabBar from './TabBar/TabBar.vue'

export default {
  name: 'HomeView',      
  components: {
    CovInfo,
    SwipeContainer,
    NavBar0,
    TabBar
  },
  created(){
    //请求病毒接口
    //等价于axios.get(base.host+base.covInfo)
    api.getCovInfo().then((res) => {
      console.log(res.data);
    })
    
    
  }
}
</script>
<style  scoped>
.home{
  background: rgba(76, 166, 240, 0.87);
}



</style>
