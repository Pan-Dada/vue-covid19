<template >
    <div class="nav" >
        <van-nav-bar class="my-navbar"
            title="疫情热点新闻"          
            left-arrow
            @click-left="onClickLeft"
            fixed
        />  
    </div> 

</template>

<script>
export default {
     setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
}
</script>

<style lang="less" scoped>

.nav{
    margin-bottom:40px;  
}

.my-navbar{
    
    border-bottom: 0.7px solid rgb(5, 63, 139) ;
    background: rgba(6, 130, 231, 0.87);
    height: 40px;
    --van-nav-bar-title-font-size:18px;
    --van-nav-bar-title-text-color:white;
    --van-nav-bar-icon-color:white;
    --van-nav-bar-text-color:white;
    
    

}
</style>

