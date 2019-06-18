import Vue from "vue";
import VueRouter from 'vue-router';
import {store} from '../store/store'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Test from '../components/Test.vue'
import Profile from '../components/Profile.vue'
import Signup from '../components/SignUp.vue'
import UserList from '../components/UserList.vue'

Vue.use(VueRouter);

const NotFound = { template : '<div>Not Found</div>'}

/**
 * 네비게이션 가드
 */
const requireAuth = () => (from, to, next) => {
  console.log(store)
  if (store.getters.getIsAuth){ 
     
    return next() 
  }// isAuth === true면 페이지 이동
  alert('로그인이 필요합니다!!')
  next('/login') // isAuth === false면 다시 로그인 화면으로 이동
}


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name : 'Home' , component : Home },
    { path: '/login', name : 'Login', component : Login },
    { path: '/profile', name : 'Profile', component : Profile , beforeEnter : requireAuth()},
    { path: '/signup', name : 'signup', component : Signup},
    { path: '/test', name : 'Test', component : Test , beforeEnter : requireAuth()},
    { path: '/list', name : 'UserList', component : UserList , beforeEnter : requireAuth()},
    { path: '*', component: NotFound }
  ]
})
/*
  1. 라우터의 적용
  2. axios 의 적용
  3. shawn의 api 불어오기
*/


export default router;