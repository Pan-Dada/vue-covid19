<template >
    <div class="nav" >
        <van-nav-bar class="my-navbar"
            title="防疫物资"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
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

.my-navbar{
    
    border-bottom: 0.7px solid rgb(5, 63, 139) ;
    background: rgba(27, 160, 82, 0.87);
    height: 40px;
    --van-nav-bar-title-font-size:20px;
    --van-nav-bar-title-text-color:white;
    --van-nav-bar-icon-color:white;
    --van-nav-bar-text-color:white;
    
    

}
</style>

