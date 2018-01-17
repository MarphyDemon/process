<template>
  <div class="hello">
    <form>
      <input type="text" name="username" placeholder="请输入用户名" v-model="userName"><br>
      <input type="text" name="phoneNum" placeholder="请输入手机号码" v-model="phoneNum"><br>
      <input type="password" name="password" placeholder="请输入密码" v-model="password"><br>
      <input type="password" name="repassword" placeholder="请再次输入密码" v-model="repassword" @change="checkPassword"><br>
      <input type="text" name="code" placeholder="请输入验证码" v-model="code" @change="checkphone"><br>
      <a href="javascript:;" @click="change">完成</a>
    </form>
  </div>
</template>
<script>
import API from "../fetch/api.js";
export default {
  name: 'forgot',
  data () {
    return {
      userName: '',
      phoneNum: '',
      password: '',
      repassword: '',
      code: ''
    }
  },
  created() {},
  mounted() {
    var that = this;
    // that.session();
  },
  methods: {
    checkPassword(){
        var that = this;
        if(that.password != that.repassword){
            console.log('输入密码不一致！');
            return false;
        }else{
            return true;
        }
    },
    checkphone(){

    },
    change(){
        var that = this;
        if(that.checkPassword()){
            that.changeUser();
        }
    },
    changeUser() {
        var that = this;
        var data = {
                username: that.userName,
                password: that.password,
                phoneNum: that.phoneNum
            };
        var userdata = {
            username: that.userName,
        }
        API.checkUser(userdata).then(res => {
            if (res.success) {
                if(res.body.data.hasUserFlag){
                    API.change(data).then(res => {
                        if(res.success){
                            window.location.href = "/"
                        }
                    })
                }else{
                    alert("用户不存在！")
                }
            }else{
                alert(res.body);
            }
        })
    },
  }
}
</script>