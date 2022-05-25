<template>
  <div class="SelectArea">

    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="地区"
      placeholder="请选择所在地区"
      active-color="#1989fa"
      @click="show = true"
    />
    <van-popup v-model:show="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>


  </div>

</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
    // 选项列表，children 代表子选项，支持多级嵌套
    const options = [
      {
        text: '浙江省',
        value: '330000',
        children: [{ text: '杭州市', value: '330100',children:[{text:'上城区'},{text:'拱墅区'},{text:'西湖区'},{text:'滨江区'},{text:'余杭区'},{text:'临平区'},{text:'钱塘区'},{text:'萧山区'},{text:'富阳区'},{text:'临安区'},{text:'建德市'},{text:'桐庐县'},{text:'淳安县'}],},
                  { text: '宁波市'},
                  { text: '温州市'},
                  { text: '绍兴市'},
                  { text: '湖州市'},
                  { text: '嘉兴市'},
                  { text: '金华市'},
                  { text: '衢州市'},
                  { text: '台州市'},
                  { text: '丽水市'},
                  { text: '舟山市'},
        ],
      },
      {
        text: '江苏省',
        value: '320000',
        children: [{ text: '南京市', value: '320100' },{text:'苏州市'},{text:'无锡市'},{text:'连云港市'}],
      },
      {
        text: '北京市',
        
      },
      {
        text: '上海市',
      },
      {
        text: '天津市',
      },
      {
        text: '重庆市',
      },
      {
        text: '河北省',
      },
      {
        text: '山西省',
      },
      {
        text: '辽宁省',
      },
      {
        text: '香港特别行政区',
      },
      {
        text: '澳门特别行政区',
      },
      {
        text: '新建维吾尔自治区',
      },
      {
        text: '吉林省',
      },
      {
        text: '黑龙江省',
      },
      {
        text: '安徽省',
      },
      {
        text: '福建省',
      },
      {
        text: '内蒙古自治区',
      },
      {
        text: '江西省',
      },
      {
        text: '山东省',
      },
      {
        text: '河南省',
      },
      {
        text: '广西壮族自治区',
      },
      {
        text: '湖北省',
      },
      {
        text: '湖南省',
      },
      {
        text: '广东省',
      },
      {
        text: '西藏自治区',
      },
      {
        text: '海南省',
      },
      {
        text: '四川省',
      },
      {
        text: '贵州省',
      },
      {
        text: '云南省',
      },
      {
        text: '宁夏回族自治区',
      },
      {
        text: '陕西省',
      },
      {
        text: '甘肃省',
      },
      {
        text: '青海省',
      },
      {
        text: '台湾省',
      },

    ];
    // 全部选项选择完毕后，会触发 finish 事件
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};

</script>

<style lang="less" scoped>

</style>
