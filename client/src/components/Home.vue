<template>
  <div>
    <h2>home</h2>
    <router-link to="/signup">회원가입</router-link>
    <router-link to="/profile">회원정보 관리</router-link>
    <router-link to="/list">회원목록</router-link>
    <router-link to="/test">테스트</router-link>
    <p>status : {{ this.$store.getters.getIsAuth  }}</p>
  </div>
  
</template>
<script>
import { mapGetters } from 'vuex'
import { mapMutations, mapActions } from 'vuex';

export default {
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

