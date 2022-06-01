<template>
  <div class="travelpolicy">

    <!-- 顶部栏 -->
    <nav-bar-travel/>
    <!-- 插图 -->
    <img src="../../assets/image/travel.png" class="img" alt="">
    <!-- 宣传语 -->
    <travel-notice/>
    <div class="warp">
        <!-- 出行防护小贴士 -->
      <div class="title">
        <van-icon name="travel" class="iconfont icon-subway-full">出行防护贴士</van-icon>
      </div>

      <div class="wrap-item">
        <van-tabs v-model="active" 
        sticky
        type="card" 
        swipeable 
        background="white" 
        color="green" 
        border
        title-active-color="white">
          <van-tab
            v-for="(item, key, index) in contentList"
            :title="tabList[index]"
            :key="key"
          >
            <div class="contentList">
              <div class="content-item" v-for="(it, idx) in item" :key="idx">
                <div class="title">{{ it.title }}</div>
                <div class="content" style="text-align:justify;">{{ it.content }}</div>

              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>    
    </div>
    <tab-bar-mea/>
    </div>
    
</template>

<script>
import { contentList } from "./index.js";
import NavBarTravel from "../NavBar/NavBarTravel.vue";
import TabBarMea from '../TabBar/TabBarMea.vue';
import TravelNotice from '../NoticeBar/TravelNotice.vue'

export default {
  components: { NavBarTravel, TabBarMea,TravelNotice },
    data() {
    return {
      contentList,         //存储防护贴士信息
      active: 0,
      columns: [],
      tabList: ["火车", "飞机", "客运汽车", "自驾"],
      showList: [
        { show: false, showMore: false },
        { show: false, showMore: false },
        { show: false, showMore: false },
        { show: false, showMore: false },
      ],
      
    };
  },
  created(){
 
  },
  
  
}
</script>

<style lang="less" scoped>

  .travelpolicy{
    // background: rgba(100, 223, 176, 0.644);
    
    .img{
      width: 100%;
    }
  }
  .title{
      padding: 0.1rem;
      display: flex;
      margin-left: 0.1rem ;
      font-size: 40px;
      height: 40px;
    }
  .wrap {
    position: relative;
    margin: 0 0.32rem;
  


}

//有阴影的白色卡片
.wrap-item {
    width: 85%;
    margin-left: 0.3rem;
    border-radius: 0.3rem;
    padding: 0.4rem 0.24rem;
    margin-bottom: 1.3rem;
    background-color: #ffffff;
    position: relative;
    box-shadow: 1px 1px 5px 0px rgba(102, 102, 102, 0.5);
    --van-tabs-card-height:40px;
    .title {
      display: flex;
      margin-bottom: 0.3rem;
      
    }
    
  }

//文字内容
.contentList {
  width:96%;
  background-color: #ffffff;
  margin-top: 0.3rem;
  padding: 0.05rem;
  border-radius: 0.12rem;
  .content-item {
    margin-bottom: 0.2rem;
    .title {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: -0.35rem;
      margin-top: 0.3rem;
      color: #4d4d4d;
    }
    .content{
      font-size:14px;
      margin-left: 0.5rem;
      margin-top: 0rem;
    }
  }
}


</style>
