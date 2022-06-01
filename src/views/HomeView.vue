<template>
  <div class="home">
    <!-- 组件1 顶部导航栏 -->
    <nav-bar0/>
    <!-- 组件2 轮播图 -->
    <swipe-container/>
    <!-- 个人中心 -->
    <img src="../assets/image/center.png" class="img" alt="" @click="personinfo()">
    <!-- 组件3 疫情信息卡片 -->
    <cov-info/>
    <!-- 组件4 底部导航栏 -->
    <tab-bar/>

    <!-- <domestic-info :covData="covData" /> -->
  </div>
  
</template>

<script>

import CovInfo from './CovInfo/CovInfo.vue'
import SwipeContainer from './SwipeContainer/SwipeContainer.vue'
import NavBar0 from './NavBar/NavBar0.vue'
import TabBar from './TabBar/TabBar.vue'
import { ref } from "vue";

export default {
  name: 'HomeView',
  
  data() {
    const userid = ref("");
    return {
      covData: {}, //全国数据统计
      userid
      
    };
  },

  components: {
    NavBar0,
    SwipeContainer,
    CovInfo,
    TabBar,
    // DomesticInfo
  },
  props: {},
  created(){
    this.userid=this.$route.query.userid;
    console.log(this.userid);
  },
  mounted() {},

  methods:{
    personinfo(){
      this.$router.push(
            {
                path:"/personinfo",
                query:{
                    userid:this.userid

                }
            }
          )
    }
  }
}

</script>
<style lang="less" scoped>
.home{
  background: rgba(112, 185, 245, 0.6);
  .img{
  box-shadow:  5px 5px 5px rgba(2, 101, 158, 0.6);//阴影
   display: flex;
        margin-left:2.5%;
        margin-right: 1%;
        width: 94%;
        margin-top: 2%;
        margin-bottom: 2%;
        border-radius: 15px ;
        border: 2.5px solid rgb(5, 102, 167);
  }
}

</style>
