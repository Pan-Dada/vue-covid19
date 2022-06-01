<template>
  <div class="NucList">

      <!-- 采样点 -->
      <div class="item">
        <van-card
        thumb="https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"
        >
        <template #title>
           <div class="title"><h3>上塘蔡马社区核酸采样点</h3>
           <br/>
           </div>
        </template>
        <template #desc>
           <div class="desc">地址：湖州街76号暖蜂驿站
                （蔡马人家二期南侧商铺内）
				<br />	<br />	工作时间: 14:00-17:30
           </div>
        </template>
		
        <template #footer>
            <van-button size="small" color="#2E7D32" plain @click="showToast">预约</van-button>
        </template>
        </van-card>
      </div>

      <!-- 采样点 -->
      <div class="item">
        <van-card
        thumb="https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"
        >
        <template #title>
           <div class="title"><h3>浙江骨伤医院核酸采样点</h3>
           <br/>
           </div>
        </template>
        <template #desc>
           <div class="desc">地址：杭州市拱墅区石祥路287号
						<br />	<br />	工作时间: 8:00-22:00
           </div>
        </template>
        <template #footer>
            <van-button size="small" color="#2E7D32" plain @click="showToast">预约</van-button>
        </template>
        </van-card>
      </div>

      <!-- 采样点 -->
      <div class="item">
        <van-card
        thumb="https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"
        >
        <template #title>
           <div class="title"><h3>瓜山农贸市场核酸采样点</h3>
           <br/>
           </div>
        </template>
        <template #desc>
           <div class="desc">地址：茶汤路299号
				<br />	<br />	工作时间: 8:00-17:00
           </div>
        </template>
        <template #footer>
            <van-button size="small" color="#2E7D32" plain @click="showToast">预约</van-button>
        </template>
        </van-card>
      </div>

      <!-- 采样点 -->
      <div class="item">
        <van-card
        thumb="https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"
        >
        <template #title>
           <div class="title"><h3>上塘街道皋亭社区核酸采样点</h3>
           <br/>
           </div>
        </template>
        <template #desc>
           <div class="desc">地址：太阳城广场
				<br />	<br />	工作时间: 9:30-17:00
           </div>
        </template>
        <template #footer>
            <van-button size="small" color="#2E7D32" plain @click="showToast">预约</van-button>
        </template>
        </van-card>
      </div>

      <!-- 采样点 -->
      <div class="item">
        <van-card
        thumb="https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"
        >
        <template #title>
           <div class="title"><h3>上塘街道拱宸桥社区采样点</h3>
           <br/>
           </div>
        </template>
        <template #desc>
           <div class="desc">地址：拱宸社区党群服务中心（台州路）
				<br />	<br />	工作时间: 14:00-18:00
           </div>
        </template>
        <template #footer>
            <van-button size="small" color="#2E7D32" plain @click="showToast">预约</van-button>
        </template>
        </van-card>
      </div>

      <!-- 采样点 -->
      <div class="item">
        <van-card
        thumb="https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"
        >
        <template #title>
           <div class="title"><h3>上塘街道善贤社区核酸采样点</h3>
           <br/>
           </div>
        </template>
        <template #desc>
           <div class="desc">地址：沈半路128号
				<br />	<br />	工作时间: 14:00-18:00
           </div>
        </template>
        <template #footer>
            <van-button size="small" color="#2E7D32" plain @click="showToast">预约</van-button>
        </template>
        </van-card>
      </div>

      <!-- 采样点 -->
      <div class="item">
        <van-card
        thumb="https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"
        >
        <template #title>
           <div class="title"><h3>拱宸桥街道台州路社区采样点</h3>
           <br/>
           </div>
        </template>
        <template #desc>
           <div class="desc">地址：运河上街东广场
				<br />	<br />	工作时间: 13:00-17:00
           </div>
        </template>
        <template #footer>
            <van-button size="small" color="#2E7D32" plain @click="showToast">预约</van-button>
        </template>
        </van-card>
      </div>

      

  </div>
</template>

<script>
export default {
  methods:{
    showToast(){
       this.$toast.loading('进入预约中...');
    }
  }
}
</script>

<style lang="less" scoped>
.NucList{
  margin-bottom: 1.5rem;
}

.item{
    width: 94%;
    margin-top: 0.2rem;
    margin-left: 0.15rem;
    border-radius: 0.3rem;
    --van-card-thumb-size:90px;
    padding: 0.2rem 0.05rem;
    margin-bottom: 0.3rem;
    --van-card-background-color: #ffffff;
    background: #ffffff;
    position: relative;
    box-shadow: 0 1.5px 1.5px 2px rgba(102, 102, 102, 0.3);
    --van-card-font-size:15px;
    --van-card-title-line-height:30px;
    --van-card-desc-line-height:40px;
	--van-card-thumb-size:120px;
    
}

.desc{
      align-content: left;  
      text-align: justify;       
   }
      

.title{
   text-align: justify;
}


</style>