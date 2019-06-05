<template>
  <div class="login_comm">
   <form action="" v-on:submit.prevent>
      <h2>Login</h2>
      <div>
          <label for="loginId">Email</label>
          <span class="wrap_inp">
            <input type="text" id="loginId" v-model="email">
          </span>
      </div>
      <div>
        <label for="loginPwd">Password</label>
        <span class="wrap_inp">
          <input type="password" id="loginPwd" v-model="pwd">
        </span>
      </div>
      
      <button class="btn_comm" v-on:click="signIn()" :disabled="isValid()">Sign In</button>
      <p>{{info}}</p>
    </form>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex';
import {login} from './../api/v1/user'


export default {
  data(){
    return {
      email : 'lukas.sin',
      pwd : 1234,
      info : null
    }
  },
  methods : {
    ...mapActions(['getAuthBool']),
    isValid(){
      return (!this.email || !this.pwd)
    },
    signIn(){
      console.log(this.email, this.pwd)
      login(this.email, this.pwd, res =>console.log('next', res))
      // return this.$store.dispatch('getAuthBool',{ isAuth : !this.$store.getters.getIsAuth });
    },
  }

  
}
</script>
<style lang="scss">
.login_comm{
  width: 300px;
  margin: 200px auto 0;
  padding: 50px;
  font-size:20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  div{overflow:hidden;padding:5px}
  h2{margin:0 0 20px;padding:0}
  label{float:left;width:100px;font-size:15px;line-height:30px}
  .wrap_inp{display:block;overflow:hidden;height:30px;
    input{width:100%;height:100%;padding: 0 10px;border:1px solid #ddd;box-sizing:border-box}
  }
  .btn_comm{display:block;width:100%;height:40px;margin-top:10px;font-size:20px;border-radius:20px;background-color:#eee;
    :disabled{background-color:red}
  }
  
}

</style>


