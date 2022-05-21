<template>
  <div>
    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="home-o" @click="$router.push('/')" >首页</van-tabbar-item>

        <van-tabbar-item name="domestic" @click="$router.push('/domesticinfo')">
          <div class="icon" ><van-icon name="domestic" class="iconfont icon-guoneiyou" /></div>
          <div>国内</div>
        </van-tabbar-item>

        <van-tabbar-item name="worldwide" @click="$router.push('/worldwide')">
          <div class="icon"><van-icon name="worldwide" class="iconfont icon-wangluo" /></div>
          <div>海外</div>
        </van-tabbar-item>
        
        <van-tabbar-item name="measures" @click="$router.push('/measures')" >
          <div class="icon"><van-icon name="measures" class="iconfont icon-yiqingguanli" /></div>
          <div>措施</div>
        </van-tabbar-item>
        
    </van-tabbar>

  </div>
</template>


<script>

import { ref } from 'vue';

export default {
  setup() {
    const active = ref('domestic');
    return { active };
  },
};

</script>

<style lang="less" scoped>
.icon{
    width: 40px;
    height: 22px;
    margin: 0 auto;
}

</style>>

