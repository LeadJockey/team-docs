import {DOMAIN} from './../../constants';
import {createRequest, successHandler, errerHandler} from './../index';

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

export const create = (data,next)=>{
  console.log(data)
  /* */
  createRequest({
    method:'post',
    url:`${DOMAIN}/api/v1/user/create`,
    data : {
      ...data  
    }
  })
  .then(successHandler)
  .then(next)
  .catch(errerHandler)
  

}
export const update = (data,next)=>{
  const infoData = Array.from(Object.keys(data))
  const validKeys = infoData.filter((item)=> data[item])
  let updateData = {};
  if(validKeys.length){
    validKeys.forEach( item => {
      updateData[item] = data[item]
    });
  }
  createRequest({
    method:'post',
    url:`${DOMAIN}/api/v1/user/update`,
    data : {
      email : data['email'],
      data:{
        ...updateData
      },
    }

  })
  .then(successHandler)
  .then(next)
  .catch(errerHandler)
}

export const remove = (email)=> new Promise((resolve,reject)=>{
  getUserByEmail(email,({apiStatus})=>{
    console.log(apiStatus)
    if(apiStatus === 200){
      console.log(email)
      createRequest({
        method:'get',
        url:`${DOMAIN}/api/v1/user/delete/` + email,
      })
      .then(successHandler)
      .then((result)=>{ 
            console.log(result) 
            resolve(result)
      })
      .catch(errerHandler)
    }
    
  })
})


export const getList = (next)=>{
  createRequest({
    method:'get',
    url:`${DOMAIN}/api/v1/user/list/`,
  })
  .then(successHandler)
  .then(next)
  .catch(errerHandler)
}
export const getUserByEmail = (email,next)=>{
  createRequest({
    method:'get',
    url:`${DOMAIN}/api/v1/user/list/`+email,
  })
  .then(successHandler)
  .then(next)
  .catch(errerHandler)
}
