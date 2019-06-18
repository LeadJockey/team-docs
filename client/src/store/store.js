import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { setCookie, getCookie ,deleteCookie  } from '../util/cookie';

Vue.use(Vuex)

const isAuth = () => getCookie('isAuth')? getCookie('isAuth') : false ;

export const store = new Vuex.Store({
  state : {
    'isAuth' : isAuth(),
  },
  getters,
  mutations,
  actions
});

