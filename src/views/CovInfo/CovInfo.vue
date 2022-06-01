<template>
  <div class="CovInfo">
    <div class="title" ><h3>信息导览</h3></div>
<!-- 卡片列表 -->
    <div class="Card">
      <img class="my-img" src="../../assets/image/card1.png" alt="" @click="$router.push('/newsinfo')">
      <img class="my-img" src="../../assets/image/card2.png" alt="" @click="$router.push('/domesticinfo')">
      <img class="my-img" src="../../assets/image/card3.png" alt="" @click="$router.push('/worldwide')">
      <img class="my-img" src="../../assets/image/card4.png" alt="" @click="$router.push('/measures')">
    </div>


  </div>
  
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.CovInfo{
    padding: 0.2rem;
    margin-bottom: 0.8rem;
    .title{
        display: flex;
        border-left: 0.15rem  solid rgb(4, 75, 167);
        padding-left: 0.1rem;
        font-size: 0.35rem;
        margin-bottom: 3%;
        

    }
    .Card{
      .my-img{
        box-shadow:  5px 5px 5px rgba(2, 101, 158, 0.6);//阴影
        display: flex;
        margin-left:1%;
        margin-right: 1%;
        width: 96%;
        margin-top: 2%;
        margin-bottom: 6%;
        border-radius: 15px ;
        border: 2.5px solid rgb(5, 102, 167);
        
      }
    }
    
   
}
</style>