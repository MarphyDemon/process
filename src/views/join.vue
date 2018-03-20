<template>
  <div class="hello">
    <form>
      <input type="text" name="username" placeholder="请输入姓名" v-model="userName"><br>
      <input type="text" name="sex" placeholder="请输入性别" v-model="sex"><br>
      <input type="text" name="college" placeholder="请输入学校" v-model="college"><br> 
      <input type="text" name="studentId" placeholder="请输入学号" v-model="studentId"><br>
      <input type="text" name="phoneNum" placeholder="请输入手机号码" v-model="phoneNum"><br>
      <input type="password" name="password" placeholder="请输入密码" v-model="password"><br>
      <input type="password" name="repassword" placeholder="请再次输入密码" v-model="repassword" @change="checkPassword"><br>
      <input type="text" name="code" placeholder="请输入验证码" v-model="code" @click="checkCode"><br>
      <a href="javascript:;" @click="join">完成</a>
    </form>
  </div>
</template>
<script>
import API from '../fetch/api.js'
export default {
    name: 'join',
    data () {
        return {
        userName: '',
        sex: '',
        college: '',
        studentId: '',
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
        join(){
            var that = this;
            if(that.checkPassword()){
                that.addUser();
            }
        },
        addUser() {
            var that = this;
            var data = {
                username: that.userName,
                sex: that.sex,
                college: that.college,
                studentId: that.studentId,
                phoneNum: that.phoneNum,
                password: that.password
            }
            var userData = {
                username: that.userName
            }
            API.checkUser(userData).then(res => {
                if (res.success) {
                    if(res.body.data.hasUserFlag){
                        alert("用户已存在！")
                    }else{
                        API.addUser(data).then(res => {
                            if(res.success){
                                console.log("注册成功！")
                                window.location.href = "/"
                            }
                        })
                    }
                }else{
                    alert(res.body)
                }
            })
        },
        checkCode(){

        }
    },
}
</script>