<template>
  <div class="sign_comm">
    <router-link to="/">Home</router-link>
    <form action="" v-on:submit.prevent>
        <h2>회원 가입</h2>
        <p class="desc_sign">
          * 이메일 및 암호를 입력해주세요~
        </p>
        <div>
          <label for="profileId">Email</label>
          <span class="wrap_inp">
            <input type="text" id="profileId" v-model="email">
          </span>
          <p class="desc_tip" v-bind:class="{ error : !personalCheck } ">{{this.emailInfo}}</p>
        </div>
        
        <div>
          <label for="profilePwd">Password</label>
          <span class="wrap_inp">
            <input type="password" id="profilePwd" v-model="pwd" placeholder="****">
          </span>
        </div>
        <div>
          <label for="profileConfirmPwd">Confirm PWD</label>
          <span class="wrap_inp">
            <input type="password" id="profileConfirmPwd" v-model="confirmPwd" v-on:keyup="isEqualPwd()" placeholder="****">
          </span>
          <p v-if="!this.isConfirmPwd" class="error">입력하신 비밀 번호를 확인해주세요</p>
        </div>
        <div>
          <strong>Position</strong>
          <div class="box">
            <label for="Member">member</label>
            <input type="radio" id="Member" name="position" value="팀원" v-model="checkedPosition">
            <label for="Leader">leader</label>
            <input type="radio" id="Leader" name="position" value="팀장" v-model="checkedPosition">
          </div>
        </div>
        <div>
          <label for="profileName">Name</label>
          <span class="wrap_inp">
            <input type="text" id="profileName"  v-model="name">
          </span>
          <p v-if="!this.isValidName" class="error">이름은 숫자로 시작할 수 없습니다</p>
        </div>
        <button v-on:click="createUser" :disabled="isValid()" class="btn_comm">Sign Up!</button>
        <p v-if="isValid()" class="desc_notice">모두 기입 해주세요~</p>   
      </form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import { getUserByEmail , create} from './../api/v1/user'

export default {
  data(){
    return {
      personalCheck : false,
      isConfirmPwd : true,
      isValidName : true,
      confirmPwd : null,
      email : null,
      pwd : null,
      name : null,
      emailInfo : null,
      checkedPosition : '팀원'
    }
  },
  watch : {
   pwd(){
     if(!this.pwd.length){
       return this.isConfirmPwd = true;
     }
   }, 
   name(){
    const name = this.name.replace(/(\s*)/g,"")
    const reg = new RegExp(/^\d/)
    this.isValidName = reg.test(name) ? false : true;
   },
   email(){
    const email = this.email.replace(/(\s*)/g,"")
    const reg = new RegExp(/^\d/)

    if(reg.test(email)){
      return this.emailInfo = '아이디는 숫자로 시작할 수 없습니다';
    }else if(email.length == 0){
      return this.emailInfo = null;
    }else if(email.length < 4){
      return this.emailInfo = 'email을 4자 이상 입력해주세요';
    }else{
      return this.checkUserInfoGetById()
    }

    return this.emailInfo = null
   }
  },
  methods : {
    isValid(){
        return !this.email || !this.name || !this.pwd || !this.isConfirmPwd
    },
    isEqualPwd(){
      if(this.pwd !==null){
        if(this.pwd.length && this.confirmPwd !==null){
          return this.isConfirmPwd = (this.pwd == this.confirmPwd)
        }
      }
    },
    checkUserInfoGetById(){
      getUserByEmail(this.email,({apiStatus, data})=>{
         if(apiStatus === 200){
             this.emailInfo = '* 이미 존재하는 email 입니다';
             this.personalCheck = false;
          }else if(apiStatus === 404){
             this.emailInfo = '* 사용 가능한 email 입니다';
             this.personalCheck = true;
          }
      })
       
    },
    createUser(){
      if(this.isConfirmPwd && this.personalCheck && this.isValidName){
        create({
          email : this.email,
          name : this.name,
          pwd : this.pwd,
          position:this.checkedPosition
        },(res)=>{

          console.log(res)
           this.$router.push({name : 'Login'});
        })
       
      }
    },

  }
}
</script>
<style lang="scss">
  .sign_comm{
    width: 300px;
    margin: 200px auto 0;
    padding: 50px;
    font-size:20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    div{overflow:hidden;padding:5px;
      strong{display:block;font-weight:normal;margin-bottom:5px;font-size:15px}
      .box{border:1px solid #eee;box-sizing:border-box}
    }
    .desc_tip{margin:0;color:cadetblue}
    .desc_notice{color:#333;text-align:center}
    .error{color:red}
    h2{margin:0 0 20px;padding:0}
    label{float:left;width:100px;font-size:15px;line-height:30px}
    .wrap_inp{display:block;overflow:hidden;height:30px;
      input{width:100%;height:100%;padding: 0 10px;border:1px solid #ddd;box-sizing:border-box}
    }
    p{font-size:12px;color:#aaa}
    .btn_comm{display:block;width:100%;height:40px;margin-top:10px;font-size:20px;border-radius:20px;background-color:#eee;
      :disabled{background-color:red}
    }
    label + input{float:left;width:38px;height:30px;margin:0}  
  }
</style>
