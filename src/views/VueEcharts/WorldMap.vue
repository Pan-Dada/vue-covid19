<template>
  <div class="body">
    <div class="title"><h3>世界疫情地图</h3></div>
    <!-- 地图容器 -->
    <div id="main" style="width: 7.5rem; height: 7rem"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import api from "../../api/index";
import country from '../../utils/country';
import '../../utils/map';
//导入世界的js文件
import 'echarts/map/js/world'

export default {
  mounted() {
    //-------------------------
    api.getGlobalData().then((res) => {
      console.log("--世界---", res.data);
      let world = res.data.retdata;
      if(!world){
        this.worldMap("main", []);
        return;
      }
      let arr = []; //累计
      for (let i = 0; i < world.length; i++) {
        let obj = {};
        obj.name = world[i].xArea;
        obj.value = world[i].confirm; //累计确诊人数   curConfirm现在确诊人数
        arr.push(obj);
      }
       this.worldMap("main", arr);
    });
   
  },
  methods:{
      worldMap(id, data) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            tooltip: { //悬浮弹框
                triggerOn: 'click', //提示框触发的条件
                enterable: true,//鼠标是否可进入提示框浮层中，默认为false
                formatter(item) {//item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d 
                    return item.name + '：确诊人数' + item.value
                }
            },
            visualMap: [{ //映射高亮颜色
                orient: "vertical", //垂直
                type: "piecewise", //离散
                bottom: 0,
                pieces: [ // 配置颜色区间
                    {
                        min: 0,
                        max: 0,
                        color: "#FFFFFF"
                    },
                    {
                        min: 1,
                        max: 10000,
                        color: "#FDFDCF"
                    },
                    {
                        min: 10000,
                        max: 100000,
                        color: "#FE9E83"
                    },
                    {
                        min: 100000,
                        max: 500000,
                        color: "#E55A4E"
                    },
                    {
                        min: 500000,
                        // max: 10000,
                        color: "#4F070D"
                    }
                ]
            }],
            series: [{
                name: "国",
                type: "map", //地图  bar  line  map 
                map: "world", 
                nameMap: country,//自定义地区的名称映射
                roam: false,
                zoom: 1.2,
                aspectScale: 0.75,
                top: 40,
                layoutCenter: ['5%', '5%'],
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            fontSize: 8
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(0,255,236,0)',
                        borderColor: 'rgba(0,0,0,0.2)',
                    },
                    emphasis: { // 选中的区域颜色及阴影效果等
                        areaColor: 'rgba(255,180,0,0.8)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                    }
                },
                data
            }]
        }
        myChart.setOption(option);
    },
  }
};
</script>

<style lang='less' scoped>
.body{
    background: white;
}
.title{
        padding: 0.1rem;
        display: flex;
        border-left: 0.15rem  solid rgb(4, 75, 167);
        padding-left: 0.1rem;
        font-size: 0.36rem;
        margin-bottom: 16 px;

    }

#main {
  background: #f5f5f5;
}
</style>