<template>
  <div class="newsexample">
      <nav-bar-1/>
      <div class="title"><h1 style="text-align:justify;padding:0.15rem">全球日增确诊超63万例 累计逾5.1亿例 白宫称美国已有100万人死于新冠</h1></div>
      <div class="title1">海外网 &ensp; 2022-05-12&nbsp; 16:18</div>
      <div class="body">
        <img src="../../assets/image/newsbody1.png" class="body-img" alt="">
        <br>
        <br>
        <p style="text-align:justify;line-height:25px;margin-bottom:20px;font-size:16px">海外网5月13日电 根据Worldometer实时统计数据，截至北京时间2022年5月13日6时30分左右，全球累计确诊新冠肺炎病例519558094例，累计死亡病例6283775例。全球单日新增确诊病例639989例，新增死亡病例2262例。</p>
        <p style="text-align:justify;line-height:25px;margin-bottom:20px;font-size:16px">数据显示，美国、德国、澳大利亚、日本、意大利是新增确诊病例数最多的五个国家。美国、英国、德国、芬兰、意大利是新增死亡病例数最多的五个国家。</p>
        <h3 style="text-align:justify;margin-bottom:20px;">美国新增超13万例确诊病例 白宫：美国已有100万人死于新冠</h3>
        <p style="text-align:justify;line-height:25px;margin-bottom:20px;font-size:16px">根据Worldometer实时统计数据，截至北京时间2022年5月13日6时30分左右，美国累计确诊新冠肺炎病例84001613例，累计死亡病例1025880例；与前一日6时30分左右数据相比，美国新增确诊病例131523例，新增死亡病例547例。</p>
        <p style="text-align:justify;line-height:25px;margin-bottom:20px;font-size:16px">据美国《国会山报》新闻网站12日报道，美国白宫于当地时间12日早间发布声明称，美国已有100万人死于新冠肺炎，将降半旗为逝者默哀。白宫的声明中写道，“今天，我们为一个悲惨的里程碑悼念，100万美国人死于新冠肺炎，每一个都是不可替代的损失。”</p>
        <h3 style="text-align:justify;margin-bottom:20px;">意大利新增近4万例确诊病例 累计确诊逾1695万例</h3>
        <p style="text-align:justify;line-height:25px;margin-bottom:20px;font-size:16px">当地时间5月12日，意大利卫生部公布的最新统计数据显示，过去24小时，该国新增新冠肺炎确诊病例39317例，累计确诊16954784例；新增死亡病例130例，累计死亡164976例；新增治愈病例61866例，累计治愈15771125例；现存确诊病例1018683例。</p>
        <h3 style="text-align:justify;margin-bottom:20px;">韩国新增超3.5万例确诊病例 累计确诊逾1769万例</h3>
        <p style="text-align:justify;line-height:25px;margin-bottom:20px;font-size:16px">据韩联社报道，韩国中央防疫对策本部5月12日通报，截至当天0时，韩国较前一天0时新增感染新冠病毒确诊病例35906例，累计确诊17694677例。单日新增病例较前一天减少8019例，以周四通报的数据为准，为2月3日以来的最低值。单日新增病例自本月4日以来连续9天低于5万例。</p>
        <p style="text-align:justify;line-height:25px;margin-bottom:20px;font-size:16px">新增病例中本土感染病例35894例，境外输入病例12例。新增死亡病例63例，较前一天增加34例，累计死亡23554例，平均致死率为0.13%。现有重症患者354例，较前一天减少29例。</p>
        <p style="text-align:justify;line-height:25px;margin-bottom:20px;font-size:16px">编辑：谢灵捷 </p>
		</div>
		<div class="comment">
			<h3 style="text-align:justify;">推荐指数:<van-rate v-model="value" />
			</h3>	
		</div>
		<div class="title2">
			<h3>相关推荐</h3>
		</div>
		<div class="advice">
			<img src="../../assets/image/news8.png" class="img" alt="" @click="showToast()" >
			<van-divider />
			<img src="../../assets/image/news5.png" class="img" alt="" @click="showToast()">
			<tab-bar/>
		</div>
		
  </div>
</template>

<script>
import NavBar1 from '../NavBar/NavBar1.vue'
import TabBar from '../TabBar/TabBar.vue'
import { ref } from 'vue';



export default {
  components: { NavBar1, TabBar },
  setup() {
    const value = ref(4);
    return { value };
  },
  methods:{
      showToast(){
         this.$toast.loading('进入新闻中...');
      }
  }
}
</script>

<style lang="less" scoped>
.body-img{
width: 100%;
}
.img{
    width:100%;
	border: 0.5px solid #666;
	box-shadow: 0px 2px 3px 1px rgba(102, 102, 102, 0.76);
}
.advice{
	padding-top: 20px;
	width: 90%;
	padding-left: 5%;
	padding-right: 5%;
}
.newsexample{
    background: white;
	padding-bottom: 1.6rem;
}
.title{
    align-content: left;
    margin-bottom: 15px;
    
}
.title1{
    font: color rgb(163, 162, 162);
    padding-left: 0.25rem;
    padding-bottom: 0.3rem;
    display: flex;
}
.body{
    font:color #000;
    font-size: 15px;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-bottom: 0rem;
}
.comment{
	padding-left: 0.3rem;
	padding-bottom: 0.5rem;
}
.title2{
	padding: 0.2rem;
	display: flex;
	border-left: 0.15rem  solid rgb(4, 75, 167);
	padding-left: 0.1rem;
	font-size: 0.36rem;
	margin-bottom: 16 px;
	
}
</style>