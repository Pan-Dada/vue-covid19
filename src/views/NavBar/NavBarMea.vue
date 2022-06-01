<template >
    <div class="nav" >
        <van-nav-bar class="my-navbar"
            title="疫情政策措施"
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

