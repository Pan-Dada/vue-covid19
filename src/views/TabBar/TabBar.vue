<template>
  <div>
    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="home-o" @click="$router.push('/')">首页</van-tabbar-item>

        <van-tabbar-item name="domestic" @click="$router.push('/domesticinfo')">
          <div class="icon" ><van-icon name="domestic" class="iconfont icon-guoneiyou" /></div>
          <div>国内</div>
        </van-tabbar-item>

        <van-tabbar-item name="worldwide" @click="$router.push('/worldwide')">
          <div class="icon"><van-icon name="worldwide" class="iconfont icon-wangluo" /></div>
          <div>全球</div>
        </van-tabbar-item>
        
        <van-tabbar-item name="measures" icon="orders-o" @click="$router.push('/measures')">
         措施 
        </van-tabbar-item>
        
    </van-tabbar>

  </div>
</template>


<script>

import { ref } from 'vue';

export default {
  setup() {
    const active = ref('home');
    return { active };
  },
};

</script>

<style lang="less" scoped>
.icon{
    width: 30px;
    height: 22px;
    margin: 0 auto;
}

</style>>

