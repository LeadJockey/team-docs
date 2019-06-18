<template>
  <div class="profile_comm">
    <router-link to="/login">to Login</router-link>
    <form action="" v-on:submit.prevent>
        <h2>회원 정보</h2>
        <div>
            checked  {{deleteCheck}}
          <input type="checkbox" id="deleteReq" v-model="deleteCheck">
          <label for="deleteReq">회원 탈퇴 요청</label>
        </div>
        <div>
          <label for="profileId">Email</label>
          <span class="wrap_inp">
            <input type="text" id="profileId" v-on:keyup.enter.stop="checkUserInfoGetById" v-model="email">
          </span>
        </div>
        <div v-if="!deleteCheck && personalCheck" >
          <label for="profilePwd">Password</label>
          <span class="wrap_inp">
            <input type="password" id="profilePwd" v-model="pwd" placeholder="****">
          </span>
        <!-- </div>
        <div v-if="personalCheck" > -->
          <label for="profileConfirmPwd">Confirm PWD</label>
          <span class="wrap_inp">
            <input type="password" id="profileConfirmPwd" v-model="confirmPwd" v-on:blur="isEqualPwd()" placeholder="****">
          </span>
          <p v-if="!this.isConfirmPwd">입력하신 비밀 번호를 확인해주세요</p>
        <!-- </div>
        <div v-if="personalCheck" > -->
          <label for="profileName">Name</label>
          <span class="wrap_inp">
            <input type="text" id="profileName"  v-model="name">
          </span>
        </div>
     
        <div v-if="!deleteCheck">
          <button v-if="personalCheck" type="button" v-on:click="updateUser" :disabled="isValid()" class="btn_comm">Update!</button>
          <button v-else  type="button" class="btn_comm"  v-on:click="checkUserInfoGetById" :disabled="isValid()">is valid?</button>
        </div>
        <div v-else>
          <button v-on:click="deleteUser" type="button" :disabled="isValid()" class="btn_comm">Remove ToT</button>
        </div>
      </form>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex';
import { getUserByEmail , update, remove} from './../api/v1/user'

export default {
  data(){
    return {
      isConfirmPwd : true,
      personalCheck : false,
      confirmPwd : null,
      email : null,
      pwd : null,
      name : null,
      deleteCheck : false,
    }
  },
  methods : {
    isValid(){
      if(!this.personalCheck){
        return !(this.email)
      }else{
        console.log(this.personalCheck)
        return !(this.email || this.name)
      }
    },
    isEqualPwd(){
      if(this.pwd !==null){
        if(this.pwd.length && this.confirmPwd !==null){
          return this.isConfirmPwd = (this.pwd == this.confirmPwd)
        }
      }
    },
    checkUserInfo(personalCheck){
      this.personalCheck = personalCheck
    },
    checkUserInfoGetById(){
      getUserByEmail(this.email,({apiStatus, data})=>{
        console.log(apiStatus)
         if(apiStatus === 200){
             this.name = data.name
            return this.checkUserInfo(true)
          }else{
            return this.checkUserInfo(false)
          } 
      });    
    },
    
    updateUser(){
     update({email : this.email, pwd : this.pwd, name : this.name },(result)=>{
          console.log(result)
          return this.$router.push('/')
        })
    },
    deleteUser(){
       remove(this.email)
       .then((res)=>{
         alert('회원탈퇴 처리 되었습니다!')
         return res
       })
       .then((res)=>{
          return this.$router.push('/')
       })
      
     
      
    }
  }
  
}
</script>
<style lang="scss">
  .profile_comm{
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
    p{font-size:12px;color:#aaa}
    .btn_comm{display:block;width:100%;height:40px;margin-top:10px;font-size:20px;border-radius:20px;background-color:#eee;
      :disabled{background-color:red}
    }  
  }
</style>


