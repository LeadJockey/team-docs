import { setCookie, getCookie ,deleteCookie  } from '../util/cookie';

export default {
  getAuthBool: function (state, {isAuth}) {
    
    isAuth ? setCookie('isAuth',isAuth) : deleteCookie('isAuth')
    

    return state.isAuth = isAuth
  }

}
