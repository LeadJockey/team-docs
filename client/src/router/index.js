import Vue from "vue";
import VueRouter from 'vue-router';
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter);

const NotFound = { template : '<div>Not Found</div>'}



const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name : 'Home' , component : Home },
    { path: '/login', name : 'Login', component : Login },
    { path: '*', component: NotFound }
  ]
})
/*
  1. 라우터의 적용
  2. axios 의 적용
  3. shawn의 api 불어오기
*/


export default router;