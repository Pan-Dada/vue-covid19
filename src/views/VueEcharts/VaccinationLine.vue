<template>
  <!-- 中国累计接种趋势 -->
    <div class="VaccineTrend">
      <div class="title">疫苗相关图表</div>
      <div
        id="BarWorld"
        style="width: 6.4rem; height:5.5rem; margin: 0 auto 0.3rem;padding-left:20px;"
      ></div>

      <div
        id="lineVaccine"
        style="width: 6.4rem; height: 5.5rem; margin: 0 auto 0.3rem;padding-left:20px;"
      ></div>

      <div
        id="lineVaccineHundred"
        style="width: 6.4rem; height:5.5rem; margin: 0 auto 0.3rem;padding-left:20px;"
      ></div>

    </div>

</template>

<script>


import echarts from 'echarts'

export default {
    
    mounted() {
    var myChart1 = echarts.init(document.getElementById("lineVaccine"));
    var myChart2 = echarts.init(document.getElementById("lineVaccineHundred"));
    var myChart3 = echarts.init(document.getElementById("BarWorld"));
     

      var option1 = {
        title: {
        text: "中国累计接种趋势"
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['03-26', '03-27', '03-28', '03-29', '03-30', '03-31', '04-01', '04-02', '04-03', '04-04', '04-05', '04-06', '04-07', '04-08', '04-09', '04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18', '04-19', '04-20', '04-21', '04-22', '04-23', '04-24', '04-25', '04-26', '04-27', '04-28', '04-29', '04-30', '05-01', '05-02', '05-03', '05-04', '05-05', '05-06', '05-07', '05-08', '05-09', '05-10', '05-11', '05-12', '05-13', '05-14', '05-15', '05-16', '05-17', '05-18', '05-19', '05-20', '05-21', '05-22', '05-23', '05-24','05-25','05-26','05-27','05-28'],
        },
        yAxis: {
          type: 'value',
           axisLabel:{
            formatter: '{value}亿'
          }
        },
        series: [
          {
            data: ['33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33.1', '33.2', '33.3', '33.4', '33.5', '33.6', '33.7', '33.8', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34'],
            type: 'line',
            // 圆弧状
            smooth: true,
			itemStyle: {
				normal: {
					label: {
						show: true,		//开启显示
						position: 'top',	//在上方显示
						textStyle: {	    //数值样式
							color: 'black',
							fontSize: 12
						}
					}
				}
			},
            // 颜色设置
            areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(237,66,100, 0.5)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(234,174,10, 1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
            },
          }
        ]
      };

      var option2 = {
        title: {
        text: "中国每百人接种趋势"
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['03-26', '03-27', '03-28', '03-29', '03-30', '03-31', '04-01', '04-02', '04-03', '04-04', '04-05', '04-06', '04-07', '04-08', '04-09', '04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18', '04-19', '04-20', '04-21', '04-22', '04-23', '04-24', '04-25', '04-26', '04-27', '04-28', '04-29', '04-30', '05-01', '05-02', '05-03', '05-04', '05-05', '05-06', '05-07', '05-08', '05-09', '05-10', '05-11', '05-12', '05-13', '05-14', '05-15', '05-16', '05-17', '05-18', '05-19', '05-20', '05-21', '05-22', '05-23', '05-24','05-25','05-26','05-27','05-28']
        },
        yAxis: {
          type: 'value',
          
        },
        series: [
          {
            data: [225.9, 226.15, 226.15, 226.73, 226.73, 226.99, 227.25, 227.48, 227.67, 227.83, 228, 228.13, 228.33, 228.54, 228.76, 228.94, 229.1, 229.3, 229.49, 229.68, 229.87, 230.05, 230.2, 230.3, 230.49, 230.66, 230.84, 231.01, 231.19, 231.34, 231.48, 231.8, 231.64, 231.32, 232.1, 232.2, 232.37, 232.44, 232.47, 232.58, 232.65, 232.73, 232.81, 232.89, 232.96, 233.04, 233.13, 233.24, 233.36, 233.45, 233.54, 233.61, 233.79, 233.89, 233.98, 234.07, 234.07, 234.15, 234.21, 234.29,234.31,234.35,234.41,234.47],
            type: 'line',
            smooth: true,
			itemStyle: {
				normal: {
					label: {
						show: true,		//开启显示
						position: 'top',	//在上方显示
						textStyle: {	    //数值样式
							color: 'black',
							fontSize: 12
						}
					}
				}
			},
            areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(237,66,100, 0.5)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(234,174,10, 1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
            },
          }
        ]
      };

       var option3 = {
        title: {
        text: "中国与全球每百人接种对比"
        },
         xAxis: {
          type: 'category',
          data: ["中国","全球"]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            show: true,
            data: [234.29,149.74],
            type: 'bar',
			itemStyle: {
               normal: {
                   label: {
                       show: true,		//开启显示
                       position: 'top',	//在上方显示
                       textStyle: {	    //数值样式
                           color: 'black',
                           fontSize: 12
                        }
                   }
                }
            }

            
          }
        ]
       }
      
      myChart1.setOption(option1);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
  },

    
}
</script>

<style lang="less" scoped>

.title{
    padding: 0.1rem;
    display: flex;
    border-left: 0.15rem  solid rgb(4, 75, 167);
    padding-left: 0.1rem;
    font-size: 0.36rem;
    margin-bottom: 20px;
  }

.VaccineTrend{
    background: #fff;
    margin-bottom: 1.2rem;
  }
  #BarWorld{
    display: flex;
    background: #fff;
    flex-wrap: wrap;
    padding-top: 0.3rem;
    border-radius: 0.1rem;
    box-shadow: 0 3px 3px 3px rgba(194, 192, 192, 0.26);
  }
  #lineVaccine{
    display: flex;
    background: #fff;
    flex-wrap: wrap;
    padding-top: 0.3rem;
    border-radius: 0.1rem;
    box-shadow: 0 3px 3px 3px rgba(194, 192, 192, 0.26);
  }
  #lineVaccineHundred{
    display: flex;
    background: #fff;
    flex-wrap: wrap;
    padding-top: 0.3rem;
    border-radius: 0.1rem;
    box-shadow: 0 3px 3px 3px rgba(194, 192, 192, 0.26);
  }

</style>
