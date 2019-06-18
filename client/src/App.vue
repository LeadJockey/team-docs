
<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>  
</template>
<script>
import Header from './components/Header.vue'
export default {
  render(){
    return 
  },
  components : {
    Header
  }
}
</script>
<style lang="scss">
  body{margin:0;padding:0;}
  h1{margin:0;padding:0;color:#999}
  a{text-decoration:none}
  #app{max-width:840px;margin:0 auto}
</style>


