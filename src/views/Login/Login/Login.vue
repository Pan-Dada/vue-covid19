<template>
  <div class="login">
    <div class="logo"><img class="img" src="../../assets/image/login.png" alt=""></div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="id"
          name="账号"
          label="账号"
          placeholder="输入账号"
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          v-model="pwd"
          type="password"
          name="密码"
          label="密码"
          placeholder="输入密码"
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
          color="#1976D2"
          style="margin-bottom:20px"
        >
          登录
        </van-button>
        
        <van-button
          type="primary"
          @click="$router.push('/register')"
          size="normal"
          block
          color="#1976D2"
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
            userid:this.id,
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
.logo{
  .img{
   width: 100%;
  }
 
}
.login{
  background: #2CADF8;
  padding-bottom: 4.5rem;
}
</style>
