<template>
    <div class="WorldWide">
      <!-- 顶部栏 -->
      <nav-bar-world/>
            
      <img src="../../assets/image/worldwide1.png" class="img" alt="">
       

      <!-- 统计版块 -->
      <div class="num">
        
        <div class="title"><h3>全球数据统计</h3> 
            <div class="time"> 截至 {{ time(covData.modifyTime) }}</div>
        </div>
        <ul class="wrap">
          <li> 
            <div class="number">
              <span>较昨日</span>{{ number(covData.currentConfirmedIncr) }}
            </div>
            <div class="bold">{{ division(covData.currentConfirmedCount) }}</div>
            <strong>现存确诊</strong>
          </li>
          <li>
            <div class="number">
              <span>较昨日</span>{{ number(covData.confirmedIncr) }}
            </div>
            <div class="bold">{{ division(covData.confirmedCount) }}</div>
            <strong>累计确诊</strong>
          </li>
          <li>
            <div class="number">
              <span>较昨日</span> {{ number(covData.deadIncr) }}
            </div>
            <div class="bold">{{ division(covData.deadCount) }}</div>
            <strong>累计死亡</strong>
          </li>
          <li>
            <div class="number">
              <span>较昨日</span> {{ number(covData.curedIncr) }}
            </div>
            <div class="bold">{{ division(covData.curedCount)}}</div>
            <strong>累计治愈</strong>
          </li>
        </ul>
      </div>
      
      <!-- 全球疫情地图 -->
      <world-map/>
      <!-- 底部栏 -->
      <tab-bar-world/>

    </div>
  
</template>

<script>
import NavBarWorld from '../NavBar/NavBarWorld.vue'
import TabBarWorld from '../TabBar/TabBarWorld.vue'
import api from "../../api/index";
import WorldMap from '../VueEcharts/WorldMap.vue';

export default {
  components: {  TabBarWorld, NavBarWorld, WorldMap },
    data() {
    return {
      covData: {}, //全球数据统计
    };
  },
// 函数
  methods: {
    // 函数1：比较昨日的数量处理
    number(val) {
      val = val > 0 ? "+" + val : val;
      if (val == 0) {
        return "";
      }
      return val;
    },
    //函数2 对接口获取的时间进行处理
    time(num) {
      var time = new Date(num).toLocaleString("chinese", { hour12: false });
      return time;
      //手动获取：
    //   var y = data.getFullYear();
    //   var m = data.getMonth()+1;
    //   var d = data.getDate();
    //   return y+'-'+m+'-'+d;
    },
    //函数3 js 中数字加逗号处理(每三位加逗号)
    division(num) {
      if (num == undefined) return "";
      
      return num.toLocaleString();
      
    },

  },
    created(){
        //请求病毒接口
        //等价于axios.get(base.host+base.covInfo)
        api.getCovInfo().then((res) => {
        console.log(res.data);
        console.log(res.data.newslist[0]);
        let data = res.data.newslist[0].desc;
        //世界疫情的数据统计信息---
        this.covData = {
            currentConfirmedCount: data.globalStatistics.currentConfirmedCount,
            currentConfirmedIncr:data.globalStatistics.currentConfirmedIncr,
            confirmedCount: data.globalStatistics.confirmedCount,
            confirmedIncr:data.globalStatistics.confirmedIncr,
            curedCount: data.globalStatistics.curedCount,
            curedIncr:data.globalStatistics.curedIncr,
            deadCount: data.globalStatistics.deadCount,
            deadIncr:data.globalStatistics.deadIncr,
            modifyTime: data.modifyTime,
        };
        
        })
    }
}
</script>


<style lang="less" scoped>
.WorldWide{
    .num {
    background: #fff;
    min-height: 2rem;
    border-radius: 0.2rem 0.2rem 0 0;
    .title{
       
        padding: 0.1rem;
        display: flex;
        border-left: 0.15rem  solid rgb(4, 75, 167);
        padding-left: 0.1rem;
        font-size: 0.36rem;
        margin-bottom: 16 px;
        .time{
             color: #666;
             font-size: 0.26rem;
             margin-top: 0.15rem;
             margin-left: 0.2rem;
        }

    }
  .wrap {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.2rem;
    border-radius: 0.1rem;
    box-shadow: 0 3px 3px 3px rgba(194, 192, 192, 0.26);
    li {
      width: 50%;
      text-align: center;
      margin-bottom: 0.24rem;
      position: relative;
      font-size: 0.24rem;
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
    // 1 2  3-  4 5 6-
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
      color: rgb(189, 19, 98);
    }
    li:nth-child(2) {
      color: rgb(221, 153, 27);
    }
    li:nth-child(3) {
      color: red;
    }
    li:nth-child(4) {
      color: rgb(18, 143, 14);
    }
    
  }
}
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
