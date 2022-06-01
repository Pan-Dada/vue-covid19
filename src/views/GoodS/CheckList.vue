<template>
<div class="CheckList">
    <van-submit-bar :price="3770" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="checked">全选</van-checkbox>
        <template #tip>
            你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
        </template>
    </van-submit-bar>

    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
     setup() {
        const onSubmit = () => Toast.loading('提交订单中...');
        const onClickLink = () => Toast('修改地址');
        return {
        onSubmit,
        onClickLink,
        };
  },
}
</script>

<style lang="less" scoped>
.CheckList{
    --van-submit-bar-height:70px;
    --van-submit-bar-button-height:50px;
    --van-submit-bar-price-font-size:20px;
    --van-submit-bar-text-font-size:16px;
}

</style>