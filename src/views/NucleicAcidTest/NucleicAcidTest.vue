<template>

  <div class="NucleicAcidTest">
    <!-- 顶部栏 -->
     <nav-bar-nuc/>
    <!-- 插图 -->
    <div > <img src="../../assets/image/NucList.png" class="img" alt=""></div>
    <!-- 搜索框 -->
      <div class="SearchArea">
        <search-area/>
      </div>
    <!-- 选择栏 -->
      <div class="SelectArea">
        <select-area/>
      </div>
    <!-- 检测点列表 -->
      <div class="NucList">
        <nuc-list/>
      </div>
      <!-- 底部栏 -->
      <tab-bar-mea/>

  </div>
  
</template>

<script>
import SelectArea from '../SelectArea/SelectArea.vue'
import NavBarNuc from '../NavBar/NavBarNuc.vue'
import SearchArea from '../SearchArea/SearchArea.vue'
import TabBarMea from '../TabBar/TabBarMea.vue'
import NucList from '../NucList/NucList.vue'
export default {
  components: { SelectArea, NavBarNuc, SearchArea, TabBarMea, NucList },
     mounted() {
      window.scrollTo(0, 0)
    },
}


</script>

<style lang="less" scoped>
.img{
  width: 100%;
}
.title{
        padding: 0.1rem;
        display: flex;
        border-left: 0.15rem  solid rgb(4, 75, 167);
        padding-left: 0.1rem;
        font-size: 0.36rem;
        margin-bottom: 16 px;
        

    }
</style>