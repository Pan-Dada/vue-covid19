<template>
  <div>
    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="orders-o" @click="$router.push('/buygoods')" >商品列表</van-tabbar-item>
        <van-tabbar-item name="cart" icon="cart-o" @click="$router.push('/cart')" >购物车</van-tabbar-item>
        
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

