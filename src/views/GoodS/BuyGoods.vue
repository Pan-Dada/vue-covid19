<template>
  <div class="BuyGoods">
      <!-- 顶部栏 -->
      <nav-bar-shop/>
      <!-- 搜索框 -->
      <div class="search" >
        <van-search
        v-model="value"
        shape="round"
        background="rgba(27, 160, 82, 0.87)"
        placeholder="请输入商品关键词"
        />
      </div>
      <!-- 选择栏 -->
      <div class="select">
          <van-dropdown-menu active-color="#1989fa">
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
      </div>
      <!-- 商品列表 -->
      <goods-list/>
      <!-- 底部栏 -->
      <tab-bar-buy/>
    </div>
</template>

<script>
import { ref } from 'vue';
import NavBarShop from '../NavBar/NavBarShop.vue'
import GoodsList from './GoodsList.vue';
import TabBarBuy from '../TabBar/TabBarBuy.vue'
export default {
  components: { NavBarShop, GoodsList,TabBarBuy },
  setup() {
    const value1 = ref(0);
    const value2 = ref('a');
    const option1 = [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ];
    const option2 = [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ];

    return {
      value1,
      value2,
      option1,
      option2,
    };
  },

}
</script>

<style lang="less" scoped>
.search{
  position: relative;
  
}
</style>