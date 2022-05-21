<template>
    <div class="WorldWide">
        <nav-bar-world/>
            
        <img src="../../assets/image/worldwide.png" class="img" alt="">
        <div class="title" >海外疫情</div>

        <tab-bar-world/>

    </div>
  
</template>

<script>
import NavBarWorld from '../NavBar/NavBarWorld.vue'
import TabBarWorld from '../TabBar/TabBarWorld.vue'


export default {
  components: {  TabBarWorld, NavBarWorld },

}
</script>


<style lang="less" scoped>
    .WorldWide{
        
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
