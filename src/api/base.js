/**
 * 公共的请求的接口
 * 
 */
 const base ={
    //天行数据'http://api.tianapi.com
    
    covInfo:'http://api.tianapi.com/ncov/index?key=e5c7988b3c46963eb8d8f3a13db36d9e',//天行接口
    chinaData:'https://grnx.api.storeapi.net/api/94/219?format=json&appid=1773&sign=469f6c64d4ecc404446416fa8cfed815&time=15705868300',//挖数据---国内疫情
    globalData:'https://grnx.api.storeapi.net/api/94/220?format=json&appid=1773&sign=469f6c64d4ecc404446416fa8cfed815&time=15705868300',//挖数据---全球疫情

    city:'/wa/api/94/221',//城市接口
    cityDayInfo:'https://api.inews.qq.com/newsqa/v1/query/pubished/daily/list',//城市历史数据接口
    //format=json&appid=6938&city_name=城市名称&sign=md5加密字符串 
    worldData:'https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=WomWorld,WomAboard',//国外疫情数据
    travel:'https://file1.dxycdn.com/2021/0127/319/0185768311460321643-135.json',  //获取出行政策
    riskCity:'https://file1.dxycdn.com/2021/0127/904/9385768311460321643-135.json',//风险地区可选城市列表
    risk:'https://file1.dxycdn.com/2021/0202/196/1680100273140422643-135.json' , //全国风险地区汇总
    dayInfo:'https://file1.dxycdn.com/2022/0220/952/6677926846218923353-135.json',  //全国每日疫情数据
    Vaccine:'https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=VaccineTopData,ChinaVaccineTrendData'//疫苗接种信息
  }
  
  //FAutoforeignList
  
  export default base;
  