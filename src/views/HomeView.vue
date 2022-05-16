<template>
  <div class="home" >
    <!-- 顶部图片 -->
    <img class="img" src="../assets/image/pic1.png"  alt="">
    <!-- 病毒信息 -->
    <cov-info/>


  </div>
  
</template>

<script>
import CovInfo from './CovInfo/CovInfo.vue'
// @ is an alias to /src
import api from '../api/index'

export default {
  name: 'HomeView',      
  components: {
    CovInfo
  },
  created(){
    //请求病毒接口
    //等价于axios.get(base.host+base.covInfo)
    api.getCovInfo().then((res) => {
      console.log(res.data);
    })
  }
}
</script>
<style scoped>
.img{
  width: 100%;
}
</style>
