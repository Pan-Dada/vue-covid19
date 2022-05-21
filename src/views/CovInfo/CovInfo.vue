<template>
  <div class="CovInfo">
    <div class="title" >信息导览</div>
<!-- 卡片列表 -->
    <div class="Card">
      <img class="my-img" src="../../assets/image/card1.png" alt="" @click="$router.push('/regioninfo')">
      <img class="my-img" src="../../assets/image/card2.png" alt="" @click="$router.push('/domesticinfo')">
      <img class="my-img" src="../../assets/image/card3.png" alt="" @click="$router.push('/worldwide')">
      <img class="my-img" src="../../assets/image/action1.png" alt="" @click="$router.push('/measures')">
    </div>


  </div>
  
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.CovInfo{
    padding: 0.1rem;
    margin-bottom: 0.8rem;
    .title{
        display: flex;
        border-left: 0.15rem  solid rgb(4, 75, 167);
        padding-left: 0.1rem;
        font-size: 0.35rem;
        

    }
    .Card{
      .my-img{
        display: flex;
        margin-left:1%;
        margin-right: 1%;
        width: 96%;
        margin-top: 2%;
        margin-bottom: 3%;
        border-radius: 15px ;
        border: 3px solid rgb(5, 63, 139);
        
      }
    }
    
   
}
</style>