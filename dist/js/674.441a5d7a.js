"use strict";(self["webpackChunkvue_covid19"]=self["webpackChunkvue_covid19"]||[]).push([[674],{81819:function(t,e,a){a.r(e),a.d(e,{default:function(){return _t}});var o=a(73396),l=a.p+"img/NucList.a6b5e7b2.png";const n=t=>((0,o.dD)("data-v-50a4c740"),t=t(),(0,o.Cn)(),t),c={class:"NucleicAcidTest"},s=n((()=>(0,o._)("div",null,[(0,o._)("img",{src:l,class:"img",alt:""})],-1))),i={class:"SearchArea"},d={class:"SelectArea"},r={class:"NucList"};function u(t,e,a,l,n,u){const m=(0,o.up)("nav-bar-nuc"),_=(0,o.up)("search-area"),v=(0,o.up)("select-area"),b=(0,o.up)("nuc-list"),p=(0,o.up)("tab-bar-mea");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(m),s,(0,o._)("div",i,[(0,o.Wm)(_)]),(0,o._)("div",d,[(0,o.Wm)(v)]),(0,o._)("div",r,[(0,o.Wm)(b)]),(0,o.Wm)(p)])}const m={class:"SelectArea"};function _(t,e,a,l,n,c){const s=(0,o.up)("van-field"),i=(0,o.up)("van-cascader"),d=(0,o.up)("van-popup");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(s,{modelValue:l.fieldValue,"onUpdate:modelValue":e[0]||(e[0]=t=>l.fieldValue=t),"is-link":"",readonly:"",label:"地区",placeholder:"请选择所在地区","active-color":"#1989fa",onClick:e[1]||(e[1]=t=>l.show=!0)},null,8,["modelValue"]),(0,o.Wm)(d,{show:l.show,"onUpdate:show":e[4]||(e[4]=t=>l.show=t),round:"",position:"bottom"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:l.cascaderValue,"onUpdate:modelValue":e[2]||(e[2]=t=>l.cascaderValue=t),title:"请选择所在地区",options:l.options,onClose:e[3]||(e[3]=t=>l.show=!1),onFinish:l.onFinish},null,8,["modelValue","options","onFinish"])])),_:1},8,["show"])])}var v=a(44870),b={setup(){const t=(0,v.iH)(!1),e=(0,v.iH)(""),a=(0,v.iH)(""),o=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100",children:[{text:"上城区"},{text:"拱墅区"},{text:"西湖区"},{text:"滨江区"},{text:"余杭区"},{text:"临平区"},{text:"钱塘区"},{text:"萧山区"},{text:"富阳区"},{text:"临安区"},{text:"建德市"},{text:"桐庐县"},{text:"淳安县"}]},{text:"宁波市"},{text:"温州市"},{text:"绍兴市"},{text:"湖州市"},{text:"嘉兴市"},{text:"金华市"},{text:"衢州市"},{text:"台州市"},{text:"丽水市"},{text:"舟山市"}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100"},{text:"苏州市"},{text:"无锡市"},{text:"连云港市"}]},{text:"北京市"},{text:"上海市"},{text:"天津市"},{text:"重庆市"},{text:"河北省"},{text:"山西省"},{text:"辽宁省"},{text:"香港特别行政区"},{text:"澳门特别行政区"},{text:"新建维吾尔自治区"},{text:"吉林省"},{text:"黑龙江省"},{text:"安徽省"},{text:"福建省"},{text:"内蒙古自治区"},{text:"江西省"},{text:"山东省"},{text:"河南省"},{text:"广西壮族自治区"},{text:"湖北省"},{text:"湖南省"},{text:"广东省"},{text:"西藏自治区"},{text:"海南省"},{text:"四川省"},{text:"贵州省"},{text:"云南省"},{text:"宁夏回族自治区"},{text:"陕西省"},{text:"甘肃省"},{text:"青海省"},{text:"台湾省"}],l=({selectedOptions:a})=>{t.value=!1,e.value=a.map((t=>t.text)).join("/")};return{show:t,options:o,onFinish:l,fieldValue:e,cascaderValue:a}}},p=a(40089);const w=(0,p.Z)(b,[["render",_]]);var f=w;const h={class:"nav"};function x(t,e,a,l,n,c){const s=(0,o.up)("van-nav-bar");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o.Wm)(s,{class:"my-navbar",title:"核酸检测点查询","left-arrow":"",onClickLeft:l.onClickLeft,fixed:""},null,8,["onClickLeft"])])}var k={setup(){const t=()=>history.back();return{onClickLeft:t}}};const U=(0,p.Z)(k,[["render",x],["__scopeId","data-v-7b07c63f"]]);var C=U;const W={class:"SearchArea"};function g(t,e,a,l,n,c){const s=(0,o.up)("van-search");return(0,o.wg)(),(0,o.iD)("div",W,[(0,o.Wm)(s,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t),"show-action":"",placeholder:"请输入检测机构名称",onSearch:l.onSearch},{action:(0,o.w5)((()=>[(0,o._)("div",{onClick:e[0]||(e[0]=(...t)=>l.onClickButton&&l.onClickButton(...t))},"搜索")])),_:1},8,["modelValue","onSearch"])])}a(58146);var V=a(3776),D={setup(){const t=(0,v.iH)(""),e=t=>(0,V.Z)(t),a=()=>(0,V.Z)("搜索中，请稍候");return{value:t,onSearch:e,onClickButton:a}}};const T=(0,p.Z)(D,[["render",g]]);var S=T,Z=a(83979);const L=t=>((0,o.dD)("data-v-053d71c0"),t=t(),(0,o.Cn)(),t),z={class:"NucList"},A={class:"item"},E=L((()=>(0,o._)("div",{class:"title"},[(0,o._)("h3",null,"上塘蔡马社区核酸采样点"),(0,o._)("br")],-1))),N=L((()=>(0,o._)("div",{class:"desc"},[(0,o.Uk)("地址：湖州街76号暖蜂驿站 （蔡马人家二期南侧商铺内） "),(0,o._)("br"),(0,o.Uk)(),(0,o._)("br"),(0,o.Uk)(" 工作时间: 14:00-17:30 ")],-1))),B=(0,o.Uk)("预约"),H={class:"item"},$=L((()=>(0,o._)("div",{class:"title"},[(0,o._)("h3",null,"浙江骨伤医院核酸采样点"),(0,o._)("br")],-1))),y=L((()=>(0,o._)("div",{class:"desc"},[(0,o.Uk)("地址：杭州市拱墅区石祥路287号 "),(0,o._)("br"),(0,o.Uk)(),(0,o._)("br"),(0,o.Uk)(" 工作时间: 8:00-22:00 ")],-1))),F=(0,o.Uk)("预约"),I={class:"item"},j=L((()=>(0,o._)("div",{class:"title"},[(0,o._)("h3",null,"瓜山农贸市场核酸采样点"),(0,o._)("br")],-1))),M=L((()=>(0,o._)("div",{class:"desc"},[(0,o.Uk)("地址：茶汤路299号 "),(0,o._)("br"),(0,o.Uk)(),(0,o._)("br"),(0,o.Uk)(" 工作时间: 8:00-17:00 ")],-1))),O=(0,o.Uk)("预约"),q={class:"item"},G=L((()=>(0,o._)("div",{class:"title"},[(0,o._)("h3",null,"上塘街道皋亭社区核酸采样点"),(0,o._)("br")],-1))),J=L((()=>(0,o._)("div",{class:"desc"},[(0,o.Uk)("地址：太阳城广场 "),(0,o._)("br"),(0,o.Uk)(),(0,o._)("br"),(0,o.Uk)(" 工作时间: 9:30-17:00 ")],-1))),K=(0,o.Uk)("预约"),P={class:"item"},Q=L((()=>(0,o._)("div",{class:"title"},[(0,o._)("h3",null,"上塘街道拱宸桥社区采样点"),(0,o._)("br")],-1))),R=L((()=>(0,o._)("div",{class:"desc"},[(0,o.Uk)("地址：拱宸社区党群服务中心（台州路） "),(0,o._)("br"),(0,o.Uk)(),(0,o._)("br"),(0,o.Uk)(" 工作时间: 14:00-18:00 ")],-1))),X=(0,o.Uk)("预约"),Y={class:"item"},tt=L((()=>(0,o._)("div",{class:"title"},[(0,o._)("h3",null,"上塘街道善贤社区核酸采样点"),(0,o._)("br")],-1))),et=L((()=>(0,o._)("div",{class:"desc"},[(0,o.Uk)("地址：沈半路128号 "),(0,o._)("br"),(0,o.Uk)(),(0,o._)("br"),(0,o.Uk)(" 工作时间: 14:00-18:00 ")],-1))),at=(0,o.Uk)("预约"),ot={class:"item"},lt=L((()=>(0,o._)("div",{class:"title"},[(0,o._)("h3",null,"拱宸桥街道台州路社区采样点"),(0,o._)("br")],-1))),nt=L((()=>(0,o._)("div",{class:"desc"},[(0,o.Uk)("地址：运河上街东广场 "),(0,o._)("br"),(0,o.Uk)(),(0,o._)("br"),(0,o.Uk)(" 工作时间: 13:00-17:00 ")],-1))),ct=(0,o.Uk)("预约");function st(t,e,a,l,n,c){const s=(0,o.up)("van-button"),i=(0,o.up)("van-card");return(0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("div",A,[(0,o.Wm)(i,{thumb:"https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"},{title:(0,o.w5)((()=>[E])),desc:(0,o.w5)((()=>[N])),footer:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"small",color:"#2E7D32",plain:"",onClick:c.showToast},{default:(0,o.w5)((()=>[B])),_:1},8,["onClick"])])),_:1})]),(0,o._)("div",H,[(0,o.Wm)(i,{thumb:"https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"},{title:(0,o.w5)((()=>[$])),desc:(0,o.w5)((()=>[y])),footer:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"small",color:"#2E7D32",plain:"",onClick:c.showToast},{default:(0,o.w5)((()=>[F])),_:1},8,["onClick"])])),_:1})]),(0,o._)("div",I,[(0,o.Wm)(i,{thumb:"https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"},{title:(0,o.w5)((()=>[j])),desc:(0,o.w5)((()=>[M])),footer:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"small",color:"#2E7D32",plain:"",onClick:c.showToast},{default:(0,o.w5)((()=>[O])),_:1},8,["onClick"])])),_:1})]),(0,o._)("div",q,[(0,o.Wm)(i,{thumb:"https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"},{title:(0,o.w5)((()=>[G])),desc:(0,o.w5)((()=>[J])),footer:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"small",color:"#2E7D32",plain:"",onClick:c.showToast},{default:(0,o.w5)((()=>[K])),_:1},8,["onClick"])])),_:1})]),(0,o._)("div",P,[(0,o.Wm)(i,{thumb:"https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"},{title:(0,o.w5)((()=>[Q])),desc:(0,o.w5)((()=>[R])),footer:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"small",color:"#2E7D32",plain:"",onClick:c.showToast},{default:(0,o.w5)((()=>[X])),_:1},8,["onClick"])])),_:1})]),(0,o._)("div",Y,[(0,o.Wm)(i,{thumb:"https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"},{title:(0,o.w5)((()=>[tt])),desc:(0,o.w5)((()=>[et])),footer:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"small",color:"#2E7D32",plain:"",onClick:c.showToast},{default:(0,o.w5)((()=>[at])),_:1},8,["onClick"])])),_:1})]),(0,o._)("div",ot,[(0,o.Wm)(i,{thumb:"https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png"},{title:(0,o.w5)((()=>[lt])),desc:(0,o.w5)((()=>[nt])),footer:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"small",color:"#2E7D32",plain:"",onClick:c.showToast},{default:(0,o.w5)((()=>[ct])),_:1},8,["onClick"])])),_:1})])])}var it={methods:{showToast(){this.$toast.loading("进入预约中...")}}};const dt=(0,p.Z)(it,[["render",st],["__scopeId","data-v-053d71c0"]]);var rt=dt,ut={components:{SelectArea:f,NavBarNuc:C,SearchArea:S,TabBarMea:Z.Z,NucList:rt},mounted(){window.scrollTo(0,0)}};const mt=(0,p.Z)(ut,[["render",u],["__scopeId","data-v-50a4c740"]]);var _t=mt},83979:function(t,e,a){a.d(e,{Z:function(){return p}});var o=a(73396);const l=t=>((0,o.dD)("data-v-8b0465e6"),t=t(),(0,o.Cn)(),t),n=(0,o.Uk)("首页"),c={class:"icon"},s=l((()=>(0,o._)("div",null,"国内",-1))),i={class:"icon"},d=l((()=>(0,o._)("div",null,"全球",-1))),r=(0,o.Uk)(" 措施 ");function u(t,e,a,l,u,m){const _=(0,o.up)("van-tabbar-item"),v=(0,o.up)("van-icon"),b=(0,o.up)("van-tabbar");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(b,{modelValue:l.active,"onUpdate:modelValue":e[4]||(e[4]=t=>l.active=t)},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"home",icon:"home-o",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},{default:(0,o.w5)((()=>[n])),_:1}),(0,o.Wm)(_,{name:"domestic",onClick:e[1]||(e[1]=e=>t.$router.push("/domesticinfo"))},{default:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o.Wm)(v,{name:"domestic",class:"iconfont icon-guoneiyou"})]),s])),_:1}),(0,o.Wm)(_,{name:"worldwide",onClick:e[2]||(e[2]=e=>t.$router.push("/worldwide"))},{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o.Wm)(v,{name:"worldwide",class:"iconfont icon-wangluo"})]),d])),_:1}),(0,o.Wm)(_,{name:"measures",icon:"orders-o",onClick:e[3]||(e[3]=e=>t.$router.push("/measures"))},{default:(0,o.w5)((()=>[r])),_:1})])),_:1},8,["modelValue"])])}var m=a(44870),_={setup(){const t=(0,m.iH)("measures");return{active:t}}},v=a(40089);const b=(0,v.Z)(_,[["render",u],["__scopeId","data-v-8b0465e6"]]);var p=b}}]);
//# sourceMappingURL=674.441a5d7a.js.map