<template>
    
  <div class="protectGuide">
      <nav-bar-good/>
    <div class="warp">
      <div class="top-logo">
        <img src="../../assets/image/measure03.png" alt="" />
      </div>
      <van-tabs sticky >
        <van-tab v-for="item in tabList" :title="item.title" :key="item.title">
          <img :src="item.img" alt="" class="my-img"/>
        </van-tab>
      </van-tabs>
    </div>
    <div class="foot">
      <button>抗疫物资购买</button>
    </div>
  </div>
</template>
<script>
import NavBarGood from '../NavBar/NavBarGood.vue';

export default {
  components: {NavBarGood  },
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
  },
};
</script>
<style lang="less" scoped>
.my-img{
    width: 100%;
}

.protectGuide {
  height: 100vh;
  display: flex;
  flex-flow: column;
  background-color: rgba(35, 173, 92, 0.87);
  .foot {
    text-align: center;

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
    .top-logo {
      img {
        width: 100%;
      }
    }

    .van-tabs {
      position: relative;
      
      ::v-deep.van-tabs__line {
        background-color: transparent;
      }
      ::v-deep.van-tabs__nav--line {
        padding: 0 0.32rem;
        background-color: rgba(42, 147, 233, 0.87);
        .van-tab{
          padding: 0;
        }
        .van-tab+.van-tab{
          padding-left: 0.24rem;
        }
        
        .van-tab__text {
          background-color: rgba(42, 147, 233, 0.87);
          color: #fff;
          width: 100%;
          text-align: center;
          line-height: 0.48rem;
          border-radius: 0.04rem;
        }
      }
       ::v-deep .van-tab--active .van-tab__text {
          background-color: #f78207;
        }
       ::v-deep .van-tabs__content {
         padding: 0 0.32rem;
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