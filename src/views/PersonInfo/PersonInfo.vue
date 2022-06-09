<template>
  <nav-bar-person/>
  <div class="personinfo">
  <div class="title" style="font-size: 50px;margin-bottom:20px">我的界面</div>
  <div class="sub-title" style="font-size: 15px;margin-bottom:20px">
    查看当前登录用户的个人详情页面
  </div>

  <van-cell-group inset>
    <van-field name="uploader" label="头像" v-model="fileList" :after-read="Uploader"  multiple :max-count="1">
      <template #input>
        <van-uploader :after-read="afterRead" v-model="value" />
      </template>
    </van-field>


    <van-field
      v-model="userid"
      name="账号"
      label="账号"
      placeholder="账号"
      
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

  <div style="margin: 12px">
    <van-button color="#1E88E5" block type="primary" native-type="submit" @click="update()">
      修改信息
    </van-button>
  </div>

  <div style="margin: 12px;">
    
    <van-button color="#1E88E5" block type="primary" native-type="submit" @click="backtologin()">
      退出账号
    </van-button>
  </div>

  <div style="margin: 12px;">
    <van-button color="#1E88E5" block type="primary" native-type="submit" @click="deleteuser();$router.push('/')">
      注销账号
    </van-button>
  </div>

  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { Toast } from "vant";
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

  

  setup() {
    

    const value = ref([
      { url: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-128.png' },
    ]);
    
    const afterRead = (file) => {
      // 此时将文件上传至服务器
      console.log(file);
      console.log(file.file.name);
      console.log(file.file.size);
      console.log(file.file.type);
      console.log(file.content);
      axios({
          method:"post",
          url:"api/api/user/addPic",
          data:{
              name:file.file.name,
              size:file.file.size,
              type:file.file.type,
              url:file.content
          },
      }).then(({data}) => {
          console.log(data);
      });
      Toast.success("上传成功");

    };
    return { value,afterRead};
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
        userid: this.userid,  

      },
    }).then(({ data }) => {
      console.log(data);
      this.username = data[0].username;
      this.userphone = data[0].tel;
      this.useraddress = data[0].address;
    });
  },
  mounted() {},
  methods: {
    backtologin(){
      Toast.success("已退出登录");
      this.$router.push("/");
    },

    update(){
      axios( {
      method: "post",
      url: "/api/api/user/updateUser",
      data: {
        userid: this.userid,     
        username: this.username,
        tel:this.userphone,
        address:this.useraddress,  
      },
    }).then(({ data }) => {
      console.log(data);
      
    });  
    },

    deleteuser(){
      Toast.success("已注销");
      axios( {
      method: "post",
      url: "/api/api/user/deleteUser",
      data: {
        userid: this.userid,       
      },
    }).then(({ data }) => {
      console.log(data);   
    });   
    },

    
    // 上传图片
    // Uploader(e){
    //   console.log(e)
    //   let content = e.file;
    //   let data = new FormData();
    //   // FormData 对象的使用：
    //   // 1.用一些键值对来模拟一系列表单控件：即把form中所有表单元素的name与value组装成一个queryString
    //   // 2. 异步上传二进制文件。
    //   //上传图片需要转换二进制这里要用到FormData
      
    //   data.append('file',content);
    //   //这里的file表示给后台传的属性名字，这里看接口文档需要传的的属性
      
    //   // upimg(data).then(res=>{
    //   // //upimg是封装的请求方法，这里自己改一下就可以，没封装可以用this.$axios
      
    //   //   console.log(res)
    //   //   //res返回上传的图片的路径等信息
        
    //   //   //调用更新用户资料接口更改用户信息
    //   //   edituser({avatar:res.path}).then(res=>{
    //   //     console.log(res)
    //   //   })
    //   // })

    //   //axios请求方法
    //   this.$axios.post("图片上传地址", data).then((res) => {
    //     console.log(res)
    //   });     
    // }

  },
};
</script>

<style scoped lang="less">
.personinfo{
  background: #2CADF8;
  padding-bottom: 5rem;
  padding-top: 1.0rem;
  --van-uploader-size:100px;
}
</style>
