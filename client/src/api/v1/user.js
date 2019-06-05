import {DOMAIN} from './../../constants'
import {createRequest, successHandler, errerHandler} from './../index'

/**
 * 로그인을 위해 유저 매칭 요청
 * @param {*} email ex lukas.sin
 * @param {*} pwd ex 1234
 */
export const login = (email,pwd, next)=>{
  createRequest({
    method:'post',
    url:`${DOMAIN}/api/v1/user/login`,
    data:{email,pwd}
  })
  .then(successHandler)
  .then(next)
  .catch(errerHandler)
}

export const create = ()=>{

}
export const update = ()=>{

}
export const remove = ()=>{

}
export const getList = ()=>{

}
export const getUserByEmail = ()=>{

}