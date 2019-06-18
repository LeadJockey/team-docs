<template>
  <div>
    <h2>Guard Test</h2>
    <div >
      <router-link v-if="!this.$store.getters.getIsAuth" to="/login">로그인</router-link>
      <button v-else v-on:click="this.onLogout" >로그아웃</button>
    </div>
    <p>status : {{ this.$store.getters.getIsAuth  }}</p>
    {{ontest()}}
  </div>
  
</template>
<script>
import { mapMutations, mapActions } from 'vuex';
import { getUserByEmail , update, remove} from './../api/v1/user'
export default {
 
  ...mapActions(['getAuthBool']),
  
  methods : {
    onLogout(){
      console.log('onLogout')
        this.$store.dispatch('getAuthBool',{ isAuth : !this.$store.getters.getIsAuth })
          return  this.$store.getters.getIsAuth && this.$router.push({name : 'Home'})// 해당 코드는 네비게이션 가드 테스크용
    },
    ontest(){
      remove(1).then(time).then(time)
    }
  }
}

function time(res){
  return new Promise( (resolve, reject)=>{
  setTimeout(function(){
          console.log(res * res)
          return resolve(res + 1)
  }, 2000)
  } )
 
}
 
</script>

