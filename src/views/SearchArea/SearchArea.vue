<template>
  <div class="SearchArea">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入检测机构名称"
        @search="onSearch"
        >
        <template #action>
            <div @click="onClickButton">搜索</div>
        </template>
        </van-search>

  </div>
</template>

<script>
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const value = ref('');
    const onSearch = (val) => Toast(val);
    const onClickButton = () => Toast("搜索中，请稍候");
    return {
      value,
      onSearch,
      onClickButton,
    };
  },
};

</script>

<style lang="less" scoped>

</style>