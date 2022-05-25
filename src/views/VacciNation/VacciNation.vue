<template>
<div class="vaccination">
    <nav-bar-vaccination/>
    <img src="../../assets/image/vaccination1.png" class="img" alt="">
    <div class="title"> 疫情接种情况 </div>
    <!-- 统计版块 -->
    <div class="num">
      <ul class="wrap">
        <li>
          <div class="number">
            <span>较昨日</span
            >{{formatWan(number(VaccineData["全球"].new_vaccinations))}}剂
          </div>
          <div class="bold">
            {{ formatYi(VaccineData["全球"].total_vaccinations)}}剂
          </div>
          <strong>全球累计接种</strong>
        </li>
        <li>
          <div class="bold">
            {{ VaccineData["全球"].total_vaccinations_per_hundred }}剂
          </div>
          <strong>全球每百人接种</strong>
        </li>
        <li>
          <div class="number">
            <span>较昨日</span
            >{{ formatWan(number(VaccineData["中国"].new_vaccinations))}}剂
          </div>
          <div class="bold">
            {{ formatYi(VaccineData["中国"].total_vaccinations) }}剂
          </div>
          <strong>中国累计接种</strong>
        </li>

        <li>
          <div class="bold">
            {{ VaccineData["中国"].total_vaccinations_per_hundred }}剂
          </div>
          <strong>中国每百人接种</strong>
        </li>
      </ul>
    </div>

    <!-- 疫苗图表 -->
    <vaccination-line/>
  
    <!-- 底部栏 -->
    <tab-bar-mea/>
</div>
  
</template>

<script>
import NavBarVaccination from '../NavBar/NavBarVaccination.vue'
import api from "../../api/index";
import TabBarMea from '../TabBar/TabBarMea.vue';
import VaccinationLine from '../VueEcharts/VaccinationLine.vue';


export default {
  components: { NavBarVaccination, TabBarMea, VaccinationLine},
  data() {
    return {
      VaccineData: {
        中国: {
          total_vaccinations: 0,
          new_vaccinations: 0,
          total_vaccinations_per_hundred: 0,
        },
        全球: {
          total_vaccinations: 0,
          new_vaccinations: 0,
          total_vaccinations_per_hundred: 0,
        },
      },
      ChinaVaccineTrendData: [],
    };
  },

 

  methods:{
      number: function (val) {
      val = val > 0 ? "+" + val : val;
      if (val == 0) {
        return "";
      }
      return val;
    },
    formatWan: function (val) {
      val = (val / 10000).toFixed(1);
      return val + "万";
    },
    formatYi: function (val) {
      val = (val / 100000000).toFixed(1);
      return val + "亿";
    },

      
  },
  created(){
    //请求疫苗信息接口
    api.getVaccine().then((res) => {
    const result = res.data;
    console.log("数据统计",result)
    if (!result) return this.$toast.fail("提示文案");
    this.VaccineData = result.data.VaccineTopData;
    this.ChinaVaccineTrendData = result.data.ChinaVaccineTrendData;
    });

  }

}
</script>

<style lang="less" scoped>
.vaccination{
    
    .img{
        width: 100%;
    }
    
    .title{
        background: #fff;
        padding: 0.1rem;
        display: flex;
        border-left: 0.15rem  solid rgb(4, 75, 167);
        padding-left: 0.1rem;
        font-size: 0.36rem;
        padding-bottom: 10px;
    }

    .num {
    background: #fff;
    padding: 0.3rem;
    min-height: 2rem;
    border-radius: 0.2rem 0.2rem 0 0;
    .title {
      color: #666;
      font-size: 0.24rem;
      margin-bottom: 0.2rem;
    }
  }
  
  
.wrap {
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.3rem;
  border-radius: 0.1rem;
  box-shadow: 0 3px 3px 3px rgba(194, 192, 192, 0.26);
  li {
    width: 50%;
    text-align: center;
    margin-bottom: 0.24rem;
    position: relative;
    font-size: 0.24rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .number {
      span {
        color: #777;
        font-weight: bold;
      }
    }
    strong {
      color: #333;
    }
  }

  li::after {
    content: "";
    display: block;
    position: absolute;
    right: 1px;
    top: 0.2rem;
    height: 0.8rem;
    border-right: 1px solid #eee;
  }
  li:nth-child(2n)::after {
    content: "";
    border-right: 0;
  }
  .bold {
    font-weight: bold;
    font-size: 0.36rem;
  }
  li:nth-child(1) {
    color: rgb(214, 118, 9);
  }
  li:nth-child(2) {
    color: rgb(18, 143, 14);
  }
  li:nth-child(3) {
    color: rgb(11, 97, 211);
  }
  li:nth-child(4) {
    color: rgb(189, 19, 98);
  }
  
}
}
</style>>
