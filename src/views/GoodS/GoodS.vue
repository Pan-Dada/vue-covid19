<template>
  <div class="goods">
    <div class="warp">
      <!-- 顶部栏 -->
      <div><nav-bar-good/></div>
      <!-- 插图 -->
      <div class="top-logo">
        <img src="../../assets/image/measure3.png" class="img" alt="" />
      </div>
      <!-- 图文介绍 -->
      <good-notice/>
      <div class="tabs">
        <van-tabs sticky
        type="card" 
        swipeable 
        background="white" 
        color="green" 
        border
        title-active-color="white">
        <van-tab v-for="item in tabList" :title="item.title" :key="item.title">
          <img :src="item.img" alt="" class="my-img"/>
        </van-tab>
      </van-tabs></div>
    </div>
    <!-- 购买按钮 -->
    <div class="foot">
      <button @click="showToast();$router.push('/buygoods')">抗疫物资购买</button>
    </div>
  </div>
</template>

<script>
import NavBarGood from '../NavBar/NavBarGood.vue';
import GoodNotice from '../NoticeBar/GoodNotice.vue';

export default {
  components: {NavBarGood,GoodNotice },
  data() {
 
     return {
      tabList: [
        { title: "消毒剂", img: require("@/assets/image/xiaoduji.png") },
        { title: "口罩", img: require("@/assets/image/kouzhao.png") },
        { title: "洗手液", img: require("@/assets/image/xishouye.png") },
        { title: "温度计", img: require("@/assets/image/wenduji.png") },
      ],
    };
  },
    methods: {
    goBack() {
      this.$router.go(-1);
    },
    
    showToast(){
       this.$toast.loading('进入商品界面中...');
       this.$toast.setDefaultOptions({ duration: 500 });
    }
  
  },
};
</script>
<style lang="less" scoped>
.my-img{
    width: 100%;
}

.goods {
  
  height: 100vh;
  display: flex;
  flex-flow: column;
  // background-color: rgba(18, 168, 111, 0.644);
  background: white;

  //主体卡片
  .tabs{
    margin-top: 20px;
    width: 88%;
    margin-left: 4%;
    padding: 2% 2% 2%;
    border-radius: 0.3rem;
    box-shadow: 1px 1px 3px 1px rgba(102, 102, 102, 0.5);
    margin-block: 0.5rem;

  }

  .foot {
    text-align: center;
    background: white;
    

    // 购买按钮
    button {
      margin: 0.16rem 0;
      width: calc(100% - 1.2rem);
      line-height: 0.8rem;
      background-color: #ee792b;
      border: 0;
      border-radius: 0.5rem;
      color: #fff;
    }
  }

  .warp {
    
    position: relative;
    overflow-y: auto;
    --van-tabs-card-height:40px;

    .top-logo {
      .img {
        width: 100%;
      }
    }
    
    
    .van-tabs {
      position: relative;
      margin-top: 20px;
      
      ::v-deep.van-tabs__line {
        background-color: transparent;
      }

       ::v-deep .van-tabs__content {
         padding: 0.1rem 0.1rem;
         
         
      }
      .van-tab__pane {
        
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>