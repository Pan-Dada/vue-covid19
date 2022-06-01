<template>
  <div>
    <van-form @submit="onSubmit">
      <div class="title" style="font-size: 50px;margin-bottom:30px;margin-top:30px;" >注册</div>
      <div class="sub-title" style="font-size: 15px;margin-bottom:30px">
        注册账号来使用各种提供的服务
      </div>
      <van-cell-group inset>
        <van-field
          v-model="id"
          name="账号"
          label="账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          v-model="pwd"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="tel"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[
              { required: true, message: '请填写您的手机号码！' },
              { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}
            ]"
        />
        <van-field
          v-model="address"
          name="地址"
          label="地址"
          placeholder="地址"
          :rules="[{ required: true, message: '请填写地址' }]"
        />

      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          type="primary"
          native-type="submit"
          size="normal"
          @click="register();"
          block
          color="#1E3A8A"
          style="margin-bottom:20px"
        >
            注册
        </van-button>
        
        
      </div>
    </van-form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import axios from "axios";
import { Toast } from "vant";
export default {
name: "RegisterIndex",
  components: {},
  props: {},
  data() {
    const id = ref("");
    const pwd = ref("");
    const tel = ref("");
    const address = ref("");

    const onSubmit = (values) => {
      console.log("submit", values);
    };
    return { id, pwd,tel,address, onSubmit };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    
    register() {
      console.log("点击了注册按钮");
        if(this.pwd!=''&&this.id!=''&&this.tel!=''&&this.address!=''&&this.tel.length==11){
            axios({
                method: "post",
                url: "/api/api/user/addUser",
                data: {
                    username:this.id,
                    password:this.pwd,
                    tel:this.tel,
                    address:this.address
                },
            }).then(({ data }) => {
                console.log(data);
            });
            Toast.success("注册成功");
            this.$router.push("/");
        }else{
            Toast.fail("注册失败");
        }
      
    },
  },
}
</script>

<style>

</style>