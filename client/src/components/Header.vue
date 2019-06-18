<template>
  <div class="header">
    <router-link to="/"><h1 class="tit_docs">Team-Docs</h1></router-link>
    <div class="nav_comm">
      <router-link v-if="!this.$store.getters.getIsAuth" to="/login">로그인</router-link>
      <button v-else v-on:click="this.onLogout" >로그아웃</button>
      헤더 내비
    </div>  
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations, mapActions } from 'vuex';

export default {
  name : 'Header',
  ...mapActions(['getAuthBool']),
  
  methods : {
    
    onLogout(){
      console.log('onLogout')
        this.$store.dispatch('getAuthBool',{ isAuth : !this.$store.getters.getIsAuth })
          return  this.$store.getters.getIsAuth && this.$router.push({name : 'Home'})// 해당 코드는 네비게이션 가드 테스크용
    }
  }
}
</script>

<style>
  .header{background-color: aquamarine;overflow:hidden;padding:20px 10px }
  .tit_docs{float:left}
  .nav_comm{float:right;}
</style>
