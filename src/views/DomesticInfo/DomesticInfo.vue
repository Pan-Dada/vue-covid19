<template>
    <div class="Domestic">
        <nav-bar-2/>

        <img src="../../assets/image/DomesticInfo.png" class="img" alt="">
        <div class="title" >国内整体疫情</div>

        <tab-bar-1/>

    </div>
  
</template>

<script>
import NavBar2 from '../NavBar/NavBar2.vue'
import TabBar1 from '../TabBar/TabBar1.vue'


export default {
  components: { NavBar2,TabBar1 },

}
</script>


<style lang="less" scoped>
    .Domestic{
        
    .title{
        padding: 0.1rem;
        display: flex;
        border-left: 0.15rem  solid rgb(4, 75, 167);
        padding-left: 0.1rem;
        font-size: 0.35rem;
        

    }
    .img{
        width: 100%;
    }

    }
</style>
