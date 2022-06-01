<template >
    <div class="nav" >
        <van-nav-bar class="my-navbar"
            title="防疫物资购买"
            left-arrow
            @click-left="$router.push('/goods')"
            fixed
        />  
    </div> 

</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.nav{
    margin-bottom: 40px;  
}
.my-navbar{
    
    background: rgba(27, 160, 82, 0.87);
    height: 41px;
    --van-nav-bar-title-font-size:18px;
    --van-nav-bar-title-text-color:white;
    --van-nav-bar-icon-color:white;
    --van-nav-bar-text-color:white;
}
</style>

