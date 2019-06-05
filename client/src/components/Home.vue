<template>
  <div>home
    {{ this.$store.getters.getTest }}
    <button v-on:click="changeTest()"></button>
  </div>
  
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  methods : {
    changeTest(){
      this.$store.commit('changeTest', {
        value : 'zz'
      })
    }
  }
}
</script>

