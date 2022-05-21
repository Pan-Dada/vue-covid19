<template>
  <div class="MeaInfo">

    <div class="Card">
        <img class="my-img" src="../../assets/image/measure04.png" alt="" @click="$router.push('/travelpolicy')">
      <img class="my-img" src="../../assets/image/measure2.png" alt="" @click="$router.push('/goods')">
      
    </div>


  </div>
  
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.MeaInfo{
    padding: 0.1rem;
    margin-bottom: 0.8rem;
    
    .Card{
      .my-img{
        display: flex;
        margin-left:1%;
        margin-right: 1%;
        width: 96%;
        margin-top: 2%;
        margin-bottom: 3%;
        border-radius: 15px ;
        border: 3px solid rgb(4, 116, 63);
        
      }
    }
    
   
}
</style>