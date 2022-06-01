<template>
  <div class="newslist">
      <img src="../../assets/image/news4.png" class="img" alt="" @click="$router.push('/newsexample')">
      <van-divider />
      <img src="../../assets/image/news7.png" class="img" alt="">
      <van-divider />
      <img src="../../assets/image/news9.png" class="img" alt="">
      <van-divider />
      <img src="../../assets/image/news6.png" class="img" alt="">
      <van-divider />
      <img src="../../assets/image/news8.png" class="img" alt="">
      <van-divider />
      <img src="../../assets/image/news5.png" class="img" alt="">

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.img{
    width: 100%;
    border: 0.5px solid #666;
    box-shadow: 0px 2px 3px 1px rgba(102, 102, 102, 0.76);
}
.newslist{
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10%;
}
</style>    