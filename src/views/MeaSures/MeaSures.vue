<template>
    <div class="Measure">
        <!-- 组件1 顶部栏 -->
        <navbar-mea/> 
        <!-- 插图 -->
        <img src="../../assets/image/Mea.png" alt="" class="img" >
        <div class="title" ><h3>疫情防控措施</h3></div>
        <!-- 组件2  卡 片 -->
        <mea-info/>
        <!-- 组件3  底部栏 -->
        <tab-bar-mea/>
    </div>

</template>

<script>
import MeaInfo from '../MeaSures/MeaInfo.vue'
import NavbarMea from '../NavBar/NavBarMea.vue'
import TabBarMea from '../TabBar/TabBarMea.vue'
export default {
    components: {  NavbarMea, TabBarMea, MeaInfo },
}
</script>

<style lang="less" scoped>
.Measure{
    background: rgba(100, 223, 176, 0.644);
}
.title{
        padding: 0.1rem;
        display: flex;
        border-left: 0.15rem  solid rgb(4, 75, 167);
        padding-left: 0.1rem;
        font-size: 0.35rem;
        margin-top: 6px;
        

    }

.img{
    width: 100%;
}
</style>>
