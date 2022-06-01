<template>
  <div>
    <van-form @submit="onSubmit">
      <div class="title" style="font-size: 50px;margin-bottom:20px;margin-top:50px;" >疫情通</div>
      <div class="title" style="font-size: 30px;margin-bottom:20px" >登陆界面</div>
      <div class="sub-title" style="font-size: 15px;margin-bottom:30px">
        登录账号来使用各种提供的服务
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
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          type="primary"
          native-type="submit"
          size="normal"
          @click="login()"
          block
          color="#1E3A8A"
          style="margin-bottom:20px"
        >
          登录
        </van-button>
        
        <van-button
          type="primary"
          @click="$router.push('/register')"
          size="normal"
          block
          color="#1E3A8A"
        >
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { ref } from "vue";
import { Toast } from "vant";
import axios from "axios";

export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    const id = ref("");
    const pwd = ref("");

    const onSubmit = (values) => {
      console.log("submit", values);
    };
    return { id, pwd, onSubmit };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    login() {
      console.log("点击了登录按钮");
      axios({
        method: "post",
        url: "/api/api/user/getinfo",
        data: {
            username:this.id,
        },
      }).then(({ data }) => {
        console.log(data);

        if (data[0].password==this.pwd&&this.id!=''&&this.pwd!='') {
          Toast.success("登录成功");
          this.$router.push(
            {
                path:"/home",
                query:{
                    userid:this.id
                }
            }
          )
        } else {
          Toast.fail("登陆失败");
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.title {
  font-weight: bold;
}
</style>
