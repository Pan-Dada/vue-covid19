<template>
    <div class="Domestic">
        <!-- 顶部栏 -->
        <nav-bar-2/>
        <!-- 封面 -->
        <img src="../../assets/image/DomesticInfo.png" class="img" alt="">
        
        <!-- 统计版块 -->
        <div class="num">
        <div class="title"><h3>全国数据统计</h3> 
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
              <span>较昨日</span>{{ number(covData.suspectedIncr) }}
            </div>
            <div class="bold">{{ division(covData.suspectedCount)  }}</div>
            <strong>境外输入</strong>
          </li>
          <li>
            <div class="number">
              <span>较昨日</span>{{ number(covData.seriousIncr) }}
            </div>
            <div class="bold">{{ division(covData.seriousCount) }}</div>
            <strong>现存无症状</strong>
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
        <!-- 国内疫情地图 -->
        <china-map/>
        <tab-bar-1/>

    </div>
  
</template>

<script>
import NavBar2 from '../NavBar/NavBar2.vue'
import TabBar1 from '../TabBar/TabBar1.vue'
import api from "../../api/index";
import ChinaMap from '../../views/VueEcharts/ChinaMap.vue';


export default {
    components: { NavBar2,TabBar1, ChinaMap },
    data() {
    return {
      
      covData: {}, //全国数据统计
    };
  },
  //对数据进行处理的函数

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
        console.log(res.data.newslist[0]);
        let data = res.data.newslist[0].desc;
        //全国疫情的数据统计信息---
        this.covData = {
            currentConfirmedCount: data.currentConfirmedCount,
            confirmedCount: data.confirmedCount,
            suspectedCount: data.suspectedCount,
            curedCount: data.curedCount,
            deadCount: data.deadCount,
            seriousCount: data.seriousCount,
            suspectedIncr: data.suspectedIncr,
            currentConfirmedIncr: data.currentConfirmedIncr,
            confirmedIncr: data.confirmedIncr,
            curedIncr: data.curedIncr,
            deadIncr: data.deadIncr,
            seriousIncr: data.seriousIncr,
            modifyTime: data.modifyTime,
        };
        
        })
    }
}
 
</script>


<style lang="less" scoped>
.Domestic{
    .num {
        background: #fff;
        min-height: 2rem;
        border-radius: 0.2rem 0.2rem 0 0
        }
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
    .img{
        width: 100%;
    }
    .wrap {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.3rem;
    border-radius: 0.1rem;
    box-shadow: 0 3px 3px 3px rgba(194, 192, 192, 0.26);
    li {
      width: 33.33333%;
      text-align: center;
      margin-bottom: 0.34rem;
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

    li::after {
      content: "";
      display: block;
      position: absolute;
      right: 1px;
      top: 0.2rem;
      height: 0.8rem;
      border-right: 1px solid #eee;
    }
    li:nth-child(3n)::after {
      content: "";
      border-right: 0;
    }
    .bold {
      font-weight: bold;
      font-size: 0.36rem;
    }
    li:nth-child(1) {
      color: rgb(211, 198, 17);
    }
    li:nth-child(2) {
      color: rgb(8, 110, 194);
    }
    li:nth-child(3) {
      color: orange;
    }
    li:nth-child(4) {
      color: rgb(189, 19, 98);
    }
    li:nth-child(5) {
      color: red;
    }
    li:nth-child(6) {
      color: rgb(18, 143, 14);
    }
  }
    }
</style>
