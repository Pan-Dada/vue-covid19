<template>
	<div class="GoodCarts">
        <!-- 顶部栏 -->
		<nac-bar-cart/>
        <!-- 搜索框 -->
        <van-search
            v-model="value"
            shape="round"
            background="rgba(27, 160, 82, 0.87)"
            placeholder="请输入商品关键词"
            fixed
            />
        <!-- 购物车列表 -->
        <div class="list">
            <div class="item">
          <van-card
            thumb="https://img.alicdn.com/imgextra/i2/1874412929/O1CN01DMaAOa1XVWpDCmEf3_!!0-item_pic.jpg_430x430q90.jpg"
            >
            <template #title>
                <div class="title"><h3>界面医用外科口罩一次性医疗口罩儿童成人单片独立夏透气薄款</h3>
                <br/>
                </div>
            </template>
            <template #desc>
                <div class="desc" style="text-align:center;margin-left:30px">¥11.90     
					<van-stepper v-model="value" />
					<br/><br/>
                </div>
            </template>
            
            <template #footer>
                <van-button size="small" style="margin-right:10px" color="#f57c00" @click="showToast">从购物车移除</van-button>
            </template>
            </van-card>
        </div>

        <div class="item">
          <van-card
            thumb="https://gd1.alicdn.com/imgextra/i2/2162941695/O1CN017WNrhS1OOM42NJpXc_!!2162941695.jpg_400x400.jpg"
            >
            <template #title>
                <div class="title"><h3>5瓶装75度酒精喷雾75%消毒液便携家用杀菌消毒乙醇消毒水速干免洗</h3>
                <br/>
                </div>
            </template>
            <template #desc>
                <div class="desc" style="text-align:center;margin-left:30px">¥9.90
					<van-stepper v-model="value" />
                    <br/><br/>
                </div>
            </template>
            
            <template #footer>
                <van-button size="small" style="margin-right:10px" color="#f57c00" @click="showToast">从购物车移除</van-button>
            </template>
            </van-card>
        </div>

		<div class="item">
          <van-card
            thumb="https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/330802957/O1CN019dGMuQ1XiLuonuCAn_!!330802957.jpg_430x430q90.jpg"
            >
            <template #title>
                <div class="title"><h3>3M爱护佳免洗洗手液杀菌消毒液儿童洗手液酒精便携式医用喷雾抑菌</h3>
                <br/>
                </div>
            </template>
            <template #desc>
                <div class="desc" style="text-align:center;margin-left:30px">¥15.90
                    <van-stepper v-model="value" />
                    <br/><br/>
                </div>
            </template>
        
            <template #footer>
               <van-button size="small" style="margin-right:10px" color="#f57c00" @click="showToast">从购物车移除</van-button>
            </template>
            </van-card>
        </div>
        </div>
		<!-- 底部栏 -->
		<check-list/>
	</div>
</template>

<script>
import NacBarCart from '../NavBar/NacBarCart.vue'
import CheckList from './CheckList.vue';

export default {
  components: { NacBarCart, CheckList },
  methods:{
    showToast(){
       this.$toast.loading('移除中...');
       this.$toast.setDefaultOptions({ duration: 1000 });
    },
  }
}
</script>

<style lang="less" scoped>

.item{
    width: 96%;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    border-radius: 0.2rem;
    --van-card-thumb-size:90px;
    padding: 0.1rem 0.05rem;
    margin-bottom: 0.1rem;
    --van-card-background-color: #ffffff;
    background: #ffffff;
    position: relative;
    box-shadow: 0 1px 5px 1px rgba(102, 102, 102, 0.1);
    --van-card-font-size:15px;
    --van-card-title-line-height:30px;
    --van-card-desc-line-height:40px;
    --van-card-thumb-size:125px;
    --van-card-padding: 5px;
    --van-button-small-height:34px;
    --van-button-small-font-size:14px;  
}
.title{
    text-align:justify;
}
.desc{
    text-align: justify;
    font-weight: 800;
    font-size: 22px;
    color: rgb(247, 45, 10);
}
.list{

    padding-bottom: 1.2rem
    
}
</style>

