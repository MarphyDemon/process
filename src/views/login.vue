<template>
  <div class="hello">
    <form>
      <x-input type="text" name="username" v-model="userName"></x-input>
      <x-input type="password" name="password" v-model="password"></x-input>
      <a href="/#/forgot">忘记密码</a>
      <a href="/#/join">注册</a>
      <a href="javascript:;" @click="login">登录</a>
    </form>
  </div>
</template>
<script>
import { XButton,Group, XInput} from 'vux'
import API from "../fetch/api.js";
export default {
  name: 'login',
  components:{
    XButton,Group, XInput
  },
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  created() {},
  mounted(){  
      if(this.Coo.getCookie("username")){  
          window.location.href = '/#/index'; 
      }  
  }, 
  methods: {
    login() {
      var self = this;
      var data = {
        username: this.userName,
        password: this.password
      }
       API.login(data).then(res => {
        if (res.success) {
          self.Coo.setCookie("username",this.userName,1000*6);
          window.location.href = '/#/index';
        } else{
          alert(res.body)
        }
      });
    },

    // session() {
    //   this.$http.get('/api/user/session', {
    //   },{}).then((response) => {
    //     console.log(response);
    //   })
    // },
  }
}
</script>

<style lang="scss">

</style>
