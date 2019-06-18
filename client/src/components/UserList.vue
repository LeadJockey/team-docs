<template>
  <div class="user_list">
    <h2>회원 목록</h2>
    <ul class="head_user">
      <li><strong>회원명</strong><p>position</p><p>email</p></li>
    </ul>
    <ul>
      <li v-for="({ name , position, email}, index) in items" :key="index">
        <strong>{{name}}</strong>
        <p>{{position}}</p>
        <p>{{ email }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations, mapActions } from 'vuex';
import { getList } from './../api/v1/user'
export default {
  data(){
    return {
      items :[]
    }
  },
  created(){
      getList((res)=>{
        console.log(res)
        this.items = res.data
      })
  },

}
</script>

<style lang="scss">
  .user_list ul{margin:0;padding:0;list-style:none}
  .user_list li{overflow:hidden;line-height:30px}
  .user_list li + li{margin: 10px 0}
  .user_list li strong,.user_list li p{float:left;width:33.33%;margin:0;padding:0}
  .user_list li strong{text-align:center}
  .user_list .head_user{margin-bottom:20px;background-color:#f5f5f5}
  
</style>

