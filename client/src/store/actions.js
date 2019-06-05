export default {
  // HTTP get 요청이나 setTimeout 과 같은 비동기 처리 로직들은 actions 에 선언해준다.
  getAuthBool(context,payload){
    return setTimeout(function(){
      console.log('actions!')
      context.commit('getAuthBool',payload);
    }, 500)
  }
}
