<template>
    <nav-bar-person/>
  <div class="title" style="font-size: 30px">我的界面</div>
  <div class="sub-title" style="font-size: 15px">
    查看当前登录用户的个人详情页面
  </div>
  <van-cell-group inset>
    <van-field
      v-model="userid"
      name="用户id"
      label="用户id"
      placeholder="用户id"
    />
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
    />

        <van-field
      v-model="userphone"
      name="电话"
      label="电话"
      placeholder="电话"
    />
    <van-field
      v-model="useraddress"
      name="地址"
      label="地址"
      placeholder="地址"
    />
    
  </van-cell-group>

  <div style="margin: 16px">
    <van-button color="#1E3A8A" block type="primary" native-type="submit" to="/">
      退出登录
    </van-button>
  </div>
  
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import NavBarPerson from '../NavBar/NavBarPerson.vue'

export default {
  name: "PersonInfo",
  components: { NavBarPerson},
  props: {},
  data() {
    const userid = ref("");
    const username = ref("");
    const userphone = ref("");
    const useraddress = ref("");

    return { userid, username, userphone, useraddress};
  },
  computed: {},
  watch: {},
  created() {
      this.userid = this.$route.query.userid;
      console.log(this.userid)
    axios( {
      method: "post",
      url: "/api/api/user/getinfo",
      data: {
        username: this.userid,       
      },
    }).then(({ data }) => {
      console.log(data);
      this.username = data[0].username;
      this.userphone = data[0].tel;
      this.useraddress = data[0].address;
    });
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less"></style>
