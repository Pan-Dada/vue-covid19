<template>
  <div class="SwipeContainer" >
      <van-swipe class="my-swipe" :autoplay="3000" :lazy-render="true" indicator-color="white">
        <van-swipe-item><img class="img" src="../../assets/image/pic1.png" alt=""></van-swipe-item>
        <van-swipe-item><img class="img" src="../../assets/image/pic2.png" alt=""></van-swipe-item>
        <van-swipe-item><img class="img" src="../../assets/image/pic3.png" alt=""></van-swipe-item>
      </van-swipe>
  
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.SwipeContainer{
  /* border: 1px solid rgb(5, 63, 139); */
}
.my-swipe .van-swipe-item {
    display: inline-block;
    height: auto;
    width: 100%;
    
  }
.img{
  width: 100%;
}

</style>